import { Component } from '@angular/core';
import { LoginModel } from '../../modal/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: LoginModel = new LoginModel();
  constructor(private employeeService: EmployeeService, private router: Router) {

  }

  onLogin() {
    this.employeeService.onLogin(this.loginObj).subscribe({
      next: (result: any) => {
        if (result.result) {
          alert("Login Success");
          localStorage.setItem('leaveUser', JSON.stringify(result.data));
          this.router.navigateByUrl('/dashboard')
        } else {
          alert(result.message)
        }
      },
      error: () => {
        alert('API Error')
      }
    })
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {



  constructor(private router: Router){

  }
  logOff(){
    localStorage.removeItem("leaveUser")
    this.router.navigateByUrl("/login")
  }
}

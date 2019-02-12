import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = "Welcome to BT Panorama";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSignOut() {
    this.router.navigate(['/login']);
    this.authService.logOut();
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  imports: [
    MatCard
  ],
  selector: 'app-server-error',
  styleUrl: './server-error.component.scss',
  templateUrl: './server-error.component.html',
})
export class ServerErrorComponent {
  error?: any;

  constructor(private router:Router){
    const navigation = this.router.currentNavigation();
    this.error= navigation?.extras.state?.['error'];
  }
}

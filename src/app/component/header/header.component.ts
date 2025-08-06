import { Component } from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  imports: [
    MatIconButton,
    MatIcon

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}



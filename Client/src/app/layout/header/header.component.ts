import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import{MatIcon} from '@angular/material/icon'

@Component({
  imports: [
    MatIcon,
    MatButton,
    MatBadge
  ],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}

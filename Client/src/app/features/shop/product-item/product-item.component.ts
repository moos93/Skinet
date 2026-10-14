import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    MatCard,
    MatCardContent,
    CurrencyPipe,
    MatCardActions,
    MatButton,
    MatIcon,
    RouterLink
],
  selector: 'app-product-item',
  styleUrl: './product-item.component.scss',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() product?: Product ;
}

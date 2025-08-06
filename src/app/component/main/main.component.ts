import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import {MatCheckbox} from '@angular/material/checkbox';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MatCheckbox, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent, MatCardActions, MatButton],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() products!: Product[];
  @Output() addToCart = new EventEmitter<Product>();

  onAdd(product: Product) {
    this.addToCart.emit(product);
  }
  ngOnInit(): void {
    console.log('Input products:', this.products);
  }
}

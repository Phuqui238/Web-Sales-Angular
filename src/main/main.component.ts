import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MatCheckbox],
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

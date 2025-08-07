import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CardComponent } from '../card/card.component';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponent, MatCheckbox],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() products!: Product[];
  @Output() addToCart = new EventEmitter<Product>();

  ngOnInit(): void {
    console.log('Input products:', this.products);
  }

  onAdd(product: Product) {
    this.addToCart.emit(product);
  }
}

import {Component, inject} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {FooterComponent} from '../../component/footer/footer.component';
import {MainComponent} from '../../component/main/main.component';
import {MatDialog} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {DialogComponent} from '../../component/dialog/dialog.component';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    MainComponent,
    MatButton,
    MatIcon,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private productService = inject(ProductService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.products;
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

  openCartDialog() {
    const cart = this.productService.getCart();
    this.dialog.open(DialogComponent, {
      data: cart,
      width: '1000px',
      height: '700px',
      maxWidth: 'none',
      maxHeight: '700px',
    });
  }

  goToDetail(product: Product) {
    this.router.navigate(['/detail', product.name]);
  }
}


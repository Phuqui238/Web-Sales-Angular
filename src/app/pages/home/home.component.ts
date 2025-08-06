import {Component, inject} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {HeaderComponent} from '../../component/header/header.component';
import {FooterComponent} from '../../component/footer/footer.component';
import {MainComponent} from '../../component/main/main.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private productService = inject(ProductService);
  private router = inject(Router);

  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.products;
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

  goToDetail(product: Product) {
    this.router.navigate(['/detail', product.name]);
  }
}


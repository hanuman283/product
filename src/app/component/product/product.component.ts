import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/Iproducts';
import { ProductService } from '../../service/product.service';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone:true,
  selector: 'app-product',
  imports: [TableModule,FormsModule,ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
products: Product[] = [];
  productDialog: boolean = false;
  product: Product = { id: 0, name: '', description: '', price: 0 };
  isEditMode = false;
  submitted = false;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error loading products', err)
    });
  }
}

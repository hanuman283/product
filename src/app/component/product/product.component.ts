import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interface/Iproducts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  selectedProduct: IProduct | null = null;
  isEditing = false;
  newProduct: IProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  onSubmit(): void {
    if (this.isEditing && this.selectedProduct) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }

  createProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe({
      next: () => {
        this.loadProducts();
        this.resetForm();
      },
      error: (err) => console.error('Error creating product:', err)
    });
  }

  updateProduct(): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe({
        next: () => {
          this.loadProducts();
          this.resetForm();
        },
        error: (err) => console.error('Error updating product:', err)
      });
    }
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => this.loadProducts(),
        error: (err) => console.error('Error deleting product:', err)
      });
    }
  }

  editProduct(product: IProduct): void {
    this.selectedProduct = { ...product };
    this.isEditing = true;
  }

  resetForm(): void {
    this.selectedProduct = null;
    this.isEditing = false;
    this.newProduct = {
      id: 0,
      name: '',
      description: '',
      price: 0
    };
  }
}

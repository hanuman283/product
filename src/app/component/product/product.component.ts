import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interface/Iproducts';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
@Component({
  standalone:true,
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  PRODUCTS: IProduct[] = [];

  constructor(private _service: ProductService) {}

  ngOnInit(): void {
    this._service.getProducts().subscribe({
      next: (data) => this.PRODUCTS = data,
      error: (err) => console.error('Error fetching products:', err)
    });
  }
}

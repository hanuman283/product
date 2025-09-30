import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interface/Iproducts';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  PRODUCTS:Product []=[];
  ngOnInit(): void {
   this.PRODUCTS = [
    {
      id: 1,
      name: 'Apple iPhone 14',
      description: '128GB, Midnight Black',
      price: 799.99
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: '256GB, Phantom Gray',
      price: 899.99
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      description: 'Noise-Canceling Headphones',
      price: 349.99
    }
  ];

  }
}

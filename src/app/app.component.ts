import { Component } from '@angular/core';
import { ProductComponent } from './component/product/product.component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product';
}

import { Component, OnInit } from '@angular/core';
import {products} from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }
  share(item) {
    window.alert(`The product ${item.name} has been shared!`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

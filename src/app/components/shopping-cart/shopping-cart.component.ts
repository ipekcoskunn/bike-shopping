import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input() carts: CartModel[] = [];
  @Input() total: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

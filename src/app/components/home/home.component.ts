import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carts: CartModel[] = []
  total: number = 0;

  getCarts(event:any){
    this.carts = event.data;
    this.total = event.total;
  }
}

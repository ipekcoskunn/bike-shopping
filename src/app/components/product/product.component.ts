import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartModel } from 'src/app/models/cart';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [
    {name: "Peynir", price:76.50, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU" },
    {name: "Peynir", price:76.50, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU" },
    {name: "Peynir", price:76.50, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU" },
    {name: "Peynir", price:76.50, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU" },
    {name: "Peynir", price:76.50, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU" },
    {name: "Peynir", price:76.50, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU" },
    {name: "Peynir", price:76.50, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNr4bhprBkatMqjNiU3At3LOlDKkxGupR1w&usqp=CAU" }
  ]

  carts: CartModel[] = [];
  total: number = 0;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addCart(product:ProductModel){
    let cartModel = new CartModel();
    cartModel.product = product;
    cartModel.quantity = 1;

    this.carts.push(cartModel);
    this.total = this.total + cartModel.quantity * product.price
    this.myEvent.emit({ data: this.carts, total: this.total})
  }

}

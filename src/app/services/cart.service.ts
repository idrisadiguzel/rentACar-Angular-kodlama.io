import { CarProperty } from './../models/carProperty';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { CarProp } from '../models/carProp';
import { CarProps } from '../models/carProps';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient:HttpClient) { }
  getCarProps():Observable<CarProperty[]>{
    return this.httpClient.get<CarProperty[]>("http://localhost:3000/carProperties")
  }

  addToCart(car: Car){
    let cartItem: CartItem = new CartItem()
    cartItem.car = car
    CartItems.push(cartItem)

  }

  addToCart2(prop: CarProperty){
    let carProps: CarProp = new CarProp()
    carProps.carProps = prop
    CarProps.push(carProps)

  }

  getCarCartItems() {
    return CartItems
  }
  getPropsCartItems() {
    return CarProps
  }


}

import { Component, OnInit } from '@angular/core';
import { CarProp } from 'src/app/models/carProp';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  isLogged: boolean = false;
  cartItems: CartItem[] = [];
  carPropsCart: CarProp[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (localStorage.getItem('loginToken')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.getCarCartItems();
    this.getPropsCartItems();
  }

  logOut() {
    localStorage.removeItem('loginToken');
    location.href = '/car-list';
  }

  getCarCartItems() {
    this.cartItems = this.cartService.getCarCartItems();
  }
  getPropsCartItems() {
    this.carPropsCart = this.cartService.getPropsCartItems();
  }
}

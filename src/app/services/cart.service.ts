import { CarProperty } from './../models/carProperty';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }
  getCarProps():Observable<CarProperty[]>{
    return this.httpClient.get<CarProperty[]>("http://localhost:3000/carProperties")
  }
}

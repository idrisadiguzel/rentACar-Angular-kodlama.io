import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = "http://localhost:3000/cars/"

  getCar(): Observable<Car[]> {

    return this.httpClient.get<Car[]>(this.apiUrl);

  }
  addCar(val: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.apiUrl, val)
  }
  updateCar(val: Car): Observable<Car> {
    return this.httpClient.put<Car>(this.apiUrl + val.id, val)
  }
  deleteCar(val: number): Observable<Car> {
    return this.httpClient.delete<Car>(this.apiUrl + val)
  }
  getCarById(val:number):Observable<Car>{
    return this.httpClient.get<Car>(this.apiUrl+val)
  }

}

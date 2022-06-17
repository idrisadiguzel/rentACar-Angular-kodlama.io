import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string="http://localhost:3000/colors/"

  getColor():Observable<Color[]>{
    return this.httpClient.get<Color[]>(this.apiUrl)
  }

  addColor(val:Color):Observable<Color>{
    return this.httpClient.post<Color>(this.apiUrl,val)
  }
  deleteColor(val:number):Observable<Color>{
    return this.httpClient.delete<Color>(this.apiUrl+val)
   }

   getColorById(val:number):Observable<Color>{
    return this.httpClient.get<Color>(this.apiUrl+val)
  }

  getColorByname(name:string):Observable<Color>{
    return this.httpClient.get<Color>("http://localhost:3000/colors?q="+name)
  }

}

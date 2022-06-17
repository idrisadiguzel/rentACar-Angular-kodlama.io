import { Brand } from './../models/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string="http://localhost:3000/brands/";

  getBrand():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }
  addBrand(val:Brand):Observable<Brand>{
    return this.httpClient.post<Brand>(this.apiUrl,val)
  }

  deleteBrand(val:number):Observable<Brand>{
   return this.httpClient.delete<Brand>(this.apiUrl+val)
  }

  updateBrand(val:Brand):Observable<Brand>{
      return this.httpClient.put<Brand>(this.apiUrl+val.id,val)
  }

  getBrandById(val:number):Observable<Brand>{
    return this.httpClient.get<Brand>(this.apiUrl+val)
  }

  getBrandByname(name:string):Observable<Brand>{
    return this.httpClient.get<Brand>("http://localhost:3000/brands?q="+name)
  }


}

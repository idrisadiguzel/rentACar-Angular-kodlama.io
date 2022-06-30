import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "http://localhost:3000/users/";

  checkUser(user:User):Observable<User>{
    return this.httpClient.get<User>('http://localhost:3000/users/?eMail='+user.email+'&password='+user.password)
}

addUser(val:User):Observable<User>{
  return this.httpClient.post<User>(this.apiUrl,val)
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from './configData';
import { Userss } from './userss.model';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = 'https://coalgenie.sudofire.com/accounts/api/v1/customer'

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }

  saveUser(data:Userss){
    return this.http.post<Userss>(this.url, data, httpOptions)
  }

}

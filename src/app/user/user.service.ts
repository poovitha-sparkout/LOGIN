import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  http: any;
  apiUrl: any;
  loginService(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`,{email : email,password : password})
  }

}
  
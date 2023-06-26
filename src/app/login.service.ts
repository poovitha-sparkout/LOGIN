import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http: any;
  apiUrl: any;
  loginUser(email: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  
  
}

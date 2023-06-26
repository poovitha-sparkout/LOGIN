import { Component } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  dataCollection :any
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((response: any) => {
      console.log(response);
      this.dataCollection = response.data;
      console.log(this.dataCollection);
    });
  }
}




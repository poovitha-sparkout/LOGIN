import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { UsersRoutingModule } from './user.routing-module';

import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [HttpClientModule, UsersRoutingModule, CommonModule],
  providers: [UserService],
  bootstrap: [],
})
export class UsersModule {}
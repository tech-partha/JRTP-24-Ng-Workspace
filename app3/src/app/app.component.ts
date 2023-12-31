import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app3';
  msg:string="Welcome To Ashok It..";

  fname:string="";
  slogan:string="Learn Here.. Lead Anywhere..!!";
  mycolor:string="green";
  displayMsg1(){
    this.msg="Welcome To Angular..";
  }
  displayMsg2(){
    this.msg="Welcome To Java..";
  }
}

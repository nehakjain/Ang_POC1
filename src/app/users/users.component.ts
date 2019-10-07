import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userObj = [{name: "Shakti",age:24,gender:"Female"},
            {name:"Mahesh",age:25,gender:"Male"}]

  show : boolean = true
  constructor() { }

  ngOnInit() {
  }

}

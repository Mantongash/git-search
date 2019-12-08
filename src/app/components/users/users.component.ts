import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  profile:any[];

  constructor(private usersService:UsersService) { 
    this.usersService.getUserData().subscribe(profile =>{
      console.log(profile)
      this.profile=profile;
    })
  }

  ngOnInit() {
  }

}

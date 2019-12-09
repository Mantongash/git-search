import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private usersService: UsersService) {}

  findUser() {
    this.usersService.updateUser(this.username);
    this.usersService.getUserData().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.usersService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {}
}

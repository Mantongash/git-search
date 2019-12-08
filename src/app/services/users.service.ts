import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private username: string;
  private clientid = "Iv1.06204863a8f8ba72";
  private clientsecret = "862ea922db5c5eac4b17569951f74822fcc60054";
  constructor(private http: HttpClient) {
    console.log("Service is now ready");
    this.username = "Mantongash";
  }

  getUserData() {
    return this.http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "?client_id=" +
          this.clientid +
          "&client_secret=" +
          this.clientsecret
      )
      .pipe(map(res => res));
  }

  getUserRepos() {
    return this.http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "/repos?client_id=" +
          this.clientid +
          "&client_secret=" +
          this.clientsecret
      )
      .pipe(map(res => res));
  }

  updateUser(username:string) {
    this.username=username;
  }
}

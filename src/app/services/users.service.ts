import { Injectable } from "@angular/core";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private username: string;
  private clientid = "Iv1.06204863a8f8ba72";
  private clientsecret = "862ea922db5c5eac4b17569951f74822fcc60054";
  constructor(private http: HttpClientModule) {
    console.log("Service is now ready");
    this.username = "Mantongash"
  }
}

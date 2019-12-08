import { Injectable } from "@angular/core";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private username:string;
  private clientid="";
  private clientsecret=""
  constructor(private http:HttpClientModule) {}
}

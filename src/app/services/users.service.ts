import { Injectable } from "@angular/core";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http:HttpClientModule) {}
}

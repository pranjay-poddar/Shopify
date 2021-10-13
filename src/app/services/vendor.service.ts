import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../models/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = "http://localhost:8080/api/v1/";
  constructor(private httpClient : HttpClient) { }
  //register vendor
  registerVendor(VsForm : any) : Observable<Vendor>{
    return this.httpClient.post<Vendor>(this.baseUrl+"register-vendor", VsForm);
  }
  //sign in vendor
  signInVendor(loginData : any) : Observable<Vendor>{
    return this.httpClient.post<Vendor>(this.baseUrl+"login-vendor", loginData);
  }
  //add items
  addProducts(vendor : Vendor) : Observable<Vendor>{
    return this.httpClient.put<Vendor>(this.baseUrl+"add-product", vendor);
  }
  //get Items
  getItems(id : number) : Observable<Vendor[]>{
    return this.httpClient.get<Vendor[]>(this.baseUrl+"get-products/"+id);
  }
}

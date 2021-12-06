import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { Vendor } from '../models/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = "https://shopify-backend-server.herokuapp.com/api/v1/";
  constructor(private httpClient : HttpClient) { }
  //register vendor
  registerVendor(VsForm : any) : Observable<Vendor>{
    return this.httpClient.post<Vendor>(this.baseUrl+"register-vendor", VsForm);
  }
  //sign in vendor
  signInVendor(loginData : any) : Observable<Vendor>{
    return this.httpClient.post<Vendor>(this.baseUrl+"login-vendor", loginData);
  }
  //get vendor by id
  getById(id : number) : Observable<Vendor>{
    return this.httpClient.get<Vendor>(this.baseUrl+"vendor/"+id);
  }
  //add items
  addProducts(id : number, vendor : Vendor) : Observable<Vendor>{
    return this.httpClient.put<Vendor>(this.baseUrl+"add-product/"+id, vendor);
  }
  //get Items
  getItems(id : number) : Observable<Vendor[]>{
    return this.httpClient.get<Vendor[]>(this.baseUrl+"get-products/"+id);
  }
  //get details of pdt by id
  getProductById(id : number) : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"products/"+id);
  }
  //update producst by id
  updateProductById(id : number, pdt : Products) : Observable<Products>{
    return this.httpClient.put<any>(this.baseUrl+"products/"+id, pdt);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../models/buyer';
import { PdtList } from '../models/pdt-list';
import { VendorDetail } from '../models/vendor-detail';
import { VendorList } from '../models/vendor-list';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private baseUrl = "http://localhost:8080/api/v2/";
  constructor(private httpClient : HttpClient) { }
  //register buyer
  registerBuyer(BSForm : any) : Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"register-buyer", BSForm);
  }
  //login buyer
  loginBuyer(BSForm : any) : Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"login-buyer", BSForm);
  }
  //get buyer by id
  getBuyerById(id : number) : Observable<Buyer>{
    return this.httpClient.get<Buyer>(this.baseUrl+"buyer/"+id);
  }
  //get vendors by pin
  getVendorById(pin : number) : Observable<PdtList[]>{
    return this.httpClient.get<PdtList[]>(this.baseUrl+"vendors/"+pin);
  }
  //get vendors by pin and product
  getVendorByProduct(pdt : string, pin : number) : Observable<PdtList[]>{
    return this.httpClient.get<PdtList[]>(this.baseUrl+"products/"+pin+"/"+pdt);
  }
  //get details of vendor
  getVendorDetails(id : number) : Observable<VendorDetail>{
    return this.httpClient.get<VendorDetail>(this.baseUrl+"buyer-info/"+id);
  }
}

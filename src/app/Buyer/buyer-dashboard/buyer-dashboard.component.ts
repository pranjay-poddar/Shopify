import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/models/vendor';
import { VendorService } from 'src/app/services/vendor.service';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import Swal from 'sweetalert2';
import { BuyerService } from 'src/app/services/buyer.service';
import { Buyer } from 'src/app/models/buyer';
import { VendorList } from 'src/app/models/vendor-list';
import { PdtList } from 'src/app/models/pdt-list';
import { MatDialog } from '@angular/material/dialog';
import { PdtDetailsCompComponent } from '../pdt-details-comp/pdt-details-comp.component';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class BuyerDashboardComponent implements OnInit {

  id ! : number;
  buyer : Buyer = new Buyer()
  vendorList!: VendorList[];
  pdtList ! : PdtList[];
  pdt ! : string;
  date=Date();
  sidenav = "";
  sidenavTitle = "";
  main_container = "main_container" ;
  pin! : number;
  time = new Date();
  intervalId:any;
  subscription: any;
  hideproducts = "hideproducts";

  logoutalert(){  
    Swal.fire('Thank you...', 'Logout succesfully!', 'success')  
  } 

  toggleNav(){
    if(this.sidenav){
      this.sidenav = "";
    }
    else{
      this.sidenav = "sidenav2";
    }
    if(this.sidenavTitle){
      this.sidenavTitle = "";
    }
    else{
      this.sidenavTitle = "sidenavTitle2";
    }
    if(this.main_container=="main_container"){
      this.main_container = "main_container2";
    }
    else{
      this.main_container = "main_container";
    }
  };

  constructor(private route : ActivatedRoute, private buyerService : BuyerService, private dialog : MatDialog) { }

  ngOnInit(): void {
    // Using Basic Interval for clock
    this.intervalId = setInterval(() => {
      this.time = new Date();
      }, 1000);

    this.id = this.route.snapshot.params['id'];
    this.buyerService.getBuyerById(this.id).subscribe((data) => {
      this.buyer = data;
    },
    (Error) => {alert("Please Login again")}
    );
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  findvendors(){
    if(this.hideproducts){
      this.hideproducts = "showproducts";
    }
    else{
      this.hideproducts = "hideproducts";
    }
  //  work below this
  this.buyerService.getVendorById(this.pin).subscribe((data) => {
      this.pdtList = data;
  },
  (Error) => {alert("No shop in the given pin")}
  )
  
  }

  products(){
    this.buyerService.getVendorByProduct(this.pdt, this.pin).subscribe((data) => {
        this.pdtList = data;
        console.log(this.pdtList);

    },
    (Error) => {alert("no shops found for given product in given area")}
    );
    // Swal.fire('Products'); 
  }

  getDetailsOfPdt(id : number){
    this.dialog.open(PdtDetailsCompComponent, {
      data : this.id,
    });
  }
  
}

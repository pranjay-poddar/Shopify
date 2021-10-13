import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/models/vendor';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit {

  id ! : number;
  vendor : Vendor = new Vendor();
  date=Date();
  sidenav = "";
  sidenavTitle = "";
  main_container = "main_container" ;
  city! : String;
  time = new Date();
  intervalId:any;
  subscription: any;

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

  constructor(private route : ActivatedRoute, private vendorService : VendorService) { }

  ngOnInit(): void {
    // Using Basic Interval for clock
    this.intervalId = setInterval(() => {
      this.time = new Date();
      }, 1000);

    this.id = this.route.snapshot.params['id'];
    this.vendorService.getById(this.id).subscribe((data) => {
      this.vendor = data;
    },
    (Error) => {alert(Error.error.message);}
    )
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}

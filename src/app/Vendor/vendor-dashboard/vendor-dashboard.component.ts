import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/models/vendor';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import { expand, flyInOut } from 'src/app/Utilities/animations/animation';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCompComponent } from '../update-comp/update-comp.component';
import { Products } from 'src/app/models/products';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
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

  constructor(private route : ActivatedRoute, public dialog: MatDialog, private vendorService : VendorService) { }

  ELEMENT_DATA ! : [any];
  ngOnInit(): void {
    // Using Basic Interval for clock
    this.intervalId = setInterval(() => {
      this.time = new Date();
      }, 1000);

    this.id = this.route.snapshot.params['id'];
    this.vendorService.getById(this.id).subscribe((data) => {
      this.vendor = data;
      this.ELEMENT_DATA = this.vendor.products;
    },
    (Error) => {alert(Error.error.message);}
    )
  }
  displayedColumns: string[] = ['pdtName'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
    
  // }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updatePdt(id : number){
    this.dialog.open(UpdateCompComponent, {
      data : id,
    });
  }
  addProduct(){
    this.dialog.open(AddProductComponent, {
      data : this.id,
    });
  }
  getProducts(){
    
  }
  
}

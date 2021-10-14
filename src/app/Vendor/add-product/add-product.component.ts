import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Products } from 'src/app/models/products';
import { Vendor } from 'src/app/models/vendor';
import { VendorService } from 'src/app/services/vendor.service';
import { VendorDashboardComponent } from '../vendor-dashboard/vendor-dashboard.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : VendorDashboardComponent, private dialog : MatDialog, private vendorService : VendorService) { }

  id ! : any;
  product : Products = new Products();
  vendor : Vendor = new Vendor();
  ngOnInit(): void {
    this.id = this.data;
    this.vendorService.getById(this.id).subscribe((data) => {
      this.vendor = data;
    },
    (Error) => {alert(Error.eror.message)}
    )

  }
  addProduct(){
    this.vendor.products.push(this.product);
    this.vendorService.addProducts(this.id, this.vendor).subscribe((data) => {
      this.vendor = data;
      this.dialog.closeAll();
    },
    (Error) => {alert("Add again")}
    )
  }

}

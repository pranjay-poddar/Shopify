import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Products } from 'src/app/models/products';
import { VendorService } from 'src/app/services/vendor.service';
import { VendorDashboardComponent } from '../vendor-dashboard/vendor-dashboard.component';

@Component({
  selector: 'app-update-comp',
  templateUrl: './update-comp.component.html',
  styleUrls: ['./update-comp.component.scss']
})
export class UpdateCompComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : VendorDashboardComponent, private dialog : MatDialog, private vendorService : VendorService) { }

  pdtId ! : any;
  pdtDetails : Products = new Products();
  ngOnInit(): void {
    this.pdtId = this.data;
    this.vendorService.getProductById(this.pdtId).subscribe((data) => {
      this.pdtDetails = data;
    },
    (Error) => {alert("problem fetching product details")}
    );
  }
  Update(){
    this.vendorService.updateProductById(this.pdtId, this.pdtDetails).subscribe((data) => {
      this.pdtDetails = data;
    },
    (Error) => {
      alert(Error.error.message);
    }
    )
  }

  dialogClose(){
    this.dialog.closeAll();
  }

}

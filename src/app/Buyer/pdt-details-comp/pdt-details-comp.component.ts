import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PdtList } from 'src/app/models/pdt-list';
import { VendorDetail } from 'src/app/models/vendor-detail';
import { BuyerService } from 'src/app/services/buyer.service';
import { BuyerDashboardComponent } from '../buyer-dashboard/buyer-dashboard.component';

@Component({
  selector: 'app-pdt-details-comp',
  templateUrl: './pdt-details-comp.component.html',
  styleUrls: ['./pdt-details-comp.component.scss']
})
export class PdtDetailsCompComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : BuyerDashboardComponent, private buyerService : BuyerService, private dialog : MatDialog) { }

  id !: any;
  vendorDetails : VendorDetail = new VendorDetail();
  ngOnInit(): void {
    this.id = this.data;
    console.log(this.id);
    this.buyerService.getVendorDetails(this.id).subscribe((data) => {
      this.vendorDetails = data;
      
    },
    (Error) => {alert("no data")}
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/models/vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit {

  id ! : number;
  vendor : Vendor = new Vendor();
  constructor(private route : ActivatedRoute, private vendorService : VendorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorService.getById(this.id).subscribe((data) => {
      this.vendor = data;
      console.log(this.vendor);

    },
    (Error) => {alert(Error.error.message);}
    )
  }

}

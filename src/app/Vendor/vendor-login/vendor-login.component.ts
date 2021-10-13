import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { flyInOut, expand } from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendor } from 'src/app/models/vendor';
@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class VendorLoginComponent implements OnInit {


  
  VLoginForm !: FormGroup;
  err ! : String;
  light ! : string;
  vendor : Vendor = new Vendor();
  id ! : number;
  constructor(private fb: FormBuilder, private sharingService:SharingService, private vendorService : VendorService, private router : Router) { }

  ngOnInit(): void {
    function ConfirmedValidator(controlName: string, matchingControlName: string){
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ confirmedValidator: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
    this.VLoginForm = this.fb.group({
   
      emailId: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
   
   
      pass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
    
     
    },
    );
    
    this.light = this.sharingService.getData();
    
  }

  get email(){
    return this.VLoginForm.get('emailId');
  }

  get pass(){
    return this.VLoginForm.get('pass');
  }
  submit(){
    this.vendorService.signInVendor(this.VLoginForm.value).subscribe((data) => {
      this.vendor = data;
      this.id = this.vendor.id;
      Swal.fire({  
        icon: 'success',  
        title: 'Login Successfull',  
        text: '',  
      });
      setTimeout(() => {
        this.router.navigate(['vendor-dashboard', this.id]);
      }, 1000);
    },
    (Error) => {alert(Error.error.message);}
    );
    this.VLoginForm.reset();
  }


}

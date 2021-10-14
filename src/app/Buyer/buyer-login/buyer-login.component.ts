import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { flyInOut, expand } from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';
import { BuyerService } from 'src/app/services/buyer.service';
@Component({
  selector: 'app-buyer-login',
  templateUrl: './buyer-login.component.html',
  styleUrls: ['./buyer-login.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class BuyerLoginComponent implements OnInit {
  BLoginForm !: FormGroup;
  id ! : number;
  light ! : string;
  constructor(private fb: FormBuilder,private sharingService:SharingService, private buyerService : BuyerService, private router : Router) { }

  ngOnInit(): void {
  
    this.BLoginForm = this.fb.group({
    
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
      
     
    });
    
    this.light = this.sharingService.getData();
    
  }



  get emailId(){
    return this.BLoginForm.get('emailId');
  }

  get pass(){
    return this.BLoginForm.get('pass');
  }



submit(){
  this.buyerService.loginBuyer(this.BLoginForm.value).subscribe((data) => {
    Swal.fire({  
      icon: 'success',  
      title: 'Login Successfull',  
      text: '',  
    });
    setTimeout(() => {
      this.router.navigate(['buyer-dashboard', data.id]);
    }, 1000);
  },
  (Error) => {alert(Error.error.message)}
  )
}

}
function ms(arg0: number, ms: any) {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { flyInOut, expand } from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';
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
  constructor(private fb: FormBuilder,private router : Router, private sharingService:SharingService) { }

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



  get email(){
    return this.BLoginForm.get('emailId');
  }

  get password(){
    return this.BLoginForm.get('pass');
  }



  submit(){
 
}

}
function ms(arg0: number, ms: any) {
  throw new Error('Function not implemented.');
}


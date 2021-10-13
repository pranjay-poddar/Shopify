import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { flyInOut, expand } from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';
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

  id !: number;
  VLoginForm !: FormGroup;
  err !: String;
  light !: string;
  constructor(private fb: FormBuilder,private router: Router, private sharingService: SharingService) { }

  ngOnInit(): void {

    this.VLoginForm = this.fb.group({

      emailId: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],

      pass: ['', [
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],


    });

    this.light = this.sharingService.getData();
    //console.log("light = "+this.light);
  }



  get email() {
    return this.VLoginForm.get('email');
  }

  get password() {
    return this.VLoginForm.get('password');
  }



  submit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';
@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class BuyerSignupComponent implements OnInit {

  BSForm !: FormGroup;
  light ! : string;
  constructor(private fb: FormBuilder, private sharingService:SharingService) { }

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
    this.BSForm = this.fb.group({
      name: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(46)
      ]],
      emailId: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
      contact: ['',[
        Validators.required,
        // Validators.min(999999999),
        // Validators.max(99999999999)
      ]],
      pass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      conPass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8),
      ]],
      agree:[false,[
        Validators.requiredTrue
      ]]
    }, { 
      validator: ConfirmedValidator('pass', 'conPass')
    });
    
    this.light = this.sharingService.getData();

  }



  get name(){
    return this.BSForm.get('name');
  }

  get emailId(){
    return this.BSForm.get('emailId');
  }

  get contact(){
return this.BSForm.get('contact');
  }

  get pass(){
    return this.BSForm.get('pass');
  }

  get conPass(){
    return this.BSForm.get('conPass');
  }

  get agree(){
    return this.BSForm.get('agree');
  }

  submit(){
  }

}
import { VendorForgetPassComponent } from './Vendor/vendor-forget-pass/vendor-forget-pass.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Utilities/navbar/navbar.component';
import { VendorLoginComponent } from './Vendor/vendor-login/vendor-login.component';
import { VendorSignupComponent } from './Vendor/vendor-signup/vendor-signup.component';
import { HomeComponent } from './Home/home/home.component';
import { BuyerLoginComponent } from './Buyer/buyer-login/buyer-login.component';
import { BuyerSignupComponent } from './Buyer/buyer-signup/buyer-signup.component';
import { BuyerForgotPassComponent } from './Buyer/buyer-forgot-pass/buyer-forgot-pass.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'vendorlogin', component: VendorLoginComponent },
  { path: 'vendorsignup', component: VendorSignupComponent },
  { path: 'vendorfpass',component: VendorForgetPassComponent},
  { path: 'home', component: HomeComponent },
  { path: 'buyerlogin',component: BuyerLoginComponent},
  { path: 'buyersignup',component: BuyerSignupComponent},
  { path: 'buyerfpass',component: BuyerForgotPassComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

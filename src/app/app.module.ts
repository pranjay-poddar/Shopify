import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Utilities/navbar/navbar.component';
import { FooterComponent } from './Utilities/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import 'hammerjs';
import { AlertmsgComponent } from './Utilities/alertmsg/alertmsg.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { SharingService } from './services/sharing.service';
import { MatIconTestingModule} from '@angular/material/icon/testing';
import { MatIconModule } from "@angular/material/icon";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { VendorLoginComponent } from './Vendor/vendor-login/vendor-login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AlertmsgComponent,
    VendorLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    MatIconTestingModule,
    MatProgressBarModule,
    MatIconModule,
    AngularFileUploaderModule
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

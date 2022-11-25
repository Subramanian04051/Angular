import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule,Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
//import {ButtonModule} from 'primeng/button';
const routes: Routes = [
  {path:'register', component:RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,RegistrationComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatCardModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes),FormsModule,InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

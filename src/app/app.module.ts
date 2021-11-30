import { AuthService } from './shared/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InterceptorModule } from './http-interceptors/interceptor.module';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './layout/contact/contact.component';
import { PainelComponent } from './layout/painel/painel.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';import { AppComponent } from './app.component';
import { ContentComponent } from './shared/content/content.component';
import { LoginComponent } from './account/login/login.component'
import { TitleComponent } from './shared/title/title.component';

import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { NavbarAdminComponent } from './layout/painel/navbar-admin/navbar-admin.component';
import { ProductsComponent } from './layout/painel/products/products.component';
import { DashboardComponent } from './layout/painel/dashboard/dashboard.component';
import { ListAgendamentoComponent } from './layout/painel/products/list-agendamento/list-agendamento.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    HomeComponent,
    ContactComponent,
    PainelComponent,
    NavbarAdminComponent,
    DashboardComponent,
    ProductsComponent,
    TitleComponent,
    NavbarAdminComponent,
    CreateAccountComponent,
    ListAgendamentoComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatIconModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar:true
    }),
    InterceptorModule,
    MatTabsModule,
    MatSliderModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    InterceptorModule,
    MatSelectModule,
    MatToolbarModule,
    BsDropdownModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    CarouselModule.forRoot(),
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

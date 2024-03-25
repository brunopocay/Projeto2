import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { LoginComponent } from './Components/Login/login.component';
import { NavMenuComponent } from './Components/NavMenu/nav-menu.component';
import { HomeComponent } from './Views/Dashboard/home.component';
import { LoginPage } from './Views/Login/login-page.component';
import { AppComponent } from './app.component';
import { FormShowExamesComponent } from './Components/form-show-exames/form-show-exames.component';
import { FormShowFilterComponent } from './Components/form-show-filter/form-show-filter.component';
import { TableresultComponent } from './Components/tableresult/tableresult.component';
import { AuthInterceptor } from './Services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    LoginPage,
    FormShowExamesComponent,
    FormShowFilterComponent,
    TableresultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    CurrencyMaskModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrandAdminComponent } from './components/pages/admin/brand/brand-admin/brand-admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NaviComponent } from './common/navi/navi.component';
import { BrandCategoryComponent } from './common/categories/brand-category/brand-category.component';
import { BrandAddComponent } from './components/pages/admin/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/pages/admin/brand/brand-update/brand-update.component';
import { ColorAdminComponent } from './components/pages/admin/color/color-admin/color-admin.component';
import { ColorAddComponent } from './components/pages/admin/color/color-add/color-add.component';
import { ColorCategoryComponent } from './common/categories/color-category/color-category.component';
import { CarListComponent } from './components/pages/car-list/car-list.component';
import { CarAdminComponent } from './components/pages/admin/car/car-admin/car-admin.component';
import { CarAddComponent } from './components/pages/admin/car/car-add/car-add.component';
import { CarUpdateComponent } from './components/pages/admin/car/car-update/car-update.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrandPipe } from './pipes/brand.pipe';
import { CarDetailComponent } from './components/pages/car-detail/car-detail.component';
import { LoginComponent } from './components/pages/login/login.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactComponent } from './components/pages/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandCategoryComponent,
    BrandAdminComponent,
    ColorAdminComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    ColorAddComponent,
    ColorCategoryComponent,
    CarListComponent,
    CarAdminComponent,
    CarAddComponent,
    CarUpdateComponent,
    FilterPipe,
    BrandPipe,
    CarDetailComponent,
    LoginComponent,
    ContactComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

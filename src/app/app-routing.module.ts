import { CarUpdateComponent } from './components/pages/admin/car/car-update/car-update.component';
import { CarAddComponent } from './components/pages/admin/car/car-add/car-add.component';
import { CarAdminComponent } from './components/pages/admin/car/car-admin/car-admin.component';
import { CarListComponent } from './components/pages/car-list/car-list.component';
import { ColorAddComponent } from './components/pages/admin/color/color-add/color-add.component';
import { ColorAdminComponent } from './components/pages/admin/color/color-admin/color-admin.component';
import { BrandUpdateComponent } from './components/pages/admin/brand/brand-update/brand-update.component';
import { BrandAddComponent } from './components/pages/admin/brand/brand-add/brand-add.component';
import { BrandAdminComponent } from './components/pages/admin/brand/brand-admin/brand-admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:CarListComponent},
  {path:"brand-admin",component:BrandAdminComponent},
  {path:"brand-add",component:BrandAddComponent},
  {path:"brand-update/:id",component:BrandUpdateComponent},
  {path:"color-admin",component:ColorAdminComponent},
  {path:"color-add",component:ColorAddComponent},
  {path:"car-admin",component:CarAdminComponent},
  {path:"car-add",component:CarAddComponent},
  {path:"car-admin",component:CarAdminComponent},
  {path:"car-update/:id",component:CarUpdateComponent},
  {path:"brands/:id",component:CarListComponent},
  {path:"colors/:id",component:CarListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

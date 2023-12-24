import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'formations',component:FormationsComponent}
  ,{path:'/',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

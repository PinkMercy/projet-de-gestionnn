import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {path:'formations',component:FormationsComponent}
  ,{path:'home',component:HomeComponent}
  ,{path:'detail',component:DetailComponent}
  ,{path:'detail/:id',component:DetailComponent}
  ,{path:'',redirectTo:'/home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

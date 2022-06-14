import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultistepComponent } from './multistep/multistep.component';

const routes: Routes = [
  {path:'multistep',component:MultistepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

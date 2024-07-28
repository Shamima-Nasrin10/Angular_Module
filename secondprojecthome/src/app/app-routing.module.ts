import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';

const routes: Routes = [
  {path:"student", component:StudentComponent},
  {path:"location", component:LocationComponent},
  {path:"createlocation", component:CreatelocationComponent},
  {path:"updatelocation/:id", component:UpdatelocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

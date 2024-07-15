import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
<<<<<<< Updated upstream

const routes: Routes = [
  {path:"student", component:StudentComponent}
=======
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';

const routes: Routes = [
  {path:"student", component:StudentComponent},
  {path:"location", component:LocationComponent},
  {path:"createlocation", component:CreatelocationComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

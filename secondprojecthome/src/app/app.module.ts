import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { RouterModule } from '@angular/router';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LocationComponent,
    CreatelocationComponent,
    UpdatelocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
	provideHttpClient(
      withFetch()
    )
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LocationComponent,
    CreatelocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
	provideHttpClient(
      withFetch()
    ),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

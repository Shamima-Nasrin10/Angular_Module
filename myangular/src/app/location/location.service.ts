import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl: string = "http://localhost:3000/locations";
  constructor(private httpClient: HttpClient) { }

  getAllLocations(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createLocation(location: Location): Observable<any> {
    return this.httpClient.post(this.baseUrl, location);
  }

  getLocationById(id: number): Observable<any> {
    return this.httpClient.get<Location>(`${this.baseUrl}/${id}`);
  }

  deleteLocation(id:string):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  // updateLocation(id: number, location: Location): Observable<Location> {
  //   return this.httpClient.put<Location>(`${this.baseUrl}/${id}`, location);
  // }

}

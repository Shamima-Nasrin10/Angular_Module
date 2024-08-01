import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { map, Observable } from 'rxjs';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string="http://localhost:3000/user";

  constructor(
    private httpClient: HttpClient
  ) { }

registration(user: UserModel):Observable<AuthResponse>{
  return this.httpClient.post<UserModel>(this.baseUrl, user).pipe(
    map(
      (newUser: UserModel)=>{
        const token=btoa(`${newUser.email}${newUser.password}`);
        return  { token, user: newUser } as AuthResponse;
      })
  )
}

}

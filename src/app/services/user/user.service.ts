import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AUthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { SingupUserRequest } from 'src/app/models/interfaces/user/SingupUserRequest';
import { SingupUserResponse } from 'src/app/models/interfaces/user/SingupUserResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  sigupUser(requestDatas : SingupUserRequest):Observable<SingupUserResponse>{
    return this.http.post<SingupUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    )
  }

  authUser (requestDatas: AuthRequest):Observable<AUthResponse>{
    return this.http.post<AUthResponse>(`${this.API_URL}/auth`, requestDatas)

  }
}

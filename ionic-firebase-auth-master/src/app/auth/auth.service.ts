import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refershToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = true;

  private _user = new BehaviorSubject<AuthResponseData>(null);

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    );
  }
  
  

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`, 
    {
      email,
      password,
      returnSecureToken: true,
      isAuthenticated: true
    });

    
    // console.log(this.isAuthenticated);
  }

  //  get isAuthenticated() {
  //   return this._user.asObservable().pipe(map(user => {
  //     if (user) {
  //       return !!user.idToken;
  //     } else {
  //       return null;
  //     }
  //   }));
  //  }


  logout() {
    //firebase logout API here
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);

  }
}

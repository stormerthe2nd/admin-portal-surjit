import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageS: LocalStorageService, private router: Router) { }

  isAuthenticated(): boolean {
    if (this.localStorageS.getUserDetails()) return true
    this.router.navigate(["auth"])
    return false
  }
}

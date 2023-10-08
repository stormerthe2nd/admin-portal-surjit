import { Injectable } from '@angular/core';
import { LocalStorageKeys, UserDetails } from '../interfaces/app.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getUserDetails(): UserDetails | undefined {
    try {
      return JSON.parse(localStorage.getItem(LocalStorageKeys.user) ?? "") ?? undefined
    } catch (e) {
      return undefined
    }
  }

  setUserDetails(userDetails: UserDetails): void {
    localStorage.setItem(LocalStorageKeys.user, JSON.stringify(userDetails))
  }
}

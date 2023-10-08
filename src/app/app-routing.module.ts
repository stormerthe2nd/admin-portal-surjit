import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth-service.service';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent), canActivate: [() => inject(AuthService).isAuthenticated()] },
    { path: "auth", loadComponent: () => import('./modules/auth/auth.component').then(m => m.AuthComponent) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
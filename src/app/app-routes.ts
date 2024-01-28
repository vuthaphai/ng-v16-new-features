import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";


export const routes: Routes = [

{
    path: '', redirectTo: 'home', pathMatch:'full'
},
{
    path:'home', component: HomeComponent, loadChildren: () => import('./home/home.route')
},
{
    path:'auth',component: AuthComponent, loadChildren: () => import('./auth/auth.route')
},
];



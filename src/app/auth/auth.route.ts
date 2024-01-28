import { Route } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { RegisterComponent } from "./register/register.component";

export default [
    {
        path: '', redirectTo: 'signin', pathMatch: 'full'
    },
    {
        path: 'signin', component: SigninComponent
    },
    {
        path: 'register', component: RegisterComponent
    }
] as Route[]
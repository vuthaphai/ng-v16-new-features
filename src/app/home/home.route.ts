import { Route } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

export default [
    {
        path: '', redirectTo: 'home', pathMatch:'full'
    },    
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'contact-us', component: ContactUsComponent
    }
] as Route[]
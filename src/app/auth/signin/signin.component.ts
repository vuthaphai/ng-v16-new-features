import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/component/header/header.component';

@Component({
    selector: 'app-signin',
    standalone: true,
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    imports: [CommonModule, HeaderComponent]
})
export class SigninComponent {

}

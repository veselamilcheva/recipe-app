import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.modules';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


@NgModule({
    declarations: [AuthComponent],
    imports: [
        FormsModule, 
        SharedModule,
        RouterModule.forChild([{path: 'auth', component: AuthComponent}])],
    exports: [AuthComponent]
})
export class AuthModule {

}
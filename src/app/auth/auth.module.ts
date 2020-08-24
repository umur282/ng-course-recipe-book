import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'auth', component: AuthComponent }
    ]),
    FormsModule,
    SharedModule
  ]
})
export class AuthModule {}
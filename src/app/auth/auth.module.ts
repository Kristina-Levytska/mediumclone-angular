import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { AUTH_STORE_KEY, reducers } from './store/reducers';
import { AuthService } from '../services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { EffectsModule } from '@ngrx/effects';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backend-error-messages/backend-error-messages.module';
import { PersistenceService } from '../shared/services/persistence.service';
import { LoginEffect } from './store/effects/login.effect';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STORE_KEY, reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}

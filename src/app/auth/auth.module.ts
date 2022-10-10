import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { AUTH_STORE_KEY, reducers } from './store/reducers';
import { AuthService } from '../services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { EffectsModule } from '@ngrx/effects';
import { BackendErrorMessagesComponent } from '../shared/modules/backendErrorMessages/components/backendErrorMessages/backend-error-messages/backend-error-messages.component';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backend-error-messages/backend-error-messages.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STORE_KEY, reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}

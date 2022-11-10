import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}

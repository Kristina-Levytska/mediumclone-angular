import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}

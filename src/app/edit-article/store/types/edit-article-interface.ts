import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

export interface EditArticleStateInterface {
  isLoading: boolean;
  article: ArticlesInterface | null;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}

import { createAction, props } from '@ngrx/store';

export const activateSpinner = '[Activate Spinner]shared state';
export const showErrorMessage = '[Error Message]shared state';

export const activateSpinnerAction = createAction(
  activateSpinner,
  props<{ showSpinner: boolean }>()
);

export const showErrorMessageAction = createAction(
  showErrorMessage,
  props<{ errorMessage: string }>()
);

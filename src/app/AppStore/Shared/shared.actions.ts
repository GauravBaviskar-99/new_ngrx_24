import { createAction, props } from '@ngrx/store';

export const activateSpinner = '[Activate Spinner]shared state';

export const activateSpinnerAction = createAction(
  activateSpinner,
  props<{ showSpinner: boolean }>()
);

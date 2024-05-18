export interface sharedState {
  status: boolean;
  errorMessage: string;
}

export const initialState: sharedState = {
  status: false,
  errorMessage: '',
};

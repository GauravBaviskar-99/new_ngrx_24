import { postReducer } from '../Post/post-list/PostStore/post.reducer';
import { PostState } from '../Post/post-list/PostStore/post.state';
import { counterReducer } from '../counterAPP/CounterStore/counter.reducer';
import { counterState } from '../counterAPP/CounterStore/counter.state';

export interface AppState {
  counter: counterState;
  post: PostState;
}

export const appReducer = {
  counter: counterReducer,
  post: postReducer,
};

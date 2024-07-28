export interface Post {
  id: string;
  title: string;
  description: string;
}

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [],
};

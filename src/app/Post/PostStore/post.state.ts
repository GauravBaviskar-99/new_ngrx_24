export interface Post {
  id: number;
  title: string;
  description: string;
}

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [
    { id: 1, title: 'Sample Post 1', description: 'Description for post_1' },
    { id: 2, title: 'Sample Post 2', description: 'Description for post_2' },
    { id: 3, title: 'Sample Post 3', description: 'Description for post_3' },
    { id: 4, title: 'Sample Post 4', description: 'Description for post_4' },
    { id: 5, title: 'Sample Post 5', description: 'Description for post_5' },
    { id: 6, title: 'Sample Post 6', description: 'Description for post_6' },
  ],
};

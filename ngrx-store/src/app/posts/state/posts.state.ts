export interface Post {
  id?: number,
  title: string,
  description: string
}

export interface PostsState {
  posts: Post[]
}

export const initialState: PostsState = {
  posts: [
    { id: 1, title: "Sample", description: "Sample Description" }
  ]
}

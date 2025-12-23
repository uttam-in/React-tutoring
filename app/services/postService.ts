import axios from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type CreatePostDto = Omit<Post, 'id'>;
export type UpdatePostDto = Partial<CreatePostDto>;

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// GET all posts
export async function getPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(API_URL);
  return response.data;
}

// GET single post by ID
export async function getPostById(id: number): Promise<Post> {
  const response = await axios.get<Post>(`${API_URL}/${id}`);
  return response.data;
}

// POST create new post
export async function createPost(post: CreatePostDto): Promise<Post> {
  const response = await axios.post<Post>(API_URL, post);
  return response.data;
}

// PUT update entire post
export async function updatePost(id: number, post: CreatePostDto): Promise<Post> {
  const response = await axios.put<Post>(`${API_URL}/${id}`, post);
  return response.data;
}

// PATCH partial update
export async function patchPost(id: number, post: UpdatePostDto): Promise<Post> {
  const response = await axios.patch<Post>(`${API_URL}/${id}`, post);
  return response.data;
}

// DELETE post
export async function deletePost(id: number): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}

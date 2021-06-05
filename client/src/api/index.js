import axios from 'axios';

const url = 'localhost:3000/blogs';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
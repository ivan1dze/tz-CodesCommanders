import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Определяем интерфейс для постов
interface Post {
    id: number;
    title: string;
    body: string;
}

// Используем массив постов как начальное состояние
const initialState: Post[] = [];

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data as Post[];
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export default postsSlice.reducer;

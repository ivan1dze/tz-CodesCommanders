import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
    user: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export const fetchUserByUsername = createAsyncThunk(
    'users/fetchUserByUsername',
    async (username: string) => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users?username=${username}`
        );
        if (response.data.length > 0) {
            return response.data[0];
        } else {
            throw new Error('User not found');
        }
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    } as UserState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserByUsername.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserByUsername.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUserByUsername.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserByUsername = createAsyncThunk(
    'user/fetchUserByUsername',
    async (username: string) => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users?username=${username}`
        );
        if (response.data.length === 0) {
            throw new Error('User not found');
        }
        return response.data[0];
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        logout: (state) => null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserByUsername.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

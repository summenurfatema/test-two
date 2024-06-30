// src/features/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 open: false,
};

const sidebarSlice = createSlice({
 name: 'sidebar',
 initialState,
 reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
 },
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
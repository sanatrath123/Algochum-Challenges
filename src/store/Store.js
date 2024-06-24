import { configureStore } from "@reduxjs/toolkit";
import Todoreduser from "./TodoSlice";
export const store = configureStore({
    reducer: {
        todo: Todoreduser
    },
  })
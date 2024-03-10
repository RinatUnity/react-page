import words from "./words";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        "words":words
    }
})
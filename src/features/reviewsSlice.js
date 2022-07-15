import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/api/";

const initialState = {
  reviews: [],
  addReviewStatus: "",
   addReviewError: "",
   getReviewsStatus: "",
   getReviewsError: "",

};

export const reviewsAdd = createAsyncThunk(
  "reviews/reviewsAdd",
  async (review, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseURL + "create", review);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async ( {rejectWithValue }) => {
    try {
      const response = await axios.get(baseURL + "reviews");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);

    }
  }
);



const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [reviewsAdd.pending]: (state, action) => {
      return {
        ...state,
        addReviewStatus: "pending",
        addReviewError: "",
        getReviewsStatus: "",
        getReviewsError: "",

      };
    },
    [reviewsAdd.fulfilled]: (state, action) => {
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
        addReviewStatus: "success",
                addReviewError: "",
                getReviewsStatus: "",
                getReviewsError: "",

      };
    },
    [reviewsAdd.rejected]: (state, action) => {
      return {
        ...state,
        addReviewStatus: "rejected",
        addReviewError: action.payload,
         getReviewsStatus: "",
               getReviewsError: "",

      };
    },
    [getReviews.pending]: (state, action) => {
      return {
        ...state,
        addReviewStatus: "",
        addReviewError: "",
        getReviewStatus: "pending",
        getReviewError: "",

      };
    },
    [getReviews.fulfilled]: (state, action) => {
      return {
        ...state,
        reviews: action.payload,
        addReviewStatus: "",
        addReviewError: "",
        getReviewsStatus: "success",
        getReviewsError: "",

      };
    },
    [getReviews.rejected]: (state, action) => {
      return {
        ...state,
        addReviewStatus: "",
        addReviewError: "",
        getReviewsStatus: "rejected",
        getReviewsError: action.payload,
 };
    },
  },
});


export default reviewsSlice.reducer;

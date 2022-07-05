import { useDispatch, useSelector } from "react-redux";
import { reviewsAdd } from "../features/reviewsSlice";
import { Button, Alert, CircularProgress } from "@mui/material";
import "../App.css";

const AddReview = ({ review, setReview }) => {
  const dispatch = useDispatch();
    const reviewsState = useSelector((state) => state.reviewsState);

  const handleSubmit = (e) => {
    e.preventDefault();

      const newReview = {
        ...review,
      };

      dispatch(reviewsAdd(newReview));

    setReview({
      title: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Make a review"
          required={true}
          value={review.title}
          onChange={(e) => setReview({ ...review, title: e.target.value })}
        />


        <br />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fontFamily: "'Abel', 'sansSerif'",
          }}
        >
          {reviewsState.addReviewStatus === "pending" }
            {/*<CircularProgress size={24} color="secondary" />*/}

            Make a Review
        </Button>
        {reviewsState.addReviewStatus === "rejected" ? (
          <Alert severity="error">{reviewsState.addReviewError}</Alert>
        ) : null}
        {reviewsState.addReviewStatus === "success" ? (
          <Alert severity="success">Your review has been made...</Alert>
        ) : null}

      </form>
    </>
  );
};

export default AddReview;

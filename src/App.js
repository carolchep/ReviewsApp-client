import { useState } from "react";
import AddReview from "./components/AddReview";
import ListReviews from "./components/ListReviews";

import "./App.css";
const App = () => {
  const [review, setReview] = useState({
    title: " ",

  });


  return (
    <div className="App">
      <h2>Reviews App</h2>
      <AddReview review={review} setReview={setReview} />
      <ListReviews  />
    </div>
  );
};

export default App;

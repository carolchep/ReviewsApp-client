import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

import {  getReviews} from "../features/reviewsSlice";
import "../App.css";
import {CircularProgress, Card, Link, Box, Typography, Modal} from "@mui/material";

const ListReviews = ({ setReview }) => {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.reviewsState);
  const { reviews } = reviewsState;

  //table
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const columns = [
        { field: '_id', headerName: 'ID', width: 70,
        },
        { field: 'title', headerName: 'Review', width: 600 },

        {
            field: 'createdAt',
            headerName: 'Created_at',
            description: 'This column has a value getter and is not sortable.',
            width: 200
        },
        {
            field: 'updatedAt',
            headerName: 'updated_at',
            description: 'This column has a value getter and is not sortable.',
            width: 200
        },

    ];





console.log(reviews)
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);



  return (
    <div >
      <h2> You have {reviews && reviews.length} reviews </h2>
      {reviewsState.getReviewsStatus === "pending" ? <CircularProgress /> : null}

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={reviews}
            getRowId={(row) => row._id}
            columns={columns}
            pageSize={4}
            rowsPerPageOptions={[5]}
            onCellClick={handleOpen}

        />

          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box >
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
              </Box>
          </Modal>
      </div>

    </div>
  );
};

export default ListReviews;

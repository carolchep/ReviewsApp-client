import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import {getReviews} from "../features/reviewsSlice";
import "../App.css";
import {Box, CircularProgress} from "@mui/material";

const ListReviews = () => {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.reviewsState);
  const { reviews } = reviewsState;



const handleOpen=(rowData)=>{

    const{ _id,title}=rowData.row
    console.log({_id}, {title})
   alert(_id)

}


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
      {reviewsState.getReviewsStatus === "pending" ? <CircularProgress /> : null}

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={reviews}
            getRowId={(row) => row._id}
            columns={columns}
            pageSize={4}
            rowsPerPageOptions={[5]}
            // onCellClick={handleOpen}

        />


      </div>

    </div>
  );
};

export default ListReviews;

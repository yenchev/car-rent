import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const LoadingMessage = ({ loading }) => {
  return (
    <div className="flex items-center justify-center w-[90%] mx-auto my-16">
      {loading && (
        <Grid container wrap="nowrap">
          {Array.from(new Array(3)).map((_, index) => (
            <Box key={index} sx={{ width: "90%", marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width="100%" height={118} />
              <Box sx={{ pr: 2 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          ))}
        </Grid>
      )}
    </div>
  );
};

LoadingMessage.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingMessage;

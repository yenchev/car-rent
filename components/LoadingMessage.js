import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const LoadingMessage = ({ loading }) => {
  return (
    <div className="flex items-center justify-center w-[50%] mx-auto my-16">
      {loading && (
        <Grid container wrap="nowrap">
          {Array.from(new Array(3)).map((_, index) => (
            <Box key={index} sx={{ width: "100%", marginRight: 0.5, my: 5 }}>
              <Skeleton
                variant="rectangular"
                width="70%"
                height={118}
                sx={{ backgroundColor: "blue" }}
              />
              <Box sx={{ pr: 2 }}>
                <Skeleton width="70%" sx={{ backgroundColor: "blue" }} />
                <Skeleton width="70%" sx={{ backgroundColor: "blue" }} />
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

import React from "react";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { LinearProgress, CircularProgress } from "@material-ui/core";
// import Stack from "@material-ui/core/Stack";
export default function ProgressMUI() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2>Progress in Material UI</h2>
          <CircularProgress color="secondary" />
          <CircularProgress variant="determinate" value={25} />
          <h4>User defined circular progress </h4>
          <CircularProgress variant="determinate" value={progress} />
          <h4>disable_Shrink circular progress </h4>
          <CircularProgress disableShrink />
          <h4>Circular with label</h4>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              color="secondary"
              variant="determinate"
              value={progress}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption">{progress}% </Typography>
            </Box>
          </Box>
          <h4>Linear Progress Bar</h4>
          <Box
            // size="medium"
            sx={{
              position: "relative",
              height: "20vh",
            }}
          >
            <Box
              bgcolor="primary"
              sx={{
                top: "0%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                width: "50%",
              }}
            >
              {/* <Stack spacing={2}> */}
              <LinearProgress />
              <LinearProgress color="secondary" />

              <LinearProgress color="primary" />
              <LinearProgress color="secondary" />
              {/* </Stack> */}
            </Box>
          </Box>
        </header>
      </div>
    </div>
  );
}

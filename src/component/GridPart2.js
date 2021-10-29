import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
export default function GridPart2() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Grid in material UI</h2>
        <Box
          alignItem="center"
          sx={{
            width: "100%",
            height: 400,
            backgroundColor: "primary.dark",
            margin: "0 auto",
          }}
        >
          <Grid container spacing={2} px={2} height="100%">
            <Grid item xs={8} md ={4}>
              <Paper
                sx={{
                  padding: "90px",
                  backgroundColor: "brown",
                }}
              >
                xs=8
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>xs=4</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>xs=4</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper>xs=8</Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

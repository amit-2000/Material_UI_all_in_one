import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
export default function GridMUI() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2>Grid in Material UI</h2>
          <Grid
            container
            // spacing={1}
            // direction="row-reverse"
            mx="auto"
            maxWidth="95%"
            // height="50vh"
            // justifyContent="center"
            // alignItems="center"
            // bgcolor="secondary.main"
          >
            {/* Total is 12  so 12/4 = 3 */}
            <Grid item lg={6} md={4} sm={6} xs={12}>
              <Box bgcolor="yellow" p={5} textAlign="center">
                1
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box bgcolor="green" p={5} textAlign="center">
                2
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box bgcolor="red" p={5} textAlign="center">
                3
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box bgcolor="blue" p={5} textAlign="center">
                4
              </Box>
            </Grid>
          </Grid>

          <Grid mt={2} sx={{ backgroundColor: "primary.dark" }}>
            <Typography variant="h7" color="yellow">
              {"Grid > Grid container > Grid item"}
            </Typography>
          </Grid>
          <Grid mt={2} sx={{ backgroundColor: "primary.dark" }}>
            <Typography variant="h7" color="yellow">
              {"__Nested Grid__"}
            </Typography>
          </Grid>







          
          <Grid
            container
            // spacing={1}
            // direction="row-reverse"
            mx="auto"
            maxWidth="95%"
            // height="50vh"
            // justifyContent="center"
            // mignItems="center"
            // bgcolor="secondary.main"
          >
            {/* Total is 12  so 12/4 = 3 */}
            <Grid container>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box bgcolor="yellow" p={5} textAlign="center">
                  1
                </Box>
                <Grid container>
                  <Grid item>
                    <Box bgcolor="red" p={5} textAlign="center">
                      1
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box bgcolor="blue" p={5} textAlign="center">
                      2
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box bgcolor="green" p={5} textAlign="center">
                      3
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box bgcolor="pink" p={5} textAlign="center">
                      4
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box bgcolor="green" p={5} textAlign="center">
                2
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box bgcolor="red" p={5} textAlign="center">
                3
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box bgcolor="blue" p={5} textAlign="center">
                4
              </Box>
            </Grid>
          </Grid>
        </header>
      </div>
    </div>
  );
}

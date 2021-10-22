import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
export default function ContainerMUI() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2>Container in Material UI</h2>

          <Container maxWidth="sm">
            <Typography
              component="div"
              sx={{
                backgroundColor: "skyblue",
                height: "50vh",
                margin: "0",
              }}
            >
              Container
            </Typography>
          </Container>
          <Container maxWidth="lg">
            <Typography
              component="div"
              // mt={2}
              sx={{
                backgroundColor: "orangered",
                height: "50vh",
              }}
            >
              Container
            </Typography>
          </Container>
        </header>
      </div>
    </div>
  );
}

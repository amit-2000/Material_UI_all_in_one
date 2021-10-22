import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
export default function BoxMUI() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Box in Material UI</h2>
        <p>Box with font ,font style</p>
        <Box color="red">This is a Box component</Box>
        <h4>Alignment</h4>
        <Box textAlign="center" bgcolor="red">
          Center
        </Box>
        <Box
          textAlign="left"
          bgcolor="orangered"
          style={{ paddingLeft: "40px" }}
        >
          left
        </Box>
        <Box
          textAlign="right"
          bgcolor="orange"
          style={{ paddingRight: "40px" }}
        >
          Right
        </Box>
        <h4>__Font weight__</h4>
        <Box fontWeight="fontWeightBold">fontWeightBold</Box>
        <Box fontWeight={500}>Font-Weight-500</Box>

        <h4>__Font size__</h4>
        <Box fontSize={24}>fontSize={24} </Box>

        <h4>__Font style__</h4>
        <Box fontStyle="italic">Font style Italic</Box>
        <h2>__Color__</h2>
        <h4>__Color on Text__(color)</h4>
        <Box color="primary.main">Color Primary</Box>
        <Box color="secondary.main">Color Secondary</Box>
        <Box color="error.main">Color Error</Box>
        <Box color="warning.main">Color warning </Box>
        <Box color="info.main">Color Info </Box>
        <Box color="success.main">Color success </Box>
        <h4>__Back-ground-color__(bgcolor)</h4>
        <Box bgcolor="primary.main">Color Primary</Box>
        <Box bgcolor="secondary.main">Color Secondary</Box>
        <Box bgcolor="error.main">Color Error</Box>
        <Box bgcolor="warning.main">Color warning </Box>
        <Box bgcolor="info.main">Color Info </Box>
        <Box bgcolor="success.main">Color success </Box>
        <h2>__Margin__</h2>
        <Box bgcolor="orangered" m={10}>
          Margin 10 only m; top right bottom left
        </Box>
        <Box bgcolor="primary.main" mt={10}>
          Margin top mt=10
        </Box>
        <Box bgcolor="secondary.main" mb={10}>
          Margin botton mb =10
        </Box>
        <Box bgcolor="secondary.main" ml={10}>
          Margin left ml =10
        </Box>
        <Box bgcolor="secondary.main" mr={10}>
          Margin right mr =10
        </Box>
        <Box bgcolor="secondary.main" mx={10}>
          Margin on left-right mx =10
        </Box>
        <Box bgcolor="secondary.main" my={10}>
          Margin Top-Bottom my =10
        </Box>
        <h2>__Padding__</h2>
        <Box bgcolor="orangered" p={10}>
          padding 10 only p; top right bottom left
        </Box>
        <Box bgcolor="primary.main" pt={10}>
          padding top pt=10
        </Box>
        <Box bgcolor="secondary.main" pb={10}>
          padding botton pb =10
        </Box>
        <Box bgcolor="secondary.main" pl={10}>
          padding left pl =10
        </Box>
        <Box bgcolor="secondary.main" pr={10}>
          padding right pr =10
        </Box>
        <Box bgcolor="secondary.main" px={10}>
          padding on left-right px =10
        </Box>
        <Box bgcolor="secondary.main" py={10}>
          padding Top-Bottom py =10
        </Box>

        <h2>__Width__</h2>
        <Box width={1 / 4} bgcolor="red">
          Widht 1/4 (100%/4)
        </Box>
        <Box width={1} bgcolor="info.main">
          width 100%
        </Box>
        <Box width="50%" bgcolor="error.main">
          widht 50%
        </Box>
        <Box width={"100%"} bgcolor="green">
          Width 500px
        </Box>
        <h2>__Border__ </h2>
        <Box border={1}>Border all</Box>
        <Box borderLeft={1}>Border left</Box>
        <Box borderTop={1}>Border top</Box>
        <Box borderRight={1}>Border Right</Box>
        <Box borderRight={1}>Border Right</Box>
        <Box borderBottom={1}>Border Right</Box>
        <h4>__Border remove__</h4>
        <Box border={1} borderBottom={0}>
          Border all except bottom
        </Box>
        <h4>__Border Color__</h4>
        <Box borderColor="primary.main" borderRadius="10px" border={1}>
          Border with color
        </Box>
        <h4>__Border Radius__</h4>
        <Box border={1} borderRadius="50%" width={200} height={200}></Box>
        <Box border={1} borderRadius="16%" width={200} height={200}></Box>
      </header>
    </div>
  );
}

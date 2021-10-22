import "../App.css";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";

function ButtonMUI() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Normal Button</h2>
        <Button variant="outlined">Click here</Button>
        <Button size="large" variant="contained" color="secondary">
          Secondary
        </Button>
        <Button href="http://google.com" color="primary">
          Link in button
        </Button>
        <Button small disabled variant="contained">
          Disabled
        </Button>
        {/*  */}
        <h2>Button with ICON</h2>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete (startIcon)
        </Button>
        <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
          Delete (EndIcon)
        </Button>
        <h2>Icon Button</h2>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <h2>Custom Button</h2>
        <Button
          onClick={() => alert("Handling Event on Button click")}
          color="secondary"
          style={{
            backgroundColor: "black",
            // color: "#fff",

            borderRadius: "10px",
            padding: "10px",
          }}
        >
          Custom
        </Button>
        <h2>Button Group (Horizontal)</h2>
        <ButtonGroup
          style={{ paddig: "50px" }}
          variant="contained"
          color="primary"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <h2>Button Group (Verticle)</h2>
        <ButtonGroup
          orientation="vertical"
          style={{ paddig: "50px" }}
          variant="contained"
          color="primary"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <h2>Floating Action Button</h2>
        <Fab color="primary">
          <AddIcon />
        </Fab>
        <Fab color="secondary">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon />
          Navigate
        </Fab>
        <Fab disabled>
          <FavoriteIcon />
        </Fab>
      </header>
    </div>
  );
}

export default ButtonMUI;

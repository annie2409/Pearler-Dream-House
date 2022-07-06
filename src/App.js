import "./App.css";
import { DataForm } from "./components/DataForm";
import { Container, Grid } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid columns={1} divided>
          <Grid.Row stretched>
            <Grid.Column width={16}>
              <DataForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

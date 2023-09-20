import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'

function BasicGrid() {
  return (
    <Container spacing={5}>
      <Grid container direction="row">
        <Grid item xs={3}>
          <Paper>
            <p>The King&apos;s</p>
            <p>Restaurant</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <p>Dashboard</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <p>Revenue Generated</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <p>Recent Transactions</p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BasicGrid

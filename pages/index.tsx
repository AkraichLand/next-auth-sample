import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Auth Sample</title>
      </Head>
      <Grid container justifyContent="center">
        <Typography variant="h2" component="h2">
          Welcome On Board
        </Typography>
      </Grid>
    </div>
  );
};

export default Home;

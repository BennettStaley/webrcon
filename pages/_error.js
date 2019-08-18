import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { NextSeo } from 'next-seo';

const useStyles = makeStyles({
  canvas: {
    position: 'fixed',
    display: 'block',
  },
  text: {
    margin: '128px auto',
    color: 'white',
  },
});

export const ErrorPage = () => {
  const styles = useStyles();

  return (
    <>
      <NextSeo title="AREA - UNKNOWN" description="You've gone too far..." />
      <Grid item align="center" xs={12}>
        <Typography className={styles.text} variant="h2">
          ERROR: (404)
        </Typography>
      </Grid>
    </>
  );
};

export default ErrorPage;

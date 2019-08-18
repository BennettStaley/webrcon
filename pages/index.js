import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { NextSeo } from 'next-seo';

const useStyles = makeStyles({
  text: {
    margin: '128px auto',
    color: 'white',
  },
});

export const Index = () => {
  const styles = useStyles();

  return (
    <>
      <NextSeo title="Spektre - Home" description="Spektre's Homepage" />
      <Grid align="center" xs={12}>
        <Typography className={styles.text} variant="h2">
          WebRcon
        </Typography>
      </Grid>
    </>
  );
};

export default Index;

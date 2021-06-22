import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DeviceTable from "../components/devicetable";
import ClippedDrawer from "../components/clippeddrawer";
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      // flexGrow: 1,
    },
  }),
);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ClippedDrawer>
        <DeviceTable />
      </ClippedDrawer>
      {/* <Typography>MyFooter</Typography> */}
    </div>
  );
}
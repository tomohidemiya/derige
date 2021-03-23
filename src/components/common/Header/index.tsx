import React, { useMemo } from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { CheckCircle, OfflineBolt } from "@material-ui/icons";
import { atom, useAtom } from "jotai";
import { jotai as settingsJotai } from "../../../modules/settings";
import * as api from "../../../modules/api";
import { green, red } from "@material-ui/core/colors";

const Header = () => {
  const [nodeUrl] = useAtom(settingsJotai.baseNodeUrl);

  const [isOk] = useAtom(
    atom((get) => get(api.healthCheckResult).status === 200)
  );
  const classes = useStyles();
  const nodeBtnIcon = useMemo(() => {
    if (isOk) {
      return (
        <CheckCircle
          className={clsx(classes.nodeBtnIcon, classes.nodeBtnIconSuccess)}
        />
      );
    } else {
      return (
        <OfflineBolt
          className={clsx(classes.nodeBtnIcon, classes.nodeBtnIconFailure)}
        />
      );
    }
  }, [isOk]);

  return (
    <AppBar position="absolute" color="default" className={classes.root}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          でりげツール
        </Typography>
        <Button color="inherit" className={classes.nodeBtn}>
          {nodeBtnIcon}
          {nodeUrl}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  },
  nodeBtn: {
    textTransform: "none",
  },
  nodeBtnIcon: {
    fontSize: "1.4rem",
    paddingRight: "8px",
  },
  nodeBtnIconSuccess: {
    color: green[500],
  },
  nodeBtnIconFailure: {
    color: red[500],
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

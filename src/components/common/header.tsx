import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";
import { useAtom } from "jotai";
import { jotai as settingsJotai } from "../../modules/settings";

const Header = () => {
  const [nodeUrl] = useAtom(settingsJotai.baseNodeUrl);
  const classes = useStyles();
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
          <AccessAlarm className={classes.nodeBtnIcon} />
          {nodeUrl}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nodeBtn: {
    textTransform: "none",
  },
  nodeBtnIcon: {
    
    paddingRight: '4px',
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

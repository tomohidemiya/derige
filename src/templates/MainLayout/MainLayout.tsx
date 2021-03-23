import React from 'react';
import {makeStyles} from '@material-ui/core';
import {renderRoutes, RouteConfigComponentProps} from 'react-router-config';
import Header from 'components/common/Header';

type Props = RouteConfigComponentProps<any>;

const MainLayout = (props: Props) => {
  const {route} = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{renderRoutes(route!.routes)}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    paddingTop: 64,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));
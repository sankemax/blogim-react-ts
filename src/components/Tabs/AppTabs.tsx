import React, { Dispatch } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabState, TabAction } from '../../reducers/tabsReducer';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AppTabs({ tabState, dispatcher }: { tabState: TabState, dispatcher: Dispatch<TabAction> }) {
  const classes = useStyles();

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    dispatcher({ type: 'SWITCH_TAB', moveTo: newValue });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={tabState.tabSelected} onChange={handleChange} aria-label="tabs">
          <Tab label="פוסטים" {...a11yProps(0)} />
          <Tab label="בלוגים" {...a11yProps(1)} />
          <Tab label="אודות" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}

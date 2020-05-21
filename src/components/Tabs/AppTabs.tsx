import React, { Dispatch } from 'react';
import { makeStyles, Theme, withStyles, createStyles, } from '@material-ui/core/styles';
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
    boxShadow: 'none',
    color: '#1E68A6',
    backgroundColor: 'whitesmoke',
  },
}));

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: 'bold',
      marginRight: theme.spacing(4),
      fontFamily: ['Alef', 'sans-serif',].join(','),
      '&:hover': {
        color: '#1E68A6',
        opacity: 1,
      },
      '&$selected': {
        color: '#1E68A6',
      },
      '&:focus': {
        color: '#1E68A6',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

export default function AppTabs({ tabState, dispatcher }: { tabState: TabState, dispatcher: Dispatch<TabAction> }) {
  const classes = useStyles();

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    dispatcher({ type: 'SWITCH_TAB', moveTo: newValue });
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Tabs
        value={tabState.tabSelected}
        indicatorColor="primary"
        onChange={handleChange}
        aria-label="tabs"
      >
        <AntTab label="פוסטים" {...a11yProps(0)} />
        <AntTab label="בלוגים" {...a11yProps(1)} />
        <AntTab label="אודות" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
  );
}

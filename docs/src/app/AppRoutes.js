import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './gh-pages/Master';
import Home from './gh-pages/pages/Home';

import RequiredKnowledge from './gh-pages/pages/get-started/RequiredKnowledge';
import Installation from './gh-pages/pages/get-started/Installation';
import Usage from './gh-pages/pages/get-started/Usage';
import Examples from './gh-pages/pages/get-started/Examples';
import ServerRendering from './gh-pages/pages/get-started/ServerRendering';

import Colors from './gh-pages/pages/customization/Colors';
import Themes from './gh-pages/pages/customization/Themes';
import Styles from './gh-pages/pages/customization/Styles';

import AppBarPage from './gh-pages/pages/components/AppBar/Page';
import AutoCompletePage from './gh-pages/pages/components/AutoComplete/Page';
import AvatarPage from './gh-pages/pages/components/Avatar/Page';
import BadgePage from './gh-pages/pages/components/Badge/Page';
import BottomNavigationPage from './gh-pages/pages/components/BottomNavigation/Page';
import CardPage from './gh-pages/pages/components/Card/Page';
import ChipPage from './gh-pages/pages/components/Chip/Page';
import CircularProgressPage from './gh-pages/pages/components/CircularProgress/Page';
import CheckboxPage from './gh-pages/pages/components/Checkbox/Page';
import DatePicker from './gh-pages/pages/components/DatePicker/Page';
import DialogPage from './gh-pages/pages/components/Dialog/Page';
import DividerPage from './gh-pages/pages/components/Divider/Page';
import DrawerPage from './gh-pages/pages/components/Drawer/Page';
import DropDownMenuPage from './gh-pages/pages/components/DropDownMenu/Page';
import FlatButtonPage from './gh-pages/pages/components/FlatButton/Page';
import FloatingActionButtonPage from './gh-pages/pages/components/FloatingActionButton/Page';
import FontIconPage from './gh-pages/pages/components/FontIcon/Page';
import GridListPage from './gh-pages/pages/components/GridList/Page';
import IconButtonPage from './gh-pages/pages/components/IconButton/Page';
import IconMenuPage from './gh-pages/pages/components/IconMenu/Page';
import ListPage from './gh-pages/pages/components/List/Page';
import LinearProgressPage from './gh-pages/pages/components/LinearProgress/Page';
import PaperPage from './gh-pages/pages/components/Paper/Page';
import MenuPage from './gh-pages/pages/components/Menu/Page';
import PopoverPage from './gh-pages/pages/components/Popover/Page';
import RaisedButtonPage from './gh-pages/pages/components/RaisedButton/Page';
import RefreshIndicatorPage from './gh-pages/pages/components/RefreshIndicator/Page';
import RadioButtonPage from './gh-pages/pages/components/RadioButton/Page';
import SelectField from './gh-pages/pages/components/SelectField/Page';
import SliderPage from './gh-pages/pages/components/Slider/Page';
import SnackbarPage from './gh-pages/pages/components/Snackbar/Page';
import SvgIconPage from './gh-pages/pages/components/SvgIcon/Page';
import SubheaderPage from './gh-pages/pages/components/Subheader/Page';
import TablePage from './gh-pages/pages/components/Table/Page';
import TabsPage from './gh-pages/pages/components/Tabs/Page';
import TextFieldPage from './gh-pages/pages/components/TextField/Page';
import TimePickerPage from './gh-pages/pages/components/TimePicker/Page';
import TogglePage from './gh-pages/pages/components/Toggle/Page';
import ToolbarPage from './gh-pages/pages/components/Toolbar/Page';

import Community from './gh-pages/pages/discover-more/Community';
import Contributing from './gh-pages/pages/discover-more/Contributing';
import Showcase from './gh-pages/pages/discover-more/Showcase';
import RelatedProjects from './gh-pages/pages/discover-more/RelatedProjects';

import StepperPage from './gh-pages/pages/components/Stepper/Page';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />

    <Redirect from="get-started" to="/get-started/required-knowledge" />
    <Route path="get-started">
      <Route path="required-knowledge" component={RequiredKnowledge} />
      <Route path="installation" component={Installation} />
      <Route path="usage" component={Usage} />
      <Route path="examples" component={Examples} />
      <Route path="server-rendering" component={ServerRendering} />
    </Route>

    <Redirect from="customization" to="/customization/themes" />
    <Route path="customization">
      <Route path="colors" component={Colors} />
      <Route path="themes" component={Themes} />
      <Route path="styles" component={Styles} />
    </Route>

    <Redirect from="components" to="/components/app-bar" />
    <Route path="components">
      <Route path="app-bar" component={AppBarPage} />
      <Route path="auto-complete" component={AutoCompletePage} />
      <Route path="avatar" component={AvatarPage} />
      <Route path="bottom-navigation" component={BottomNavigationPage} />
      <Route path="badge" component={BadgePage} />
      <Route path="card" component={CardPage} />
      <Route path="chip" component={ChipPage} />
      <Route path="circular-progress" component={CircularProgressPage} />
      <Route path="checkbox" component={CheckboxPage} />
      <Route path="date-picker" component={DatePicker} />
      <Route path="dialog" component={DialogPage} />
      <Route path="divider" component={DividerPage} />
      <Route path="drawer" component={DrawerPage} />
      <Route path="dropdown-menu" component={DropDownMenuPage} />
      <Route path="font-icon" component={FontIconPage} />
      <Route path="flat-button" component={FlatButtonPage} />
      <Route path="floating-action-button" component={FloatingActionButtonPage} />
      <Route path="grid-list" component={GridListPage} />
      <Route path="icon-button" component={IconButtonPage} />
      <Route path="icon-menu" component={IconMenuPage} />
      <Route path="list" component={ListPage} />
      <Route path="linear-progress" component={LinearProgressPage} />
      <Route path="paper" component={PaperPage} />
      <Route path="menu" component={MenuPage} />
      <Route path="popover" component={PopoverPage} />
      <Route path="refresh-indicator" component={RefreshIndicatorPage} />
      <Route path="radio-button" component={RadioButtonPage} />
      <Route path="raised-button" component={RaisedButtonPage} />
      <Route path="select-field" component={SelectField} />
      <Route path="svg-icon" component={SvgIconPage} />
      <Route path="slider" component={SliderPage} />
      <Route path="snackbar" component={SnackbarPage} />
      <Route path="stepper" component={StepperPage} />
      <Route path="subheader" component={SubheaderPage} />
      <Route path="table" component={TablePage} />
      <Route path="tabs" component={TabsPage} />
      <Route path="text-field" component={TextFieldPage} />
      <Route path="time-picker" component={TimePickerPage} />
      <Route path="toggle" component={TogglePage} />
      <Route path="toolbar" component={ToolbarPage} />
    </Route>
    
    <Redirect from="discover-more" to="/discover-more/community" />
    <Route path="discover-more">
      <Route path="community" component={Community} />
      <Route path="contributing" component={Contributing} />
      <Route path="showcase" component={Showcase} />
      <Route path="related-projects" component={RelatedProjects} />
    </Route>
  </Route>
);

export default AppRoutes;

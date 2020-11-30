import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial180083Navigator from '../features/Tutorial180083/navigator';
import NotificationList180055Navigator from '../features/NotificationList180055/navigator';
import Settings180054Navigator from '../features/Settings180054/navigator';
import Settings180046Navigator from '../features/Settings180046/navigator';
import UserProfile180044Navigator from '../features/UserProfile180044/navigator';
import CalendarView2179963Navigator from '../features/CalendarView2179963/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial180083: { screen: Tutorial180083Navigator },
NotificationList180055: { screen: NotificationList180055Navigator },
Settings180054: { screen: Settings180054Navigator },
Settings180046: { screen: Settings180046Navigator },
UserProfile180044: { screen: UserProfile180044Navigator },
CalendarView2179963: { screen: CalendarView2179963Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

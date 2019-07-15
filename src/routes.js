import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Main from './pages/Main';

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Main,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#8a05be',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;

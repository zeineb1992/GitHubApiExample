
import { createAppContainer, createStackNavigator } from 'react-navigation'
import SearchScreen from './src/containers/SearchScreen';
import ListScreen from './src/containers/ListScreen';
import Details from './src/containers/Details';

const RootStack = createStackNavigator({

  SearchScreen: {
    screen: SearchScreen,
  },
  ListScreen: {
    screen: ListScreen,
  },
  Details: {
    screen: Details,
  },

},
  {
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: "#111111" },
      headerTitleStyle: {
        color: "#111111",
        flex: 1,
        textAlign: "center",
        fontSize: 16
      },
      headerTintColor: "#111111"
    }
  });

const App = createAppContainer(RootStack);

export default App;


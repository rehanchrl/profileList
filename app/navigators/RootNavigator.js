import { StackNavigator } from "react-navigation";

import ProfileList from "../Profile/screens/ProfileList";

const RootNavigator = StackNavigator({
  ProfileList: {
    screen: ProfileList,
    navigationOptions: {
      title: " ",
      headerTransparent: true
    }
  }
});

export default RootNavigator;

import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>Events first page!</Text>
      <Button
        onPress={() => {
          navigation.navigate("EventsSecond");
        }}
        title="Second Screen"
      ></Button>

<Button
        onPress={() => {
          navigation.navigate("EventsThirdScreen");
        }}
        title="EventsThirdScreen"
      ></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>Events second page!</Text>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "azure",
      }}
    >
      <Text>EventsThirdScreenpage!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen}></Stack.Screen>
      <Stack.Screen
        name="EventsSecond"
        component={EventsSecondScreen}
      ></Stack.Screen>
          <Stack.Screen
        name="EventsThirdScreen"
        component={EventsThirdScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
import * as React from "react";
import { Text, SafeAreaView,ScrollView,StyleSheet } from "react-native";
import {List,Card,Paragraph,Title} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";


function HomeScreen() {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView>
      <Text>BMW GS1300 Launch</Text>

      <Card>
      <Card.Cover
        source={{ uri: "https://cdn-fastly.motorcycle.com/media/2023/09/22/11812069/2024-bmw-r-1300-gs-photos-leaked.jpg" }}
      />
      <Card.Content>
        <Title>Introducing the All-New BMW GS1300</Title>
        <Paragraph>
          We are thrilled to unveil the latest addition to the BMW family - the brand-new GS1300. Prepare to embark on a journey like never before with this powerful and versatile adventure motorcycle.
        </Paragraph>
        <Paragraph>
          Designed to conquer both the asphalt and the off-road trails, the GS1300 combines cutting-edge technology with the legendary GS heritage, promising an unparalleled riding experience.
        </Paragraph>
        <Paragraph>
          Join us on 28 Sept 2023 for the grand reveal event where you'll get an up-close look at the GS1300, discover its remarkable features, and be the first to witness the future of adventure riding.
        </Paragraph>
      </Card.Content>
    </Card>

    <List.Section title="Detailed features of the motorcycle">
    <List.Accordion
      title="Specifications"
      left={props => <List.Icon {...props} icon="folder" />}
    >
      <List.Item title="Engine Type: Inline-4" />
      <List.Item title="Displacement: 1300cc" />
      <List.Item title="Max Power: 160hp" />
      <List.Item title="Max Torque: 140Nm" />
      <List.Item title="Transmission: 6-speed" />
      <List.Item title="Fuel System: Electronic Fuel Injection (EFI)" />
      <List.Item title="Suspension: Front - Upside-Down Forks, Rear - Monoshock" />
      <List.Item title="Brakes: Front and Rear Disc Brakes with ABS" />
      <List.Item title="Tires: Dual-Purpose, Tubeless" />
      <List.Item title="Fuel Capacity: 20 liters" />
      <List.Item title="Weight: 220 kg" />
      <List.Item title="Seat Height: 850mm" />
    </List.Accordion>



    </List.Section>

      </ScrollView>
      




    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function HomeStack(){

return(

    <Stack.Navigator>
        <Stack.Screen name='Welcome' component={HomeScreen}/>
    </Stack.Navigator>

)

}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5, // Android shadow
        shadowColor: 'rgba(0,0,0,0.2)', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        margin: 10,
      },
      cardHeader: {
        backgroundColor: '#3498db',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
      },
      cardTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      cardContent: {
        padding: 15,
      }
  });
  
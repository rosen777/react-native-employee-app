import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Constants } from "expo-constants";
import { Card, FAB } from "react-native-paper";


const Home = () =>  {
    const data = [
      {
        id: 1,
        name: "mukesh",
        position: "web dev",
      },
      {
        id: 2,
        name: "mukesh",
        position: "web dev",
      },
      {
        id: 3,
        name: "ramesh",
        position: "ML expert",
      },
      {
        id: 4,
        name: "suresh",
        position: "web dev",
      },
      {
        id: 5,
        name: "suresh",
        position: "web dev",
      },
      {
        id: 6,
        name: "suresh",
        position: "web dev",
      },
      {
        id: 7,
        name: "suresh",
        position: "web dev",
      },
      {
        id: 8,
        name: "suresh",
        position: "web dev",
      },
      {
        id: 9,
        name: "suresh",
        position: "web dev",
      },
      {
        id: 10,
        name: "suresh",
        position: "web dev",
      },
      {
        id: 11,
        name: "suresh",
        position: "web dev",
      },
      {
        id: 12,
        name: "suresh",
        position: "web dev",
      },
    ];

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard} key={item.id}>
              <View style={styles.cardView}>
                <Image
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                  source={require("../assets/silhouette.jpeg")}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.position}</Text>
                </View>
              </View>
            </Card>
        );
    })


    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return renderList(item);
          }}
          keyExtractor={(item) => `${item.id}`}
        />
        <FAB
          style={styles.fab}
          small={false}
          icon="plus"
          theme={{colors: {accent: "#006aff"}}}
          onPress={() => console.log("Pressed")}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
    flexDirection: "row",
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 18,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;

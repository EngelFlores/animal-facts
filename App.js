import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import animalFactsApi from "./api/animalFactsApi";
import data from "./data/mocks";
import List from "./Components/List";
import RNPickerSelect from "react-native-picker-select";

export default function App() {
  const [list, setList] = useState();
  const [filteredList, setFilteredList] = useState();

  useEffect(() => {
    filterList();
    // getInitialData();
  }, []);

  const filterList = () => {
    const newList = data.filter(element => {
      return element.user;
    });
    setFilteredList(newList);
  };

  const getInitialData = async () => {
    try {
      const { data } = await animalFactsApi.getAll();
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const sortList = value => {
    if (value === "votes") {
      const sortedList = filteredList.sort(
        (firstElement, secondElement) =>
          secondElement.upvotes - firstElement.upvotes
      );
      return setFilteredList([...sortedList]);
    } else if (value === "user") {
      const sortedList = filteredList.sort((a, b) => {
        if (a.user.name.first < b.user.name.first) {
          return -1;
        } else if (a.user.name.first > b.user.name.first) {
          return 1;
        }
        return 0;
      });
      return setFilteredList([...sortedList]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Animal Facts</Text>
      </View>
      <View style={styles.select}>
        <Text style={styles.selectTitle}>Order By</Text>
        <View>
          <RNPickerSelect
            onValueChange={value => sortList(value)}
            items={[
              { label: "Votes", value: "votes" },
              { label: "User", value: "user" }
            ]}
          />
        </View>
      </View>
      {filteredList && <List data={filteredList}></List>}
    </View>
  );
}
const styles = StyleSheet.create({
  select: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
    marginTop:10

  },
  selectTitle: {
    marginRight: 10
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center",
    padding: 20
  },
  titleContainer: {
    backgroundColor:"gray"
  }
});

import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Row from "./Row";

export default function List(props) {
  const { data } = props;
  
  return (
    <ScrollView>
      {data.map(info => {
        return <Row key={info._id} info={info}></Row>
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontSize: 12,
    color: "black"
  }
});

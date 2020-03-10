import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Row(props) {
  const { info } = props;

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{info.text}</Text>
      <Text style={styles.subtitle}>Write By</Text>
      <View style={styles.rowLine}>
        <Text style={styles.info}>{`${info.user.name.first} ${info.user.name.last}`}</Text>
        <Text style={styles.info}>{`${info.upvotes} votes`}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    borderColor: "#D3D3D3",
    borderBottomWidth: 0,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10
  },
  rowLine:{
    display: "flex",
    flexDirection : "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold"
  },
  info: {
    fontSize: 13,
    color: "gray",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 11,
    color: "gray",
  }

});

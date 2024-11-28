import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/userAction";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  console.log(data);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <View style={styles.container}>
      <Button
        title="Get Users"
        onPress={() => {
          dispatch(getUsers());
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

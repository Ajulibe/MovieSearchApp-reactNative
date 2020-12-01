import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${result.poster_path}`,
        }}
      />
      <Text style={styles.name}>{result.title}</Text>
      <Text style={styles.rating}>
        {result.vote_average} Stars, {result.release_date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 120,
    borderRadius: 2,
    marginBottom: 3,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 3,
  },
  rating: {
    marginBottom: 30,
    color: "grey",
    fontSize: 13,
  },
});

export default ResultsDetails;

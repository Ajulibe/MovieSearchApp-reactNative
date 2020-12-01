import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import tmdb from "../api/Tmdb";
import axios from "axios";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState("");
  const [credit, setCredit] = useState("");
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    try {
      const response = await tmdb.get(
        `/movie/${id}?api_key=ed1711ea5f1a118eedc2894f7865784d&language=en-US`
      );
      // console.log(response.data.genres[0].name);

      setResult(response.data);
    } catch (error) {
      // console.log(error);
    }
  };

  const getCredit = async (id) => {
    try {
      const response = await tmdb.get(
        `/movie/${id}/credits?api_key=ed1711ea5f1a118eedc2894f7865784d&language=en-US`
      );
      console.log(response.data.cast);

      setCredit(response.data.cast);
    } catch (error) {}
  };

  // {result.genres[0].name}

  useEffect(() => {
    getResult(id);
    getCredit(id);
  }, []);

  const rateone = async () => {
    const res = await axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=ed1711ea5f1a118eedc2894f7865784d&guest_session_id=57952b448e3a3e8c6841b27d41d459ad`,
      {
        value: 2,
      }
    );
    console.log(res);
  };

  const ratetwo = async () => {
    const res = await axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=ed1711ea5f1a118eedc2894f7865784d&guest_session_id=57952b448e3a3e8c6841b27d41d459ad`,
      {
        value: 4,
      }
    );
    console.log(res);
  };

  const ratethree = async () => {
    const res = await axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=ed1711ea5f1a118eedc2894f7865784d&guest_session_id=57952b448e3a3e8c6841b27d41d459ad`,
      {
        value: 6,
      }
    );
    console.log(res);
  };

  const ratefour = async () => {
    const res = await axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=ed1711ea5f1a118eedc2894f7865784d&guest_session_id=57952b448e3a3e8c6841b27d41d459ad`,
      {
        value: 8,
      }
    );
    console.log(res);
  };

  const ratefive = async () => {
    const res = await axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=ed1711ea5f1a118eedc2894f7865784d&guest_session_id=57952b448e3a3e8c6841b27d41d459ad`,
      {
        value: 10,
      }
    );
    console.log(res.data.status_message);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          {result.title} {result.release_date}
        </Text>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${result.poster_path}`,
            }}
          />
        </View>

        <Text style={styles.rating}>Rating: {result.vote_average}</Text>

        <Text style={styles.overview}>OVERVIEW</Text>
        <Text style={styles.content}>{result.overview}</Text>

        <Text style={styles.actor}>ACTORS</Text>

        <FlatList
          data={credit}
          keyExtractor={(credit) => credit.id}
          renderItem={({ item }) => {
            // return <Image style={styles.image} source={{ uri: item }} />;
            return (
              <View style={styles.character}>
                <View style={styles.chkdiv}>
                  <Text style={styles.chk}>Character:</Text>
                  <Text>{item.character}-</Text>
                </View>
                <View style={styles.chkdiv}>
                  <Text style={styles.chk}>Real Name:</Text>
                  <Text>{item.original_name}</Text>
                </View>
              </View>
            );
          }}
        />
        <Text style={styles.feedback}>Please Send us your Feedback</Text>
        <View style={styles.stars}>
          <TouchableOpacity onPress={rateone}>
            <AntDesign name="star" size={24} color="rgba(0,0,0,0.1)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ratetwo}>
            <AntDesign name="star" size={24} color="rgba(0,0,0,0.3)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ratethree}>
            <AntDesign name="star" size={24} color="rgba(0,0,0,0.5)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ratefour}>
            <AntDesign name="star" size={24} color="rgba(0,0,0,0.8)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ratefive}>
            <AntDesign name="star" size={24} color="rgba(0,0,0)" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container2: {
  //   flex: 1,
  //   padding: 18,
  //   paddingTop: 35,
  //   backgroundColor: "#ffffff",
  // },
  // HeadStyle: {
  //   height: 50,
  //   alignContent: "center",
  //   backgroundColor: "#ffe0f0",
  // },
  // TableText: {
  //   margin: 10,
  // },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },
  image: {
    height: 200,
    width: 400,
    marginBottom: 10,
    marginTop: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 50,
  },
  overview: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
    marginBottom: 10,
  },
  rating: {
    marginBottom: 10,
    textAlign: "left",
  },
  actor: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    marginBottom: 30,
  },
  character: {
    flexDirection: "row",
    marginBottom: 20,
  },
  chk: {
    fontWeight: "bold",
  },
  chkdiv: {
    flexDirection: "row",
    marginLeft: 10,
  },
  feedback: {
    marginTop: 20,
    marginBottom: 10,
    color: "red",
  },
});

export default ResultsShowScreen;

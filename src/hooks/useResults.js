import { useEffect, useState } from "react";
import tmdb from "../api/Tmdb";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (term) => {
    try {
      console.log("clicked");
      const response = await tmdb.get(
        `search/movie?api_key=ed1711ea5f1a118eedc2894f7865784d&language=en-US&query=${term}&page=1&include_adult=false&sort_by=original_title.asc`
      );
      console.log(response.data.results[0].poster_path);

      setResults(response.data.results);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("Jurassic Park");
  }, []);

  return [searchApi, results, errorMessage];
};

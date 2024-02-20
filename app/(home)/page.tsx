"use client";

import { useEffect, useState } from "react";

export default function Tomato() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );

    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? "loading..." : JSON.stringify(movies)}</div>;
}

import React, { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    (async function () {
      fetch(url, {
        headers: {
          Authorization:
            "N9SDzwX6cRx2Nvid6Am5l9iJwfSICRjIyKoKvkjAvyE5Az4MxbInmh7e",
        },
      })
        .then((res) => res.json())
        .then((fetchedData) => setFetchedData(fetchedData));
    })();
  }, []);

  return { fetchedData };
};

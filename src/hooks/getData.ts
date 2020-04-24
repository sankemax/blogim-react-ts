import { useState, useEffect } from "react";
import axios from "axios";

import { Item } from "../components/Item/ItemType";
import { Feed } from "../components/Feed/FeedType";
import { Config } from "../config/ConfigType";

export function useGetData(
  type: Item["type"] | Feed["type"],
  limit: number,
  offset: number,
  config: Config
) {
  const [data, setData] = useState({
    elements: [],
    isFetching: true,
    error: null
  });

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${config.rssServiceBaseUrl}/${type.toLowerCase()}s?limit=${limit}&offset=${offset}`);
        setData({ elements: response.data, isFetching: false, error: null });
      } catch (err) {
        setData({ elements: [], isFetching: false, error: err.message });
      }
    }
    getData();
  }, []);

  return data;
}

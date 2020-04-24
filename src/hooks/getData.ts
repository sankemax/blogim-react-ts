import { useState, useEffect, } from "react";
import axios from "axios";

import { Item } from "../components/Item/ItemType";
import { Feed } from "../components/Feed/FeedType";
import { Config } from "../config/ConfigType";

export function useGetData(
  type: Item["type"] | Feed["type"],
  limit: number,
  offset: number,
  config: Config,
  showErrorFn: (isError: boolean) => void
) {
  const [data, setData] = useState<({ [key: string]: string, id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${config.rssServiceBaseUrl}/${type.toLowerCase()}s?limit=${limit}&offset=${offset}`);
        setData(response.data.data[`${type.toLowerCase()}s`]);
      } catch (err) {
        console.log(err)
        setError(err.message);
        showErrorFn(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [limit, offset, config, type, showErrorFn,]);

  return { data, error, loading };
}

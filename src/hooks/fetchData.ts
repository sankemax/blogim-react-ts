import { useEffect, } from "react";
import axios from "axios";

import { Item } from "../components/Item/ItemType";
import { Feed } from "../components/Feed/FeedType";
import { Config } from "../config/ConfigType";

export default function fetchData(
  type: Item["type"] | Feed["type"],
  config: Config,
) {
  return function useFetchData({ limit, offset }: any, dispatch: any) {
    useEffect(() => {
      const getData = async () => {
        try {
          dispatch({ type: 'FETCHING_DATA', fetching: true, error: false, });
          const response = await axios.get(`${config.rssServiceBaseUrl}/${type.toLowerCase()}s?limit=${limit}&offset=${offset}`);
          dispatch({ type: 'STACK_DATA', data: response.data.data[`${type.toLowerCase()}s`], });
        } catch (err) {
          console.log(err);
          dispatch({ type: 'ERROR', error: true })
        } finally {
          dispatch({ type: 'FETCHING_DATA', fetching: false, error: false });
        }
      }
      getData();
    }, [limit, offset, dispatch]);
  }
}
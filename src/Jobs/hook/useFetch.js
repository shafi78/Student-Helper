import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (endpoint,query) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'db158a6c6amsh3ca3725346cfb36p17aafajsn06b4dde16f63',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          ...query
        },
      };

      const fetchData = async() => {
        setIsLoading(true);

        try {
            const response = await axios.request
            (options);

            setData(response.data.data);
            setIsLoading(false);
        }

        catch(error)
        {
            setError(error);
            alert("There is an error")
        }

        finally{
            setIsLoading(false)
        }
      }

      useEffect(() => {

        fetchData();
      } , []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return {data,isLoading,error,refetch};
}

export default useFetch

const styles = StyleSheet.create({})
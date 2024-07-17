import { useEffect, useState } from "react";
import {   Todo } from "../lib";

async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Fetching data failed: ${error}`);
  }
}

export default function GenericData() {
  const [tweet, setTweet] = useState<Todo| null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    setLoading(true);
    fetchData<Todo>('https://jsonplaceholder.typicode.com/todos/5')
      .then((data) => {
        setTweet(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{JSON.stringify(tweet)}</div>;
}




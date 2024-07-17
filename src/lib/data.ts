import { Todo , formSchema} from ".";

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



const getTweets = async (signal: AbortSignal) =>
  fetch(`/api/tweets`, { signal })
    .then((res) => res.json())
    .then((data) => formSchema.parse(data));

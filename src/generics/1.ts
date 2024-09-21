import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: URL<T> = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

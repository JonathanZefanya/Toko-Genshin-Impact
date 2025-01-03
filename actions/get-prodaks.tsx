import { Prodak } from "@/types";
import qs from "query-string";

const URL = `${process.env.PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  isFiatured?: boolean;
}

const getProdaks = async (query: Query): Promise<Prodak[]> => {
  try {
    // Tambahkan logging untuk memeriksa queryString
    const queryString = qs.stringify(query, { skipNull: true, skipEmptyString: true });
    console.log('Fetching URL:', `${URL}?${queryString}`);
    
    const fullUrl = `${URL}?${queryString}`;
    const res = await fetch(fullUrl, {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getProdaks;

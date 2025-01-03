import { Catagori } from "@/types";

const Ulr = `${process.env.PUBLIC_API_URL}/categories`;


const getCatagori = async (id: string): Promise<Catagori> => {
    const res = await fetch(`${Ulr}/${id}`);
    return res.json();
};

export default getCatagori;
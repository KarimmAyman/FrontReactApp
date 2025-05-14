// src/services/PropertyService.js
import axios from "axios";

const BASE_URL = "https://studentpathapitest.runasp.net/api/Property";

export const getProperties = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

export const getPropertyById = async (id) => {
  try {
    const resp = await axios.get(`${BASE_URL}/${id}`);
    // Expecting: { data: { ...property, images: [...] }, succeeded: true }
    return resp.data.data;
  } catch (err) {
    console.error("Error fetching property details:", err);
    throw err;
  }
};

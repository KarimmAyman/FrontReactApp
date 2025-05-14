// src/services/jobService.js
import axios from "axios";

const API_URL = "https://studentpathapitest.runasp.net/api/Jobs";

export const getAllJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const getJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching job with id ${id}:`, error);
    throw error;
  }
};
export const createJob = async (jobData) => {
  try {
    const userString = localStorage.getItem("user");

    if (!userString || userString === "undefined") {
      throw new Error("User not found in localStorage");
    }

    const user = JSON.parse(userString); // Now safe
    const token = user?.token;

    if (!token) {
      throw new Error("Token not found in user object");
    }

    const response = await axios.post(
      "https://studentpathapitest.runasp.net/api/Jobs",
      jobData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

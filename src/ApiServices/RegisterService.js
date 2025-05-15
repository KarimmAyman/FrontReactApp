// src/ApiServices/RegisterService.js
import axios from "axios";

const BASE_URL = "https://studentpathapitest.runasp.net/api/Accounts";

export const registerUser = async (userData) => {
  const formData = new FormData();

  formData.append("FullName", userData.FullName);
  formData.append("Email", userData.Email);
  formData.append("Password", userData.Password);
  formData.append("ConfirmedPassword", userData.ConfirmedPassword);
  formData.append("PhoneNumber", userData.PhoneNumber);
  formData.append("UserType", String(userData.UserType));
  formData.append("Gender", String(userData.Gender));
  formData.append("Age", String(userData.Age));

  if (userData.ImgUrlFile && userData.ImgUrlFile instanceof File) {
    formData.append("ImgUrlFile", userData.ImgUrlFile);
  }

  if (userData.locations && Array.isArray(userData.locations)) {
    formData.append("locationsJson", JSON.stringify(userData.locations));
  }

  if (userData.vehicleInfoJson && Array.isArray(userData.vehicleInfoJson)) {
    formData.append(
      "vehicleInfoJson",
      JSON.stringify(userData.vehicleInfoJson)
    );
  }

  try {
    const response = await axios.post(`${BASE_URL}/Register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.data) {
      throw error.response.data;
    } else if (error.message) {
      throw { message: error.message };
    } else {
      throw { message: "Unknown error occurred" };
    }
  }
};

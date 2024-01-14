import axios from "axios";
import { ApiResponse, UserData } from "../types";

const API_BASE_URL = "https://randomuser.me/api";

export const fetchUsers = async (
  page: number,
  resultsPerPage: number
): Promise<UserData[]> => {
  try {
    const response = await axios.get<ApiResponse>(
      `${API_BASE_URL}/?page=${page}&results=${resultsPerPage}`
    );

    return (
      response?.data?.results?.map((user) => ({
        avatar: user?.picture?.large || "",
        id: user.login.uuid,
        gender: user.gender,
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        location: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode}`,
        email: user.email,
        dob: user.dob.date,
        phone: user.phone,
        cell: user.cell,
      })) || []
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

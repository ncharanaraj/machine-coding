import { useState } from "react";
import { API_URL } from "../utils/constants";

const useGetUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUserInfo = async (userID) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${userID}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, getUserInfo };
};

export default useGetUser;

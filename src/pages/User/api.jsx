import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", //backend URL
  headers: {
    "Content-Type": "application/json",
  },
});


// Fetch Available Vouchers for User
export const fetchVouchers = async (userId) => {
  try {
    const response = await API.get(`/vouchers/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vouchers:", error);
    return [];
  }
};

// Claim a Voucher
export const claimVoucher = async (userId, voucherId) => {
  try {
    await API.post(`/vouchers/claim`, { userId, voucherId });
    return "Voucher claimed successfully!";
  } catch (error) {
    console.error("Error claiming voucher:", error);
    return "Error claiming voucher.";
  }
};

// Reward Donation/Disposal
export const rewardUser = async (userId, type) => {
  try {
    const response = await API.post(`/reward`, { userId, type });
    return response.data;
  } catch (error) {
    console.error("Error rewarding user:", error);
    return { success: false };
  }
};




export const fetchTrackingData = async () => {
  try {
    const response = await API.get("/tracking");
    return response.data;
  } catch (error) {
    console.error("Error fetching tracking data:", error);
    return [];
  }
};
export const getNGOs = async () => {
  try {
    const response = await axios.get(`${API_URL}/ngos`);
    return response.data;  
  } catch (error) {
    console.error('Error fetching NGOs:', error);
    return [];
  }
};

// Add 
export const addNGO = async (newNgo) => {
  try {
    const response = await axios.post(`${API_URL}/ngos`, newNgo);
    return response.data;  
  } catch (error) {
    console.error('Error adding NGO:', error);
    return null;
  }
};

// Update 
export const updateNGO = async (id, updatedNgo) => {
  try {
    const response = await axios.put(`${API_URL}/ngos/${id}`, updatedNgo);
    return response.data; 
  } catch (error) {
    console.error('Error updating NGO:', error);
    return null;
  }
};

// Delete
export const deleteNGO = async (id) => {
  try {
    await axios.delete(`${API_URL}/ngos/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting NGO:', error);
    return false;
  }
};

// Fetch
export const getNGOStats = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/ngos/${id}/stats`);
    return response.data;  
  } catch (error) {
    console.error('Error fetching NGO stats:', error);
    return { donationsReceived: 0, pickupsScheduled: 0, tasksCompleted: 0 };
  }
};

export default API;

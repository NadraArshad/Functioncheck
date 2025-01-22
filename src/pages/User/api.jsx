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


export default API;

import { useEffect, useState } from "react";
import { fetchVouchers, claimVoucher, rewardUser } from "./api";

const Incentives = ({ userId }) => {
  const [vouchers, setVouchers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadVouchers = async () => {
      const data = await fetchVouchers(userId);
      setVouchers(data);
    };
    loadVouchers();
  }, [userId]);

  const handleReward = async (type) => {
    const result = await rewardUser(userId, type);
    if (result.success) {
      setMessage("You have earned a reward! Check your vouchers.");
    } else {
      setMessage("Error earning reward.");
    }
  };

  const handleClaimVoucher = async (voucherId) => {
    const result = await claimVoucher(userId, voucherId);
    setMessage(result);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Earn Rewards & Vouchers</h2>

      {message && <p className="text-green-500">{message}</p>}

      <div className="mb-4">
        <button
          onClick={() => handleReward("donation/disposal")}
          className="bg-blue-500 text-white p-2 w-full"
        >
          Complete Donation & Earn Voucher
        </button>
        
      </div>

      <h3 className="text-lg font-semibold">Available Vouchers:</h3>
      {vouchers.length === 0 ? (
        <p>No vouchers available.</p>
      ) : (
        <ul className="space-y-4">
          {vouchers.map((voucher) => (
            <li
              key={voucher.id}
              className="p-4 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{voucher.name}</p>
                <p className="text-gray-500">Valid until: {voucher.expiryDate}</p>
              </div>
              <button
                onClick={() => handleClaimVoucher(voucher.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-full"
              >
                Claim
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Incentives;

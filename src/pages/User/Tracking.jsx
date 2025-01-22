import { useEffect, useState } from "react";
import { fetchTrackingData } from "./api";

const Tracking = () => {
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    const loadTrackingData = async () => {
      const data = await fetchTrackingData();
      setTrackingData(data);
    };
    loadTrackingData();
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Tracking Status</h2>

      {trackingData.length === 0 ? (
        <p>No active tracking records.</p>
      ) : (
        <ul className="space-y-4">
          {trackingData.map((item) => (
            <li
              key={item.id}
              className="p-4 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{item.type} - {item.ngoName || "Eco Disposal"}</p>
                <p className="text-gray-500">Date: {item.date}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-white ${
                  item.status === "Pending"
                    ? "bg-yellow-500"
                    : item.status === "Picked Up"
                    ? "bg-blue-500"
                    : "bg-green-500"
                }`}
              >
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tracking;

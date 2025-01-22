import { useState } from "react";
import API from "./api";

const Disposal = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [message, setMessage] = useState("");

  const handleDisposal = () => {
    if (!pickupDate || !pickupTime) {
      setMessage("Please select a date and time for pickup.");
      return;
    }

    API.post("/disposal", {
      date: pickupDate,
      time: pickupTime,
    })
      .then(() => setMessage("Disposal pickup scheduled successfully!"))
      .catch(() => setMessage("Error scheduling disposal pickup."));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Schedule Clothes Disposal</h2>

      {message && <p className="text-green-500">{message}</p>}

      <label className="block mb-2">Select Date:</label>
      <input
        type="date"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <label className="block mb-2">Select Time:</label>
      <input
        type="time"
        value={pickupTime}
        onChange={(e) => setPickupTime(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={handleDisposal}
        className="bg-green-500 text-white p-2 w-full"
      >
        Confirm Pickup
      </button>
    </div>
  );
};

export default Disposal;

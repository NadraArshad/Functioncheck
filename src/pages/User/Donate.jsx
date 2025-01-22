import { useState, useEffect } from "react";
import API from "./api";
import Tracking from "./Tracking";
import Disposal from "./Disposal";
import Incentives from "./Incentives";

const Donate = () => {
  const [ngos, setNgos] = useState([]); 
  const [selectedNGO, setSelectedNGO] = useState(""); 
  const [donationType, setDonationType] = useState("pickup"); 
  const [pickupDate, setPickupDate] = useState(""); 
  const [message, setMessage] = useState(""); 

  // from Backend
  useEffect(() => {
    API.get("/ngos")
      .then((res) => setNgos(res.data))
      .catch((err) => console.error("Error fetching NGOs:", err));
  }, []);

  // Request
  const handleDonate = () => {
    if (!selectedNGO || !pickupDate) {
      setMessage("Please select an NGO and pickup date.");
      return;
    }

    API.post("/donate", {
      ngo: selectedNGO,
      type: donationType, 
      date: pickupDate,
    })
      .then(() => setMessage("Donation scheduled successfully!"))
      .catch(() => setMessage("Error scheduling donation"));
  };

  return (
    <>
    {/* <Disposal/>
    <Tracking/>
    <Incentives/> */}
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Donate Clothes</h2>

      {message && <p className="text-green-500">{message}</p>}

      <label className="block mb-2">Choose an NGO:</label>
      <select
        value={selectedNGO}
        onChange={(e) => setSelectedNGO(e.target.value)}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select</option>
        {ngos.map((ngo) => (
          <option key={ngo.id} value={ngo.name}>{ngo.name}</option>
        ))}
      </select>

      <label className="block mb-2">Pickup or Drop-off:</label>
      <div className="flex gap-4 mb-4">
        <button
          className={`p-2 w-full ${donationType === "pickup" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setDonationType("pickup")}
        >
          Pickup
        </button>
        <button
          className={`p-2 w-full ${donationType === "dropoff" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setDonationType("dropoff")}
        >
          Drop-off
        </button>
      </div>

      <label className="block mb-2">Select Date:</label>
      <input
        type="date"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={handleDonate}
        className="bg-green-500 text-white p-2 w-full"
      >
        Confirm Donation
      </button>
    </div>

    </>
  );
};

export default Donate;

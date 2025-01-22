import React, { useEffect, useState } from 'react';
import { getNGOStats } from '../User/api';

const NGOStats = ({ ngoId }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getNGOStats(ngoId);
      setStats(data);  
    };
    fetchStats();
  }, [ngoId]);

  if (!stats) {
    return <p>Loading stats...</p>;
  }

  return (
    <div className="ngo-stats">
      <h4>Performance Stats</h4>
      <ul>
        <li>Donations Received: {stats.donationsReceived}</li>
        <li>Pickups Scheduled: {stats.pickupsScheduled}</li>
        <li>Tasks Completed: {stats.tasksCompleted}</li>
      </ul>
    </div>
  );
};

export default NGOStats;

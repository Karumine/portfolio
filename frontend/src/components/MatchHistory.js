import { useState, useEffect } from 'react';


export const MatchHistory = ({ puuid }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchHistory = async () => {
      const apiUrl = `https://asia.api.riotgames.com/val/matches/${puuid}?api_key=YOUR_API_KEY`;  // ใส่ apiKey ที่นี่
      try {
        setLoading(true);
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Error fetching match history: ${response.status}`);
        }

        const data = await response.json();
        setMatches(data.matches || []);  // เก็บข้อมูลการแข่งขัน
      } catch (err) {
        setError(err.message);
        console.error("Error fetching match data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (puuid) {
      fetchMatchHistory();  // ดึงข้อมูลการแข่งขัน
    }
  }, [puuid]);

  if (loading) return <p>Loading match history...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Match History</h3>
      {matches.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        <ul>
          {matches.map((match, index) => (
            <li key={index}>{match.matchId} - {match.gameMode}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


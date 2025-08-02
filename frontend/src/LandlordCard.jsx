import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LandlordCard({ onBack }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchRentHistory = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/rent-history');
        setHistory(res.data);
      } catch (error) {
        console.error('Error fetching rent history:', error);
      }
    };
    fetchRentHistory();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Landlord Dashboard</h1>
        <h2 style={styles.subtitle}>Rent Payment History</h2>
        <div style={styles.table}>
          <div style={{ ...styles.row, ...styles.headerRow }}>
            <div style={styles.cell}>Tenant</div>
            <div style={styles.cell}>Amount (USD)</div>
            <div style={styles.cell}>Date</div>
          </div>
          {history.map((entry, idx) => (
            <div key={idx} style={styles.row}>
              <div style={styles.cell}>{entry.tenant}</div>
              <div style={styles.cell}>${entry.amount}</div>
              <div style={styles.cell}>{new Date(entry.date).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
        <button style={styles.backButton} onClick={onBack}>← Back</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    padding: '3rem',
    backgroundColor: '#f9f9fb',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    width: '100%',
    maxWidth: '700px',
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  title: {
    marginBottom: '0.5rem',
    color: '#2b2b2b',
  },
  subtitle: {
    marginBottom: '1.5rem',
    color: '#555',
    fontWeight: 400,
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  row: {
    display: 'flex',
    padding: '0.75rem 1rem',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
  },
  headerRow: {
    backgroundColor: '#f3f6f9',
    fontWeight: 600,
    color: '#333',
  },
  cell: {
    flex: 1,
    textAlign: 'left',
    fontSize: '0.95rem',
  },
  backButton: {
    marginTop: '2rem',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  }
};

export default LandlordCard;

import React, { useState } from 'react';
import TenantForm from './TenantForm';
import LandlordCard from './LandlordCard';

function App() {
  const [view, setView] = useState('home');

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🏠 Crentex - Rent Collection Platform</h1>

      {view === 'home' && (
        <div style={styles.cardContainer}>
          <div
            style={{ ...styles.card, ...styles.landlordCard }}
            onClick={() => setView('landlord')}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = styles.hoverShadow}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = styles.card.boxShadow}
          >
            <h2 style={styles.cardText}>Landlord</h2>
          </div>
          <div
            style={{ ...styles.card, ...styles.tenantCard }}
            onClick={() => setView('tenant')}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = styles.hoverShadow}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = styles.card.boxShadow}
          >
            <h2 style={styles.cardText}>Tenant</h2>
          </div>
        </div>
      )}

      {view === 'tenant' && <TenantForm onBack={() => setView('home')} />}
      {view === 'landlord' && <LandlordCard onBack={() => setView('home')} />}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem 2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #f2f4f8 0%, #e0eafc 100%)',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '3rem',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    width: '220px',
    height: '160px',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  },
  landlordCard: {
    backgroundColor: '#3498db', // Professional blue
    color: '#fff',
  },
  tenantCard: {
    backgroundColor: '#27ae60', // Fresh green
    color: '#fff',
  },
  cardText: {
    fontSize: '1.4rem',
    fontWeight: '500',
  },
  hoverShadow: '0 10px 24px rgba(0, 0, 0, 0.2)',
};

export default App;

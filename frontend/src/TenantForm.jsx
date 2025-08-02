import React, { useState } from 'react';
import axios from 'axios';

function TenantForm({ onBack }) {
  const [form, setForm] = useState({ tenant: '', amount: '', date: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.tenant || !form.amount || !form.date) return;

    try {
      await axios.post('http://localhost:5000/api/pay-rent', {
        tenant: form.tenant,
        amount: form.amount,
        date: form.date,
      });
      alert('✅ Rent submitted!');
      setForm({ tenant: '', amount: '', date: '' });
    } catch (error) {
      console.error('Error submitting rent:', error);
      alert('❌ Failed to submit rent. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>💸 Tenant Rent Payment</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            placeholder="Tenant Name"
            value={form.tenant}
            onChange={(e) => setForm({ ...form, tenant: e.target.value })}
          />
          <input
            style={styles.input}
            placeholder="Amount (USD)"
            type="number"
            min="0"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
          <input
            style={styles.input}
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <button style={styles.submitBtn} type="submit">Submit Rent</button>
          <button style={styles.backBtn} type="button" onClick={onBack}>← Back</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border 0.3s',
  },
  submitBtn: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  backBtn: {
    padding: '0.6rem',
    fontSize: '0.95rem',
    backgroundColor: '#bdc3c7',
    color: '#2c3e50',
    border: 'none',
    borderRadius: '6px',
    marginTop: '0.5rem',
    cursor: 'pointer',
  },
};

export default TenantForm;

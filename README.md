# Crentex - Rent Collection Platform 🏠💰

A minimal and cost-effective MVP for a rent collection system that allows:
- **Tenants** to pay rent (form submission for now, Stripe/crypto ready)
- **Landlords** to view rent payment history

> 🚀 Designed with scalability and payment integration readiness in mind.

---

## 🌐 Features

### 👤 Tenant
- Fill out a rent payment form (tenant name, amount)
- Simulates rent payment (future-ready for Stripe/crypto integration)

### 🧑‍💼 Landlord
- View rent payment history in a clean, tabular UI
- Shows: Tenant name, Amount, Date of Payment

### 💾 Backend
- Built with **Flask**
- Saves rent records to **PostgreSQL**
- RESTful APIs to handle payment and fetch history

### 🧑‍🎨 Frontend
- Built with **React**
- Modern, responsive UI with professional styling
- View switching between Tenant and Landlord dashboard

---

## 📂 Folder Structure

/backend
└── main.py # Flask server
└── database.py # DB models + connection
└── requirements.txt

/frontend
└── src/
└── App.jsx # Main UI switcher
└── TenantForm.jsx # Tenant rent form
└── LandlordCard.jsx # Rent history view
└── public/
└── package.json


---

## ⚙️ Tech Stack

- **Frontend**: React, HTML, CSS (inline for MVP)
- **Backend**: Python Flask
- **Database**: PostgreSQL
- **API Client**: Axios

---

## 🚧 Limitations (MVP)

- No authentication (no user logins)
- No real Stripe or crypto payments (form-based simulation only)
- Single-user tenant simulation
- No deployment (yet)

---

## 🛠️ Ready for Future Enhancements

- ✅ Stripe + Cryptocurrency integration
- ✅ Multi-user auth (JWT or OAuth)
- ✅ Dashboard filters & search
- ✅ Deployment on Vercel + Render or Railway

---

## 📦 Running Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
python main.py

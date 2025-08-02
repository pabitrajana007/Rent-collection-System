# Crentex - Rent Collection Platform 🏠💰

A minimal and cost-effective MVP for a rent collection system that allows:
- **Tenants** to pay rent (form submission for now, Stripe/crypto ready)
- **Landlords** to view rent payment history

> 🚀 Designed with scalability and payment integration readiness in mind.

---

## 🌐 Features

### 👤 Tenant
- Fill out a rent payment form (tenant name, amount)

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

## ⚙️ Tech Stack

- **Frontend**: Reactjs
- **Backend**: Python Flask
- **Database**: PostgreSQL

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
- ✅ Deployment on AWS

---

## 📦 Running Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
python app.py

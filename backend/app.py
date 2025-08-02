from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# --- Flask Setup ---
app = Flask(__name__)
CORS(app)

# --- PostgreSQL Connection ---
DB_NAME = "crentex_demo"
DB_USER = "postgres"
DB_PASSWORD = "your_password_here"  # Replace with your actual password
DB_HOST = "localhost"
DB_PORT = "5432"

DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
engine = create_engine(DATABASE_URL)

Base = declarative_base()

# --- Rent Payment Model ---
class RentPayment(Base):
    __tablename__ = 'rent_payment'

    id = Column(Integer, primary_key=True)
    tenant = Column(String, nullable=False)
    amount = Column(Integer, nullable=False)
    date = Column(Date, nullable=False)

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

# --- Route to save rent payment ---
@app.route('/api/pay-rent', methods=['POST'])
def pay_rent():
    data = request.json
    tenant = data.get('tenant')
    amount = data.get('amount')
    date = data.get('date')

    try:
        payment_date = datetime.datetime.strptime(date, "%Y-%m-%d").date()
        session = Session()
        payment = RentPayment(tenant=tenant, amount=amount, date=payment_date)
        session.add(payment)
        session.commit()
        session.close()
        return jsonify({"message": "Payment recorded successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# --- Route to get rent history ---
@app.route('/api/rent-history', methods=['GET'])
def rent_history():
    try:
        session = Session()
        payments = session.query(RentPayment).order_by(RentPayment.date.desc()).all()
        session.close()
        return jsonify([
            {
                "tenant": p.tenant,
                "amount": p.amount,
                "date": p.date.isoformat()
            }
            for p in payments
        ])
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Start the app ---
if __name__ == '__main__':
    app.run(debug=True)

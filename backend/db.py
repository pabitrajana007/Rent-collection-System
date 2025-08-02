import psycopg2
from sqlalchemy import create_engine, Column, Integer, String, Date, MetaData, Table
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

# --------- CONFIG ---------
POSTGRES_USER = "postgres"
POSTGRES_PASSWORD = "your_password_here"  # Replace with your actual password
POSTGRES_HOST = "localhost"
POSTGRES_PORT = "5432"
DB_NAME = "crentex_demo"

# --------- CREATE DATABASE ---------
def create_database():
    try:
        conn = psycopg2.connect(
            dbname="postgres",
            user=POSTGRES_USER,
            password=POSTGRES_PASSWORD,
            host=POSTGRES_HOST,
            port=POSTGRES_PORT
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cur = conn.cursor()
        cur.execute(f"CREATE DATABASE {DB_NAME};")
        print(f"✅ Database '{DB_NAME}' created successfully.")
        cur.close()
        conn.close()
    except psycopg2.errors.DuplicateDatabase:
        print(f"⚠️ Database '{DB_NAME}' already exists.")
    except Exception as e:
        print("❌ Error creating database:", e)

# --------- CREATE TABLE ---------
def create_rent_payment_table():
    engine = create_engine(f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{DB_NAME}")
    metadata = MetaData()

    rent_payment = Table(
        "rent_payment", metadata,
        Column("id", Integer, primary_key=True),
        Column("tenant", String(100), nullable=False),
        Column("amount", Integer, nullable=False),
        Column("date", Date, nullable=False)
    )

    metadata.create_all(engine)
    print("✅ Table 'rent_payment' created successfully.")

if __name__ == "__main__":
    create_database()
    create_rent_payment_table()

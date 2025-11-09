🔧 Predictive Maintenance Dashboard

A full-stack, real-time monitoring and prediction system that visualizes machine sensor data, detects anomalies, and forecasts potential failures using a Machine Learning model. This project integrates React, Node.js, MongoDB, Socket.io, and a Flask ML API to deliver actionable insights for industrial predictive maintenance.

📘 Table of Contents

Overview

Features

Tech Stack

System Architecture

Folder Structure

Installation & Setup

API Endpoints

Future Enhancements

Contributing

License

📌 Overview

The Predictive Maintenance Dashboard helps industries reduce downtime by presenting live equipment metrics, trend analysis, automated alerts, and ML-based fault predictions. It simulates sensor data—such as temperature, vibration, and pressure—and processes it through real-time pipelines to help operators make faster, more informed decisions.

The system is modular and scalable, making it suitable for labs, IoT experiments, and industrial training projects.

⭐ Features
Real-Time Monitoring

Continuous sensor data streaming via Socket.io

Live line charts for multiple sensor types

Real-time machine status indicators

Predictive Analytics

ML-powered anomaly detection through Flask API

Early failure prediction alerts

Machine health scoring

Data Management

MongoDB storage for historical sensor metrics

Maintenance logs and event tracking

REST API endpoints for CRUD operations

User Interface

Clean modern UI with React + Tailwind CSS

Recharts for interactive data visualization

Fully responsive layout

🛠 Tech Stack
Frontend

React (Vite + TypeScript)

Tailwind CSS

Recharts

Socket.io Client

Axios

Backend

Node.js

Express.js

MongoDB + Mongoose

Socket.io

Machine Learning

Flask

Scikit-learn

Pandas, NumPy

Tools

Replit

Git/GitHub

Postman

🏗 System Architecture
       ┌───────────────┐         ┌───────────────────┐
       │  React Client  │ <────→ │  Node.js Backend  │
       └───────────────┘   API   └───────────────────┘
               │                         │
               │ WebSockets              │ REST + WS
               ▼                         ▼
        ┌──────────────┐         ┌─────────────────┐
        │ Socket.io     │         │ MongoDB Database│
        └──────────────┘         └─────────────────┘
               │
               ▼
        ┌────────────────┐
        │ Flask ML API   │
        └────────────────┘

📂 Folder Structure
predictive-maintenance-dashboard/
│
├── client/           # React Frontend
├── server/           # Node.js Backend
├── ml-api/           # Python Flask ML service
└── README.md         # Documentation

🚀 Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/predictive-maintenance-dashboard.git
cd predictive-maintenance-dashboard

2. Start the Frontend
cd client
npm install
npm run dev

3. Start the Backend
cd server
npm install
node index.js

4. Start the ML API
cd ml-api
pip install -r requirements.txt
python app.py

🔌 API Endpoints
Backend (Node.js)
Method	Endpoint	Description
GET	/api/sensors	Get latest sensor data
POST	/api/sensors	Add sensor data
GET	/api/machines	Get machine health list
POST	/api/logs	Add maintenance log
ML API (Flask)
Method	Endpoint	Description
POST	/predict	Predict anomalies/failure
GET	/model-info	Get model details
🔮 Future Enhancements

Integration with real IoT hardware

Authentication & role-based access

Automated report generation

Advanced ML algorithms (LSTMs, Autoencoders)

Cloud deployment (Render, Railway, Netlify)

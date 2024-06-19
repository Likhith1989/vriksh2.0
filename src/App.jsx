import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { LeaderBoard } from "./components/LeaderBoard";
import { Subs } from "./components/Subs";
import { Perks } from "./components/Perks";
import HomePage from "./HomePage";
import PaymentOptions from "./components/PaymentOptions";
import "./App.css";
import Sucess from "./components/Sucess";
import Cancel from "./components/Cancel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/success" element={<Sucess />} />
        <Route path="/cancel" element={<Cancel />} />

        {/* Add more routes for Razorpay and PayPal as needed */}
      </Routes>
    </Router>
  );
}

const MainContent = () => (
  <>
    <HomePage />
    <Perks />
    <Subs />
    <LeaderBoard />
    <Footer />
  </>
);

export default App;

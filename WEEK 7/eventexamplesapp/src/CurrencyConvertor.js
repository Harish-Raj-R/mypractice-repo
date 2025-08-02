// src/CurrencyConvertor.js

import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [currency, setCurrency] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
// Sample conversion rates
const conversionRates = {
  euro: 90,     // ₹90 = 1 Euro
  dollar: 83,   // ₹83 = 1 USD
  yen: 0.57,    // ₹0.57 = 1 Yen
  pound: 105    // ₹105 = 1 GBP
};

const handleSubmit = (e) => {
  e.preventDefault();

  const lowerCurrency = currency.toLowerCase();
  const rate = conversionRates[lowerCurrency];

  if (!rate) {
    alert("Unsupported currency. Try: euro, dollar, yen, pound");
    return;
  }

  const converted = (parseFloat(rupees) / rate).toFixed(2);
  setConvertedValue(`${converted} ${lowerCurrency.toUpperCase()}`);
};

const sayConvertedAmount = (converted) => {
  alert(`Converted Amount: ${converted}`);
};

  return (
    <div>
      <h2>Currency Converter</h2>

      <form onSubmit={handleSubmit}>
        <label>Enter amount in ₹ Rupees:</label><br />
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="INR"
          required
        />
        <br /><br />

        <label>Enter currency (euro, dollar, yen, pound):</label><br />
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          placeholder="Currency type"
          required
        />
        <br /><br />

        <button type="submit">Convert</button>
      </form>
      <button onClick={() => sayConvertedAmount(convertedValue)}>Say Converted Amount</button>
      
    </div>
  );
};

export default CurrencyConvertor;

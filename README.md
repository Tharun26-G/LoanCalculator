# 💸 Loan EMI Calculator

A responsive and modern Loan EMI Calculator built with **React** and **Material-UI**, designed to calculate EMIs, display a detailed amortization table, and perform real-time currency conversion using live exchange rate data. The app includes dark/light theme toggle, is fully responsive, and deployed on **Vercel**.

🔗 **Live Demo:** [https://loanemicalculator.vercel.app](https://loanemicalculator.vercel.app)

---

## 🚀 Features

### 🔢 EMI Calculation
- Calculates Equated Monthly Installments (EMI) using the standard formula:
 EMI = [P × R × (1 + R)^N] / [(1 + R)^N - 1]
- **P** = Principal loan amount
- **R** = Monthly interest rate (annual rate / 12 / 100)
- **N** = Loan duration in months

### 📊 Amortization Schedule
- Generates a detailed monthly breakdown showing:
- EMI
- Interest component
- Principal component
- Remaining balance

### 🌐 Currency Conversion (Live)
- Uses **ExchangeRate-API** to fetch real-time exchange rates.
- Converts EMI to any supported global currency.

### 🌍 Exchange Rate
- Displays over **160+ currencies**.
- Always shows the latest rates against a base currency.

### 🌙 Dark/Light Mode Toggle
- Switch between light and dark themes.
- Powered by **Material-UI**'s theming system.
- Theme state is persisted and shared using **React Context API**.

### 📱 Fully Responsive UI
- Seamless experience across desktop, tablet, and mobile.
- Collapsible mobile-friendly navigation bar.

### ⚙️ React Context API
- Centralized global state management for:
- Theme (dark/light mode)
- Selected base currency

### 💡 Error Handling
- Custom **404 Not Found** page for unmatched routes.
- Generic error page for unexpected runtime issues.

### ☁️ Deployment
- The app is deployed using **Vercel** and publicly accessible:
- [https://loanemicalculator.vercel.app](https://loanemicalculator.vercel.app)

---

## 🛠️ Tech Stack

- **React** (Hooks, Router, Context API)
- **Material-UI** (Components, Theming, Responsiveness)
- **Axios** (API calls)
- **ExchangeRate-API** (Free tier integration for currency data)
- **Vercel** (Deployment)



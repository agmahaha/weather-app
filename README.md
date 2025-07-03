# 🌤️ Weather App Onboarding Project

Welcome to the team! 🎉

This simple Weather App is your first hands-on task to help you understand our team's workflow, code style, and project structure. You'll use an actual weather API, set up a service, and build a small UI to display weather data.

---

## 📋 Objectives

- Understand how we structure projects
- Learn how to use services for data fetching
- Practice using GitHub workflow (branches, PRs, commits)
- Learn our basic coding standards and practices

---

## 🛠️ Prerequisites

- Node.js (version X.X.X or higher)
- Angular CLI / React CLI / Vue CLI (choose based on your stack)
- Git
- A code editor (VS Code preferred)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/weather-onboarding-app.git
cd weather-onboarding-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

> The app should now be running on `http://localhost:4200` (for Angular) or your framework's default port.

---

## 📁 Project Structure

```bash
src/
│
├── app/
│   ├── services/
│   │   └── weather.service.ts    # Example service to fetch weather
│   ├── components/
│   │   └── weather-card/         # Component to display weather
│   ├── models/
│   │   └── weather.model.ts      # Interface/type for weather data
│   └── app.component.ts
```

---

## 🔐 API Setup

We use [OpenWeatherMap API](https://openweathermap.org/api).

### 1. Create an account and get your API key

Sign up and get your API key here: https://home.openweathermap.org/api_keys

### 2. Add your API key to environment file

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  weatherApiKey: 'YOUR_API_KEY_HERE',
};
```

---

## 📦 Tasks

### ✅ Step 1: Review the weather service

- Look into `weather.service.ts` to see how we make HTTP requests
- Understand how services are injected into components

### ✅ Step 2: Create a new component

- Create a `weather-search` component where users can search by city
- Bind the input to the service call
- Display the result using the `weather-card` component

### ✅ Step 3: Push your work

1. Create your own branch

```bash
git checkout -b your-name/feature/weather-search
```

2. Commit your changes

```bash
git commit -m "feat: add weather search component"
```

3. Push and open a Pull Request

```bash
git push origin your-name/feature/weather-search
```

Go to GitHub and open a PR from your branch to `main`.

---

## 🧪 Bonus Challenges

- Add error handling (e.g., invalid city)
- Display loading state while fetching data
- Add unit tests for the service

---

## 🧭 Next Steps

After you're done:

- Let your mentor/reviewer know your PR is ready
- You'll get feedback and tips on how to improve
- Once approved, your PR will be merged

---

## 🤝 Support

If you're stuck or have any questions, feel free to:

- Message your assigned buddy
- Ask in the #onboarding channel

---

Welcome again! We’re excited to have you on board 🚀
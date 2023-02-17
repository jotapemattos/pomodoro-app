import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PercentageContextProvider from './context/PercentagesContext'
import SettingsContextProvider from './context/SettingsTimesContext'
import TimesContextProvider from './context/TimesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TimesContextProvider>
      <SettingsContextProvider>
        <PercentageContextProvider>
          <App />
        </PercentageContextProvider>
      </SettingsContextProvider>
    </TimesContextProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SettingsContextProvider from './context/SettingsTimesContext'
import TimesContextProvider from './context/TimesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TimesContextProvider>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </TimesContextProvider>
  </React.StrictMode>,
)

import React from 'react'
import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>
  )
}

export default App;
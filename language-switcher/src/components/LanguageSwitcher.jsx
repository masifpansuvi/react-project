// languageSwitcher
import React, { useContext } from "react";
import { languageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, translations, switchLanguage } =
    useContext(languageContext);

  return (
    <>
      <div className="main-container">
        <h2>Language Switcher</h2>
        <div className="btn-container">
          <button 
          className="btn-english" 
          onClick={() => switchLanguage('en')}
          disabled={language === 'en'}
          style={{
            padding: '8px 16px',
            background: language === 'en' ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize:'20px',
            cursor: 'pointer'
          }}
          >
            English
          </button>
          <button 
          className="btn-spanish" 
          onClick={() => switchLanguage('es')}
          disabled={language === 'es'}
          style={{
            padding: '8px 16px',
            background: language === 'es' ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize:'20px',
            cursor: 'pointer'
          }}
          >
            Español
          </button>
        </div>

        <p>current language: {language}</p>
        <p>test translation: {translations.welcome}</p>
        
      </div>
    </>
  );
};

export default LanguageSwitcher;

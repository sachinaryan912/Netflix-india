// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          title: "Unlimited movies, TV shows and more",
          description: "Starts at ₹149. Cancel at any time.",
          prompt: "Ready to watch? Enter your email to create or restart your membership.",
          trendingNow: "Trending Now",
          emailPlaceholder: "Email address",
          getStarted: "Get Started",
          signIn: "Sign In",
        }
      },
      hi: {
        translation: {
          title: "अनंत फिल्में, टीवी शो और बहुत कुछ",
          description: "₹149 से शुरू। कभी भी रद्द करें।",
          prompt: "देखने के लिए तैयार? अपनी सदस्यता बनाने या फिर से शुरू करने के लिए अपना ईमेल दर्ज करें।",
          trendingNow: "अब ट्रेंड कर रहा है",
          emailPlaceholder: "ईमेल पता",
          getStarted: "शुरू करें",
          signIn: "साइन इन करें",
        }
      }
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // React already safes from XSS
    }
  });

export default i18n;

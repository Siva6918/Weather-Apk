import React, { useState } from "react";

const HowItWorks = () => {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    en: [
      { icon: "🌤", text: "Enter a city name and press Submit to fetch weather data." },
      { icon: "📍", text: "Click Geolocation to use your current location." },
      { icon: "🌡", text: "Toggle between °C and °F." },
      { icon: "🔄", text: "View temperature, humidity, and wind speed." },
    ],
    hi: [
      { icon: "🌤", text: "शहर का नाम दर्ज करें और सबमिट दबाएं।" },
      { icon: "📍", text: "Geolocation से अपने स्थान का उपयोग करें।" },
      { icon: "🌡", text: "°C और °F के बीच टॉगल करें।" },
      { icon: "🔄", text: "तापमान, नमी और पवन गति देखें।" },
    ],
    te: [
      { icon: "🌤", text: "నగర పేరు నమోదు చేసి Submit నొక్కండి." },
      { icon: "📍", text: "మీ ప్రస్తుత స్థానాన్ని ఉపయోగించడానికి Geolocation నొక్కండి." },
      { icon: "🌡", text: "°C మరియు °F మధ్య టాగిల్ చేయండి." },
      { icon: "🔄", text: "ఉష్ణోగ్రత, తేమ మరియు గాలి వేగాన్ని చూడండి." },
    ],
    ta: [
      { icon: "🌤", text: "நகரத்தின் பெயரை உள்ளிட்டு Submit அழுத்தவும்." },
      { icon: "📍", text: "உங்கள் தற்போதைய இருப்பிடத்தை பயன்படுத்த Geolocation ஐ கிளிக் செய்யவும்." },
      { icon: "🌡", text: "°C மற்றும் °F இடையே மாற்றவும்." },
      { icon: "🔄", text: "வெப்பநிலை, ஈரப்பதம் மற்றும் காற்றின் வேகத்தை காண்க." },
    ],
    kn: [
      { icon: "🌤", text: "ನಗರದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ Submit ಒತ್ತಿ." },
      { icon: "📍", text: "ನಿಮ್ಮ текCurrent ಸ್ಥಳವನ್ನು ಬಳಸಲು Geolocation ಕ್ಲಿಕ್ ಮಾಡಿ." },
      { icon: "🌡", text: "°C ಮತ್ತು °F ನಡುವೆ ಟಾಗಲ್ ಮಾಡಿ." },
      { icon: "🔄", text: "ತಾಪಮಾನ, ಆರ್ದ್ರತೆ ಮತ್ತು ಗಾಳಿಯ ವೇಗವನ್ನು ವೀಕ್ಷಿಸಿ." },
    ],
    bn: [
      { icon: "🌤", text: "একটি শহরের নাম লিখুন এবং সাবমিট করুন।" },
      { icon: "📍", text: "আপনার বর্তমান অবস্থান ব্যবহারে Geolocation চাপুন।" },
      { icon: "🌡", text: "°C এবং °F এর মধ্যে টগল করুন।" },
      { icon: "🔄", text: "তাপমাত্রা, আর্দ্রতা ও বাতাসের গতি দেখুন।" },
    ],
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="how-it-works" style={{ maxWidth: "480px", margin: "2rem auto", color: "#cbd5e1" }}>
      <button
        onClick={toggleOpen}
        style={{
          background: "linear-gradient(135deg, #fef08a, #f59e0b)",
          border: "none",
          borderRadius: "20px",
          padding: "12px 24px",
          fontWeight: "700",
          color: "#1e293b",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(254, 224, 102, 0.7)",
          userSelect: "none",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        {isOpen ? "Close How It Works" : "How This Weather App Works"}
      </button>

      {isOpen && (
        <div style={{ backgroundColor: "rgba(20, 40, 75, 0.85)", borderRadius: "16px", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label htmlFor="language" style={{ fontWeight: "700", marginRight: "0.5rem" }}>
              Language:
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "600",
                background: "rgba(5, 55, 136, 0.2)",
                color: "rgba(238, 186, 15, 0.9)",
                backgroundColor:"#444",
                outline: "none",
              }}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="te">తెలుగు</option>
              <option value="ta">தமிழ்</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="bn">বাংলা</option>
            </select>
          </div>

          {content[language].map((item, index) => (
            <p key={index} style={{ marginBottom: "0.8rem", fontSize: "1rem" }}>
              <span style={{ marginRight: "8px" }}>{item.icon}</span> {item.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default HowItWorks;

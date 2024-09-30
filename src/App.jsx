import "./App.css";
import Banner from "./components/Banner.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import { Button, Container } from "react-bootstrap";
import RobotsList from "./components/RobotsList.jsx";
import { IntlProvider } from "react-intl";
import { useEffect, useState } from "react";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState(localeEsMessages);

  useEffect(() => {
    if (language.includes("es")) {
      setMessages(localeEsMessages);
    } else if (language.includes("en")) {
      setMessages(localeEnMessages);
    }
  }, [language]);

  return (
    <IntlProvider locale={language} messages={messages} defaultLocale="en">
      <Button
        onClick={() => setLanguage(language.includes("en") ? "es" : "en")}
        style={{ position: "absolute", right: 10, top: 10 }}
      >
        {language.includes("en") ? "Español" : "English"}
      </Button>
      <Container>
        <Banner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/home" element={<RobotsList />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </IntlProvider>
  );
};

export default App;

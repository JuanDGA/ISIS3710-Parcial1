import "./App.css";
import Banner from "./components/Banner.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import { Container } from "react-bootstrap";
import RobotsList from "./components/RobotsList.jsx";

const App = () => {
  return (
    <Container>
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<RobotsList />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;

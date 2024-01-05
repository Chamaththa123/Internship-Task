import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import UpdateDataForm from "./components/UpdateDataForm ";

function AppRoute() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />}></Route>
          <Route path="/Update/:id" element={<UpdateDataForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoute;

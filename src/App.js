import "./App.css";
import DefalutLayout from "./Layout";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Forgot from "./Page/ForgotPass/ForgotPass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefalutLayout></DefalutLayout>} />
        <Route
          path="/login"
          element={<DefalutLayout>{<Login />}</DefalutLayout>}
          // element={<Login />}
        />
        <Route
          path="/register"
          element={<DefalutLayout>{<Register />}</DefalutLayout>}
        />
        <Route
          path="/forgot"
          element={<DefalutLayout>{<Forgot />}</DefalutLayout>}
        />
      </Routes>
    </Router>
  );
}

export default App;

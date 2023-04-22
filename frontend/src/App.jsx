import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import LoginSignup from "./components/user/loginSignup";
import "./components/header/Header.css";
import "./App.css";
import SubjectPage from "./components/subjectPage/subjectPage";
import PaperPage from "./components/paperPage/paperPage";
import Dashboard from "./components/dashboard/dashboard";
import PaperDashboard from "./components/dashboard/paperDashboard";
import Logout from "./components/user/Logout";
import PaperEdit from "./components/dashboard/PaperEdit/PaperEdit";
import Create from "./components/dashboard/PaperCreate/Create";
import Footer from "./components/footer/Footer";
import Disclaimer from "./components/disclaimer/Disclaimer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="dashboard/edit/:branchShort/:subCode/:year/:id" element={<PaperEdit />} />
          <Route path="/:id/:branchShort" element={<SubjectPage />} />
          <Route path="/dashboard/:id/:branchShort" element={<SubjectPage />} />
          <Route path="/dashboard/:id/:branchShort/:subCode" element={<PaperDashboard />} />
          <Route path="/dashboard/:id/:branchShort/:subCode/create" element={<Create />} />
          <Route path="/disclaimer" element={<Disclaimer/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>

          <Route
            path="/:id/:branchShort/:subCode"
            element={<PaperPage />}
          />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

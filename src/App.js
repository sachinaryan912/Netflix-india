import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignInPage from './Pages/SignInPage';
import FinishSettingUp from './Pages/RegistrationBulks/FinishSettingUp';
import CreatePassword from './Pages/RegistrationBulks/CreatePassword';
import ChoosePlanFinal from './Pages/RegistrationBulks/ChoosePlanFinal';
import ChoosePlanPage1 from './Pages/RegistrationBulks/ChoosePlanPage1';
import VerifyEmailPage from './Pages/RegistrationBulks/VerifyEmailPage';
import RegistrationPage from './Pages/RegistrationPage';
import Home from './Pages/HomePage';
import ManageProfiles from './Pages/ManageProfiles';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageProfile" element={<ManageProfiles />} />
        <Route path="/startregistration" element={<FinishSettingUp />} />
        <Route path="/register" element={<CreatePassword />} />
        <Route path="/register/verifyemail" element={<VerifyEmailPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/register/plan" element={<ChoosePlanPage1 />} />
        <Route path="/register/plan/subscribe" element={<ChoosePlanFinal />} />
      </Routes>
    </Router>
  );
}

export default App;

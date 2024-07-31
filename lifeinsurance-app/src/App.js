import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Components/AboutUs';
import AdminLogin from './Components/Adminlogin';
import ClaimsManagement from './Components/ClaimsManagement';
import Contact from './Components/ContactUs';
import CustomerManagement from './Components/CustomerManagement';
import Dashboard from './Components/Dashboard';
import FinalExpense from './Components/FinalExpenseInsurance';
import GroupLife from './Components/GroupLifeInsurance';
import GuaranteedIssueLife from './Components/GuaranteedIssueLife';
import Home from './Components/Home';
import IndexedUniversalLife from './Components/IndexedUniversalLife';
import Login from './Components/Login';
import PaymentsBilling from './Components/PaymentsBilling';
import PolicyManagement from './Components/PolicyManagement';
import ProfileSettings from './Components/ProfileSettings';
import Register from './Components/Register';
import ReportsAnalytics from './Components/ReportsAnalytics';
import Services from './Components/Services';
import Sidebar from './Components/Sidebar';
import SimplifiedIssueLife from './Components/SimplifiedIssueLife';
import TermLife from './Components/TermLife';
import UniversalLife from './Components/UniversalLife';
import VariableLife from './Components/VariableLife';
import VariableUniversalLife from './Components/VariableUniversalLife';
import WholeLife from './Components/WholeLife';
import Profile from './Components/Profile';
import Payment from './Components/Payment';

const App = () => {
  const [policies, setPolicies] = React.useState([]);
  const [customers, setCustomers] = React.useState([]);
  const [claims, setClaims] = React.useState([]);
  const [payments, setPayments] = React.useState([]);
  const [reports, setReports] = React.useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termlife" element={<TermLife />} />
        <Route path="/wholelife" element={<WholeLife />} />
        <Route path="/universallife" element={<UniversalLife />} />
        <Route path="/variablelife" element={<VariableLife />} />
        <Route path="/variableuniversallife" element={<VariableUniversalLife />} />
        <Route path="/indexeduniversallife" element={<IndexedUniversalLife />} />
        <Route path="/guaranteedissuelife" element={<GuaranteedIssueLife />} />
        <Route path="/simplifiedissuelife" element={<SimplifiedIssueLife />} />
        <Route path="/grouplife" element={<GroupLife />} />
        <Route path="/finalExpense" element={<FinalExpense />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/policy-management" element={<PolicyManagement policies={policies} setPolicies={setPolicies} />} />
        <Route path="/customer-management" element={<CustomerManagement customers={customers} setCustomers={setCustomers} />} />
        <Route path="/claims-management" element={<ClaimsManagement claims={claims} setClaims={setClaims} />} />
        <Route path="/payments-billing" element={<PaymentsBilling payments={payments} setPayments={setPayments} />} />
        <Route path="/reports-analytics" element={<ReportsAnalytics reports={reports} setReports={setReports} />} />
        <Route path="/payment" element={<Payment />} />

    
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login';
import NavigationMenu from './NavigationMenu';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import ManagementPanel from './ManagementPanel';
import PayslipManagementPanel from './PayslipManagementPanel';
import AddPayslip from './AddPayslip';
import AddPayslipManual from './AddPayslipManual';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/" element={<ManagementPanel />} />
        <Route path="/dashboard/payslip/" element={<PayslipManagementPanel />} />
        <Route path="/dashboard/payslip/add/" element={<AddPayslip />} />
        <Route path="/dashboard/payslip/addManual/" element={<AddPayslipManual />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;

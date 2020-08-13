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
import AddPayslipManualEmployee from './AddPayslipManualEmployee';
import EditPayslip from './EditPayslip';
import EditPayslipEmployee from './EditPayslipEmployee';
import DeletePayslip from './DeletePayslip';
import DeletePayslipEmployee from './DeletePayslipEmployee';

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
        <Route path="/dashboard/payslip/add/:date" element={<AddPayslip />} />
        <Route path="/dashboard/payslip/addManual/:date/" element={<AddPayslipManual />} />
        <Route path="/dashboard/payslip/addManual/form/:date/:id/" element={<AddPayslipManualEmployee />} />
        <Route path="/dashboard/payslip/edit/:date" element={<EditPayslip />} />
        <Route path="/dashboard/payslip/edit/:date/:id/" element={<EditPayslipEmployee />} />
        <Route path="/dashboard/payslip/delete/:date" element={<DeletePayslip />} />
        <Route path="/dashboard/payslip/delete/:date/:id/" element={<DeletePayslipEmployee />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;

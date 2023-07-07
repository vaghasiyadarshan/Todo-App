import './App.css';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './Page/Home';
import FormWizard from './Page/Form/FormWizard';

import { Provider } from 'react-redux';
import store from './Store/Store';
import EmployeeList from './Page/EmployeeList';
import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/FormWizard" element={<FormWizard />} />
                <Route path="/EmployeeList" element={<EmployeeList />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

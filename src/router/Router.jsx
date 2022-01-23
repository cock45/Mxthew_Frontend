import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/templates/Layout';
import Home from '../components/pages/Home'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
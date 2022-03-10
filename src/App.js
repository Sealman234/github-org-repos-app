import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import LoadingModal from './components/UI/LoadingModal';

const AllRepos = React.lazy(() => import('./pages/AllRepos'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingModal />}>
        <Routes>
          <Route path="/" element={<Navigate to="/repos" />} />
          <Route path="/repos" element={<AllRepos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

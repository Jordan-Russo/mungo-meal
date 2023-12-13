import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import { AuthProvider } from './hooks/Auth';
import ProtectedRoute from './components/ProtectedRoute';
import RootLayout from './components/RootLayout';
import Login from './pages/Login';
import WelcomePage from './pages/WelcomePage';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';

export default function App() {
  return (
    <CustomProvider theme="dark">
      <BrowserRouter>
        <AuthProvider>
          <RootLayout>
            <Routes>
              <Route
                path="/"
                element={<WelcomePage />}
              />
              <Route
                path="/search/:name"
                element={<SearchPage />}
              />
              <Route
                path="/product/:id"
                element={<ProductPage />}
              />              
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <FavoritesPage />
                  </ProtectedRoute>
              }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </RootLayout>
        </AuthProvider>
      </BrowserRouter>
    </CustomProvider>
  );
}
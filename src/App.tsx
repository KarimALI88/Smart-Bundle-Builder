import '@/App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAuth, AuthProvider } from '@/context/AuthContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout';
import GuestLayout from '@/layouts/GuestLayout';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import BuildBundle from '@/pages/BuildBundle';

const queryClient = new QueryClient();

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <AuthLayout>
                  <BuildBundle />
                </AuthLayout>
              </ProtectedRoute>} />
            <Route path="/login" element={<GuestLayout><Login /></GuestLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App;

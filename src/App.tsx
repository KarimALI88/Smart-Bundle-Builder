import '@/App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

const queryClient = new QueryClient();
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};  

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Smart Bundle Builder</h1>
    </QueryClientProvider>
  )
}

export default App

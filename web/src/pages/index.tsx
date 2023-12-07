import Home from '@/components/ui/home';
import { FC } from 'react';
import { useSession } from 'next-auth/react';
import Dashboard from '@/components/ui/dashboard';


export const App: FC = () => {
  const { status } = useSession();

  return status === 'authenticated' ? <Dashboard /> : <Home />;
};

export default App;

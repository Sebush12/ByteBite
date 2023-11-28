import Home from '@/components/ui/home';
import { FC } from 'react';
import { useSession } from 'next-auth/react';
import Dashboard from '@/components/ui/dashboard';

export const App: FC = () => {
  const testing = false;
  const {data, status} = useSession();
  if(testing) {
    return (<div>
      {data?.user ? <h1>{data?.user?.name}</h1> : <h1>nothing</h1>}
    </div>);
  } else {

    if (status == "unauthenticated") return <Dashboard />;

    else return <Home />;
  }
};

export default App;

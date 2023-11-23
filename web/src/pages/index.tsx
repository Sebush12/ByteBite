import Home from '@/components/ui/home';
import { FC } from 'react';
import Dashboard from '@/components/ui/dashboard';
import AddFoodItem from '@/components/forms/add-food';
import { useSession } from 'next-auth/react';
import { SettingsPage } from '@/components/ui/settings/settings-page';

export const App: FC = () => {
  const testing = false;
  const {status} = useSession();
  if(testing) {
    return <AddFoodItem />;
  } else {
    if (status == "unauthenticated") return <SettingsPage />;
    else return <Home />;
  }
};

export default App;

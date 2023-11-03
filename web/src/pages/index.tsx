import Account from "@/components/ui/account";
import Home from "@/components/ui/home";
import { FC } from "react";
import { useSession } from "next-auth/react"
import Dashboard from "@/components/ui/dashboard";

export const App: FC = () => {
const testing = true; 
  if(testing) {
    return <Account />;
  } else {
     const {status} = useSession();
     if(status == 'authenticated') return <Dashboard />
     else return <Home />;
  } 
};

export default App;

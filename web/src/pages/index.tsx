import Account from "@/components/ui/account";
import Home from "@/components/ui/home";
import { FC } from "react";
import { useSession } from "next-auth/react"
import Dashboard from "@/components/ui/dashboard";
import AddFoodItem from "@/components/forms/add-food";

export const App: FC = () => {
const testing = false;
const {status} = useSession()
  if(testing) {
    return <AddFoodItem />;
  } else {
    if(status == 'unauthenticated') return <Dashboard />;
    else return <Home />;
  }
};

export default App;

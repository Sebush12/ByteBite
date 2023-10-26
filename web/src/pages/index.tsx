import { SignupForm } from "@/components/forms/signup";
import Home from "@/components/ui/home";
import { useRouter } from "next/router";

import { FC } from "react";
import Dashboard from "@/components/ui/dashboard";
import AboutUs from "@/components/forms/aboutus";

export const App: FC = () => {
  //const route = useRouter();
  return <AboutUs />;
};

export default App;

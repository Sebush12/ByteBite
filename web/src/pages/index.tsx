import { SignupForm } from "@/components/forms/signup";
import { useRouter } from "next/router";
import { FC } from "react";

export const App: FC = () => {
  //const route = useRouter();
  return (
    <SignupForm/>
  )
}

export default App;

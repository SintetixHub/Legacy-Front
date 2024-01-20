import SignupForm from "../components/SignupForm";
import { useLocation } from "react-router-dom";

export default function Signup() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className="max-w-6xl m-auto flex items-center justify-center min-h-[calc(100vh-400px)]">
      <SignupForm />
    </div>
  );
}

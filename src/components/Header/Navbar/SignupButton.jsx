import { useNavigate } from 'react-router-dom';

export default function SignupButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth/signup');
  }

  return (
    <button onClick={handleClick} className="border-2 text-white px-4 py-1 rounded-lg border-gray-500 hover:bg-zinc-700">
      Sign Up
    </button>
  );
}
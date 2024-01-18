import { useNavigate } from 'react-router-dom';

export default function LoginButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth/login');
  }

  return (
    <button onClick={handleClick} className="border-2 text-white px-4 py-1 rounded-lg border-zinc-500 hover:bg-zinc-700">
      Login
    </button>
  );
}
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface LoaderBtnProps {
  content: string;
  onClick: () => void;
}
const LoaderBtn: React.FC<LoaderBtnProps> = ({ content, onClick }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true)
    try {
      await onClick();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button onClick={handleClick} disabled={isLoading} className="p-2 rounded bg-sky-500 text-white hover:bg-sky-600 transition-all duration-300">
      {isLoading ? <Loader2 className="animate-spin" /> : content}
    </button>
  );
};

export default LoaderBtn;

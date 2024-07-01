import { ArrowUp } from "lucide-react";

const GotoTopBtn = () => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-black p-2 rounded-full">
      <ArrowUp className="h-10 w-10 text-white" />
    </button>
  );
};

export default GotoTopBtn;

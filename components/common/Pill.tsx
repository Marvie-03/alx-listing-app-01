import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive
          ? 'bg-gray-900 text-white shadow-md'
          : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
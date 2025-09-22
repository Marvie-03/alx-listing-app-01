import { useState } from "react";
import Pill from "./Pill";

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = [
    'All',
    'Top Villa',
    'Free Reschedule',
    'Book Now, Pay later',
    'Self Checkin',
    'Instant Book'
  ];

  return (
    <div className="w-full py-6 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

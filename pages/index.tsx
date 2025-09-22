import Card from "@/components/common/Card";
import FilterSection from "@/components/common/FilterSection";
import HeroSection from "@/components/common/Hero";
import { PROPERTYLISTINGSAMPLE } from "@/constants";


export default function Home() {
 return(
    <>
  <HeroSection />
  <FilterSection />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {PROPERTYLISTINGSAMPLE.map((property, index) => (
    <Card 
      key={index}
      property={property}
      
    />
  ))}
    </div>
    </>

 )
}

import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="flex justify-center gap-9 flex-wrap">
      {services.map((service)=> (
        <div>
          <ServiceCard key={service.label} {...service}/>
        </div>
      ))}
    </section>
  );
};

export default Services
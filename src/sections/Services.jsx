import { services } from "../constanats"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className="flex flex-wrap justify-center gap-9 max-container gap-9">
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services
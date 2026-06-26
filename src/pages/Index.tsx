import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhoFor } from "@/components/WhoFor";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhoFor />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

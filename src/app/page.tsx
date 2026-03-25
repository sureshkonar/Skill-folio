import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Hackathons from "@/components/Hackathons";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Timeline from "@/components/Timeline";
import Recommendations from "@/components/Recommendations";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>
      <About />
      <Experience />
      <Timeline />
      <Projects />
      <Hackathons />
      <Recommendations />
      <Contact />
    </main>
  );
}

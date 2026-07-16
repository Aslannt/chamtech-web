import { About } from "@/components/sections/about";
import { Architecture } from "@/components/sections/architecture";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Verification } from "@/components/sections/verification";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Architecture />
      <Projects />
      <Verification />
      <Contact />
    </main>
  );
}

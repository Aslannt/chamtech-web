import { About } from "@/components/sections/about";
import { Architecture } from "@/components/sections/architecture";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { PlaygroundInvitation } from "@/components/sections/playground-invitation";
import { Skills } from "@/components/sections/skills";
import { Verification } from "@/components/sections/verification";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Architecture />
      <PlaygroundInvitation />
      <Projects />
      <Verification />
      <Contact />
    </main>
  );
}

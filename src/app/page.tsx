import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
    return (
        <>
            <SiteHeader />

            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
            </main>
        </>
    );
}
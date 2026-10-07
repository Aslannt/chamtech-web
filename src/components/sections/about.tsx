import { CountUp } from "@/components/motion/count-up";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
    {
        value: "3+",
        label: "Years in software development",
    },
    {
        value: "2+",
        label: "Years focused on integration",
    },
    {
        value: "4",
        label: "Engineering teams, from academia to banking",
    },
];

export function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="scroll-mt-24 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
                <div id="about-title">
                    <SectionHeading
                        eyebrow="01 / About"
                        title="Built around integration."
                        accent="Grounded in backend."
                    />
                </div>

                <div className="mt-14 grid gap-14 lg:grid-cols-[1.35fr_0.65fr]">
                    <div data-reveal className="max-w-3xl space-y-6 text-base leading-8 text-muted sm:text-[17px]">
                        <p className="text-xl leading-9 text-foreground sm:text-[22px] sm:leading-10">
                            I&apos;m a software developer with more than three years of
                            experience building and maintaining applications, APIs and data
                            integration processes.
                        </p>

                        <p>
                            My professional work has focused on MuleSoft, REST APIs, ETL,
                            Oracle, SQL, DataWeave, RAML, JSON and XML. Today I build Java
                            backend services on APX for BBVA at Novatec, and I keep
                            sharpening Spring Boot through production-style projects.
                        </p>

                        <p>
                            I&apos;m currently in the ninth semester of Systems Engineering,
                            combining academic foundations with hands-on experience solving
                            integration and backend challenges.
                        </p>
                    </div>

                    <dl className="border-t border-foreground">
                        {highlights.map((highlight, index) => (
                            <div
                                key={highlight.label}
                                data-reveal
                                style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}
                                className="flex items-baseline justify-between gap-6 border-b border-border py-6"
                            >
                                <dt className="max-w-[12rem] text-sm leading-6 text-muted">{highlight.label}</dt>
                                <dd className="text-5xl font-light tracking-[-0.05em]">
                                    <CountUp value={highlight.value} />
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <p data-reveal className="mt-16 max-w-3xl border-l-2 border-primary pl-5 text-sm leading-7 text-muted">
                    <span className="font-semibold text-foreground">ChamTech</span> is
                    my personal software laboratory and project ecosystem. It is not a
                    company or commercial organization.
                </p>
            </div>
        </section>
    );
}

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
        value: "9th",
        label: "Semester of Systems Engineering",
    },
];

export function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="scroll-mt-28 border-t border-border py-24 sm:py-28"
        >
            <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
                <div className="grid gap-14 lg:grid-cols-[1.45fr_0.75fr] lg:items-start">
                    <div>
                        <div id="about-title">
                            <SectionHeading
                                eyebrow="01 / About"
                                title="Built around integration. Grounded in backend."
                            />
                        </div>

                        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-muted sm:text-lg">
                            <p>
                                I&apos;m a software developer with more than three years of
                                experience building and maintaining applications, APIs and data
                                integration processes.
                            </p>

                            <p>
                                My professional work has focused on MuleSoft, REST APIs, ETL,
                                Oracle, SQL, DataWeave, RAML, JSON and XML. I&apos;m also
                                strengthening my Java and Spring Boot profile through
                                production-style backend projects.
                            </p>

                            <p>
                                I&apos;m currently in the ninth semester of Systems Engineering,
                                combining academic foundations with hands-on experience solving
                                integration and backend challenges.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        {highlights.map((highlight) => (
                            <article
                                key={highlight.label}
                                className="surface-card rounded-2xl p-6"
                            >
                                <p className="font-mono text-3xl font-semibold text-primary-bright">
                                    {highlight.value}
                                </p>
                                <p className="mt-3 text-sm leading-6 text-muted">
                                    {highlight.label}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-14 rounded-2xl border border-primary/25 bg-primary/5 px-6 py-5 sm:px-8">
                    <p className="text-sm leading-7 text-muted">
                        <span className="font-semibold text-foreground">ChamTech</span> is
                        my personal software laboratory and project ecosystem. It is not a
                        company or commercial organization.
                    </p>
                </div>
            </div>
        </section>
    );
}
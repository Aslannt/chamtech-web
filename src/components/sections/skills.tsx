import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

export function Skills() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-title"
            className="scroll-mt-28 border-t border-border py-24 sm:py-28"
        >
            <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
                <div id="skills-title">
                    <SectionHeading
                        eyebrow="02 / Skills & Technologies"
                        title="Tools selected for reliable systems."
                        description="A practical stack for backend development, enterprise integration, data processing and technical verification."
                    />
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {skillGroups.map((group, index) => (
                        <article
                            key={group.title}
                            className="surface-card rounded-2xl p-6 sm:p-7"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold">{group.title}</h3>
                                    <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                                        {group.description}
                                    </p>
                                </div>

                                <span className="font-mono text-xs text-primary-bright">
                  {String(index + 1).padStart(2, "0")}
                </span>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-border bg-background px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-primary/70 hover:text-foreground"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
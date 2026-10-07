import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

export function Skills() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-title"
            className="scroll-mt-24 border-t border-border bg-surface py-24 sm:py-32"
        >
            <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
                <div id="skills-title">
                    <SectionHeading
                        eyebrow="02 / Skills & Technologies"
                        title="Tools selected for"
                        accent="reliable systems."
                        description="A practical stack for backend development, enterprise integration, data processing and technical verification."
                    />
                </div>

                <div className="mt-14 grid border-l border-t border-border md:grid-cols-2">
                    {skillGroups.map((group, index) => (
                        <article
                            key={group.title}
                            data-reveal
                            style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
                            className="group relative border-b border-r border-border p-7 transition-colors duration-500 hover:bg-background sm:p-9"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                            />
                            <div className="flex items-start justify-between gap-6">
                                <h3 className="text-2xl font-light tracking-[-0.03em]">{group.title}</h3>
                                <span className="font-mono text-[11px] text-primary-bright">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                                {group.description}
                            </p>

                            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2 font-mono text-[12px] text-foreground/80"
                                    >
                                        <span aria-hidden="true" className="size-1 rounded-full bg-primary/70" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

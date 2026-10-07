import { LocalizedExperiencePeriod } from "@/components/ui/localized-profile-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";

export function Experience() {
    return (
        <section
            id="experience"
            aria-labelledby="experience-title"
            className="scroll-mt-24 border-t border-border py-24 sm:py-32"
        >
            <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
                <div id="experience-title">
                    <SectionHeading
                        eyebrow="03 / Experience"
                        title="Building systems that"
                        accent="need to connect."
                        description="Professional experience across enterprise integration, APIs, data processing and application development."
                    />
                </div>

                <ol data-reveal className="relative mt-16">
                    <span
                        aria-hidden="true"
                        className="draw-line-y absolute bottom-0 left-[7px] top-2 w-px bg-border md:left-[calc(16rem+7px)]"
                    />
                    {experience.map((item, index) => {
                        const isCurrent = "current" in item && item.current;
                        return (
                            <li
                                key={`${item.company}-${item.role}`}
                                data-reveal
                                style={{ "--delay": `${index * 110}ms` } as React.CSSProperties}
                                className="relative grid gap-4 pb-14 pl-10 last:pb-0 md:grid-cols-[16rem_1fr] md:gap-0 md:pl-0"
                            >
                                <div className="md:pr-12 md:pt-1 md:text-right">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                                        <LocalizedExperiencePeriod period={item.period} />
                                    </p>
                                    {item.context ? (
                                        <p className="mt-2 text-xs text-muted/80">{item.context}</p>
                                    ) : null}
                                </div>

                                <span
                                    aria-hidden="true"
                                    className={`absolute left-0 top-1.5 grid size-[15px] place-items-center rounded-full border md:left-64 ${
                                        isCurrent
                                            ? "border-primary bg-primary/15"
                                            : "border-border bg-background"
                                    }`}
                                >
                                    <span
                                        className={`size-[5px] rounded-full ${
                                            isCurrent ? "pulse-dot bg-primary text-primary" : "bg-muted/60"
                                        }`}
                                    />
                                </span>

                                <article className="md:pl-12">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <p className="font-mono text-xs font-semibold tracking-[0.18em] text-primary-bright">
                                            {item.company}
                                        </p>
                                        {isCurrent ? (
                                            <span className="rounded-full bg-primary px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
                                                Now
                                            </span>
                                        ) : null}
                                    </div>

                                    <h3 className="mt-2 text-[1.75rem] font-light tracking-[-0.035em]">
                                        {item.role}
                                    </h3>

                                    <ul className="mt-5 grid max-w-3xl gap-2.5">
                                        {item.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="flex gap-3 text-[15px] leading-7 text-muted"
                                            >
                                                <span aria-hidden="true" className="mt-[13px] h-px w-3 shrink-0 bg-primary" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p data-no-translate className="mt-5 font-mono text-[11px] leading-6 text-muted">
                                        {item.technologies.join("  ·  ")}
                                    </p>
                                </article>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}

import { LocalizedExperiencePeriod } from "@/components/ui/localized-profile-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";

export function Experience() {
    return (
        <section
            id="experience"
            aria-labelledby="experience-title"
            className="scroll-mt-28 border-t border-border py-24 sm:py-28"
        >
            <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
                <div id="experience-title">
                    <SectionHeading
                        eyebrow="03 / Experience"
                        title="Building systems that need to connect."
                        description="Professional experience across enterprise integration, APIs, data processing and application development."
                    />
                </div>

                <ol className="relative mt-14 space-y-8 border-l border-border pl-8 sm:pl-10">
                    {experience.map((item) => (
                        <li key={`${item.company}-${item.role}`} className="relative">
              <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-8 size-4 rounded-full border-4 border-background bg-primary sm:-left-[49px]"
              />

                            <article className="surface-card rounded-2xl p-6 sm:p-8">
                                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                                    <div>
                                        <p className="font-mono text-xs tracking-[0.16em] text-primary-bright">
                                            {item.company}
                                        </p>

                                        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                                            {item.role}
                                        </h3>
                                    </div>

                                    <p className="w-fit rounded-full border border-border bg-background px-4 py-2 font-mono text-xs text-muted">
                                        <LocalizedExperiencePeriod period={item.period} />
                                    </p>
                                </div>

                                <ul className="mt-7 grid gap-3">
                                    {item.highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="flex gap-3 text-sm leading-7 text-muted"
                                        >
                      <span
                          aria-hidden="true"
                          className="mt-[11px] size-1.5 shrink-0 rounded-full bg-primary"
                      />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-7 flex flex-wrap gap-2 border-t border-border/70 pt-6">
                                    {item.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-border bg-background px-3 py-2 font-mono text-xs text-muted"
                                        >
                      {technology}
                    </span>
                                    ))}
                                </div>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

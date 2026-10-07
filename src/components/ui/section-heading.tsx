type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    /** Optional second clause, set in the editorial serif italic. */
    accent?: string;
    description?: string;
    align?: "left" | "center";
};

export function SectionHeading({
                                   eyebrow,
                                   title,
                                   accent,
                                   description,
                                   align = "left",
                               }: SectionHeadingProps) {
    const alignment =
        align === "center"
            ? "mx-auto items-center text-center"
            : "items-start text-left";

    return (
        <header data-reveal className={`flex w-full flex-col ${alignment}`}>
            <div className="flex w-full items-center gap-4">
                <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-bright">
                    {eyebrow}
                </p>
                <span aria-hidden="true" className="draw-line h-px flex-1 bg-border" />
            </div>

            <h2 className="mt-7 max-w-4xl text-[2.5rem] font-light leading-[1.04] tracking-[-0.045em] sm:text-[3.5rem]">
                <span>{title}</span>
                {accent ? (
                    <>
                        {" "}
                        <span className="font-serif italic tracking-[-0.02em] text-primary-bright">{accent}</span>
                    </>
                ) : null}
            </h2>

            {description ? (
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-[17px]">
                    {description}
                </p>
            ) : null}
        </header>
    );
}

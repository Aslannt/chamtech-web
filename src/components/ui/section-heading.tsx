type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

export function SectionHeading({
                                   eyebrow,
                                   title,
                                   description,
                                   align = "left",
                               }: SectionHeadingProps) {
    const alignment =
        align === "center"
            ? "mx-auto items-center text-center"
            : "items-start text-left";

    return (
        <header className={`flex max-w-3xl flex-col ${alignment}`}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-bright">
                {eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {title}
            </h2>

            {description ? (
                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                    {description}
                </p>
            ) : null}
        </header>
    );
}
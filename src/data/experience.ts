export type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    highlights: readonly string[];
    technologies: readonly string[];
};

export const experience = [
    {
        company: "PHIDIMENSIONS",
        role: "MuleSoft & Integration Developer",
        period: "June 2024 – Present",
        highlights: [
            "Development, maintenance and migration of REST APIs and ETL processes with MuleSoft.",
            "Integration between services, applications and Oracle databases.",
            "Data transformation with DataWeave, JSON and XML.",
            "Error handling, traceability, correlation IDs, technical documentation and Git.",
        ],
        technologies: [
            "MuleSoft",
            "DataWeave",
            "REST APIs",
            "ETL",
            "Oracle",
            "CloudHub",
        ],
    },
    {
        company: "UNINPAHU",
        role: "Software Developer",
        period: "October 2022 – December 2023",
        highlights: [
            "Development and maintenance of academic and administrative applications.",
            "Optimization of Oracle and SQL Server queries and processes.",
            "Internal process automation, issue resolution and technical documentation.",
        ],
        technologies: [
            "Software Development",
            "Oracle",
            "SQL Server",
            "Automation",
            "Git",
        ],
    },
] as const satisfies readonly ExperienceItem[];
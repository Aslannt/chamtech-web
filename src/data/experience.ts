export type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    current?: boolean;
    context?: string;
    highlights: readonly string[];
    technologies: readonly string[];
};

export const experience = [
    {
        company: "NOVATEC",
        role: "APX Developer",
        period: "October 2026 – Present",
        current: true,
        context: "BBVA project · Bogotá · Hybrid",
        highlights: [
            "Java backend development on APX, BBVA's architecture for online and batch transactions.",
            "Building transactions, DTOs and libraries under the bank's development, quality and security standards.",
            "Secure development practices aligned with OWASP for banking services.",
        ],
        technologies: ["Java", "APX", "Maven", "Git", "OWASP"],
    },
    {
        company: "GLOBANT",
        role: "MuleSoft Integration Developer",
        period: "August 2026 – October 2026",
        context: "Contractor · Remote",
        highlights: [
            "Integration track of a Salesforce org separation for a telecommunications client.",
            "Cloned and adapted Mule 4 integrations for Leads, Contacts and Opportunities to the new org.",
            "RAML specifications with APIkit published to Anypoint Exchange, and DataWeave transformations.",
            "Knowledge transfer of the integration flows to other team members.",
        ],
        technologies: ["Mule 4", "Anypoint Platform", "RAML", "APIkit", "DataWeave", "Salesforce"],
    },
    {
        company: "PHIDIMENSIONS",
        role: "MuleSoft & Integration Developer",
        period: "July 2024 – August 2026",
        context: "Remote",
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
        context: "Bogotá · On-site",
        highlights: [
            "Development and maintenance of academic and administrative applications.",
            "Optimization of Oracle and SQL Server queries and processes.",
            "Internal process automation, issue resolution and technical documentation.",
        ],
        technologies: [
            "Java",
            "Oracle",
            "SQL Server",
            "SQL",
            "Git",
        ],
    },
] as const satisfies readonly ExperienceItem[];

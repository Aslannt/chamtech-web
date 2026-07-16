export type SkillGroup = {
    title: string;
    description: string;
    items: readonly string[];
};

export const skillGroups = [
    {
        title: "Backend Engineering",
        description:
            "Secure REST services, domain rules, persistence and automated verification.",
        items: [
            "Java 21",
            "Spring Boot",
            "Spring Security",
            "Spring Data JPA",
            "JWT",
            "Maven",
            "JUnit",
            "OpenAPI",
        ],
    },
    {
        title: "Enterprise Integration",
        description:
            "API communication, orchestration, transformation and system migration.",
        items: [
            "Mule Runtime 4",
            "Anypoint Platform",
            "APIKit",
            "RAML",
            "DataWeave",
            "MUnit",
            "CloudHub",
            "ETL",
        ],
    },
    {
        title: "Data & Infrastructure",
        description:
            "Relational data, migrations, containerized environments and source control.",
        items: [
            "PostgreSQL",
            "Oracle",
            "SQL Server",
            "SQL",
            "Flyway",
            "Docker",
            "Git",
            "GitHub",
        ],
    },
    {
        title: "Tools",
        description:
            "Daily tools for development, API testing, documentation and database work.",
        items: ["Postman", "DBeaver", "Swagger", "Anypoint Studio"],
    },
] as const satisfies readonly SkillGroup[];
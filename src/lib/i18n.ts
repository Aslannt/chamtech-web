export type Locale = "en" | "es";

const es: Record<string, string> = {
  "Home": "Inicio", "About": "Perfil", "Skills": "Habilidades", "Experience": "Experiencia",
  "Architecture": "Arquitectura", "Projects": "Proyectos", "Playground": "Simulador",
  "Let's talk": "Hablemos", "Personal software lab": "Laboratorio personal de software",
  "Primary navigation": "Navegación principal", "Mobile navigation": "Navegación móvil",
  "Open navigation menu": "Abrir menú de navegación", "Close navigation menu": "Cerrar menú de navegación",
  "Back to top ↑": "Volver arriba ↑", "ChamTech is a personal software lab.": "ChamTech es un laboratorio personal de software.",
  "Open ChamTech Lab": "Abrir ChamTech Lab", "Something is incubating": "Algo se está incubando",

  "Open to backend and integration opportunities": "Disponible para oportunidades de backend e integración",
  "Hello, I'm": "Hola, soy", "Backend & Integration Developer": "Desarrollador Backend e Integración",
  "I build backend services and enterprise integrations focused on maintainability, traceability, data transformation and reliable API communication.": "Construyo servicios backend e integraciones empresariales con énfasis en mantenibilidad, trazabilidad, transformación de datos y comunicación confiable entre APIs.",
  "View my work": "Ver mi trabajo", "Download CV": "Descargar CV", "ChamTech architecture preview": "Vista previa de la arquitectura de ChamTech",
  "01 / About": "01 / Perfil", "Built around integration. Grounded in backend.": "Construido alrededor de la integración. Fundamentado en backend.",
  "I'm a software developer with more than three years of experience building and maintaining applications, APIs and data integration processes.": "Soy desarrollador de software con más de tres años de experiencia construyendo y manteniendo aplicaciones, APIs y procesos de integración de datos.",
  "My professional work has focused on MuleSoft, REST APIs, ETL, Oracle, SQL, DataWeave, RAML, JSON and XML. I'm also strengthening my Java and Spring Boot profile through production-style backend projects.": "Mi trabajo profesional se ha enfocado en MuleSoft, APIs REST, ETL, Oracle, SQL, DataWeave, RAML, JSON y XML. También continúo fortaleciendo mi perfil en Java y Spring Boot mediante proyectos backend con enfoque de producción.",
  "I'm currently in the ninth semester of Systems Engineering, combining academic foundations with hands-on experience solving integration and backend challenges.": "Actualmente curso noveno semestre de Ingeniería de Sistemas y combino fundamentos académicos con experiencia práctica resolviendo retos de integración y backend.",
  "Years in software development": "Años en desarrollo de software", "Years focused on integration": "Años enfocado en integración", "Semester of Systems Engineering": "Semestre de Ingeniería de Sistemas",
  "ChamTech is my personal software laboratory and project ecosystem. It is not a company or commercial organization.": "ChamTech es mi laboratorio personal de software y ecosistema de proyectos. No es una empresa ni una organización comercial.",
  "02 / Skills & Technologies": "02 / Habilidades y tecnologías", "Tools selected for reliable systems.": "Herramientas seleccionadas para sistemas confiables.",
  "A practical stack for backend development, enterprise integration, data processing and technical verification.": "Un stack práctico para desarrollo backend, integración empresarial, procesamiento de datos y verificación técnica.",
  "Backend Engineering": "Ingeniería Backend", "Secure REST services, domain rules, persistence and automated verification.": "Servicios REST seguros, reglas de dominio, persistencia y verificación automatizada.",
  "Enterprise Integration": "Integración Empresarial", "API communication, orchestration, transformation and system migration.": "Comunicación entre APIs, orquestación, transformación y migración de sistemas.",
  "Data & Infrastructure": "Datos e Infraestructura", "Relational data, migrations, containerized environments and source control.": "Datos relacionales, migraciones, entornos contenerizados y control de versiones.",
  "Tools": "Herramientas", "Daily tools for development, API testing, documentation and database work.": "Herramientas cotidianas para desarrollo, pruebas de APIs, documentación y trabajo con bases de datos.",
  "03 / Experience": "03 / Experiencia", "Building systems that need to connect.": "Construyendo sistemas que necesitan conectarse.",
  "Professional experience across enterprise integration, APIs, data processing and application development.": "Experiencia profesional en integración empresarial, APIs, procesamiento de datos y desarrollo de aplicaciones.",
  "MuleSoft & Integration Developer": "Desarrollador MuleSoft e Integración", "Software Developer": "Desarrollador de Software",
  "June 2024 – Present": "Junio de 2024 – Actualidad", "October 2022 – December 2023": "Octubre de 2022 – Diciembre de 2023",
  "Development, maintenance and migration of REST APIs and ETL processes with MuleSoft.": "Desarrollo, mantenimiento y migración de APIs REST y procesos ETL con MuleSoft.",
  "Integration between services, applications and Oracle databases.": "Integración entre servicios, aplicaciones y bases de datos Oracle.",
  "Data transformation with DataWeave, JSON and XML.": "Transformación de datos con DataWeave, JSON y XML.",
  "Error handling, traceability, correlation IDs, technical documentation and Git.": "Manejo de errores, trazabilidad, identificadores de correlación, documentación técnica y Git.",
  "Development and maintenance of academic and administrative applications.": "Desarrollo y mantenimiento de aplicaciones académicas y administrativas.",
  "Optimization of Oracle and SQL Server queries and processes.": "Optimización de consultas y procesos en Oracle y SQL Server.",
  "Internal process automation, issue resolution and technical documentation.": "Automatización de procesos internos, resolución de incidencias y documentación técnica.",
  "Software Development": "Desarrollo de Software", "Automation": "Automatización",
  "04 / ChamTech Architecture": "04 / Arquitectura ChamTech", "How the projects connect.": "Cómo se conectan los proyectos.",
  "A backend and integration case study where MuleSoft shields the consumer from authentication, pagination and internal backend response details.": "Un caso de estudio de backend e integración donde MuleSoft protege al consumidor de la autenticación, la paginación y los detalles internos de respuesta del backend.",
  "Client": "Cliente", "Authenticated request": "Solicitud autenticada", "Confirmed orders": "Órdenes confirmadas",
  "JWT authentication": "Autenticación JWT", "Sequential pagination": "Paginación secuencial", "DataWeave canonical mapping": "Mapeo canónico con DataWeave",
  "Security and business rules": "Seguridad y reglas de negocio", "Historical snapshots": "Instantáneas históricas", "Standardized errors": "Errores estandarizados",
  "Data": "Datos", "Persistent records": "Registros persistentes", "Monetary constraints": "Restricciones monetarias",
  "Canonical downstream output": "Salida canónica para el sistema destino", "MuleSoft generates a canonical JSON file that simulates delivery to an ERP.": "MuleSoft genera un archivo JSON canónico que simula la entrega a un ERP.",
  "Local simulator · Not a real ERP": "Simulador local · No es un ERP real",
  "Interactive case study": "Caso de estudio interactivo", "Explore the architecture interactively.": "Explora la arquitectura de forma interactiva.",
  "Run a synthetic order synchronization and inspect pagination, correlation tracking, stable errors and canonical transformation.": "Ejecuta una sincronización sintética de órdenes e inspecciona la paginación, la trazabilidad por correlación, los errores estables y la transformación canónica.",
  "Launch Sync Playground": "Abrir simulador de sincronización",
  "05 / Featured Projects": "05 / Proyectos destacados", "Two projects. One connected system.": "Dos proyectos. Un sistema conectado.",
  "Verified case studies that demonstrate backend engineering and enterprise integration as complementary disciplines.": "Casos de estudio verificados que demuestran la ingeniería backend y la integración empresarial como disciplinas complementarias.",
  "Consumer": "Consumidor", "View case study": "Ver caso de estudio", "Locally verified Release Candidate": "Release Candidate verificado localmente",
  "06 / Verification & Metrics": "06 / Verificación y métricas", "Evidence before claims.": "Evidencia antes que afirmaciones.",
  "The portfolio reports only checks that were executed and reviewed in the local release-candidate environment.": "El portafolio reporta únicamente verificaciones ejecutadas y revisadas en el entorno local de Release Candidate.",
  "Automated tests": "Pruebas automatizadas", "Java tests": "Pruebas Java", "MUnit tests": "Pruebas MUnit", "Locally verified Release Candidates": "Release Candidates verificados localmente",
  "Verified environment": "Entorno verificado", "Real API + Mule synchronization": "Sincronización real entre API y Mule",
  "These results demonstrate a reproducible local portfolio scope. They do not claim production deployment, high availability or CI/CD execution.": "Estos resultados demuestran un alcance local reproducible para el portafolio. No afirman despliegue en producción, alta disponibilidad ni ejecución de CI/CD.",
  "07 / Contact": "07 / Contacto", "Let’s build something reliable.": "Construyamos algo confiable.",
  "I’m open to conversations about backend development, enterprise integration and Java or MuleSoft opportunities.": "Estoy abierto a conversaciones sobre desarrollo backend, integración empresarial y oportunidades con Java o MuleSoft.",
  "Send me an email": "Envíame un correo", "Curriculum vitae": "Hoja de vida", "Download CV · Spanish": "Descargar hoja de vida · Español",

  "Java backend": "Backend Java", "Enterprise integration": "Integración empresarial",
  "Production-style order management REST API built with Java 21, Spring Boot, PostgreSQL, Flyway, Docker and OpenAPI.": "API REST de gestión de órdenes con enfoque de producción, construida con Java 21, Spring Boot, PostgreSQL, Flyway, Docker y OpenAPI.",
  "MuleSoft integration that synchronizes confirmed orders from Cham Orders API into a canonical downstream JSON format.": "Integración MuleSoft que sincroniza órdenes confirmadas desde Cham Orders API hacia un formato JSON canónico para el sistema destino.",
  "Back to projects": "Volver a proyectos", "View repository ↗": "Ver repositorio ↗", "Project overview": "Resumen del proyecto",
  "Context and approach": "Contexto y enfoque", "Overview": "Descripción general", "Problem": "Problema", "Solution": "Solución",
  "Verified metrics": "Métricas verificadas", "Main capabilities": "Capacidades principales", "Verification evidence": "Evidencia de verificación",
  "Engineering decisions": "Decisiones de ingeniería", "Scope limitations": "Limitaciones de alcance", "Review the implementation": "Revisar la implementación",
  "Source code, documentation and reproducible local instructions are available on GitHub.": "El código fuente, la documentación y las instrucciones locales reproducibles están disponibles en GitHub.",
  "Open GitHub ↗": "Abrir GitHub ↗",
  "Cham Orders API is a transactional backend case study for managing users, customers, products and multi-item orders through a versioned REST contract.": "Cham Orders API es un caso de estudio backend transaccional para gestionar usuarios, clientes, productos y órdenes con múltiples ítems mediante un contrato REST versionado.",
  "Order systems must protect monetary calculations, preserve the historical state of purchased products and enforce authorization and lifecycle rules without leaking infrastructure details to clients.": "Los sistemas de órdenes deben proteger los cálculos monetarios, conservar el estado histórico de los productos comprados y aplicar reglas de autorización y ciclo de vida sin exponer detalles de infraestructura a los clientes.",
  "A feature-first Spring Boot modular monolith applies JWT authentication, role-based authorization, server-side BigDecimal calculations, historical item snapshots, explicit state transitions and a consistent correlation-aware error contract.": "Un monolito modular Spring Boot organizado por funcionalidades aplica autenticación JWT, autorización por roles, cálculos BigDecimal en el servidor, instantáneas históricas de ítems, transiciones de estado explícitas y un contrato de errores consistente con trazabilidad por correlación.",
  "Authenticated REST requests and correlation IDs.": "Solicitudes REST autenticadas e identificadores de correlación.",
  "Versioned controllers, DTO validation and OpenAPI.": "Controladores versionados, validación de DTOs y OpenAPI.",
  "Application modules": "Módulos de aplicación", "Business rules, security and transactional services.": "Reglas de negocio, seguridad y servicios transaccionales.",
  "Persistent data, constraints and Flyway migrations.": "Datos persistentes, restricciones y migraciones Flyway.",
  "JWT authentication and ADMIN/OPERATOR authorization.": "Autenticación JWT y autorización ADMIN/OPERATOR.",
  "Customer, product and multi-item order management.": "Gestión de clientes, productos y órdenes con múltiples ítems.",
  "Server-side monetary calculations with explicit mathematical limits.": "Cálculos monetarios en el servidor con límites matemáticos explícitos.",
  "Historical product name, SKU and price snapshots.": "Instantáneas históricas del nombre, SKU y precio del producto.",
  "PENDING to CONFIRMED or CANCELLED transitions.": "Transiciones de PENDING a CONFIRMED o CANCELLED.",
  "Pagination, filtering and correlation ID propagation.": "Paginación, filtrado y propagación del identificador de correlación.",
  "Standardized HTTP errors, OpenAPI and Swagger UI.": "Errores HTTP estandarizados, OpenAPI y Swagger UI.",
  "38 automated tests passed.": "38 pruebas automatizadas aprobadas.", "Maven clean test and clean package passed.": "Maven clean test y clean package aprobados.",
  "Docker image built and PostgreSQL 17.10 reported healthy.": "Imagen Docker construida y PostgreSQL 17.10 reportado como saludable.",
  "Flyway V1 and V2 applied successfully.": "Flyway V1 y V2 aplicadas correctamente.", "OpenAPI JSON and YAML returned HTTP 200.": "Los documentos OpenAPI JSON y YAML respondieron HTTP 200.",
  "Docker-backed release-candidate smoke test passed.": "Prueba de humo del Release Candidate respaldado por Docker aprobada.", "Clean-clone verification passed.": "Verificación desde un clon limpio aprobada.",
  "The server is the only authority for subtotals and totals.": "El servidor es la única autoridad para subtotales y totales.", "Order items store historical product snapshots.": "Los ítems de la orden almacenan instantáneas históricas del producto.",
  "Expected HTTP failures share one stable error contract.": "Los fallos HTTP esperados comparten un contrato de error estable.", "Flyway exclusively manages the PostgreSQL schema.": "Flyway administra exclusivamente el esquema de PostgreSQL.",
  "Correlation IDs are propagated when safe and generated otherwise.": "Los identificadores de correlación se propagan cuando son seguros y se generan en caso contrario.",
  "No public or production deployment.": "Sin despliegue público ni de producción.", "No refresh tokens, payments, inventory, shipping or messaging.": "Sin refresh tokens, pagos, inventario, envíos ni mensajería.",
  "No Testcontainers suite or remote CI execution yet.": "Aún sin suite Testcontainers ni ejecución remota de CI.", "Advanced observability and measured query optimization remain outside the MVP.": "La observabilidad avanzada y la optimización medida de consultas permanecen fuera del MVP.",
  "Cham Orders Mule Integration is a synchronous MuleSoft case study that retrieves every confirmed order page and converts the result into one canonical downstream JSON file.": "Cham Orders Mule Integration es un caso de estudio síncrono en MuleSoft que obtiene todas las páginas de órdenes confirmadas y convierte el resultado en un único archivo JSON canónico para el sistema destino.",
  "A downstream consumer should not depend directly on the backend's authentication flow, pagination mechanics or internal response shape, and the integration must preserve traceability across every call.": "Un consumidor destino no debe depender directamente del flujo de autenticación del backend, su mecánica de paginación ni su formato interno de respuesta; además, la integración debe conservar la trazabilidad en cada llamada.",
  "An APIKit operation authenticates against Cham Orders API, traverses pagination sequentially, validates response metadata, maps historical order data with DataWeave and writes a canonical file with the same correlation context.": "Una operación APIKit se autentica contra Cham Orders API, recorre la paginación secuencialmente, valida los metadatos de respuesta, mapea los datos históricos de las órdenes con DataWeave y escribe un archivo canónico con el mismo contexto de correlación.",
  "API Client": "Cliente API", "POST /api/v1/order-sync with optional correlation ID.": "POST /api/v1/order-sync con identificador de correlación opcional.",
  "RAML routing and request validation.": "Enrutamiento RAML y validación de solicitudes.", "Order sync": "Sincronización de órdenes", "Authentication, orchestration and sequential pagination.": "Autenticación, orquestación y paginación secuencial.",
  "Canonical order transformation and validation.": "Transformación y validación canónica de órdenes.", "JSON file": "Archivo JSON", "Local output simulating downstream ERP delivery.": "Salida local que simula la entrega a un ERP destino.",
  "Authentication against Cham Orders API with Bearer token propagation.": "Autenticación contra Cham Orders API con propagación del token Bearer.",
  "Complete sequential pagination with configurable page size.": "Paginación secuencial completa con tamaño de página configurable.", "DataWeave canonical transformation using historical item data.": "Transformación canónica DataWeave usando datos históricos de los ítems.",
  "X-Correlation-ID propagation or generation.": "Propagación o generación de X-Correlation-ID.", "Centralized errors and externalized local credentials.": "Errores centralizados y credenciales locales externalizadas.", "Canonical JSON output generation.": "Generación de salida JSON canónica.",
  "Local Mule deployment passed.": "Despliegue local de Mule aprobado.", "Real authentication and confirmed-order synchronization passed.": "Autenticación real y sincronización de órdenes confirmadas aprobadas.",
  "Real two-page pagination passed with pageSize 1.": "Paginación real de dos páginas aprobada con pageSize 1.", "Canonical JSON output was generated and reviewed.": "La salida JSON canónica fue generada y revisada.",
  "Authentication failure and unavailable backend scenarios passed.": "Escenarios de fallo de autenticación y backend no disponible aprobados.", "12 of 12 MUnit tests passed.": "12 de 12 pruebas MUnit aprobadas.",
  "order-sync.xml coverage reached 100% and client coverage 95.65%.": "La cobertura de order-sync.xml alcanzó 100% y la del cliente 95.65%.",
  "Pagination is sequential and validated against backend metadata.": "La paginación es secuencial y se valida contra los metadatos del backend.", "The complete result is transformed once into a canonical model.": "El resultado completo se transforma una sola vez en un modelo canónico.",
  "Credentials remain external to source control.": "Las credenciales permanecen fuera del control de versiones.", "Correlation IDs cross the inbound request, backend calls and output.": "Los identificadores de correlación atraviesan la solicitud de entrada, las llamadas al backend y la salida.",
  "The implementation stays synchronous for a bounded local portfolio scope.": "La implementación permanece síncrona para un alcance local acotado de portafolio.",
  "No CloudHub or production deployment.": "Sin despliegue en CloudHub ni producción.", "No real ERP integration; the JSON file is a simulator output.": "Sin integración con un ERP real; el archivo JSON es una salida del simulador.",
  "No queues, persistent idempotency, scheduler or advanced retry policy.": "Sin colas, idempotencia persistente, scheduler ni política avanzada de reintentos.", "No CI/CD execution or high-availability claim.": "Sin ejecución de CI/CD ni afirmaciones de alta disponibilidad.",

  "Interactive architecture simulation": "Simulación interactiva de arquitectura", "ChamTech Sync Playground": "Simulador de Sincronización ChamTech",
  "Run a synthetic synchronization and explore how MuleSoft authenticates, retrieves paginated confirmed orders, propagates correlation IDs and produces a canonical downstream JSON model.": "Ejecuta una sincronización sintética y explora cómo MuleSoft autentica, obtiene órdenes confirmadas paginadas, propaga identificadores de correlación y produce un modelo JSON canónico para el sistema destino.",
  "Simulation boundary:": "Límite de la simulación:", "This playground uses synthetic data and simulated execution steps. It does not connect to production services or expose real credentials.": "Este simulador utiliza datos sintéticos y pasos de ejecución simulados. No se conecta a servicios de producción ni expone credenciales reales.",
  "Mule Integration ↗": "Integración Mule ↗", "Back to architecture": "Volver a arquitectura",
  "Successful synchronization": "Sincronización exitosa", "No confirmed orders": "Sin órdenes confirmadas", "Invalid request": "Solicitud inválida",
  "Authentication failure": "Fallo de autenticación", "Backend unavailable": "Backend no disponible", "Unexpected integration error": "Error inesperado de integración",
  "Authenticates, retrieves every confirmed-order page and creates canonical JSON.": "Autentica, obtiene todas las páginas de órdenes confirmadas y crea el JSON canónico.",
  "Completes successfully with an empty canonical orders collection.": "Finaliza correctamente con una colección canónica de órdenes vacía.",
  "Simulates a RAML contract violation rejected before backend access.": "Simula una violación del contrato RAML rechazada antes de acceder al backend.",
  "The downstream login is rejected before order retrieval begins.": "El inicio de sesión contra el sistema origen se rechaza antes de obtener las órdenes.",
  "Cham Orders API cannot serve the confirmed-order request.": "Cham Orders API no puede atender la solicitud de órdenes confirmadas.",
  "A controlled catch-all response prevents internal details from leaking.": "Una respuesta general controlada evita exponer detalles internos.",
  "Request": "Solicitud", "Response": "Respuesta", "Inbound contract": "Contrato de entrada", "Stable contract": "Contrato estable", "Downstream model": "Modelo destino",
  "The simulated POST request will appear here.": "La solicitud POST simulada aparecerá aquí.", "The response is produced when execution finishes.": "La respuesta se genera al finalizar la ejecución.",
  "Run a scenario to inspect its success or error response.": "Ejecuta un escenario para inspeccionar su respuesta exitosa o de error.",
  "No canonical file is produced for this error scenario.": "Este escenario de error no produce un archivo canónico.", "Successful executions generate the real canonical model here.": "Las ejecuciones exitosas generan aquí el modelo canónico real.",
  "Copy": "Copiar", "Copied": "Copiado", "RUNNING": "EN EJECUCIÓN", "CONTROLLED ERROR": "ERROR CONTROLADO",
  "Correlation ID": "ID de correlación", "Scenario": "Escenario", "Configuration": "Configuración", "Run synchronization": "Ejecutar sincronización",
  "Synchronizing…": "Sincronizando…", "Reset": "Reiniciar", "Generate": "Generar", "Leave empty to generate one": "Déjalo vacío para generar uno",
  "Execution timeline": "Línea de ejecución", "Event log": "Registro de eventos", "No events yet.": "Aún no hay eventos.",
  "Pagination trace": "Trazabilidad de paginación", "No backend pages have been retrieved yet.": "Aún no se han obtenido páginas del backend.",
  "Simulation result": "Resultado de la simulación", "Run a scenario to inspect the stable Mule response.": "Ejecuta un escenario para inspeccionar la respuesta estable de Mule.",
  "Interactive flow": "Flujo interactivo", "Architecture state": "Estado de la arquitectura", "Correlation · waiting": "Correlación · en espera",
  "Orchestration": "Orquestación", "Persistent data": "Datos persistentes", "Browser output": "Salida del navegador",
  "Architecture flow": "Flujo de arquitectura", "Simulated execution path": "Ruta de ejecución simulada", "Correlation": "Correlación",
  "backend path": "ruta backend", "downstream path": "ruta destino", "Canonical JSON / Simulated ERP": "JSON canónico / ERP simulado",
  "No ERP, production service or real credential is connected.": "No hay conexión con un ERP, servicio de producción ni credenciales reales.",
  "Idle": "Inactivo", "Active": "Activo", "Success": "Exitoso", "Error": "Error", "Skipped": "Omitido",
  "Copy Request": "Copiar solicitud", "Copy Response": "Copiar respuesta", "Copy Canonical JSON": "Copiar JSON canónico",
  "Download canonical JSON": "Descargar JSON canónico", "Simulated execution log": "Registro de ejecución simulado", "Event stream": "Flujo de eventos", "synthetic": "sintético", "Awaiting simulation…": "Esperando la simulación…",
  "Execution": "Ejecución", "Synchronization timeline": "Línea de tiempo de sincronización", "Configure a scenario and run the simulation to inspect every step.": "Configura un escenario y ejecuta la simulación para inspeccionar cada paso.",
  "Backend pages": "Páginas del backend", "Page metadata will appear when the backend retrieval step begins.": "Los metadatos de página aparecerán cuando comience la obtención desde el backend.",
  "Simulation scenario": "Escenario de simulación", "Configure synchronization": "Configurar sincronización", "Status": "Estado", "The real Mule contract synchronizes confirmed orders only.": "El contrato real de Mule sincroniza únicamente órdenes confirmadas.",
  "Page size": "Tamaño de página", "Reset simulation": "Reiniciar simulación", "Result": "Resultado", "Synchronization summary": "Resumen de sincronización", "No simulation has been executed yet.": "Aún no se ha ejecutado ninguna simulación.",
  "correlation ID": "ID de correlación", "Download Canonical JSON": "Descargar JSON canónico",
  "Simulation completed successfully.": "La simulación finalizó correctamente.", "Simulation completed with a controlled error.": "La simulación finalizó con un error controlado.", "Simulation idle.": "Simulación inactiva.",
  "Request received": "Solicitud recibida", "API Consumer submitted POST /api/v1/order-sync.": "El consumidor API envió POST /api/v1/order-sync.",
  "API Consumer submitted a deliberately malformed synthetic request.": "El consumidor API envió deliberadamente una solicitud sintética inválida.",
  "Correlation ID resolved": "ID de correlación resuelto", "One synthetic correlation ID now follows the complete execution.": "Un ID de correlación sintético acompaña ahora toda la ejecución.",
  "Request validated": "Solicitud validada", "APIKit accepted status CONFIRMED and the configured page size.": "APIKit aceptó el estado CONFIRMED y el tamaño de página configurado.",
  "Request validation failed": "Falló la validación de la solicitud", "APIKit rejected the unsupported status before backend access.": "APIKit rechazó el estado no permitido antes de acceder al backend.",
  "Authentication request sent": "Solicitud de autenticación enviada", "MuleSoft called POST /api/v1/auth/login without exposing credentials.": "MuleSoft llamó a POST /api/v1/auth/login sin exponer credenciales.",
  "JWT token received": "Token JWT recibido", "A synthetic Bearer context was accepted and kept out of the log.": "Se aceptó un contexto Bearer sintético y se mantuvo fuera del registro.",
  "Authentication rejected": "Autenticación rechazada", "Cham Orders API rejected the synthetic downstream login.": "Cham Orders API rechazó el inicio de sesión sintético del sistema destino.",
  "Authentication with Cham Orders API failed.": "Falló la autenticación con Cham Orders API.", "Confirmed orders request failed": "Falló la solicitud de órdenes confirmadas",
  "Cham Orders API was unavailable while MuleSoft requested page 0.": "Cham Orders API no estaba disponible cuando MuleSoft solicitó la página 0.", "Cham Orders API is unavailable.": "Cham Orders API no está disponible.",
  "Orders aggregated": "Órdenes agregadas", "DataWeave transformation simulated": "Transformación DataWeave simulada", "Backend fields and historical item snapshots were mapped to the real canonical model.": "Los campos del backend y las instantáneas históricas de ítems se mapearon al modelo canónico real.",
  "Canonical JSON generated": "JSON canónico generado", "Synchronization completed": "Sincronización finalizada", "Canonical transformation interrupted": "Transformación canónica interrumpida",
  "The catch-all handler produced a stable response without internal details.": "El manejador general produjo una respuesta estable sin detalles internos.", "An unexpected integration error occurred.": "Ocurrió un error inesperado de integración.", "The synchronization request is invalid.": "La solicitud de sincronización es inválida.",

  "Hidden process detected": "Proceso oculto detectado", "Close ChamTech Lab": "Cerrar ChamTech Lab",
  "Route the data stream toward each JSON packet without interrupting the pipeline.": "Dirige el flujo de datos hacia cada paquete JSON sin interrumpir el pipeline.",
  "synchronized": "sincronizados", "best": "récord", "Restart pipeline": "Reiniciar pipeline", "Restart run": "Reiniciar partida",
  "Start pipeline": "Iniciar pipeline", "Resume instead": "Continuar partida", "Pause or resume": "Pausar o continuar", "Touch controls": "Controles táctiles",
  "Up": "Arriba", "Down": "Abajo", "Left": "Izquierda", "Right": "Derecha", "Arrow keys or WASD · Space to pause · Escape to close": "Flechas o WASD · Espacio para pausar · Escape para cerrar",
};

export function translate(locale: Locale, value: string) {
  if (locale === "en") return value;
  const trimmed = value.trim();
  const translated = es[trimmed];
  if (translated) return value.replace(trimmed, translated);
  return value
    .replace(/Confirmed orders page (\d+) requested/g, "Página $1 de órdenes confirmadas solicitada")
    .replace(/Page (\d+) response received/g, "Respuesta de la página $1 recibida")
    .replace(/(\d+) confirmed orders matched the expected pagination total\./g, "$1 órdenes confirmadas coincidieron con el total esperado de la paginación.")
    .replace(/(\d+) orders read and (\d+) orders exported\./g, "$1 órdenes leídas y $2 órdenes exportadas.")
    .replace(/([^\s]+\.json) prepared in browser memory for the simulated ERP boundary\./g, "$1 preparado en la memoria del navegador para el límite del ERP simulado.")
    .replace(/Page (\d+)/g, "Página $1")
    .replace(/(\d+) orders received/g, "$1 órdenes recibidas")
    .replace(/1 order received/g, "1 orden recibida")
    .replace(/API page index (\d+)/g, "Índice de página API $1")
    .replace(/pagination complete/g, "paginación completa")
    .replace(/more pages expected/g, "se esperan más páginas")
    .replace(/continue/g, "continuar");
}

export function localePath(locale: Locale, href: string) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("/cv")) return href;
  if (locale === "es") {
    if (href === "/es" || href.startsWith("/es/") || href.startsWith("/es#")) return href;
    return href === "/" ? "/es" : `/es${href}`;
  }
  return href.replace(/^\/es(?=\/|#|$)/, "") || "/";
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export type Project = {
  number: string; slug: string; title: string; description: string; overview: string; problem: string;
  implementation: string[]; technologies: string[]; workflow: { title: string; description: string }[];
  features: string[]; challenges: { title: string; description: string }[]; githubUrl: string; liveUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01", slug: "journeyjot", title: "JourneyJot",
    description: "A full-stack tourism marketplace for discovering experiences, planning trips, managing bookings, and selling travel products.",
    overview: "JourneyJot is a multi-role travel platform serving tourists, sellers, tour guides, advertisers, administrators, and tourism governors through role-specific product and operational workflows.",
    problem: "Travel planning involves disconnected activities, itineraries, attractions, transport, products, payments, and service providers. JourneyJot brings those workflows into one marketplace with role-based management tools.",
    implementation: [
      "Built reusable and role-specific React screens, authenticated session state, shared hooks, and an Axios-based service layer.",
      "Implemented an Express API organized into routes, controllers, services, middleware, and Mongoose models.",
      "Added JWT authentication, role and ownership authorization, registration review, CORS allowlisting, security headers, throttling, and centralized errors.",
      "Integrated Stripe payments, Duffel flight search, Geoapify hotel discovery, file uploads, email notifications, and scheduled birthday promotions.",
      "Covered booking, provider, login, rate-limit, transaction, security, upload, and demo-seed flows with Node tests.",
    ],
    technologies: ["React", "Vite", "Express", "Node.js", "MongoDB", "Mongoose", "JWT", "Stripe", "Axios", "Tailwind CSS"],
    workflow: [
      { title: "Authenticate by role", description: "Users register or sign in, receive a JWT-backed session, and enter interfaces tailored to tourists, sellers, guides, advertisers, admins, or governors." },
      { title: "Discover and manage", description: "Tourists browse travel inventory while providers create and manage activities, itineraries, transport, attractions, and products through role-specific screens." },
      { title: "Book and pay", description: "The API coordinates bookings and wallet or Stripe payment flows, while external providers supply flight and hotel discovery data." },
      { title: "Operate the marketplace", description: "Administrative workflows cover account review, complaints, categories, tags, flagged content, promotions, notifications, and reporting." },
    ],
    features: ["Six role-specific experiences", "Activities, itineraries, attractions, flights, hotels, and products", "Bookings, wallet, wishlist, reviews, and complaints", "Stripe payments", "Flight and hotel provider integrations", "JWT authorization and account review", "Revenue views and operational reporting", "Email notifications and scheduled promotions"],
    challenges: [
      { title: "A broad permissions model", description: "Frontend role guards improve navigation while backend role and ownership checks enforce access across many distinct marketplace actors." },
      { title: "Coordinating external services", description: "Payment, flight, hotel, email, and upload integrations are isolated behind backend routes and services with configuration validation and error handling." },
      { title: "Keeping a large API maintainable", description: "The backend separates HTTP handlers, business logic, middleware, schemas, and application errors instead of concentrating the system in route files." },
    ],
    githubUrl: "https://github.com/abdallahkhaled27/Travel-Booking-System",
  },
  {
    number: "02", slug: "helping-hands", title: "Helping Hands",
    description: "A multi-role React interface for coordinating donations, volunteering, organization requests, and administrative review.",
    overview: "Helping Hands is a frontend application that demonstrates connected workflows for donors, organization representatives, and administrators. It includes dedicated layouts and routes for each role.",
    problem: "Donation and volunteering workflows involve different people with different responsibilities. The project organizes those tasks into clear role-based experiences instead of a single generic interface.",
    implementation: [
      "Built separate donor, organization, and administrator layouts with nested React Router routes.",
      "Created donation discovery, organization search, delivery, volunteering, account, request creation, and submission-review screens.",
      "Implemented demo authentication and persistent sessions with localStorage.",
      "Added searchable organization data, category-based donation filtering, conditional request fields, editable profiles, and responsive navigation.",
      "Developed the interface with reusable React components and Tailwind CSS utilities.",
    ],
    technologies: ["React", "Vite", "React Router", "Tailwind CSS", "JavaScript", "React Icons", "React Toastify"],
    workflow: [
      { title: "Choose a role", description: "Demo authentication routes users into donor, organization, or administrator areas with persistent local session state." },
      { title: "Find ways to help", description: "Donors explore organizations, browse categorized requests, arrange deliveries, or register for volunteer opportunities." },
      { title: "Publish needs", description: "Organization representatives create donation requests with category-specific fields and manage organization information and deliveries." },
      { title: "Review activity", description: "Administrator screens provide donor and organization account views plus submission-review workflows." },
    ],
    features: ["Three role-specific application areas", "Donation request browsing and filtering", "Volunteer registration workflows", "Organization directory search", "Conditional donation-request forms", "Editable account screens", "Persistent demo sessions", "Responsive shared navigation"],
    challenges: [
      { title: "Organizing role-specific navigation", description: "Nested route groups and dedicated layouts keep donor, organization, and admin workflows separate while sharing common shell components." },
      { title: "Adapting forms to donation types", description: "The request-creation flow renders different fields for medication, clothing, blood, food, school supplies, toys, and medical equipment." },
      { title: "Representing a complete workflow without a backend", description: "The repository uses bundled JSON, component state, and localStorage to demonstrate product behavior as a frontend prototype." },
    ],
    githubUrl: "https://github.com/abdallahkhaled27/Charity-Website",
  },
  {
    number: "03", slug: "football-ai-assistant", title: "Football AI Assistant",
    description: "A full-stack football analysis interface with structured prompting and live context for time-sensitive questions.",
    overview: "Football Brain lets users ask about tactics, players, matches, and comparisons. A Next.js interface sends questions to a NestJS API, which produces focused football analysis with the OpenAI Responses API.",
    problem: "Football questions mix timeless tactical analysis with rapidly changing facts. The application treats them differently so current claims can be verified instead of guessed.",
    implementation: ["Built the Next.js Q&A interface with loading, validation, error, and response states.", "Created the NestJS endpoint and OpenAI service layer.", "Wrote tactical system instructions that distinguish verified facts from analysis.", "Implemented freshness detection for matches, injuries, transfers, form, lineups, and current statistics.", "Added conditional web search, failure disclosure, CORS configuration, and freshness-classification tests."],
    technologies: ["TypeScript", "Next.js", "React", "NestJS", "OpenAI Responses API", "Turborepo", "pnpm", "Jest"],
    workflow: [{ title: "Ask", description: "The client validates a football question and posts it to the NestJS API." }, { title: "Check freshness", description: "Football-specific patterns determine whether current information is required." }, { title: "Retrieve context", description: "Time-sensitive questions trigger a compact, sourced web-search briefing; timeless questions skip it." }, { title: "Generate", description: "The service combines the date, live context, question, and tactical instructions before returning the answer." }],
    features: ["Football-focused analysis", "Conditional live search", "Tactical system guidance", "Verified-fact and analysis separation", "Disclosure when live facts cannot be verified", "Client loading and error states", "Tested freshness classification"],
    challenges: [{ title: "Detecting stale knowledge risk", description: "A dedicated classifier recognizes language about current form, fixtures, injuries, transfers, statistics, and other changing topics." }, { title: "Failing safely", description: "If required live retrieval fails, the service directs the model to disclose the limitation instead of guessing." }, { title: "Keeping analysis specific", description: "The system prompt emphasizes relevant tactical concepts and direct answers rather than generic biographies." }],
    githubUrl: "https://github.com/abdallahkhaled27/Simple-Football-AI",
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }

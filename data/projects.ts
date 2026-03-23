export type ProjectTag =
  | "AI/ML"
  | "Data-driven"
  | "Product design"
  | "Testing"
  | "UX/UI"
  | "Research"
  | "Customer-led"
  | "Branding";

export interface ProjectSection {
  id: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Feedback {
  quote: string;
  author?: string;
}

export interface MediaItem {
  type: "image" | "video" | "youtube";
  src: string;
  caption?: string;
  pair?: MediaItem;   // renders side-by-side with this item
}

export interface Project {
  slug: string;
  title: string;
  badge?: string;
  tagline: string;
  role: string;
  timeline: string;
  company?: string;
  stakeholders?: string;
  tags: ProjectTag[];
  summary: string;
  heroImage?: string;
  heroVideo?: string;
  prototypeUrl?: string;
  relatedSlugs?: string[];
  sections: ProjectSection[];
  content: ProjectContent;
}

export interface ProjectContent {
  intro: string;
  overview?: {
    background?: string;
    problem?: string;
    whyLLMs?: string;
    problemMedia?: MediaItem;
    goal?: string;
    solutionSteps?: { number: string; title: string; description: string; media?: MediaItem; mediaList?: MediaItem[] }[];
    solutionPoints?: string[];
    stats?: StatItem[];
  };
  process?: {
    title: string;
    steps: { id: string; title: string; items: string[]; media?: MediaItem; mediaList?: MediaItem[]; launchingVideo?: string }[];
  };
  reflection?: {
    contribution?: string[];
    takeaways: { title: string; body: string }[];
    feedbacks?: Feedback[];
    nextSteps?: { title: string; description: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "marginalia",
    title: "Marginalia",
    badge: "new",
    tagline: "AI-powered audio-to-insight agent",
    role: "Product designer & product owner",
    timeline: "2026",
    tags: ["AI/ML", "Data-driven", "Product design"],
    summary:
      "A concept web app that uses AI to turn long podcasts and audiobooks into concise takeaways - key insights, quotes, and strategic lessons.",
    heroImage: "/images/marginalia-hero.png",
    heroVideo: "/images/marginalia.mp4",
    prototypeUrl: "https://marginaliaclub.lovable.app/",
    relatedSlugs: ["vpat-reporting-service", "persona-research"],
    sections: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "AI Product Workflow" },
      { id: "reflection", label: "Reflection" },
    ],
    content: {
      intro:
        "I designed and built Marginalia, a concept web app that uses AI to turn long podcasts and audiobooks into concise takeaways. It automatically generates key insights, quotes, and strategic lessons, so passive listening becomes a memorable margins notebook.",
      overview: {
        problem:
          "Using podcast and audiobook as a proxy for long-form learning content, I saw three consistent issues for heavy listeners: attention drop, poor revisitability, and manual quote management. For users who listen while commuting or multitasking, these issues meant most insights were forgotten within days.",
        goal:
          "Turn hours of long-form audio into a one-page takeaway: structured insights, memorable quotes, and practical lessons that are easy to revisit and share. Marginalia should reduce cognitive load during listening and make post-listening review 5x faster than re-playing episodes.",
        solutionSteps: [
          {
            number: "1",
            title: "Session-based capture flow",
            description:
              "Users log an audio source, then add highlights with quotes, notes, and timestamps as they listen. This mirrors how real listeners jot down margin notes in books.",
          },
          {
            number: "2",
            title: "Integrated Spotify metadata",
            description:
              "Spotify metadata auto-fills titles, authors, and cover art so users focus on ideas, not data entry.",
            media: { type: "video", src: "/images/marginalia-solution-2.mp4" },
          },
          {
            number: "3",
            title: "AI-generated takeaways",
            description:
              "Marginalia distills key insights, best quotes, and strategic lessons into a one-page takeaway users can scan in minutes.",
            media: { type: "video", src: "/images/marginalia-solution-3.mp4" },
          },
        ],
        whyLLMs: "Marginalia leans on an LLM pipeline rather than basic keyword extraction: it can group ideas into insights, synthesize lessons, and support follow-up questions for deeper understanding.",
        stats: [
          { value: "80%", label: "quotes shared to team quote board" },
          { value: "2 min", label: "average reading time" },
          { value: "5x", label: "faster review vs. re-listening" },
        ],
      },
      process: {
        title: "I used a 4-stage validation workflow to design and build Marginalia.",
        steps: [
          {
            id: "stage-1",
            title: "Stage 1 - Fake Door Test: Validate the idea",
            items: [
              "Ran lightweight market research on Reddit and Twitter to explore frustrations with existing summary tools.",
              "Interviewed 18 UX book club members to capture real listening pain points before building anything.",
              "Synthesized findings into an opportunity map that framed Marginalia's positioning.",
            ],
            media: {
              type: "image",
              src: "/images/marginalia-opportunity-map.avif",
              caption: "Marginalia opportunity map",
            },
          },
          {
            id: "stage-2",
            title: "Stage 2 - Sandbox Test: Define and prototype",
            items: [
              "Translated research into a concise PRD that defined target listeners, core jobs-to-be-done, and the structure of the one-page takeaway.",
              "Used Lovable to rapidly scaffold the Marginalia UI and wire up an AI generation pipeline.",
              "Designed the pipeline with four key capabilities: timestamp traceability, one-page takeaway generator, auto-generate quotes, and a conversational AI layer.",
            ],
            media: { type: "image", src: "/images/marginalia-four-capabilities.png", caption: "Four key capabilities of the AI pipeline", pair: { type: "image", src: "/images/marginalia-four-refinements.png", caption: "Four UX refinements from user testing" } },
          },
          {
            id: "stage-3",
            title: "Stage 3 - User Flow Test: Validate the experience",
            items: [
              "Shared the prototype with the 18 UX book club members and observed how they processed the Hooked audiobook.",
              "Synthesized feedback via affinity mapping to uncover friction points.",
              "Iterated on interaction accessibility, feedback and system status, editable sections, and safer AI edits.",
            ],
          },
          {
            id: "stage-4",
            title: "Stage 4 - Product Analysis: Connect data to research",
            items: [
              "In progress: connecting the site with PostHog to track real user data for events and workflows.",
              "These signals will inform which UX improvements to prioritise next.",
            ],
            media: { type: "image", src: "/images/marginalia-stage-4.avif", caption: "Product analytics opportunity map" },
          },
        ],
      },
      reflection: {
        takeaways: [
          {
            title: "AI accelerates the product lifecycle",
            body: "Vibe coding dramatically reduced time from idea to functional prototype, enabling more cycles of user feedback.",
          },
          {
            title: "UX fundamentals still matter",
            body: "I still needed to design hierarchy, empty states, and feedback - especially around AI generation - to avoid confusion and distrust.",
          },
          {
            title: "Data closes the loop",
            body: "Without analytics on sessions, highlights, and revisits, it would be impossible to know if AI actually improved learning outcomes.",
          },
        ],
        nextSteps: [
          {
            title: "Supabase integration",
            description:
              "Add auth and persistence so listeners can build a lasting Marginalia library and search across sessions.",
          },
          {
            title: "Personalised takeaways",
            description:
              "Let users star favourite insights and quotes and surface them in a Margins dashboard.",
          },
          {
            title: "AI templates",
            description:
              "Design multiple layout templates and test how different formats affect comprehension and recall.",
          },
        ],
      },
    },
  },

  {
    slug: "vpat-reporting-service",
    title: "VPAT Reporting Service",
    tagline: "Accessibility conformance reports service at scale",
    role: "UX/UI designer, service designer",
    timeline: "2025",
    company: "Bentley Systems",
    stakeholders: "Accessibility team, design system, product reps, account managers, compliance",
    tags: ["Data-driven", "Testing", "UX/UI"],
    summary:
      "Designed and piloted an in-house accessibility conformance reporting service that cut production to 2 days per report with a 700% efficiency gain in time and cost.",
    heroImage: "/images/vpat-hero.png",
    heroVideo: "/images/vpat-reporting-service.mp4",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Process" },
      { id: "reflection", label: "Reflection" },
    ],
    content: {
      intro:
        "I collaborated with accessibility specialists to design and pilot an in-house accessibility conformance reporting service that cut time and cost, and enabled more internal champions to independently produce high-quality VPATs across the organization. Result: reduced VPAT production to 2 days per report with a 700% efficiency gain in time and cost.",
      overview: {
        background:
          "VPATs (Voluntary Product Accessibility Templates) are essential for selling Bentley products, especially to public sector clients. They document how products meet international accessibility standards and are often mandatory in procurement.",
        problem:
          "VPATs were produced by an external agency at high cost per report, which did not scale with demand. VPAT creation required navigating multiple documents, repeated planning, and extensive evidence gathering. Few internal champions were trained or confident enough to produce VPATs independently.",
        goal:
          "Bring VPAT production in-house and replace external consultancy with a structured, scalable service model. Design and validate a playbook with four product teams, standardize the learning and reporting process, and introduce a VPAT report generator that streamlines workflows and reduces documentation overhead.",
        solutionPoints: [
          "A repeatable, educator-led service journey for planning, testing, and reporting.",
          "A VPAT generator tool that embeds tests, evidence capture, and reporting into one workflow.",
          "Centralised guidance and training designed to grow internal VPAT champions across product teams.",
        ],
        problemMedia: {
          type: "image",
          src: "/images/vpat-affinity-map.avif",
          caption: "VPAT service journey and ideation affinity mapping",
        },
        stats: [
          { value: "2 days", label: "production rate per report" },
          { value: "700%", label: "efficiency gain in time and cost" },
          { value: "23 tests", label: "reduced from 100+ test scope" },
        ],
      },
      process: {
        title: "Key process steps across the VPAT service design",
        steps: [
          {
            id: "journey-mapping",
            title: "VPAT service journey mapping",
            items: [
              "Led service journey mapping to define clear stages from preparation to reporting and improvement, based on the live VPAT generator created by accessibility specialists.",
              "Over three months, designed and validated multiple versions of VPAT generators, running regular workshops to review and refine the workflow.",
              "Clarified process steps and stakeholder roles, identified friction points in testing and evidence gathering, and co-created solutions to make the VPAT process clearer and faster.",
              "Supported automated accessibility testing and embedded evidence gathering directly into the reporting workflow to reduce friction and missed documentation.",
            ],
            media: { type: "image", src: "/images/vpat-key-personas.png", caption: "Key personas in the VPAT service" },
            mediaList: [
              { type: "video", src: "/images/vpat-journey.mp4", caption: "VPAT service journey" },
            ],
          },
          {
            id: "guidelines",
            title: "Accessibility testing guidelines and playbook",
            items: [
              "Collaborated with accessibility specialists and UX peers to design scalable testing guidance and validate the playbook in real VPAT scenarios.",
              "Attended professional accessibility training and became the first Bentley colleague to achieve IAAP CPACC certification.",
              "Created a collaborative Miro board to share exam preparation resources and testing patterns, helping grow accessibility knowledge across the organization.",
            ],
            media: { type: "image", src: "/images/vpat-arc-toolkit.avif", caption: "Conducting accessibility test with Arc Toolkit" },
          },
          {
            id: "sharepoint",
            title: "SharePoint VPAT guidance hub",
            items: [
              "Led the launch of the Accessibility SharePoint site, focusing on the VPAT guidance hub as a single source of truth for champions onboarding to the service.",
              "Included step-by-step VPAT service journeys, testing guidelines and tools, templates, examples, and links to the VPAT generator.",
              "Reduced the reliance on 1:1 guidance from accessibility specialists and made it easier for product teams to self-serve and get started.",
            ],
            media: { type: "image", src: "/images/vpat-sharepoint.avif", caption: "Accessibility SharePoint site" },
          },
        ],
      },
      reflection: {
        takeaways: [
          {
            title: "Inclusive design is a mindset",
            body: "Hands-on work with real products reinforced that inclusive design is not just a checklist; it is a mindset that has to be embedded in everyday decisions.",
          },
          {
            title: "Tie accessibility to business value",
            body: "Securing product resources for accessibility required tying initiatives directly to business needs and procurement requirements.",
          },
        ],
        feedbacks: [
          { quote: "This is forward thinking and pragmatic." },
          { quote: "This seems like a sensible and pragmatic approach to a clear business need." },
          { quote: "This service helps involve BIC teams to produce their own VPATs." },
        ],
      },
    },
  },

  {
    slug: "persona-research",
    title: "Persona Research",
    tagline: "Operational persona management",
    role: "UX researcher",
    timeline: "2024",
    company: "Bentley Systems",
    stakeholders: "Research operation, digital experience, user experience, product management, marketing, education",
    tags: ["Data-driven", "Research"],
    summary:
      "A four-stage research programme to unify persona management at Bentley Systems - addressing siloed documentation, inconsistent templates, and low cross-team visibility.",
    heroImage: "/images/persona-hero.png",
    heroVideo: "/images/persona-research.mp4",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Fieldwork" },
      { id: "reflection", label: "Reflection" },
    ],
    content: {
      intro:
        "The research highlights inconsistencies in persona management at Bentley Systems, emphasizing the need for a unified persona template and centralized repository, and outlines a four-stage programme to improve persona usage through better collaboration and standardized templates among various teams.",
      overview: {
        problem:
          "Different teams within the organisation use varied workflows and tools for persona management. This siloed approach leads to inconsistency and inefficiency, ultimately hindering our understanding of users. There is a general lack of collaboration and low visibility caused by siloed work and inconsistency in cross-functional collaboration.",
        goal:
          "A staged research programme to help get deeper understanding and areas of improvement in the current persona templates, and give recommendation of persona hosting tools through qualitative research, quantitative data, and competitive analysis.",
        problemMedia: {
          type: "image",
          src: "/images/persona-survey-tools.png",
          caption: "Internal survey: which tools do our colleagues use? N=26",
        },
        solutionPoints: [
          "Week 1 - Set-up: establish research plan and stakeholder alignment.",
          "Week 2-4 - Fieldwork: conduct user interviews (N=21) and internal survey (N=36).",
          "Week 5-6 - Analysis: affinity mapping and synthesis of findings.",
          "Week 7-8 - Reporting: present findings and tool recommendations to leadership.",
        ],
        stats: [
          { value: "96%", label: "ranked single source of truth as top priority" },
          { value: "7+", label: "persona templates found across teams" },
          { value: "88%", label: "ranked understanding user goals as top attribute" },
        ],
      },
      process: {
        title: "Fieldwork and competitive analysis across 50+ colleagues globally",
        steps: [
          {
            id: "fieldwork",
            title: "Fieldwork - understanding current challenges",
            items: [
              "Conducted user interviews with different user groups (N=21) and an internal survey (N=36) across UX, Digital Experience, Product Management, and Marketing.",
              "UX teams: lack of confidence in current personas due to lack of validation; need for regular updates through a robust validation process.",
              "Digital Experience teams: insufficient access to persona templates set by product teams; need for a centralised persona repository.",
              "Product Management: over-reliance on own industry background; need for inclusive persona creation with diverse team insights.",
              "Marketing: inconsistent persona templates for customer messaging; need for standardised templates and improved resource accessibility.",
              "Created affinity maps to summarise common pain points and areas of improvement across departments.",
            ],
            media: { type: "image", src: "/images/persona-challenges.png", caption: "Team challenges and needs across departments" },
            mediaList: [
              { type: "image", src: "/images/persona-affinity-map.avif", caption: "Affinity mapping in Miro" },
              { type: "image", src: "/images/persona-survey-attributes.avif", caption: "Internal survey: rank persona attributes by relevance N=26" },
            ],
          },
          {
            id: "competitive-analysis",
            title: "Competitive analysis - evaluating persona hosting tools",
            items: [
              "Conducted user interviews with product managers across different product lines (N=9) and a 2-week pilot with a selection of teams to test tool functionalities.",
              "Created a weighted scoring model rating 5 tools across 8 criteria based on their rankings in the survey.",
              "Identified strong candidates for further business evaluation by the executive and operations teams.",
            ],
            media: { type: "image", src: "/images/persona-weighted-score.avif", caption: "Weighted score model for tool evaluation" },
          },
        ],
      },
      reflection: {
        contribution: [
          "Used both qualitative and quantitative research methods to validate hypothesis on the need for a single persona repository and template.",
          "Narrowed down tool selection to a few strong candidates for further evaluation.",
          "Used research data to inform strategic and business decisions.",
        ],
        takeaways: [
          {
            title: "Tailor communication by audience",
            body: "Working with 50+ colleagues globally - from junior designers to the CTO - I learned to tailor interview questions and distill research outcomes into formats suited to each stakeholder.",
          },
          {
            title: "Research drives strategy",
            body: "Persona research directly informed tool procurement decisions at the organisational level, demonstrating the impact of rigorous mixed-methods research.",
          },
        ],
        feedbacks: [
          { quote: "Great summary of tool selection. The key is to have one tool for both!" },
          { quote: "Brilliant work. So useful! So well executed. What a star!" },
          { quote: "This is really inspiring and will help us a lot!" },
          { quote: "Summaries that you put together have been so incredibly helpful for us to be able to make a decision on personas, or at least pivot some of our predisposed thinking." },
        ],
      },
    },
  },

  {
    slug: "peanut",
    title: "Send Crypto Via Links",
    tagline: "UX audit for a blockchain banking system",
    role: "UX/UI designer",
    timeline: "2024",
    company: "Peanut Protocol",
    stakeholders: "Product manager, software developer, marketing",
    tags: ["Testing", "UX/UI", "Customer-led"],
    summary:
      "A UX audit for Peanut Protocol, a blockchain banking system utilising links to send crypto - driving a 40% growth in unique active wallets and attracting thousands of new users.",
    heroImage: "/images/peanut-hero.png",
    heroVideo: "/images/peanut.mp4",
    prototypeUrl: "https://peanut.to/send",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "User Journey Mapping" },
      { id: "ideation", label: "Ideation" },
      { id: "design-system", label: "Design System" },
      { id: "testing", label: "Testing" },
      { id: "reflection", label: "Reflection" },
    ],
    content: {
      intro:
        "A UX audit for Peanut Protocol, a blockchain banking system utilising links to send crypto, driving a 40% growth in unique active wallets and attracting thousands of new users.",
      overview: {
        background:
          "Peanut Protocol facilitates crypto transfers via URLs and QR codes and has around 15,000 daily active users.",
        problem:
          "Users struggled with navigating the send, claim, and dashboard interfaces, leading to a high drop-off rate. New users were reluctant to connect their wallets to an unknown app and got confused about the swap function.",
        goal:
          "Redesign the send, claim, and dashboard interfaces to streamline the experience, reduce friction, and support user growth by fostering a more intuitive and seamless journey.",
        solutionPoints: [
          "Optimise send/claim user journeys: simplify steps for users to send and claim funds via links.",
          "Add visual hierarchy: highlight CTA information, group contents by proximity, and make content scannable.",
          "Improve onboarding experience: add instructional and error copy, introduce a points reward system, and add customised message upload when sending links.",
        ],
        stats: [
          { value: "6k", label: "monthly SDK downloads" },
          { value: "35%", label: "growth in incoming Dapp transactions" },
          { value: "40%", label: "growth of unique active wallets" },
        ],
      },
      process: {
        title: "User journey mapping, ideation, and iterative design across send, claim, and dashboard",
        steps: [
          {
            id: "journey-mapping",
            title: "User journey mapping - identifying drop-off points",
            items: [
              "Mapped out existing user flows for send and claim, identifying pain points using qualitative and quantitative research methods.",
              "Users had 3 options to enter the transaction amount, select the token/chain, and connect the wallet - causing drop-offs due to obstacles.",
              "Redesigned with a linear flow that provides more open routes for users who have already connected their wallet, and added a review screen to both journeys.",
            ],
            mediaList: [
              { type: "image", src: "/images/peanut-old-claim-journey.avif", caption: "Old claim links user journey mapping" },
              { type: "image", src: "/images/peanut-old-send-journey.avif", caption: "Old send links user journey mapping" },
            ],
          },
          {
            id: "ideation",
            title: "Ideation - solving four key UX challenges",
            items: [
              "How might we emphasise the CTA? Used colour and proximity to differentiate CTA from other contents, with highlighted text and consistent pop-up alignment.",
              "How might we reorganise token/chain selection to help users find the right option quickly?",
              "How might we build user trust in transactions? Added a review screen with transaction details for both send and claim flows.",
              "How might we encourage users to use the swap feature while claiming? Incorporated swap as a subtle option rather than a forced choice.",
            ],
            mediaList: [
              { type: "image", src: "/images/peanut-optimise-journeys.avif", caption: "Optimised send/claim user journeys" },
              { type: "image", src: "/images/peanut-send-iter2.avif", caption: "Send pages iterations" },
              { type: "image", src: "/images/peanut-instructional-copy.avif", caption: "Add instructional and error copies to guide users" },
              { type: "image", src: "/images/peanut-custom-upload.avif", caption: "Add customised message upload when sending links" },
            ],
          },
          {
            id: "design-system",
            title: "Design system and accessibility",
            items: [
              "Created a scalable design system based on the existing UI kit with auto-layout components for responsiveness.",
              "Checked all components through WebAIM to ensure WCAG 2.1 Level AAA standards.",
            ],
            media: { type: "image", src: "/images/peanut-design-system.avif", caption: "Design system" },
          },
          {
            id: "testing",
            title: "Testing and iterations",
            items: [
              "Conducted several user testing sessions to evaluate prototypes, identifying three key improvement areas: lack of guidance, CTAs that do not fit all users, and need for transaction detail management.",
              "Added consistent copy and titles throughout the user flow, plus a pop-up screen to guide users to connect their wallet before sending.",
              "Changed claim CTA to make it flexible for both new and already-connected users.",
              "Designed a dashboard for users to manage assets and track send/claim activities.",
            ],
            media: { type: "image", src: "/images/peanut-dashboard.avif", caption: "Dashboard high-fidelity prototype for website and mobile" },
          },
        ],
      },
      reflection: {
        contribution: [
          "Convert user research and user test feedback to actionable design iterations.",
          "Create wireframes and prototypes.",
          "Develop a scalable design system with accessibility standards.",
          "Work closely with the product manager and front-end developers to meet KPIs.",
        ],
        takeaways: [
          {
            title: "Shipping features is a team sport",
            body: "The UX audit took six weeks. Explaining designs to developers, making decisions with the PM, and pushing development forward taught me how to communicate, prioritise, and compromise effectively.",
          },
          {
            title: "Explore alternatives to find better solutions",
            body: "Since the product focuses on Web 3.0 technology, the PM often brought feature ideas. I learned to understand their reasoning and found that exploring multiple design iterations consistently leads to better outcomes.",
          },
        ],
      },
    },
  },

  {
    slug: "tixo",
    title: "Tixo App",
    tagline: "Decentralised music ticketing app",
    role: "Product designer, product owner",
    timeline: "2023",
    stakeholders: "Product manager, software developer",
    tags: ["Product design", "Research", "UX/UI"],
    summary:
      "Led UX/UI design for a decentralised ticketing app, earning 2nd place at the 2023 London Ethereum Hackathon by creating streamlined ticketing and Web 3.0 onboarding experiences.",
    heroImage: "/images/tixo-hero.png",
    heroVideo: "/images/tixo.mp4",
    prototypeUrl: "https://www.figma.com/proto/mUUPbhI0RfHrDa1FKuYsDw/Tixo",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Define" },
      { id: "reflection", label: "Reflection" },
    ],
    content: {
      intro:
        "I led the UX/UI design for Tixo, a decentralised ticketing app, earning second place at the 2023 London Ethereum Hackathon by creating streamlined ticketing and Web 3.0 onboarding experiences.",
      overview: {
        problem:
          "Design a decentralised mobile app to prevent ticket scalping and improve the ticketing experience for independent music events. Users struggled with complicated ticket purchasing flows, lack of transparency and security in ticket sales, fear of a big learning curve for Web 3.0, and a lack of connection between fans and artists.",
        goal:
          "Empower music fans with a transparent, secure, and smooth ticketing experience using blockchain technology - combining ticket purchasing and validation in one application secured by blockchain-verified ticket authenticity.",
        solutionPoints: [
          "Simplified ticket experience: connect app registration, ticket purchasing, and validation into one seamless flow by integrating Web 3.0 wallets.",
          "Ticket authenticity: each ticket is generated as a unique NFT after purchase, eliminating counterfeit tickets.",
          "Web 3.0 onboarding: introduced onboarding pages that guide new users while allowing existing users to skip steps.",
          "Fan engagement: added social features - like, follow, share, merchandise shopping, and ticket notifications - to support artists and build community.",
        ],
        stats: [
          { value: "2nd", label: "SocialFi Track, ETH London Hackathon" },
          { value: "$5,000", label: "Flare Blockchain bounty winner" },
          { value: "1st", label: "706 Creator Community bounty winner" },
        ],
      },
      process: {
        title: "Research, competitive analysis, and four rounds of usability-driven iteration",
        steps: [
          {
            id: "research",
            title: "User research and competitive analysis",
            items: [
              "Analysed 5 major competitors using a custom framework across navigation intuitiveness, ticket purchasing/validation flow, Web 3.0 tech savviness requirements, support responsiveness, and market integration.",
              "Conducted 12 user interviews across diverse demographics including ages, genders, Web 3.0 exposure levels, and music industry backgrounds.",
              "Identified four key insights: complicated ticket purchasing flow, lack of transparency and security, fear of Web 3.0 learning curve, and lack of fan-artist connection.",
            ],
            media: { type: "image", src: "/images/tixo-competitive-analysis.avif", caption: "Competitive analysis across 5 major ticketing apps" },
            mediaList: [
              { type: "image", src: "/images/tixo-persona-a.avif", caption: "Persona A - Emma, music event goer", pair: { type: "image", src: "/images/tixo-persona-b.avif", caption: "Persona B - Maxim, independent musician" } },
            ],
          },
          {
            id: "design-system",
            title: "Design system and accessibility",
            items: [
              "Implemented dark mode, reflecting the app's primary use during events in low-light environments.",
              "Minimalist design language matching brand identity.",
              "Checked colour scheme through WebAIM to ensure WCAG 2.1 Level AAA standards.",
            ],
            mediaList: [
              { type: "image", src: "/images/tixo-lowfi.avif", caption: "Low-fidelity map" },
              { type: "image", src: "/images/tixo-design-system.avif", caption: "Design system" },
            ],
          },
          {
            id: "testing",
            title: "Post-hackathon testing and iteration",
            items: [
              "Conducted a moderated usability test of the hackathon prototype with diverse users.",
              "Improved checkout page with clearer CTAs and transaction confirmation.",
              "Redesigned ticket redeem page with swipe-to-redeem function and time limit to shorten validation steps.",
            ],
            mediaList: [
              { type: "image", src: "/images/tixo-web2-flow.avif", caption: "User flow of typical web 2.0 ticketing app" },
              { type: "image", src: "/images/tixo-flow-iter1.avif", caption: "Tixo user flow iteration 01" },
              { type: "image", src: "/images/tixo-flow-iter2.avif", caption: "Tixo user flow iteration 02" },
              { type: "image", src: "/images/tixo-onboard.avif", caption: "Onboard screens" },
              { type: "video", src: "/images/tixo-proto-purchase.mp4", caption: "Prototype - ticket purchasing", pair: { type: "video", src: "/images/tixo-proto-redeem.mp4", caption: "Prototype - ticket redeeming" } },
            ],
          },
        ],
      },
      reflection: {
        contribution: [
          "UX Research and Testing (data analysis, user interviews, and usability tests).",
          "UX/UI Design (design system, prototypes).",
          "Marketing Champion (marketing deck).",
          "Product Owner (maintaining the design system and iterating based on usability tests).",
        ],
        takeaways: [
          {
            title: "Time management under pressure",
            body: "Insights into the significance of time management and effective team communication via agile methods to facilitate continuous feedback, testing, and iterations within a tight timeframe.",
          },
          {
            title: "Technical constraints shape design",
            body: "Continuous review and feedback from both product and engineering teams enabled immediate design adjustments based on technical feasibility.",
          },
        ],
      },
    },
  },

  {
    slug: "oceanside-perspective",
    relatedSlugs: ["marginalia", "tixo"],
    title: "Oceanside Perspective",
    tagline: "Digital learning platform",
    role: "Chief designer",
    timeline: "2022",
    company: "Oceanside Perspective",
    stakeholders: "Founder & business owner, web designer",
    tags: ["Customer-led", "Branding"],
    summary:
      "Led brand identity, UX design, and marketing for Oceanside Perspective - a non-profit knowledge-sharing organisation - achieving 85% user satisfaction and a $10,000 Kickstarter goal.",
    heroImage: "/images/op-hero.png",
    heroVideo: "/images/oceanside-perspective.mp4",
    prototypeUrl: "https://www.oceansideperspective.org",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Process" },
      { id: "reflection", label: "Reflection" },
    ],
    content: {
      intro:
        "As the chief designer at Oceanside Perspective (OP), a non-profit knowledge-sharing organization, I led a diverse international team to develop OP's branding identity, including designing the logo, launching a digital learning platform, and creating social media templates to support its Kickstarter fundraising campaign.",
      overview: {
        problem:
          "Oceanside Perspective (OP), a non-profit knowledge-sharing organization, lacked a cohesive brand identity and digital presence that effectively communicated its ocean-themed mission, engaged a diverse global audience, and supported its fundraising efforts. The absence of unified visuals and strategy made it difficult for OP to build recognition, inspire intergenerational participation, and attract supporters to its learning initiatives.",
        goal:
          "To develop a cohesive brand identity and digital learning platform for Oceanside Perspective that clearly expresses its mission, fosters meaningful engagement across audiences, and strengthens fundraising efforts through a unified, inspiring, and visually consistent marketing strategy.",
        solutionPoints: [
          "Logo design: a message in a bottle to capture the essence of connecting different generations through a simple yet powerful visual.",
          "Extended the oceanic theme throughout the icon set and overall visual design for the platform.",
          "Conducted a card-sorting study to uncover users' mental models and set up content strategy for site navigation.",
          "Launched an Inspirational Quote feature on OP's website and social media, turning audio into moving text to boost engagement.",
        ],
        stats: [
          { value: "85%", label: "user satisfaction rate" },
          { value: "$10k", label: "Kickstarter fundraising goal achieved" },
          { value: "24%", label: "user growth" },
        ],
      },
      process: {
        title: "End-to-end design from brand identity to platform launch and marketing",
        steps: [
          {
            id: "design-system",
            title: "Design system and visual identity",
            items: [
              "Collaborated closely with OP's founder team to align visual design with the platform's branding image - understanding the founding story and vision.",
              "Extended the message-in-a-bottle theme into the icon set of key content sections and overall visual design, incorporating elements resonating with the oceanic setting.",
              "Built a full design system with logo, graphic components, launching video, and brand visual guidelines.",
            ],
            media: { type: "image", src: "/images/op-logos.png", caption: "Brand logos and icon system" },
            launchingVideo: "https://youtu.be/JcS3JTJSqs0?si=5topK6dH5Hiba9z6",
          },
          {
            id: "ia",
            title: "Information architecture and card sorting",
            items: [
              "Conducted a card-sorting study with fellow students and followers of OP to uncover users' mental models of the information architecture.",
              "Identified 4 categories of content: Chat (podcasts), Meet (videos), Write (articles), and Build (workshops). For example, webinars were grouped together by 76% of participants under the Meet section.",
              "Collaborated with the website designer to set up content strategy and sitemap for site navigation.",
            ],
            mediaList: [
              { type: "image", src: "/images/op-sitemap.avif", caption: "Sitemap" },
              { type: "image", src: "/images/op-wireframe.avif", caption: "OP website wireframe" },
            ],
          },
          {
            id: "testing",
            title: "Post-launch testing and iteration",
            items: [
              "Added a search function after user feedback requesting easier navigation of growing content volumes.",
              "Integrated a post-sharing function to enhance brand awareness and drive traffic back to the platform.",
              "Implemented secondary card sorting to divide content into four categories: leadership, innovation, technology, and entrepreneurship.",
            ],
            media: { type: "image", src: "/images/op-chat-pages.avif", caption: "Chat pages with key content strategy" },
          },
          {
            id: "marketing",
            title: "Marketing campaign",
            items: [
              "Introduced the Inspirational Quote feature on OP's website and social media - picking inspiring quotes from guests and turning audio into moving text.",
              "This component became a key element of OP's marketing strategy, contributing to 24% continuous user growth.",
              "Collaborated with the marketing team to establish a unified visual branding strategy across all communication channels, contributing to the $10,000 Kickstarter goal within one month of platform launch.",
            ],
            media: { type: "video", src: "/images/op-inspirational-quote.mp4", caption: "Inspirational Quote feature" },
          },
        ],
      },
      reflection: {
        contribution: [
          "Design System: logo, graphic, launching video, brand visual guideline.",
          "UX/UI Design: prototypes, website UI design.",
          "Fundraising/Marketing Champion: graphic/video templates for social media channels.",
          "Project Management: guiding a diverse team to launch a digital platform.",
        ],
        takeaways: [
          {
            title: "Onboarding diverse teams",
            body: "Workshops aligned diverse skill sets and overcame time zone obstacles, while collaborative tools like Miro, Google Slides, and Zoom enabled efficient progress tracking and consistent communication.",
          },
          {
            title: "User research as a growth lever",
            body: "Moving forward, integrating more extensive user research will enhance the overall user experience and platform impact beyond what marketing alone can achieve.",
          },
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(
  slug: string
): { prev: Project | null; next: Project | null } {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}

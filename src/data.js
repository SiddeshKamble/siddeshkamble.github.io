// Centralized content/data for the portfolio (easy to edit)

export const EMAIL = "siddesh.kamble@techsmail.com";
export const GITHUB = "https://github.com/SiddeshKamble";
export const LINKEDIN = "https://www.linkedin.com/in/siddeshkamble";
export const RESUME_PATH = "/resume.pdf";

// Navigation
export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Publications", to: "/publications" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];

export const ABOUT_PARAGRAPHS = [
  "My journey has been one of relentless curiosity and growth, turning every challenge into an opportunity to learn and make an impact.",
  "I’m comfortable working with Python, Node.js, TypeScript, React, MySQL, Docker, and CI/CD pipelines. I care about writing software that is fast, maintainable, and built for real users.",
  "If you’re building software, working on a startup, contributing to open source, or just want to talk tech, feel free to reach out. I’m always happy to grab a coffee and chat.",
];

export const SKILLS = [
  "Python",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "MySQL",
  "REST APIs",
  "Cloud Platforms",
  "Docker",
  "Git",
];

export const EXPERIENCES = [
  {
    slug: "stripe",
    role: "Software Engineer, Machine Learning (Backend Systems)",
    org: "Stripe",
    orgUrl: "https://stripe.com/",
    time: "Aug ’25 – Present",
    summary:
      "Building AI-powered document intelligence and compliance systems using LLM pipelines, retrieval infrastructure, and high-performance backend services.",
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "FAISS",
      "OpenAI",
      "AWS",
      "GCP",
      "Docker",
    ],
    bullets: [
      "Designed LLM-powered document processing pipelines using Python, LangChain, and OpenAI APIs, extracting insights from 120K+ financial documents and reducing manual review time by 40%.",
      "Architected retrieval infrastructure using vector embeddings, FAISS indexing, and metadata filtering across 15M+ records, improving response accuracy by 30%.",
      "Developed backend inference services using Python, FastAPI, and PostgreSQL with Redis caching and async processing to maintain sub-250ms latency.",
      "Engineered agent-based workflows using LangGraph for automated document validation and multi-step compliance checks.",
      "Deployed containerized AI services using Docker and cloud platforms (AWS/GCP) with CI/CD pipelines for faster production releases.",
      "Built evaluation pipelines and monitoring systems to improve model reliability and reduce hallucination in production workflows.",
    ],
  },

  {
    slug: "quantiphi-ccai",
    role: "Software Engineer – Conversational AI",
    org: "Quantiphi Inc.",
    orgUrl: "https://quantiphi.com/",
    time: "Jun ’21 – Oct ’23",
    summary:
      "Developed production-scale conversational AI platforms and backend systems supporting 50K+ users with high availability and real-time data integration.",
    tags: [
      "Dialogflow ES/CX",
      "Python",
      "Flask",
      "AWS",
      "Microservices",
    ],
    bullets: [
      "Implemented conversational AI systems using Dialogflow ES/CX, Python, and REST APIs, supporting 50K+ users with 99–99.5% uptime.",
      "Built backend orchestration services using Python and microservices, improving intent routing accuracy and reducing human-agent escalations.",
      "Integrated conversational systems with enterprise data services via APIs and AWS infrastructure for real-time data retrieval.",
      "Developed analytics pipelines using Python, SQL, and A/B testing to optimize conversation performance.",
      "Improved deployment stability using CI/CD pipelines, Docker, Git, and Jenkins.",
    ],
  },
  {
    slug: "markytics",
    role: "Analytics & Machine Learning Intern",
    org: "Markytics.AI",
    orgUrl: "https://markytics.ai/",
    time: "Jan ’21 – Jun ’21",
    summary:
      "Worked on data pipelines, analytics, and machine learning workflows to support financial risk scoring and business forecasting.",
    tags: ["Python", "Django", "REST APIs", "Machine Learning", "Power BI"],
    bullets: [
      "Analyzed financial datasets to build risk scoring models across thousands of loan accounts using Python.",
      "Developed data pipelines and backend services to process, clean, and transform large-scale financial data.",
      "Designed forecasting solutions for regional managers to compare predicted vs actual performance.",
      "Created Power BI dashboards to visualize key business metrics and support data-driven decision-making.",
      "Conducted A/B testing and predictive analysis to evaluate model performance and improve campaign outcomes.",
    ],
  },
  {
    slug: "space-infolab",
    role: "Software Developer – Backend",
    org: "Space Infolab",
    orgUrl: "https://spaceinfolab.com/",
    time: "Jan ’19 – May ’21",
    summary:
      "Built backend systems, data pipelines, and distributed processing workflows for high-volume applications and analytics systems.",
    tags: [
      "Python",
      "Django",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Docker",
    ],
    bullets: [
      "Designed backend services using Python and Django with modular architecture for scalable applications.",
      "Implemented asynchronous job processing using Celery and Redis for high-throughput workloads.",
      "Optimized SQL queries and relational data models using PostgreSQL indexing and profiling.",
      "Developed data ingestion and transformation pipelines using Python and Pandas.",
      "Managed containerized environments using Docker and Linux to improve deployment reliability.",
    ],
  },
];

export const PROJECTS = [
  {
    slug: "rescueroute",
    title: "RescueRoute",
    description:
      "Emergency response & routing platform to help services reach critical locations faster and help citizens request help with status tracking.",
    tags: ["JavaScript", "React", "Node.js", "Dijkstra's Algorithm"],
    image: "/projects/rescueroute.gif",
    repoUrl: "https://github.com/SiddeshKamble/RescueRoute",
    liveUrl: "",
    highlights: [
      "Citizen flow: submit request, track status, cancel request.",
      "Responder flow: view queue, update status, coordinate response.",
      "Routing-oriented product thinking (speed + clarity under stress).",
    ],
    details: `
# RescueRoute

## Overview
RescueRoute is an emergency request + response platform designed to reduce confusion during high-stress incidents. Citizens can quickly submit requests and track progress, while responders manage a queue and update statuses as the situation evolves.

## What I built
- Citizen flow: submit request, track status, cancel request
- Responder dashboard: view incoming requests and update incident status
- Demo logins for Citizens and Responders for fast testing and demos
- UI improvements across login and dashboards for clarity and speed

<img
  src="https://github.com/user-attachments/assets/465c554f-4bbc-4b49-b10c-6ad4f98315d2"
  width="100%"
  alt="Dashboard View"
/>

<img
  src="https://github.com/user-attachments/assets/2c384dc5-5a44-4a05-b166-527ab1f46d3c"
  width="100%"
  alt="Citizen View"
/>

## Technical notes
- Built with React + Node.js; focused on clean API-driven flows
- Routing concept grounded in shortest-path thinking (Dijkstra) for response planning
- Status-driven UI to keep state changes consistent and visible

<img
  src="https://github.com/user-attachments/assets/c5f3e47b-ab69-4c80-9fed-31104057039b"
  width="100%"
  alt="Responder Dashboard"
/>

## Next steps
- Route ETA + better dispatch prioritization
- Audit/history for status changes
- Stronger edge-case handling (duplicate requests, inactive responders)
`,
  },

  {
    slug: "sarcasm-detection",
    title: "Sarcasm Detection App",
    description:
      "Interactive ML app that detects sarcasm in text using multiple models, with a Streamlit UI for real-time testing.",
    tags: ["Python", "NLP", "Deep Learning", "Streamlit"],
    image: "/projects/sarcasm-detection.gif",
    repoUrl: "https://github.com/SiddeshKamble/Sarcasm-Detection-App",
    liveUrl: "https://sarcasm-detection-app.streamlit.app/",
    highlights: [
      "Trained and compared multiple ML / DL approaches for sarcasm classification.",
      "Built a clean Streamlit UI for demos and evaluation.",
      "Packaged for repeatable runs and quick iteration.",
    ],
    details: `
# Sarcasm Detection App

## Overview
A Streamlit-based application that detects sarcasm in text using multiple ML and deep learning models. The focus is on a demo-friendly interface while keeping model training, evaluation, and comparison structured.

<img width="1298" height="643" alt="App UI" src="https://github.com/user-attachments/assets/70b17bfc-1781-4148-8816-4c4f777f6427" />

## What I built
- Streamlit UI for real-time predictions on custom text
- Multiple model pipeline (baseline ML + transformer models)
- Model comparison workflow with clear evaluation outputs
- EDA section to understand dataset signal and limitations

## Models implemented
- Naive Bayes
- Logistic Regression (TF-IDF with n-grams)
- Pretrained RoBERTa sarcasm model
- DistilBERT (lighter transformer for faster inference)

## Dataset (high level)
Reddit sarcasm dataset containing comment text + labels, with supporting metadata (subreddit, score, author, parent context).

<img width="1499" height="865" alt="EDA View" src="https://github.com/user-attachments/assets/bf16a6a6-931e-4348-b3e3-c1bb1bee1b36" />

<img width="1294" height="637" alt="Model Comparison" src="https://github.com/user-attachments/assets/5366a4a4-0169-4874-9d1f-54a3f91cfee3" />

## Key learnings
- Strong baselines are great for iteration; transformers add nuance but increase complexity
- A clean UI makes model capabilities easy to understand and demo
`,
  },

  {
    slug: "secure-file-locker",
    title: "Secure File Locker",
    description:
      "End-to-end secure file workflow for untrusted storage with local cryptographic operations and fine-grained access control.",
    tags: ["Python", "Security", "Cryptography", "Access Control"],
    image: "/projects/secure-file-locker.gif",
    repoUrl:
      "https://github.com/SiddeshKamble/Secure-File-Locker-with-Fine-Grained-Access-Control-on-Untrusted-Storage",
    liveUrl: "https://securefilelocker.streamlit.app/",
    highlights: [
      "Designed for untrusted storage assumptions.",
      "Access control and encryption-first workflow.",
      "Focused on practical security + usability tradeoffs.",
    ],
    details: `
# Secure File Locker

## Overview
A cryptography-based file storage and sharing system that protects files at rest and in transit. It supports secure sharing, access revocation, and tamper-evident audit logging—without re-encrypting files.

<img width="621" height="489" alt="Demo" src="https://github.com/user-attachments/assets/3d378b35-af9e-4b19-91ed-d030398f21fe" />

## Demo flow
1) Register users (keys generated and stored securely)  
2) Upload → encrypt locally with a unique AES-GCM key  
3) Share → wrap the file key for a target user (no file re-encryption)  
4) Download → unwrap key + decrypt locally  
5) Revoke → remove wrapped key entry to revoke access  
6) Audit → detect tampering via integrity checks

<img width="875" height="654" alt="Upload and Share Flow" src="https://github.com/user-attachments/assets/9b6f2642-6db1-472d-ba33-0a19f909c47e" />

<img width="873" height="659" alt="Access Control View" src="https://github.com/user-attachments/assets/0d636c3a-30cd-4ed1-8627-d28b7677ea2d" />

## Security highlights
- X25519 for secure key wrapping
- AES-GCM for authenticated encryption
- Per-user access control without re-encrypting files
- Tamper-evident audit logging

## Key learnings
- Key management and usability must be designed together
- Wrapping keys enables clean revocation without touching the ciphertext
`,
  },

  {
    slug: "suspicious-activity-alerts",
    title: "Suspicious Activity Alert Generation",
    description:
      "Transfer learning + CCTV pipeline to detect suspicious activity (e.g., shoplifting/robbery/break-ins) and trigger alerts.",
    tags: ["Python", "Computer Vision", "Transfer Learning"],
    image: "/projects/suspicious-activity-alerts.gif",
    repoUrl:
      "https://github.com/SiddeshKamble/Alert-Generation-on-Detection-of-Suspicious-Activity-using-Transfer-Learning",
    liveUrl: "projects/suspicious-activity-alerts",
    highlights: [
      "Real-time detection pipeline design.",
      "Model + alerting workflow (practical deployment thinking).",
      "Built as an applied CV system rather than a notebook-only demo.",
    ],
    details: `
# Suspicious Activity Alert Generation (Transfer Learning)

## Overview
A surveillance pipeline that takes CCTV footage as input and uses transfer learning to detect suspicious activities such as shoplifting, robbery, or break-ins.

## What I built
- Transfer learning based activity classifier for suspicious vs normal events
- Simple detection + alerting flow to reduce reliance on constant human monitoring
- Focused on practical deployment thinking rather than a notebook-only demo

## Demo (Shoplifting)
![Shoplifting](https://github.com/user-attachments/assets/413a2bfc-49c7-44de-b7d4-de19caa12a2d)
`,
  },

  {
    slug: "duckhunt-ar",
    title: "DuckHuntAR",
    description:
      "Remake of the classic Duck Hunt game using Augmented Reality, built in Unity with Vuforia.",
    tags: ["C#", "Unity", "AR", "Vuforia"],
    image: "/projects/duckhunt-ar.gif",
    repoUrl: "https://github.com/SiddeshKamble/DuckHuntAR",
    liveUrl: "https://youtu.be/HPfInDkasmk",
    highlights: [
      "AR interaction + game loop implementation.",
      "Unity scene + asset management.",
      "Hands-on XR-style development experience.",
    ],
    details: `
# DuckHuntAR

## Overview
A remake of the classic Duck Hunt game built in Augmented Reality using Unity + Vuforia. Targets are placed in the user’s real environment for an immersive experience.

## Features
- AR gameplay using real-world surfaces
- Classic Duck Hunt mechanics reimagined in AR
- Real-time object tracking and interaction
- Built and tested on mobile devices

## Demo Video
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:20px 0;">
  <iframe
    src="https://www.youtube.com/embed/HPfInDkasmk"
    title="DuckHuntAR Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:6px;"
  ></iframe>
</div>
`,
  },

  {
    slug: "ai-chatbot",
    title: "Conversational AI Chatbot",
    description:
      "End-to-end conversational AI system with real-time responses, intent handling, and context awareness.",
    tags: ["Python", "NLP", "LLMs", "APIs", "React"],
    image: "/projects/ai-chatbot.gif",
    repoUrl: "",
    liveUrl: "/chatbot",
    highlights: [
      "Conversational AI chatbot embedded directly into the portfolio experience.",
      "Integrated UI and backend for real-time messaging.",
      "Handled prompt orchestration and context-aware responses.",
    ],
    details: `
# Conversational AI Chatbot (HelpBot Houdini)

## Overview
An interactive conversational AI system embedded directly into my portfolio so visitors can experience the chatbot live, not as a static demo link.

## How it works
- Deployed as a dedicated route (\`/chatbot)
- Users can start chatting immediately without setup or redirection
- Designed for real-time interaction inside the portfolio UI

## System architecture (high level)
- React-based chat interface with a minimal UI
- API-based inference for responses
- Context-aware message handling and prompt orchestration

## Why it’s embedded
- Demonstrates practical AI integration in a real product setting
- Lets visitors evaluate the experience firsthand
`,
  },
];

export const PUBLICATIONS = [
  {
    title: "Engagement and Emotion Analysis in Theatre using Thermal Imaging",
    venue: "IEEE Conference Publication",
    year: "2021",
    description:
      "Automation for movie engagement/emotion measurement using thermal imaging + object detection (YOLOv5) to infer audience reactions.",
    link: "https://ieeexplore.ieee.org/document/9487749",
  },
  {
    title: "A Survey on Engagement and Emotion Analysis in Theatre using Thermal Imaging",
    venue: "IEEE Conference Publication",
    year: "2020",
    description:
      "Survey of thermal facial emotion recognition focused on low-light audience emotion analysis and reducing bias in review systems.",
    link: "https://ieeexplore.ieee.org/document/9297656",
  },
  {
    title: "Alert Generation on Detection of Suspicious Activity Using Transfer Learning",
    venue: "IEEE Conference Publication",
    year: "2020",
    description:
      "Real-time CCTV + CNN transfer learning to detect suspicious activities (shoplifting/robbery/break-ins) with instant alerts.",
    link: "https://ieeexplore.ieee.org/document/9225263",
  },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Developer - Associate",
    org: "Amazon Web Services",
    focus: "Developing, deploying, and maintaining cloud applications using AWS services",
    link: "https://www.credly.com/badges/38976e46-4f67-4bff-8997-3ae07fc40dd6",
  },
  {
    name: "Google CCAI Certification",
    org: "Google Cloud Badge",
    focus: "Conversational AI, dialog systems, and intelligent virtual agents on Google Cloud",
    link: "https://www.skills.google/public_profiles/036b2f73-3cda-492d-a459-449662bb2616",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    org: "Oracle",
    focus: "Generative AI, large language models, and AI services on Oracle Cloud Infrastructure",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B6DF357F771CCD0491136691674343433C62C329D3F42AF6C25598425A9457AD",
  },
  {
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    org: "Microsoft",
    focus: "Generative AI fundamentals, prompt engineering, and responsible AI practices",
    link: "https://www.linkedin.com/learning/certificates/a22f612a46925d6b997465d2b0654a148e2f5bcd3e3593527d21b943b9f7e1b1",
  },
];

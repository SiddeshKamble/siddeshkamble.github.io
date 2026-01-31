// Centralized content/data for the portfolio (easy to edit)

export const EMAIL = "siddeshkamble.jobs@gmail.com";
export const GITHUB = "https://github.com/SiddeshKamble";
export const LINKEDIN = "https://www.linkedin.com/in/siddesh-kamble";
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
  "I like thinking in systems rather than snippets and care about structure, clarity, and whether a solution will hold up in the real world. My coding style is pragmatic and outcome driven, focusing on clean abstractions, predictable behavior, and designs that are easy to reason about and grow.",
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
    slug: "iconsult",
    role: "Software Engineer",
    org: "iConsult Collaborative",
    orgUrl:
      "https://ischool.syracuse.edu/careers/experiential-learning/iconsult-collaborative/",
    time: "Jan ’25 – Dec ’25",
    summary:
      "Led end-to-end development of a scalable applicant management platform used by internal caseworkers to streamline intake, eligibility checks, and reporting workflows.",
    tags: ["React", "Next.js", "MySQL", "Prisma ORM", "Tailwind CSS", "GCP"],
    bullets: [
      "Built and shipped a full-stack Next.js and MySQL platform supporting 20–30 caseworkers and thousands of monthly interactions.",
      "Designed and optimized a normalized relational data model to track household income, benefits, and longitudinal eligibility data.",
      "Developed cloud-native ingestion and validation services on Google Cloud to process large weekly datasets and reduce manual data entry.",
      "Built analytics dashboards exposing real-time financial and social-impact metrics to speed up eligibility decisions and reporting.",
      "Collaborated closely with PMs and engineers in a cross-functional team to define APIs, schemas, and scalable cloud architecture.",
    ],
  },
  {
    slug: "quantiphi-ccai",
    role: "Software Engineer – Conversational AI",
    org: "Quantiphi Inc.",
    orgUrl: "https://quantiphi.com/",
    time: "Jun ’21 – Oct ’23",
    summary:
      "Built and maintained production-grade conversational AI systems serving tens of thousands of users across web, mobile, and telephony platforms.",
    tags: [
      "Google Dialogflow",
      "Node.js",
      "Conversational AI",
      "Google Cloud Platform",
      "Cloud Functions",
    ],
    bullets: [
      "Engineered Dialogflow ES and CX chatbots and IVR systems with high availability under strict SLA requirements.",
      "Designed conversation flows, routing logic, and fallback strategies to reduce human agent handoffs and improve task completion rates.",
      "Built Node.js backends and serverless Cloud Functions for real-time fulfillment and data lookups.",
      "Integrated Dialogflow CX with a Soul Machines digital human to deliver an AI-driven psychology training assistant used by 300+ students.",
      "Partnered with product, UX, and engineering teams to improve observability, monitoring, and production reliability.",
    ],
  },
  {
    slug: "markytics",
    role: "Analytics & Machine Learning Intern",
    org: "Markytics.AI",
    orgUrl: "https://markytics.ai/",
    time: "Jan ’21 – Jun ’21",
    summary:
      "Worked on backend services, analytics pipelines, and machine learning workflows for financial risk scoring and forecasting systems.",
    tags: ["Python", "Django", "REST APIs", "Machine Learning", "Power BI"],
    bullets: [
      "Built Python microservices and batch jobs to score financial risk across thousands of loan accounts.",
      "Developed Django-based backends to expose machine learning models through stable REST APIs.",
      "Designed analytics and forecasting layers for regional and territory managers to compare forecast versus actual performance.",
      "Translated business requirements into data-driven features such as sentiment tagging, write-off logic, and reporting dashboards.",
      "Ran A/B tests and predictive analyses to validate model impact and improve campaign performance.",
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
    details:
      `
# RescueRoute 🚧 Under Construction 🚧
AI-powered emergency response and routing platform (Weekly timeline)

---

## Week 3 Progress
- Added demo logins for all components (**Citizens + Responders**) to directly access respective dashboards 😪
- Made UI improvements across Login and Dashboard views
- Citizens can now cancel emergencies
- Added information tiles for each responder type

<img
  src="https://github.com/user-attachments/assets/465c554f-4bbc-4b49-b10c-6ad4f98315d2"
  width="100%"
  alt="Week 3 Dashboard View"
/>

<img
  src="https://github.com/user-attachments/assets/2c384dc5-5a44-4a05-b166-527ab1f46d3c"
  width="100%"
  alt="Week 3 Citizen View"
/>

---

## Week 2 Progress
- Fixed backend connections to establish a proper end-to-end flow
- Added emergency cancellation and status update actions on the responder dashboard  
  *(UI polish + demo logins pending 😮‍💨)*

<img
  src="https://github.com/user-attachments/assets/c5f3e47b-ab69-4c80-9fed-31104057039b"
  width="100%"
  alt="Week 2 Responder Dashboard"
/>
`
,
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
      "Built a clean UI for demo + evaluation.",
      "Packaged for repeatable runs and iteration.",
    ],
    details: `
# Sarcasm Detection App 

A comprehensive machine learning application that detects sarcasm in text using multiple ML and deep learning models. Built with Streamlit for an interactive web interface.


<img width="1298" height="643" alt="Screenshot 2026-01-30 at 10 35 32 PM" src="https://github.com/user-attachments/assets/70b17bfc-1781-4148-8816-4c4f777f6427" />



## Features

- **Multiple ML Models**: Naive Bayes, Logistic Regression, Pretrained RoBERTa, and DistilBERT
- **Interactive Web Interface**: Built with Streamlit for easy use
- **Comprehensive EDA**: Detailed exploratory data analysis with visualizations
- **Real-time Predictions**: Test sarcasm detection on custom text inputs
- **Model Comparison**: Compare performance across different algorithms

## Dataset

The app uses a Reddit sarcasm detection dataset (sarcasm.csv) containing:
- **comment**: Text comments from Reddit
- **label**: Binary labels (1 = sarcasm, 0 = not sarcasm)
- **subreddit**: Source subreddit
- **score**: Reddit score/upvotes
- **author**: Comment author
- **parent_comment**: Parent comment context

    
<img width="1499" height="865" alt="Screenshot 2026-01-30 at 10 35 50 PM" src="https://github.com/user-attachments/assets/bf16a6a6-931e-4348-b3e3-c1bb1bee1b36" />

<img width="1294" height="637" alt="Screenshot 2026-01-30 at 10 36 40 PM" src="https://github.com/user-attachments/assets/5366a4a4-0169-4874-9d1f-54a3f91cfee3" />

## Models Implemented

### 1. **Naive Bayes**
- Uses CountVectorizer for feature extraction
- Fast training and prediction
- Good baseline performance

### 2. **Logistic Regression**
- TF-IDF vectorization with n-grams (1,2)
- Max features: 5000
- Robust linear classifier

### 3. **Pretrained RoBERTa**
- Model: jkhan447/sarcasm-detection-RoBerta-base-CR
- Fine-tuned specifically for sarcasm detection
- State-of-the-art transformer architecture

### 4. **DistilBERT**
- Lightweight BERT variant
- Faster inference while maintaining performance
- Good balance between speed and accuracy

## App Sections

### Home
Welcome page with project overview and features

### Dataset Overview
- Dataset preview
- Class distribution visualization
- Basic statistics

### EDA (Exploratory Data Analysis)
- Sarcasm proportion by comment length
- Top words in sarcastic vs non-sarcastic comments
- Subreddit analysis
- Reddit score distributions
- Word clouds for both classes

### Model Training
- Train all models with one click
- Automatic model serialization
- Performance metrics calculation

### Interactive Prediction
- Real-time sarcasm detection
- Test custom sentences
- Compare predictions across all models

---

## Quote
> “Sarcasm is the lowest form of wit but the highest form of intelligence.”
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
      "Focus on practical security and usability tradeoffs.",
    ],
    details: `
# Secure File Locker 

**Secure File Locker** is a cryptography-based file storage and sharing system that protects files at rest and in transit. It supports secure sharing, access revocation, and tamper-evident audit logging—without re-encrypting files.

<img width="621" height="489" alt="Demo" src="https://github.com/user-attachments/assets/3d378b35-af9e-4b19-91ed-d030398f21fe" />

---

## Demo Flow

1) **Register users** (\`user1\` = owner, \`user2\` = requester) — keys are generated and stored securely.  
2) **Upload** — file is encrypted locally with a unique **AES-GCM** key before storage.  
3) **Share** — the file key is securely wrapped for the target user (no file re-encryption).  
4) **Download** — authorized users unwrap the key and decrypt locally.  
5) **Revoke** — remove the user’s wrapped key entry to instantly revoke access.  
6) **Audit log** — track file actions and detect tampering via integrity checks.

<img width="875" height="654" alt="Screenshot 2026-01-30 at 10 18 14 PM" src="https://github.com/user-attachments/assets/9b6f2642-6db1-472d-ba33-0a19f909c47e" />

<img width="873" height="659" alt="Screenshot 2026-01-30 at 10 18 23 PM" src="https://github.com/user-attachments/assets/0d636c3a-30cd-4ed1-8627-d28b7677ea2d" />


---

## Security Highlights
- **X25519** for secure key wrapping
- **AES-GCM** for authenticated encryption
- Per-user access control without re-encrypting files
- Tamper-evident audit logging
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
# Suspicious Activity Alert Generation using Transfer Learning 

Suspicious Activity Alert Generation is a surveillance pipeline that takes real-time CCTV footage as input and runs it through a CNN built using transfer learning to detect suspicious activities such as **Shoplifting**, **Robbery**, or **Break-In**.

The goal is to reduce reliance on human monitoring by automatically identifying suspicious events and generating alerts to notify store owners as soon as an incident occurs. This enables faster response time and improves overall safety in retail environments.

---

## Demo (Shoplifting)
![Shoplifting](https://github.com/user-attachments/assets/413a2bfc-49c7-44de-b7d4-de19caa12a2d)
`
,
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
# DuckHuntAR 🎯

A remake of the classic Duck Hunt game built using **Augmented Reality**, developed in **Unity** with **Vuforia** for AR tracking.

The project recreates the core gameplay mechanics of Duck Hunt while leveraging AR to place targets directly into the user’s physical environment, creating an immersive and interactive experience.

---

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

---

## Features
- Augmented Reality gameplay using real-world surfaces
- Classic Duck Hunt mechanics reimagined in AR
- Real-time object tracking and interaction
- Built and tested on mobile devices

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
      "Built a conversational AI chatbot using NLP and large language models.",
      "Integrated frontend and backend for real-time messaging.",
      "Handled context management, prompt engineering, and API orchestration.",
      "Deployed as an interactive web application.",
    ],
    details: `
# Conversational AI Chatbot (HelpBot Houdini)

An interactive conversational AI system embedded directly into my portfolio, allowing visitors to engage with the chatbot in real time.

Unlike a static demo or external link, this chatbot is fully integrated into the site and runs live within the portfolio experience itself.

---

## How It Works

The chatbot is deployed as a dedicated route (\`/chatbot\`) and opens directly into an active conversation window when accessed. Visitors can immediately start interacting with the system without any setup or redirection.

---

## System Architecture

- **Frontend Integration**
  - Built with React and embedded directly into the portfolio UI
  - Chat interface opens automatically when the page loads
  - Clean, minimal design consistent with the overall site theme

- **Conversation Engine**
  - Uses NLP techniques and large language models to generate responses
  - Supports contextual conversation and prompt-based reasoning
  - Designed to handle general queries and exploratory interaction

- **Real-Time Interaction**
  - Messages are processed dynamically as users type
  - Responses are rendered instantly in the chat window
  - Input remains focused on load to encourage immediate interaction

---

## Why It’s Embedded

Embedding the chatbot directly into the portfolio serves two purposes:
1. Demonstrates practical AI integration in a real product setting
2. Allows visitors to experience the system firsthand, rather than reading about it

This approach highlights full-stack ownership, from UI and routing to AI behavior and deployment within a single cohesive application.

---

## Tech Stack
- **Frontend:** React
- **AI / NLP:** Large Language Models
- **Integration:** API-based inference
- **Deployment:** Live within the portfolio application
`
,
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

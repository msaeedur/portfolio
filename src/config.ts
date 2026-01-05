export const siteConfig = {
  name: "Muhammad Saeed Ur Rehman",
  title: "AI & Machine Learning Engineer | Data Scientist  | Software Engineer",
  description: "Portfolio website of Muhammad Saeed Ur-Rehman - AI Engineer specializing in Computer Vision, Speech Recognition,Machine Learning Operations, and Software Engineering",
  accentColor: "#1d4ed8",
  social: {
    email: "muhammad.saeedur@gmail.com",
    linkedin: "https://www.linkedin.com/in/msaeedur/",
    // twitter: "",
    github: "https://github.com/msaeedur",
  },
  aboutMe:
    "Machine learning engineer specializing in computer vision and NLP, with a focus on deploying robust, explainable AI systems for safety-critical applications. Proven expertise in end-to-end MLOps, cloud deployment (AWS), and optimizing models for resource-constrained environments. Successfully delivered high-impact projects across mobility, healthcare, and environmental science domains—leveraging techniques like uncertainty estimation, out-of-distribution detection, and real-time inference to ensure reliability in production systems. Committed to ethical AI practices and scalable solutions that bridge research with real-world impact.",
  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "AWS",
    "Docker",
    "CI/CD",
    "MLOps",
    "Linux",
    "Machine Learning",
    "Computer Vision",
    "Image Processing",
    "NLP",
    "LLM",
    "Speech Recognition",
    "Information Retrieval",
    "Data Science",
    "Software Engineer",
    "and more..."
  ],
  projects: [
    {
      name: "Arabic Speech Recognition System",
      description:
        "Low-latency Arabic speech recognition system deployed on AWS with personalized pronunciation feedback and mobile integration. Features fine-tuned generative AI image models using diffusion and flow-matching techniques for educational content, built with scalable microservice architecture using Docker and FastAPI",
      link: "https://www.linkedin.com/posts/quranlingo_quranlingo-ai-speechrecognition-activity-7367956380923633664-K5Ue?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA9ZY0oBSbxJoqksgPNWhmyCMr4pHVcg58c",
      skills: ["Python", "Speech Recognition", "AWS", "Machine Learning", "Generative AI (Text-to-Image)", "Mobile Development", "FastAPI", "Docker", "Microservices", "Whisper (OpenAI)", "AI Model Fine-Tuning", "Diffusion Models"],
    },
    {
      name: "Rail Track Semantic Segmentation with Explainable AI",
      description:
        "Computer vision system for rail safety using explainable AI methods including Saliency Maps, GradCAM, SHAP, and LIME to improve transparency of semantic segmentation models",
      link: "https://safetrain-projekt.de/en/",
      skills: ["Computer Vision", "Python", "TensorFlow", "ROS2","Uncertainty Estimation","Explainable AI", "Out-of-Distribution", "UNet", "CI/CD", "MLOps","CARLA"],
    },
    {
      name: "Shrimp Counting ML System",
      description:
        "Published research on machine learning models using CNNs for automated shrimp counting in industrial aquaculture settings, with Python web application for real-world deployment",
      link: "https://doi.org/10.1016/j.jclepro.2024.143024",
      skills: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Research", "Statistics", "YOLO", "UNet","Object Counting", "Object Detection"],
    },
  ],
  experience: [
    {
      company: "Quranlingo",
      title: "Senior Machine Learning Engineer",
      dateRange: "Jul 2025 - Jan 2026",
      bullets: [
        "Developed and deployed a low-latency Arabic speech recognition system on AWS with personalized pronunciation feedback and mobile integration",
        "Fine-tuned generative AI image models using diffusion and flow-matching techniques to create educational images for children",
        "Designed a scalable microservice-based setup using Docker and FastAPI to support real-time speech recognition",
      ],
    },
    {
      company: "Binary Soft Solutions",
      title: "Lead AI Engineer (Freelance)",
      dateRange: "Oct 2024 - Jun 2025",
      bullets: [
        "Developed a recursive RAG Chrome extension using Python, DSPy, and JavaScript to traverse citation trees, simplifying complex research concept explanations for users",
        "Led a team of three AI engineers using Scrum methodologies, resulting in streamlined code reviews and accelerated project delivery cycles",
        "Architected a scalable serverless backend using AWS Lambda, S3, and DynamoDB via Infrastructure as Code for a high-availability career assistant platform",
        "Deployed YOLOv8 and YOLOv10 models for real-time activity recognition on home security feeds, facilitating automated detection of critical behavioral anomalies",
      ],
    },
    {
      company: "Siemens Mobility GmbH",
      title: "Software Engineer Computer Vision",
      dateRange: "Feb 2022 - Sep 2024",
      bullets: [
        "Applied explainable-AI methods including Saliency Maps, GradCAM, SHAP, and LIME for rail track semantic segmentation",
        "Developed computer vision object detection and segmentation models using DINOv2-based obstacle prototypes",
        "Enhanced UNet reliability by implementing out-of-distribution detection and uncertainty estimation techniques",
        "Designed safety-driven online and offline metrics to track and optimize ML model performance",
      ],
    },
    {
      company: "Alfred Wegener Institute",
      title: "Computer Vision Engineer Internship",
      dateRange: "Mar 2021 - Feb 2022",
      bullets: [
        "Designed and tested CNN models using Python, TensorFlow, and OpenCV for automated shrimp counting",
        "Published research paper on machine learning methods for shrimp counting in aquaculture",
        "Developed Python-based web application for real-world model deployment and validation",
        "Collected and preprocessed large datasets, optimizing models for industrial environments",
      ],
    },
    {
      company: "Roche Diabetes Care Deutschland",
      title: "Software Engineer Internship",
      dateRange: "May 2019 - Apr 2021",
      bullets: [
        "Developed JavaScript application with Salesforce integration improving documentation efficiency",
        "Automated data extraction from observational studies and set up Power BI reporting for Controlling",
        "Created automated monitoring sheets for marketing data with Power BI dashboards",
        "Supported customer data import ensuring accurate and efficient data integration",
      ],
    },
  ],
  education: [
    {
      school: "University La Sorbonne",
      degree: "Bootcamp in Machine Learning Operations - MLOps",
      dateRange: "Sep 2025 - Nov 2025",
      achievements: [
        "Advanced training in MLOps practices and deployment strategies",
        "Focus on production-ready machine learning systems",
        "Located in Paris, France",
      ],
    },
    {
      school: "University of Mannheim",
      degree: "Master in Data Science",
      dateRange: "Feb 2019 - Jan 2022",
      achievements: [
        "Specialized in machine learning and statistical analysis",
        "Completed thesis work on computer vision applications",
        "Located in Mannheim, Germany",
      ],
    },
    {
      school: "Riphah International University",
      degree: "Bachelor in Software Engineering",
      dateRange: "Sep 2012 - Nov 2016",
      achievements: [
        "Foundation in software development and engineering principles",
        "Programming languages and system design",
        "Located in Islamabad, Pakistan",
      ],
    },
  ],
};

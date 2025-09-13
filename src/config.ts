export const siteConfig = {
  name: "Muhammad Saeed Ur Rehman",
  title: "AI Engineer & Data Scientist",
  description: "Portfolio website of Muhammad Saeed Ur-Rehman - AI Engineer specializing in Computer Vision, Speech Recognition, and Machine Learning Operations",
  accentColor: "#1d4ed8",
  social: {
    email: "muhammad.saeedur@gmail.com",
    linkedin: "https://www.linkedin.com/in/msaeedur/",
    // twitter: "",
    github: "https://github.com/msaeedur",
  },
  aboutMe:
    "AI Engineer and Data Scientist with expertise in computer vision, speech recognition, and machine learning operations. Currently working on cutting-edge Arabic speech recognition systems at Quranlinqo, with previous experience at Siemens Mobility developing explainable AI solutions for rail safety. Passionate about building accessible AI solutions that work on resource-constrained devices and making technology more inclusive.",
  skills: [
    "Python",
    "JavaScript",
    "C++",
    "Machine Learning",
    "Computer Vision",
    "Speech Recognition",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "AWS",
    "MLOps",
    "Data Science",
    "Pandas",
    "Scikit-Learn",
    "SQL",
    "Power BI",
    "Docker"
  ],
  projects: [
    {
      name: "Arabic Speech Recognition System",
      description:
        "Lightweight Arabic speech recognition system (1MB vs 200+ MB competitors) deployed on AWS cloud, enabling real-time pronunciation feedback for Quran learning applications",
      link: "",
      skills: ["Python", "Speech Recognition", "AWS", "Machine Learning", "Mobile Development"],
    },
    {
      name: "Rail Track Semantic Segmentation with Explainable AI",
      description:
        "Computer vision system for rail safety using explainable AI methods including Saliency Maps, GradCAM, SHAP, and LIME to improve transparency of semantic segmentation models",
      link: "",
      skills: ["Computer Vision", "Python", "TensorFlow", "Explainable AI", "UNet"],
    },
    {
      name: "Shrimp Counting ML System",
      description:
        "Published research on machine learning models using CNNs for automated shrimp counting in industrial aquaculture settings, with Python web application for real-world deployment",
      link: "https://doi.org/10.1016/j.jclepro.2024.14302408",
      skills: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Research"],
    },
  ],
  experience: [
    {
      company: "Quranlinqo",
      title: "AI Engineer Speech Recognition",
      dateRange: "Jul 2025 - Present",
      bullets: [
        "Designed and deployed a lightweight Arabic speech recognition system (1MB vs 200+ MB competitors) on AWS cloud",
        "Engineered AI-powered solution optimized for low-spec devices with minimal storage and weak GPUs",
        "Built custom speech recognition engine achieving low-latency performance with limited training data",
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

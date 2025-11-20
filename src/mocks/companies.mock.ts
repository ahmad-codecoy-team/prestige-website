export interface ExperienceCategory {
  name: string;
  options: string[];
}

export interface ExperienceSubOptions {
  [key: string]: string[];
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  description?: string;
  formRequirements: {
    needsI9: boolean;
    needsW9: boolean;
  };
  contact?: {
    email: string;
    phone: string;
    address: string;
  };
  experienceCategories: ExperienceCategory[];
  experienceSubOptions: ExperienceSubOptions;
}

export const COMPANIES_MOCK: Company[] = [
  {
    id: 1,
    name: "AV Workforce",
    logo: "/logo.svg",
    description: "Leading audiovisual workforce solutions",
    formRequirements: {
      needsI9: true,
      needsW9: true,
    },
    contact: {
      email: "avworkforce@gmail.com",
      phone: "+3456784569",
      address: "65 Charlotte Rd, Hackney, London",
    },
    experienceCategories: [
      {
        name: "Audio Visual Equipment",
        options: ["Microphone Setup", "Speaker Installation", "Video Projection", "Sound Mixing", "Lighting Control", "Camera Operation", "Audio Recording", "Display Management"]
      },
      {
        name: "Event Production",
        options: ["Stage Setup", "Event Coordination", "Live Streaming", "Recording Equipment", "Event Planning", "Venue Management", "Crowd Control", "Equipment Transportation"]
      },
      {
        name: "Technical Support",
        options: ["Equipment Maintenance", "Troubleshooting", "Cable Management", "System Integration", "Network Setup", "Wireless Configuration"]
      },
      {
        name: "Broadcasting & Media",
        options: ["Video Editing", "Live Broadcasting", "Media Production", "Content Creation", "Post Production", "Streaming Platforms"]
      }
    ],
    experienceSubOptions: {
      "Video Projection": ["Projector Setup", "Screen Installation", "HDMI Configuration", "Wireless Display", "Resolution Optimization"],
      "Sound Mixing": ["Audio Board Operation", "EQ Adjustment", "Multi-track Mixing", "Live Sound", "Digital Audio Workstation"],
      "Live Streaming": ["OBS Studio", "Streaming Software", "Multi-camera Setup", "Social Media Streaming", "RTMP Configuration"],
      "Event Planning": ["Venue Coordination", "Timeline Management", "Vendor Relations", "Budget Planning", "Risk Management"]
    }
  },
  {
    id: 2,
    name: "Codecoy Technologies",
    logo: "",
    description: "Innovative technology solutions",
    formRequirements: {
      needsI9: true,
      needsW9: false,
    },
    contact: {
      email: "codecoy@gmail.com",
      phone: "+3456784570",
      address: "Tech Hub, Silicon Valley, CA",
    },
    experienceCategories: [
      {
        name: "Software Development",
        options: ["Frontend Development", "Backend Development", "Mobile App Development", "Database Management", "API Integration", "Full Stack Development", "Web Development", "Software Architecture"]
      },
      {
        name: "Programming Languages",
        options: ["JavaScript", "Python", "Java", "React", "Node.js", "TypeScript", "C#", "PHP", "Go", "Rust", "Swift", "Kotlin"]
      },
      {
        name: "DevOps & Cloud",
        options: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git Version Control", "Azure", "Google Cloud", "Jenkins", "Terraform"]
      },
      {
        name: "Data & Analytics",
        options: ["Data Science", "Machine Learning", "Big Data", "Data Visualization", "ETL Processes", "Business Intelligence"]
      },
      {
        name: "Quality Assurance",
        options: ["Manual Testing", "Automated Testing", "Test Planning", "Performance Testing", "Security Testing", "Mobile Testing"]
      }
    ],
    experienceSubOptions: {
      "Frontend Development": ["React.js", "Vue.js", "Angular", "HTML/CSS", "Responsive Design", "JavaScript Frameworks", "UI/UX Design"],
      "Backend Development": ["REST APIs", "GraphQL", "Database Design", "Server Management", "Microservices", "Authentication"],
      "AWS": ["EC2", "S3", "Lambda", "RDS", "CloudFormation", "API Gateway", "CloudWatch"],
      "Mobile App Development": ["React Native", "Flutter", "Native iOS", "Native Android", "Hybrid Apps", "App Store Deployment"],
      "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Neural Networks", "Model Deployment"]
    }
  },
  {
    id: 3,
    name: "Prestige labor solution",
    logo: "",
    description: "Premium workforce solutions",
    formRequirements: {
      needsI9: false,
      needsW9: true,
    },
    contact: {
      email: "prestige@gmail.com",
      phone: "+3456784571",
      address: "Downtown Plaza, New York, NY",
    },
    experienceCategories: [
      {
        name: "Construction & Labor",
        options: ["General Construction", "Electrical Work", "Plumbing", "Carpentry", "Painting", "Roofing", "Flooring", "Drywall", "Masonry", "Welding"]
      },
      {
        name: "Heavy Machinery",
        options: ["Forklift Operation", "Crane Operation", "Excavator", "Bulldozer", "Loader Operation", "Dump Truck", "Skid Steer", "Backhoe"]
      },
      {
        name: "Safety & Compliance",
        options: ["OSHA Certification", "Safety Training", "Quality Control", "Site Supervision", "Risk Assessment", "Emergency Response", "Safety Inspection"]
      },
      {
        name: "Specialized Skills",
        options: ["Blueprint Reading", "Project Management", "Material Handling", "Equipment Maintenance", "Cost Estimation", "Surveying"]
      },
      {
        name: "Warehouse & Logistics",
        options: ["Inventory Management", "Shipping & Receiving", "Order Fulfillment", "Supply Chain", "Packaging", "Distribution"]
      }
    ],
    experienceSubOptions: {
      "Electrical Work": ["Wiring Installation", "Circuit Breakers", "Outlet Installation", "Lighting Systems", "Panel Installation", "Conduit Work"],
      "Forklift Operation": ["Warehouse Operations", "Loading/Unloading", "Inventory Management", "Safety Protocols", "Reach Truck", "Pallet Jack"],
      "General Construction": ["Foundation Work", "Framing", "Concrete Work", "Site Preparation", "Demolition", "Structural Work"],
      "Project Management": ["Scheduling", "Budget Management", "Team Coordination", "Quality Assurance", "Timeline Management", "Resource Planning"]
    }
  },
  {
    id: 4,
    name: "Oracle",
    logo: "",
    description: "Enterprise software and cloud solutions",
    formRequirements: {
      needsI9: true,
      needsW9: true,
    },
    contact: {
      email: "oracle@gmail.com",
      phone: "+3456784572",
      address: "Oracle Park, Austin, TX",
    },
    experienceCategories: [
      {
        name: "Database Administration",
        options: ["Oracle Database", "MySQL", "PostgreSQL", "Database Tuning", "Backup & Recovery"]
      },
      {
        name: "Enterprise Applications",
        options: ["ERP Systems", "CRM Implementation", "Business Intelligence", "Data Analytics"]
      },
      {
        name: "Cloud Infrastructure",
        options: ["Oracle Cloud", "Database Migration", "Cloud Security", "Performance Monitoring"]
      }
    ],
    experienceSubOptions: {
      "Oracle Database": ["PL/SQL", "Database Design", "Performance Tuning", "Data Modeling"],
      "ERP Systems": ["Oracle ERP", "SAP", "Financial Modules", "Supply Chain Management"]
    }
  },
  {
    id: 5,
    name: "Infosys",
    logo: "",
    description: "Global technology consulting and services",
    formRequirements: {
      needsI9: true,
      needsW9: false,
    },
    contact: {
      email: "infosys@gmail.com",
      phone: "+3456784573",
      address: "Tech Center, Bangalore, India",
    },
    experienceCategories: [
      {
        name: "Consulting Services",
        options: ["Business Analysis", "Project Management", "Digital Transformation", "Process Optimization"]
      },
      {
        name: "Technology Solutions",
        options: ["AI/Machine Learning", "Data Science", "Blockchain", "IoT Solutions", "Automation"]
      },
      {
        name: "Industry Expertise",
        options: ["Banking & Finance", "Healthcare", "Retail", "Manufacturing", "Telecommunications"]
      }
    ],
    experienceSubOptions: {
      "AI/Machine Learning": ["TensorFlow", "PyTorch", "Natural Language Processing", "Computer Vision"],
      "Banking & Finance": ["Payment Systems", "Risk Management", "Compliance", "Trading Systems"]
    }
  },
  {
    id: 6,
    name: "Microsoft",
    logo: "",
    description: "Technology and cloud computing leader",
    formRequirements: {
      needsI9: false,
      needsW9: true,
    },
    contact: {
      email: "microsoft@gmail.com",
      phone: "+3456784574",
      address: "Microsoft Campus, Redmond, WA",
    },
    experienceCategories: [
      {
        name: "Microsoft Technologies",
        options: ["Azure Cloud", ".NET Development", "Microsoft 365", "Power Platform", "SQL Server"]
      },
      {
        name: "Product Development",
        options: ["Software Engineering", "User Experience Design", "Product Management", "Quality Assurance"]
      },
      {
        name: "Enterprise Solutions",
        options: ["SharePoint", "Teams Integration", "Office Development", "Power BI", "Dynamics 365"]
      }
    ],
    experienceSubOptions: {
      "Azure Cloud": ["Virtual Machines", "App Services", "Azure Functions", "Cosmos DB", "DevOps"],
      ".NET Development": ["C#", "ASP.NET Core", "Entity Framework", "Blazor", "Web APIs"],
      "Power Platform": ["Power Apps", "Power Automate", "Power BI", "Power Virtual Agents"]
    }
  },
];
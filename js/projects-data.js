/**
 * Portfolio Data Configuration for ABHINAV BATWAL
 * JECRC University (1st Year B.Tech CSE) | Passionate Programmer Since 10th Grade
 * From Kota District (Mangalam Vidya Vihar) | Hardware & Technology Enthusiast
 */

const portfolioData = {
  personal: {
    name: "ABHINAV BATWAL",
    shortName: "Abhinav",
    title: "1st Year B.Tech CSE Student @ JECRC University | Programmer & Hardware Enthusiast",
    headline: "Turning Curiosity into Code & Circuits",
    roles: [
      "1st Year B.Tech CSE @ JECRC University",
      "Passionate Programmer Since 10th Standard",
      "Hardware & Electronics Tinkerer",
      "Aspiring Software Engineer",
      "PC Architecture & Tech Explorer"
    ],
    bio: "I am a first-year Computer Science Engineering student at JECRC University with a passion for programming that sparked around the 10th standard. Originating from Kota District and shaped by the academic foundation of Mangalam Vidya Vihar, I blend analytical problem-solving with a hands-on maker spirit. In addition to software and algorithmic logic, I am an enthusiastic hardware tinkerer fascinated by microcontrollers, PC architecture, circuit diagnostics, and emerging technology.",
    location: "Kota District & Jaipur, Rajasthan, India",
    email: "abhinavbatwal0101@gmail.com",
    phone: "8619385002",
    phoneFormatted: "+91 8619385002",
    whatsappUrl: "https://wa.me/918619385002",
    github: "https://github.com/batwallabhinav-bit",
    githubUser: "batwallabhinav-bit",
    linkedin: "https://linkedin.com/in/abhinav-batwal",
    avatar: "assets/profile.jpg",
    avatarFallback: "assets/profile-avatar.svg",
    availableForHire: true,
    hometown: "Kota District, Rajasthan",
    school: "Mangalam Vidya Vihar, Kota",
    university: "JECRC University, Jaipur",
    stats: [
      { label: "Coding Since", value: "10th Std" },
      { label: "University", value: "JECRC Univ" },
      { label: "Schooling", value: "Mangalam V.V." },
      { label: "Hometown", value: "Kota Dist." }
    ],
    social: {
      github: "https://github.com/batwallabhinav-bit",
      linkedin: "https://linkedin.com/in/abhinav-batwal",
      whatsapp: "https://wa.me/918619385002",
      email: "mailto:abhinavbatwal0101@gmail.com",
      phone: "tel:+918619385002"
    }
  },

  journey: [
    {
      step: "01",
      title: "The Genesis: 10th Standard Discovery",
      period: "Around 10th Standard",
      institution: "First Spark of Code",
      icon: "fas fa-lightbulb",
      badge: "Inception",
      description: "My journey into technology kicked off around the 10th standard when I wrote my first lines of code. What began as curiosity about how computers and games work quickly transformed into a deep, sustained passion for writing programs, solving logical puzzles, and automating repetitive tasks.",
      highlights: [
        "First exposure to programming logic, variables, and control flow",
        "Discovered the joy of turning abstract ideas into functional scripts",
        "Built early calculation tools, text puzzles, and algorithm sketches",
        "Sparked a lifelong desire to pursue Computer Science Engineering"
      ]
    },
    {
      step: "02",
      title: "Academic Rigor: Mangalam Vidya Vihar",
      period: "Senior Secondary",
      institution: "Mangalam Vidya Vihar, Kota District",
      icon: "fas fa-school",
      badge: "Foundation",
      description: "Growing up in Kota District—famed across India for its competitive academic environment—I completed my schooling at Mangalam Vidya Vihar. Here, I honed disciplined analytical thinking, mathematical problem-solving, and scientific inquiry that now underpins my engineering mindset.",
      highlights: [
        "Strong foundation in Mathematics, Physics, and Analytical Logic",
        "Participated in school science and technology exhibitions",
        "Explored physics of electronics, semiconductors, and basic circuits",
        "Cultivated perseverance and competitive problem-solving habits"
      ]
    },
    {
      step: "03",
      title: "Undergraduate Journey: JECRC University",
      period: "2024 - Present",
      institution: "JECRC University, Jaipur (1st Year B.Tech CSE)",
      icon: "fas fa-university",
      badge: "Current Milestone",
      description: "Currently in my first year of B.Tech in Computer Science and Engineering at JECRC University. Actively diving deep into Data Structures, modern programming paradigms, collaborative engineering, and expanding my horizons into embedded tech and web architecture.",
      highlights: [
        "Core coursework in Data Structures, C/C++, and Object-Oriented Principles",
        "Active member of university technical clubs and coding communities",
        "Hands-on coding sprint challenges and algorithmic problem sets",
        "Collaborating on multi-disciplinary engineering projects"
      ]
    }
  ],

  hardwareHobbies: [
    {
      id: "pc-building",
      title: "Custom PC Building & Architecture",
      icon: "fas fa-microchip",
      gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)",
      description: "Fascinated by computer architecture from the silicon up. I enjoy researching processor micro-architectures, assembling custom desktop rigs, managing thermals, optimizing memory timings, and benchmarking performance.",
      tags: ["CPU/GPU Architecture", "Thermal Dynamics", "BIOS Configuration", "Benchmarking"]
    },
    {
      id: "embedded-iot",
      title: "Microcontrollers & Embedded Electronics",
      icon: "fas fa-robot",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
      description: "Hands-on tinkering with Arduino boards, ESP modules, and Raspberry Pi. Connecting digital logic with physical hardware—interfacing ultrasonic sensors, LEDs, relays, OLED displays, and telemetry readers.",
      tags: ["Arduino", "Raspberry Pi", "Sensors & Actuators", "Circuit Design", "IoT"]
    },
    {
      id: "diagnostics-repair",
      title: "Hardware Diagnostics & Electronics Tinkering",
      icon: "fas fa-tools",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      description: "Love opening up gadgets and electronics to inspect circuit boards. Understanding power delivery, multimeter continuity checks, basic soldering, and troubleshooting faulty peripheral components.",
      tags: ["Multimeter Testing", "Soldering", "Circuit Tracing", "Component Diagnostics"]
    },
    {
      id: "linux-tinkering",
      title: "Linux Environments & Low-Level Systems",
      icon: "fab fa-linux",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      description: "Configuring custom Linux installations, exploring Bash scripting, managing system processes, and running headless servers for home-lab experiments and automation tasks.",
      tags: ["Linux Kernels", "Bash Scripting", "Terminal Workflow", "Home-Lab Setup"]
    }
  ],

  skills: {
    programming: [
      { name: "Python", level: 88, icon: "fab fa-python", color: "#3776ab" },
      { name: "C / C++", level: 85, icon: "fas fa-code", color: "#00599c" },
      { name: "Java (Foundations)", level: 75, icon: "fab fa-java", color: "#ea2d2e" },
      { name: "JavaScript (ES6+)", level: 80, icon: "fab fa-js", color: "#f7df1e" },
      { name: "HTML5 & CSS3", level: 90, icon: "fab fa-html5", color: "#e34f26" }
    ],
    hardware: [
      { name: "PC Architecture & Assembly", level: 92, icon: "fas fa-desktop", color: "#6366f1" },
      { name: "Arduino / Microcontrollers", level: 82, icon: "fas fa-microchip", color: "#00979d" },
      { name: "Raspberry Pi & Single-Board Computers", level: 78, icon: "fab fa-raspberry-pi", color: "#c51a4a" },
      { name: "Circuit Diagnostics & Multimeter", level: 80, icon: "fas fa-bolt", color: "#f59e0b" },
      { name: "Sensor & Actuator Interfacing", level: 85, icon: "fas fa-satellite-dish", color: "#10b981" }
    ],
    tools: [
      { name: "Git & GitHub", level: 86, icon: "fab fa-github", color: "#f05032" },
      { name: "VS Code & JetBrains", level: 90, icon: "fas fa-laptop-code", color: "#007acc" },
      { name: "Linux / Bash Shell", level: 82, icon: "fab fa-linux", color: "#fcc624" },
      { name: "Data Structures & Algorithmic Logic", level: 84, icon: "fas fa-sitemap", color: "#8b5cf6" },
      { name: "Markdown & Documentation", level: 90, icon: "fab fa-markdown", color: "#06b6d4" }
    ]
  },

  projects: [
    {
      id: "task-suite-zip",
      title: "Core Programming Tasks & Algorithm Suite",
      category: "tasks",
      badge: "ZIP File Tasks Showcase",
      shortDescription: "Curated collection of programming tasks from 10th grade through college: algorithm design, data structures, automation scripts, and file I/O operations.",
      fullDescription: "A structured programming suite compiled from Abhinav's programming archive (available via the tasks ZIP bundle). Covers fundamental to intermediate algorithmic problems, array manipulation, recursion, text tokenizers, and custom data format parsing. Represents the hands-on coding milestones mastered along the journey.",
      imageGradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      icon: "fas fa-file-archive",
      tags: ["Python", "C++", "Algorithms", "File I/O", "Logic Building"],
      liveUrl: "",
      githubUrl: "https://github.com/batwallabhinav-bit",
      highlights: [
        "Structured modular tasks addressing standard computational logic",
        "Clean, well-documented source code with input/output validation",
        "Demonstrates progression from 10th standard fundamentals to college data structures",
        "Directly inspectable from the local tasks archive"
      ]
    },
    {
      id: "hardware-telemetry-monitor",
      title: "Hardware Sensor & Telemetry Monitor",
      category: "hardware",
      badge: "Hardware & IoT",
      shortDescription: "Microcontroller interface reading temperature, ultrasonic distance, and environmental data with live serial streaming output.",
      fullDescription: "An interactive hardware prototyping project leveraging an Arduino microcontroller wired to ambient sensors (ultrasonic distance, thermistor, and photo-resistor). Includes serial communication protocol scripts that stream formatted sensor readings to a connected PC terminal for diagnostic logging.",
      imageGradient: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
      icon: "fas fa-microchip",
      tags: ["Arduino", "C++", "Sensors", "Hardware Tinkering", "Serial Telemetry"],
      liveUrl: "",
      githubUrl: "https://github.com/batwallabhinav-bit",
      highlights: [
        "Wired analog and digital sensor array with noise-filtering logic",
        "Continuous serial data stream formatted for real-time telemetry",
        "Threshold trigger alert system driving onboard status LEDs",
        "Low power consumption loop optimization"
      ]
    },
    {
      id: "digital-resume-portfolio",
      title: "Interactive Digital Resume & Portfolio",
      category: "web",
      badge: "Featured Web Project",
      shortDescription: "Ultra-responsive, colorful personal portfolio and digital resume showcasing educational milestones, downloadable credentials, and contact hub.",
      fullDescription: "A high-performance personal web platform designed to present Abhinav Batwal's complete profile, journey, hardware hobbies, and programming tasks. Features dynamic data hydration, dual dark/light themes, smooth responsive navigation, one-click copy utilities, and direct credential downloads.",
      imageGradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      icon: "fas fa-globe",
      tags: ["HTML5", "CSS3 / Custom Variables", "JavaScript (ES6+)", "Responsive UI"],
      liveUrl: "#",
      githubUrl: "https://github.com/batwallabhinav-bit",
      highlights: [
        "100% vanilla web standards with zero bloated dependencies",
        "Dual dark/light themes with localStorage persistence",
        "Instant one-click copy for contact details & WhatsApp chat trigger",
        "Dedicated downloadable hub for Resume and Certifications"
      ]
    },
    {
      id: "algorithmic-data-structures",
      title: "Algorithmic Logic & Data Structures Lab",
      category: "tasks",
      badge: "Programming Lab",
      shortDescription: "Implementations of fundamental data structures: linked lists, stacks, queues, binary search trees, and sorting algorithms in C++ & Python.",
      fullDescription: "A comprehensive repository of algorithmic implementations developed during 1st-year coursework at JECRC University and self-directed study. Focuses on time/space complexity trade-offs, pointer arithmetic, recursion trees, and test cases.",
      imageGradient: "linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)",
      icon: "fas fa-code-branch",
      tags: ["C++", "Python", "Data Structures", "Big-O Analysis", "Recursion"],
      liveUrl: "",
      githubUrl: "https://github.com/batwallabhinav-bit",
      highlights: [
        "Benchmark comparison of QuickSort, MergeSort, and BubbleSort",
        "Custom linked-list and binary tree traversal utilities",
        "Modular header files with clean memory management",
        "Comprehensive sample inputs and edge-case testing"
      ]
    },
    {
      id: "pc-hardware-benchmarking",
      title: "PC Hardware Diagnostic & Benchmarking Utility",
      category: "hardware",
      badge: "System Tool",
      shortDescription: "System monitoring script tracking CPU temperatures, RAM throughput, and disk read/write metrics with visual CLI logs.",
      fullDescription: "Created to aid PC building and hardware testing. A lightweight diagnostic tool that queries hardware telemetry sensors, logs temperature fluctuations under synthetic load, and outputs formatted health summaries to detect thermal throttling.",
      imageGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      icon: "fas fa-tachometer-alt",
      tags: ["Python", "System Diagnostics", "PC Hardware", "CLI", "Linux"],
      liveUrl: "",
      githubUrl: "https://github.com/batwallabhinav-bit",
      highlights: [
        "Real-time sensor polling for core temperatures and clock speeds",
        "Automated stress test logging to detect thermal hotspots",
        "Color-coded terminal alert thresholds (Green / Yellow / Red)",
        "Zero external heavyweight GUI overhead"
      ]
    }
  ],

  downloads: {
    resume: {
      title: "Abhinav Batwal - Official Resume (PDF)",
      subtitle: "First-Year B.Tech CSE • JECRC University • Kota Background",
      fileName: "Abhinav_Batwal_Resume.pdf",
      filePath: "downloads/Abhinav_Batwal_Resume.pdf",
      fileType: "PDF Document",
      fileSize: "24 KB",
      lastUpdated: "September 2026",
      description: "Contains comprehensive academic background, 10th-grade programming genesis, Mangalam Vidya Vihar schooling, technical competencies, and project portfolio.",
      highlights: [
        "Education: JECRC University (B.Tech CSE) & Mangalam Vidya Vihar, Kota",
        "Programming & Hardware Skills breakdown",
        "Contact info, GitHub profile & verified details"
      ]
    },
    certificates: [
      {
        id: "cert-prog-foundations",
        title: "Programming Foundations & Logic Certificate",
        issuer: "JECRC University Student Credential",
        fileName: "Programming_Foundations_Certificate.pdf",
        filePath: "downloads/Programming_Foundations_Certificate.pdf",
        fileType: "PDF",
        fileSize: "18 KB",
        date: "2024 - 2025",
        badge: "Programming",
        badgeColor: "#6366f1",
        description: "Certification verifying mastery in core programming principles, algorithmic logic, and code modularity."
      },
      {
        id: "cert-hardware-workshop",
        title: "Hardware & IoT Workshop Participation",
        issuer: "Technology & Hardware Lab",
        fileName: "Hardware_Tinkering_Workshop_Cert.pdf",
        filePath: "downloads/Hardware_Tinkering_Workshop_Cert.pdf",
        fileType: "PDF",
        fileSize: "19 KB",
        date: "2024",
        badge: "Hardware",
        badgeColor: "#06b6d4",
        description: "Hands-on participation certificate in PC architecture assembly, microcontroller circuit wiring, and sensor telemetry."
      },
      {
        id: "cert-academic-mvv",
        title: "Academic Excellence & STEM Aptitude",
        issuer: "Mangalam Vidya Vihar, Kota District",
        fileName: "Academic_Excellence_MVV.pdf",
        filePath: "downloads/Academic_Excellence_MVV.pdf",
        fileType: "PDF",
        fileSize: "18 KB",
        date: "Secondary / Senior Secondary",
        badge: "Academic",
        badgeColor: "#10b981",
        description: "Certificate of academic achievement recognizing analytical mathematics, science rigor, and early aptitude in computer studies."
      }
    ],
    bundleZip: {
      title: "All Credentials Bundle (.ZIP)",
      fileName: "Certificates_Abhinav_Batwal.zip",
      filePath: "downloads/Certificates_Abhinav_Batwal.zip",
      fileType: "ZIP Archive",
      fileSize: "55 KB",
      description: "One-click download containing all certificates and credentials in a single convenient archive."
    }
  },

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      institution: "JECRC University, Jaipur, Rajasthan",
      period: "2024 - 2028 (Currently in 1st Year)",
      grade: "In Progress",
      details: "Pursuing core computer science foundations: Data Structures, Algorithms, Discrete Mathematics, Digital Logic, and hands-on software development."
    },
    {
      degree: "Senior Secondary (12th Standard) & Secondary (10th Standard)",
      institution: "Mangalam Vidya Vihar, Kota District, Rajasthan",
      period: "Completed with High Distinction",
      grade: "CBSE / State Board",
      details: "Studied in India's coaching capital Kota. Discovered passion for computer programming around the 10th standard, developing strong mathematical and problem-solving fundamentals."
    }
  ]
};

// Expose globally on window
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}

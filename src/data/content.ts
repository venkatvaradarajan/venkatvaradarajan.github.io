export const header_sections = [
  { id: 'contact', label: 'Contact' },
]


export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]


export const profile = {
  name: 'Venkat Varadarajan',
  role: 'Consulting Member of Technical Staff, Oracle',
  location: 'Seattle, WA',
  user: 'dmVuazE5ODk=',
  domain: 'Z21haWwuY29t',
  linkedin: 'https://www.linkedin.com/in/vvaradarajan/',
  scholar: 'https://scholar.google.com/citations?user=dzOhw-cAAAAJ&hl=en',
  resumeUrl: '/resume.pdf',
  tagline:
    'I work at the intersection of research and production engineering — turning ideas that start on paper into systems that run at scale.',
}

export const about = {
  paragraphs: [
    'I build large-scale data processing and machine learning systems, with 10+ years of experience spanning research and production engineering. My work spans Oracle Database and MySQL HeatWave, a unified cloud service for lakehouse analytics with built-in machine learning.',
    'I hold 15+ issued US patents and have published in venues including VLDB, SIGMOD, and MICRO. Recent work centers on turning unstructured data into vector knowledge bases at scale, and on the infrastructure — parallel data pipelines, hyperparameter optimization, multi-cloud billing — that makes those systems reliable in production.',
    'Before Oracle, I completed my PhD and MS in Computer Science at the University of Wisconsin–Madison, researching isolation and security in multi-tenant public clouds, advised by Professors Thomas Ristenpart and Michael Swift.',
  ],
}

export type ExperienceEntry = {
  org: string
  title: string
  location: string
  dates: string
  summary?: string
}

// Kept intentionally brief — the depth of what was actually built lives in
// the Projects section below, since that's the part a resume can't show.
export const experience: ExperienceEntry[] = [
  {
    org: 'Oracle',
    title: 'Consulting Member of Technical Staff',
    location: 'Seattle, WA',
    dates: 'Apr 2022 – Present',
    //summary: 'Data and GenAI platform engineering for MySQL HeatWave — vector pipelines, Lakehouse data loading, and multi-cloud billing infrastructure.',
  },
  {
    org: 'Oracle Labs',
    title: 'Principal Member of Technical Staff',
    location: 'Austin, TX / Seattle, WA',
    dates: 'Jan 2018 – Apr 2022',
    //summary: 'Led the MySQL HeatWave elastic resize feature and published research (MICRO, SIGMOD, VLDB) on the RAPID engine that became HeatWave.',
  },
  {
    org: 'Oracle Labs',
    title: 'Senior Member of Technical Staff',
    location: 'Austin, TX',
    dates: 'Feb 2016 – Jan 2018',
    //summary: 'Lead architect of Oracle\u2019s AutoML engine, now used widely across Oracle products including Oracle Database.',
  },
  {
    org: 'University of Wisconsin–Madison',
    title: 'Research Assistant',
    location: 'Madison, WI',
    dates: 'Jan 2012 – Dec 2015',
  },
  {
    org: 'University of Wisconsin–Madison',
    title: 'Teaching Assistant',
    location: 'Madison, WI',
    dates: 'Aug 2010 – Dec 2011',
  },
  {
    org: 'VMware',
    title: 'MTS Intern, Distributed Resource Management',
    location: 'Palo Alto, CA',
    dates: 'Summer 2013',
  },
  {
    org: 'Microsoft',
    title: 'SDE Intern, C++ AMP Compiler Backend',
    location: 'Redmond, WA',
    dates: 'Summer 2011',
  },
]

export const education = [
  {
    school: 'University of Wisconsin–Madison',
    degree: 'PhD & MS, Computer Science',
    detail: 'Operating Systems, Cloud Computing, System Security',
    dates: '2010 – 2015',
  },
  {
    school: 'College of Engineering, Guindy (CEG), Anna University',
    degree: 'BE, Computer Science & Engineering',
    dates: '2006 – 2010',
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  url?: string
  linkLabel?: string
}

export const projects: Project[] = [
  {
    title: 'Vector knowledge base pipeline for GenAI in MySQL',
    description:
      'A fully automated, massively parallel pipeline that parses, chunks, and embeds unstructured documents at scale, transforming them into vector knowledge bases used by GenAI features across MySQL. Documents are discovered directly from object storage and turned into a queryable, in-database vector store with no separate vector database and no data movement.',
    tags: ['RAG', 'Vector store', 'GenAI', 'MySQL HeatWave'],
    url: 'https://www.oracle.com/mysql/genai/',
    linkLabel: 'MySQL HeatWave GenAI',
  },
  {
    title: 'MySQL HeatWave Lakehouse data-loading framework',
    description:
      'Lead architect for the parallel, distributed framework that loads external objects and tables from cloud object storage into the Lakehouse, cutting data-load times from S3 by 40% through optimized object prefixing. Supports structured formats (CSV, Parquet, Avro, JSON) as well as unstructured documents, all queryable with standard MySQL syntax.',
    tags: ['Distributed systems', 'AWS S3', 'Lakehouse'],
    url: 'https://www.oracle.com/heatwave/lakehouse/',
    linkLabel: 'MySQL HeatWave Lakehouse',
  },
  {
    title: 'Multi-cloud billing and metering platform',
    description:
      'Architected the cost-attribution, billing, and metering service for a managed database deployment spanning AWS and OCI, including a purpose-built integration with AWS Cost Explorer to generate usage-based billing meters, plus the web console and data plane that surface it to customers.',
    tags: ['AWS', 'OCI', 'Platform engineering'],
  },
  {
    title: 'MySQL HeatWave online elastic resize',
    description:
      'Full-stack feature enabling zero-downtime, on-demand resizing of the in-memory query accelerator for live workloads, spanning changes to the control plane, data plane, and UI. The cluster stays available and query-ready throughout the resize, with no service disruption.',
    tags: ['Systems', 'Cloud infrastructure'],
    url: 'https://docs.oracle.com/en-us/iaas/mysql-database/doc/managing-heatwave-cluster.html',
    linkLabel: 'HeatWave cluster resize docs',
  },
  {
    title: 'Oracle AutoML engine',
    description:
      'A patented, gradient-based hyperparameter optimization engine using asynchronous parallel search and an iteration-free, meta-learning approach to algorithm and feature selection — integrated into Oracle Database (OML4Py), the OML AutoML UI, Oracle Data Science Platform, and MySQL. Now used widely across Oracle, including within Oracle Database itself.',
    tags: ['AutoML', 'Machine learning', 'Patented'],
    url: 'https://dl.acm.org/doi/abs/10.14778/3415478.3415542',
    linkLabel: 'Read the VLDB paper',
  },
  {
    title: 'RAPID query processing engine',
    description:
      'A hardware/software co-designed, in-memory analytical query engine built for extreme performance per watt — the research foundation that became MySQL HeatWave. Later research extended the same custom hardware to image and vision workloads and storage servers.',
    tags: ['Custom hardware', 'Query processing', 'SIGMOD'],
    url: 'https://dl.acm.org/doi/10.1145/3183713.3190655',
    linkLabel: 'Read the SIGMOD paper',
  },
]

export const patents = [
  {
    title: 'Gradient-based auto-tuning for machine learning and deep learning models',
    number: 'US 11,176,487',
    url: 'https://patents.google.com/patent/US11176487B2',
  },
  {
    title: 'Scalable and efficient distributed auto-tuning of machine learning and deep learning models',
    number: 'US 11,120,368',
    url: 'https://patents.google.com/patent/US11120368B2',
  },
  {
    title:
      'Determining instances to maintain on at least one cloud responsive to an evaluation of performance characteristics',
    number: 'US 9,128,739',
    url: 'https://patents.google.com/patent/US9128739B1',
  },
]

export const selectedPublications = [
  {
    title: 'Oracle AutoML: A Fast and Predictive AutoML Pipeline',
    venue: 'VLDB 2020',
    url: 'https://dl.acm.org/doi/abs/10.14778/3415478.3415542',
  },
  {
    title: 'Rapid: In-Memory Analytical Query Processing Engine with Extreme Performance per Watt',
    venue: 'SIGMOD 2018',
    url: 'https://dl.acm.org/doi/10.1145/3183713.3190655',
  },
  {
    title: 'A Many-Core Architecture for In-Memory Data Processing',
    venue: 'MICRO 2017',
    url: 'https://dl.acm.org/doi/10.1145/3123939.3123985',
  },
]

export const academicPublications = [
  {
    title: 'A Placement Vulnerability Study in Multi-Tenant Public Clouds',
    venue: 'USENIX Security 2015',
    url: 'https://www.usenix.org/conference/usenixsecurity15/technical-sessions/presentation/varadarajan',
  },
  {
    title: 'Scheduler-Based Defenses Against Cross-VM Side-Channels',
    venue: 'USENIX Security 2014',
    url: 'https://www.usenix.org/conference/usenixsecurity14/technical-sessions/presentation/varadarajan',
  },
  {
    title: 'Aerie: Flexible File-System Interfaces to Storage-Class Memory',
    venue: 'EuroSys 2014',
    url: 'https://dl.acm.org/doi/10.1145/2592798.2592810',
  },
  {
    title: "More for Your Money: Exploiting Performance Heterogeneity in Public Clouds",
    venue: 'SoCC 2012',
    url: 'https://dl.acm.org/doi/10.1145/2391229.2391249',
  },
  {
    title: "Resource-Freeing Attacks: Improve Your Cloud Performance (at Your Neighbor's Expense)",
    venue: 'CCS 2012',
    url: 'https://dl.acm.org/doi/10.1145/2382196.2382228',
  },
  {
    title: 'Towards a Cooperative Defense Model Against Network Security Attacks',
    venue: 'WEIS 2010',
    url: 'https://www.researchgate.net/publication/268177490_Towards_a_Cooperative_Defense_Model_Against_Network_Security_Attacks',
  },
  {
    title: 'Game Theoretic Resistance to Denial of Service Attacks Using Hidden Difficulty Puzzles',
    venue: 'ISPEC 2010',
    url: 'https://link.springer.com/chapter/10.1007/978-3-642-12827-1_26',
  },
  {
    title: 'A Reconfigurable Hardware to Accelerate Directory Search',
    venue: 'HiPC 2009 Student Symposium',
    url: 'https://pages.cs.wisc.edu/~venkatv/1569254101.pdf',
  },
]

export const thesis = {
  title: 'Isolation in Public Clouds: Threats, Challenges, and Defense',
  note: 'PhD Dissertation, Department of Computer Sciences, University of Wisconsin–Madison, 2015.',
  url: 'https://pages.cs.wisc.edu/~venkatv/venkat-thesis-uw.pdf',
}

export const skills = {
  languages: ['C/C++', 'Python', 'Java', 'SQL', 'PL/SQL'],
  technical: ['LangChain', 'AI agents', 'RAG', 'Vector stores', 'ETL/ELT', 'Iceberg', 'AutoML', 'REST services'],
  cloud: ['AWS', 'OCI'],
}

export const CANDIDATE_INFO = {
  fullName: 'John Paulo H. Navarro',
  monogram: 'JP.NAVARRO',
  headline: 'Senior IT Operations & Infrastructure Lead | Network Engineering | AI-Assisted Systems Builder',
  location: 'Taguig City, Philippines',
  workStatus: 'Open to 100% Remote / WFH & Hybrid Roles (US EST / APAC / Global)',
  email: 'johnpaulonavarro99@gmail.com',
  phone: '+63 915-637-7967',
  linkedin: 'https://www.linkedin.com/in/john-paulo-navarro-792713212/',
  profilePhoto: '/images/profile_jp.jpg',
  resumePdf: '/resume/John_Paulo_Navarro_Resume.pdf',
  summary: 'Versatile and hands-on IT Operations Lead with over 5 years of experience managing enterprise networks, physical security, high-performance hardware, and cross-functional teams. Uniquely combines physical layer engineering (500m fiber links, MikroTik, Fortinet) with AI-powered rapid application development to streamline business operations. Grounded in an Aircraft Maintenance Technology background, bringing strict procedural compliance, zero-downtime safety protocols, and meticulous documentation to complex IT infrastructure management.'
};

export const CORE_STATS = [
  { label: 'IT & Ops Leadership', value: '5+ Years', description: 'Multi-site infrastructure & cross-functional teams' },
  { label: 'Corporate Tier 1–2 Support', value: '30+ Clients', description: 'Unified MicroSystems enterprise clients (Dubai)' },
  { label: 'Multi-Site Venues', value: '4 Venues', description: 'High-traffic commercial infrastructure operations' },
  { label: 'Fiber & Dual-ISP Networks', value: '99.9% Uptime', description: 'Zero-downtime failover & power conditioning' }
];

export const MANAGED_VENUES = [
  {
    id: 'secretdoor',
    name: 'SecretDoor',
    tagline: 'Flagship Lounge & Bar',
    logo: '/images/logos/secretdoor.jpg',
    monogram: 'SD',
    scope: 'Core Dual-ISP Failover, POS/KDS, 500m Fiber Link, Pro-AV Matrix'
  },
  {
    id: 'luxxe',
    name: 'Luxxe Cocktail Bar',
    tagline: 'Cocktail Lounge & Dining',
    logo: '/images/logos/luxxe.png',
    monogram: 'LX',
    scope: 'Network Staging, POS/Cashless Systems, Smart CCTV, Pro-Audio'
  },
  {
    id: 'lucky-als',
    name: 'Lucky Als Hideout',
    tagline: 'Entertainment & Bar Venue',
    logo: '/images/logos/lucky_als.jpg',
    monogram: 'LA',
    isLightBg: true,
    scope: 'Multi-Display AV, IoT Network Isolation, Smart Access, POS'
  },
  {
    id: 'casablanca',
    name: 'Casablanca RestoBar',
    tagline: 'Restaurant & Bar Operations',
    logo: '/images/logos/casablanca.jpg',
    monogram: 'CB',
    scope: 'POS/KDS Terminals, Wi-Fi Infrastructure, Surveillance NVR, AV Routing'
  }
];

export const AI_OPERATOR_METHODOLOGY = [
  {
    step: '01',
    title: 'Architecture & System Logic',
    description: 'Define the network, hardware, or operational bottleneck and design the end-to-end solution logic, security boundaries, and protocol flow.'
  },
  {
    step: '02',
    title: 'AI-Directed Execution',
    description: 'Direct AI developer tools (Claude Code, Antigravity, Bolt.new) to rapidly generate custom apps, scripts, and CLI configs without manual coding overhead.'
  },
  {
    step: '03',
    title: 'Technical Gatekeeper & Verification',
    description: 'Test configurations safely on live hardware, verify security rules, execute physical deployments, and maintain strict pre/post-task documentation.'
  }
];

export const TECHNICAL_COMPETENCIES = [
  {
    id: 'networking-infrastructure',
    title: 'Networking & Infrastructure',
    summary: 'Carrier-grade routing, dual-WAN failover, SFP optical links, and robust VLAN network segmentation.',
    bullets: [
      'MikroTik RouterOS (v7): Dual-ISP failover & load balancing, recursive routing, dynamic NAT & Netinstall recovery',
      'Fortinet FortiGate: Strict ISP-to-switch topology, perimeter security profiles & VPN tunnels',
      'Aruba Switches: LACP link aggregation trunks, 802.1Q VLAN segmentation & broadcast storm prevention',
      'Physical Layer: 500m dual-core single-mode fiber deployment, SFP/SFP+ optical transceivers & Cat6 structured cabling'
    ],
    technologies: ['MikroTik RouterOS v7', 'Fortinet FortiGate', 'Aruba Instant On', 'Dual-ISP Failover', '500m SM Fiber', 'SFP Transceivers', 'LACP Aggregation', 'Cat6 Cabling']
  },
  {
    id: 'hardware-enterprise-systems',
    title: 'Hardware & Enterprise Systems',
    summary: 'Deep supercomputer servicing, high-availability NAS storage, cloud identity, and endpoint MDM fleet administration.',
    bullets: [
      'NVIDIA DGX Station (Tesla V100 quad-GPU liquid loop & component-level maintenance) & DGX-1 AI Servers',
      'Synology NAS: RS819 & DS920+ DSM configuration, RAID arrays, automated snapshot mirrors & on-prem hosting',
      'Bare-Metal Ubuntu Servers: Headless Linux administration, systemd service daemons & environment virtualization',
      'Enterprise Cloud & MDM: Google Workspace Admin, Microsoft 365 (SharePoint, Exchange, Teams), Microsoft Intune MDM, and Avaya IP Telephony'
    ],
    technologies: ['NVIDIA DGX Station', 'Tesla V100 GPU', 'Synology RAID', 'Ubuntu Server', 'Microsoft 365', 'Microsoft Intune MDM', 'Google Workspace', 'Avaya IP Office']
  },
  {
    id: 'security-access-control',
    title: 'Security & Access Control',
    summary: 'Physical access integration, biometric credentials, AI facial recognition, and commercial thermal surveillance.',
    bullets: [
      'ZKTeco Biometrics & Magnetic Glass Door Locks: RFID provisioning, relay wiring, and employee access logs',
      'Smart Locks: Tuya, Loock 3D Face ID, encrypted Mifare RFID, and precision structural door mortise preparation',
      'Surveillance Systems: Dahua & Hikvision IP cameras, radiometric thermal IP systems, and AI face recognition',
      'Centralized Video Recording: Synology Surveillance Station NVR storage and multi-channel remote playback'
    ],
    technologies: ['ZKTeco Biometrics', 'Magnetic Glass Locks', 'Loock 3D Face', 'Tuya Smart Locks', 'Hikvision Thermal', 'Dahua IP CCTV', 'Synology Surveillance', 'RFID Provisioning']
  },
  {
    id: 'ai-assisted-engineering',
    title: 'AI-Assisted Engineering',
    summary: 'Rapid application development and operational workflow automation via cutting-edge AI developer tools.',
    bullets: [
      'Custom Internal HRIS: End-to-end employee shift management and records platform tailored to multi-venue operations',
      'Local LAN Digital Signage Web App: Hosted natively on Synology NAS Web Station, eliminating $1,800+/yr in third-party SaaS fees',
      'Batch Utilities: Bulk Instax PDF cutout generator with crop cutlines, gaming crosshair overlays, and automated file pipelines',
      'Automation Generation: Rapid Bash, PowerShell, and RouterOS script generation via Claude Code, Antigravity, and Bolt.new'
    ],
    technologies: ['Claude Code', 'Antigravity', 'Bolt.new', 'Custom HRIS', 'LAN Digital Signage', 'Batch PDF Utilities', 'PowerShell Scripts', 'RouterOS CLI']
  },
  {
    id: 'pro-av-facilities',
    title: 'Pro-AV & Facilities',
    summary: 'Multi-zone acoustic sound reinforcement, high-definition matrix distribution, IPTV, and commercial facility upkeep.',
    bullets: [
      'Multi-Zone PA Calibration: Commercial 12"–18" high-capacity speakers, power amplifiers, and multi-channel DJ audio mixers',
      'Multi-I/O AV Matrix: Seamless video routing across 20+ commercial venue screens with low-latency HDMI-over-IP',
      'Local IPTV & Signage: Reliable in-venue promotional distribution with synchronized playback across multi-level floors',
      'Facility Maintenance Management: Commercial electrical repairs (Schneider Electric), Daikin AC drain pumps, anti-mold remediation, and site maintenance'
    ],
    technologies: ['Multi-Zone PA Systems', '12"-18" Pro Speakers', 'AV Matrix Switching', 'Local IPTV', 'HDMI over IP', 'Schneider Electric', 'Daikin AC Pumps', 'Facility Operations']
  },
  {
    id: 'hospitality-pos-systems',
    title: 'Hospitality & POS Systems',
    summary: 'Enterprise restaurant POS architectures, wireless Kitchen Display System (KDS) routing, and 380+ SKU inventory operations.',
    bullets: [
      'Qashier POS & QashierHQ: Multi-terminal setup, primary registers, and waitress handheld provisioning',
      'Kitchen Display System (KDS): Low-latency wireless tablet order routing between bar, kitchen, and cashier stations',
      'Inventory & Operations: 380+ SKU live inventory tracking, recipe cost mapping, and multi-branch stock audits',
      'Platform Integrations: Biometric & PIN employee timecards, Foodpanda delivery API routing, and cashless payment terminals'
    ],
    technologies: ['Qashier POS', 'QashierHQ', 'Kitchen Display Systems (KDS)', 'Waitress Handhelds', '380+ SKU Inventory', 'Foodpanda API', 'Biometric Timecards']
  }
];

export const GALLERY_CATEGORIES = [
  'All',
  'AI Hardware & Servers',
  'Networking & 5G/Fiber',
  'AI-Built Software',
  'Smart Access & Security',
  'Infrastructure & Ops'
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    filename: '01_DGX_Station_Exterior_Rack_Placement.jpg',
    title: 'NVIDIA DGX Station Diagnostics',
    category: 'AI Hardware & Servers',
    description: 'Quad-GPU Tesla V100 liquid-cooled workstation staged beside main server rack prior to thermal diagnostics.',
    tags: ['NVIDIA DGX Station', '4x Tesla V100', 'Liquid Cooling', 'Thermal Diagnostics'],
    specs: '4x Tesla V100 32GB (500 TFLOPS Tensor), Intel Xeon E5-2698 v4, 256GB LRDIMM',
    operationalImpact: 'Isolated system throttling to localized fluid degradation; staged non-disruptive migration path for uninterrupted AI model inference workloads.'
  },
  {
    id: 2,
    filename: '02_DGX_Station_Panel_Removal_Inspection.jpg',
    title: 'DGX Station Internal Teardown',
    category: 'AI Hardware & Servers',
    description: 'Chassis teardown and inspection of liquid-cooling manifolds, quick-disconnects, and quad-GPU power routing.',
    tags: ['Hardware Teardown', 'Cooling Manifold', 'Quick-Disconnects', 'Cable Harnessing'],
    specs: 'Custom triple-radiator loop, aerospace-grade quick-disconnect couplings, braided power feeds',
    operationalImpact: 'Identified micro-channel flow restriction without damaging fragile high-density ribbon interconnects or auxiliary sensor telemetry.'
  },
  {
    id: 3,
    filename: '03_DGX_Station_Thermal_Loop_Diagnostics.jpg',
    title: 'Liquid-Cooling & PSU Diagnostics',
    category: 'AI Hardware & Servers',
    description: 'Component-level inspection of AX1600i PSU bay and GPU interconnects to isolate thermal throttling.',
    tags: ['Corsair AX1600i', 'Power Distribution', 'Thermal Sensor Loop', 'Diagnostics'],
    specs: '1600W 80 PLUS Titanium Digital PSU, 12V rail ripple analysis, thermal probe verification',
    operationalImpact: 'Confirmed PSU efficiency and 12V rail stability, pinpointing thermal rise exclusively to coolant chemical breakdown rather than electrical sag.'
  },
  {
    id: 4,
    filename: '04_Tesla_V100_CopperBlock_Corrosion_Cleaning.jpg',
    title: 'Tesla V100 Galvanic Corrosion Repair',
    category: 'AI Hardware & Servers',
    description: 'Disassembled V100 PCB and EK copper water block showing galvanic corrosion prior to deep chemical cleaning, flushing, and repasting.',
    tags: ['Tesla V100', 'EK Water Blocks', 'Galvanic Corrosion', 'Thermal Repasting'],
    specs: 'Nickel-plated electrolytic copper block, micro-fin array deoxidization, ultra-pure dielectric flush',
    operationalImpact: 'Restored GPU thermal dissipation from 89°C emergency throttle down to 44°C idle / 68°C full compute load, saving over $15,000 in replacement parts.'
  },
  {
    id: 5,
    filename: '05_DGX_Station_Reassembled_Tested.jpg',
    title: 'DGX Station Restored & Stress-Tested',
    category: 'AI Hardware & Servers',
    description: 'Completed reassembly and thermal restoration of all four Tesla V100 GPUs, verified stable under full compute load.',
    tags: ['Stress Testing', 'nvidia-smi', 'CUDA Validation', 'Zero-Downtime'],
    specs: '48-hour continuous CUDA stress test, zero memory dropouts, 100% compute duty cycle',
    operationalImpact: 'Returned enterprise AI compute station to production with zero compute throttling, delivering 100% baseline FLOPS performance.'
  },
  {
    id: 6,
    filename: '06_DGX1_Server_RAM_Upgrade_Cleaning.jpg',
    title: 'NVIDIA DGX-1 Memory & Chassis Servicing',
    category: 'AI Hardware & Servers',
    description: 'Enterprise DGX-1 AI server internal dust extraction, DIMM slot cleaning, and system RAM upgrade.',
    tags: ['NVIDIA DGX-1', 'DDR4 ECC LRDIMM', 'ESD Protocols', 'Chassis Servicing'],
    specs: '512GB ECC DDR4 memory array, dual Xeon Platinum 8168 sockets, ESD-controlled workstation',
    operationalImpact: 'Eliminated intermittent ECC parity warnings and optimized memory throughput for multi-tenant deep learning container pipelines.'
  },
  {
    id: 7,
    filename: '07_DGX1_GPU_Heatsinks_Thermal_Servicing.jpg',
    title: 'DGX-1 8-GPU Copper Heatsink Overhaul',
    category: 'AI Hardware & Servers',
    description: 'Exposed 8-GPU copper heatsink array during cooling fan replacement, thermal repasting, and airflow optimization.',
    tags: ['8x SXM2 Form Factor', 'NVLink Mesh', 'Copper Heatsinks', 'Industrial Airflow'],
    specs: '8x Tesla V100 SXM2 300W modules, NVLink 300 GB/s bidirectional fabric, industrial fan arrays',
    operationalImpact: 'Achieved uniform thermal distribution across all 8 SXM2 nodes, reducing delta-T between inner and outer GPUs to under 3°C.'
  },
  {
    id: 8,
    filename: '08_MikroTik_ATL_5G_Outdoor_Mounting.jpg',
    title: 'MikroTik ATL 5G Outdoor Mounting',
    category: 'Networking & 5G/Fiber',
    description: 'Exterior structural wall mounting of a MikroTik ATL 5G directional antenna for secondary cellular WAN failover.',
    tags: ['MikroTik ATL LTE18', '5G Sub-6GHz', 'Outdoor Staging', 'Weatherproofing IP67'],
    specs: 'High-gain 4x4 MIMO directional antenna, Cat6 outdoor UV-rated shielded cabling, surge protection',
    operationalImpact: 'Provided 350+ Mbps low-latency secondary WAN pipeline ensuring critical POS, security cameras, and VoIP services survive terrestrial ISP fiber cuts.'
  },
  {
    id: 9,
    filename: '09_MikroTik_ATL_5G_DualISP_Integration.jpg',
    title: 'Dual-ISP Failover Integration',
    category: 'Networking & 5G/Fiber',
    description: 'Weather-sealed Cat6 run routed to a MikroTik Cloud Core Router (CCR) with eSIM configuration for automatic Dual-ISP failover.',
    tags: ['MikroTik CCR', 'Dual-WAN Failover', 'Recursive Routing', 'eSIM WAN'],
    specs: 'Sub-second packet loss detection, Netwatch ping probe scripts, VRRP gateway redundancy',
    operationalImpact: 'Guaranteed 99.9% network uptime across commercial operations with seamless 800ms failover transition undetectable by real-time POS or live streams.'
  },
  {
    id: 10,
    filename: '10_Synology_DS920_Rack_Staging_Setup.jpg',
    title: 'Synology DS920+ Rack Staging',
    category: 'AI Hardware & Servers',
    description: '4-bay Synology DS920+ NAS rack staging alongside enterprise servers and wireless AP prior to rackmount migration.',
    tags: ['Synology DS920+', 'SHR/RAID 5', 'M.2 NVMe Cache', 'Surveillance & Host'],
    specs: 'Quad-core Intel Celeron J4125, dual 1GbE link aggregation, 32TB Seagate IronWolf array',
    operationalImpact: 'Centralized multi-camera NVR recording and local web application hosting, offloading critical local services from congested cloud dependencies.'
  },
  {
    id: 11,
    filename: '11_LAN_DigitalSignage_Kiosk_Config_Setup.jpg',
    title: 'Local LAN Signage Kiosk Provisioning',
    category: 'AI-Built Software',
    description: 'Terminal configuration connecting commercial display browsers to a local Synology NAS IP address.',
    tags: ['Kiosk Linux', 'Local IP Routing', 'Chromium Autostart', 'Zero-Cloud'],
    specs: 'Lightweight headless client, systemd autostart service, local WebSocket real-time state sync',
    operationalImpact: 'Replaced expensive third-party SaaS digital signage licenses ($150/mo/screen) with a zero-subscription on-prem architecture resilient to internet outages.'
  },
  {
    id: 12,
    filename: '12_LAN_DigitalSignage_Venue1_LivePromo.jpg',
    title: 'AI-Built LAN Digital Signage (Venue 1)',
    category: 'AI-Built Software',
    description: 'Custom web-based digital signage app built with AI developer tools, eliminating recurring cloud SaaS fees.',
    tags: ['Custom Web App', 'Claude Code / Antigravity', 'Synology Web Station', 'Dynamic Scheduler'],
    specs: 'Modern responsive web stack, localized static asset caching, zero WAN latency, instant playlist updates',
    operationalImpact: 'Engineered and deployed in under 72 hours using AI developer tools as execution engine, resulting in $0 monthly licensing cost across 20+ commercial displays.'
  },
  {
    id: 13,
    filename: '13_LAN_DigitalSignage_Venue2_MultiDisplay.jpg',
    title: 'Multi-Display Synchronized Signage',
    category: 'AI-Built Software',
    description: 'Synchronized promotional signage across multi-level commercial venues managed via local IP routing.',
    tags: ['Multi-Display Matrix', 'VLAN Segmentation', 'NTP Clock Sync', 'Instant Update'],
    specs: 'Sub-frame synchronization across display clusters, isolated IoT display VLAN, central management dashboard',
    operationalImpact: 'Unified brand messaging across 4 commercial properties with instant single-click promotional campaign rollouts.'
  },
  {
    id: 14,
    filename: '14_LAN_DigitalSignage_Venue3_OutdoorDisplay.jpg',
    title: 'Outdoor Commercial Signage Terminal',
    category: 'AI-Built Software',
    description: 'Outdoor kiosk display running scheduled venue media and QR updates over the local network.',
    tags: ['Outdoor Terminal', 'High-Nits Display', 'Dynamic QR Generation', 'Watchdog Daemon'],
    specs: 'Hardware watchdog automated reboot on crash, high-brightness commercial panel, local caching of offline promos',
    operationalImpact: '100% operational uptime outdoors under extreme tropical heat and intermittent cellular connectivity.'
  },
  {
    id: 15,
    filename: '15_Enterprise_UPS_RackTower_Battery_Servicing.jpg',
    title: 'Enterprise UPS Battery & Load Servicing',
    category: 'Infrastructure & Ops',
    description: 'Disassembly, battery replacement, and load testing of Huawei and enterprise rack/tower UPS units for server/POS power protection.',
    tags: ['UPS Battery Bank', 'Huawei & APC Rackmount', 'Load Testing', 'Power Conditioning'],
    specs: '12V 9Ah VRLA AGM string replacements, automated SNMP battery health alerting, simulated grid blackout testing',
    operationalImpact: 'Protected sensitive DGX compute, MikroTik CCR routers, and core switches from brownouts, voltage spikes, and unexpected grid disruptions.'
  },
  {
    id: 16,
    filename: '16_Workstation_Bulk_i9_14900K_Procurement_Build.jpg',
    title: 'High-Performance Workstation Builds',
    category: 'Infrastructure & Ops',
    description: 'Bulk procurement, validation, assembly, and stress-testing of Intel Core i9-14900K workstations.',
    tags: ['Intel i9-14900K', 'System Integration', 'AIO 360mm Cooling', 'MEMTEST86'],
    specs: '24 Cores / 32 Threads, 64GB DDR5 6000MHz, PCIe Gen5 NVMe, custom BIOS power envelope tuning (253W limit)',
    operationalImpact: 'Delivered fleet of high-performance rendering and operations workstations tuned for 24/7 stability without Intel 14th gen thermal degradation.'
  },
  {
    id: 17,
    filename: '17_Hardware_i9_14900K_Component_Setup.jpg',
    title: 'Enterprise Component Staging',
    category: 'Infrastructure & Ops',
    description: 'Hardware staging and integration of 14th Gen Intel Core i9 systems alongside Synology NAS infrastructure.',
    tags: ['Pre-Deployment QA', 'Checklist Validation', 'Golden Image', 'Asset Tagging'],
    specs: 'Aviation-style staging protocol: serial logging, thermal baseline recording, pre-flight firmware alignment',
    operationalImpact: 'Standardized fleet hardware baseline, slashing post-deployment support tickets by 85%.'
  },
  {
    id: 18,
    filename: '18_Synology_RS819_RackStation_NAS_Staging.jpg',
    title: 'Dual Synology RackStation RS819 NAS',
    category: 'AI Hardware & Servers',
    description: 'Dual 1U rackmount RS819 NAS servers staged for enterprise rack deployment, RAID configuration, and centralized hosting.',
    tags: ['Synology RS819', '1U Rackmount', 'RAID 10 Redundancy', 'Active Backup'],
    specs: 'Dual Gigabit LAN with failover, snapshot replication, automated offsite rsync mirror',
    operationalImpact: 'Delivered immutable zero-ransomware backup repositories for business accounting records, HR database, and surveillance footages.'
  },
  {
    id: 19,
    filename: '19_Enterprise_Switch_Router_Rack_Refurbishment.jpg',
    title: 'Enterprise Switch & Router Rack Setup',
    category: 'Networking & 5G/Fiber',
    description: 'Factory reset, testing, and rack mounting of Huawei S5720S/S1720 Gigabit/SFP switches, iKuai router, Linksys, and TP-Link hardware.',
    tags: ['Huawei S5720S', 'iKuai Enterprise Router', 'SFP Fiber Trunks', 'VLAN Segmenting'],
    specs: 'Layer 2+ / Layer 3 switching, 802.1Q VLANs (Admin, Guest, POS, CCTV, Pro-AV), SFP optical uplinks',
    operationalImpact: 'Eliminated network broadcast storms and packet latency spikes, securely isolating POS transaction traffic from public guest Wi-Fi.'
  },
  {
    id: 20,
    filename: '20_IT_Hardware_Inventory_Warehouse_Management.jpg',
    title: 'Structured IT Asset & Spare Inventory',
    category: 'Infrastructure & Ops',
    description: 'Categorized IT staging and inventory room for Wi-Fi mesh kits, 5G routers, CPUs, switches, and multi-site spares.',
    tags: ['IT Asset Management', 'Spare Parts Logistics', 'Kanban Inventory', 'MTTR Optimization'],
    specs: 'Barcode-tagged spares, min/max reorder threshold triggers, climate-controlled component bins',
    operationalImpact: 'Reduced critical incident Mean Time to Repair (MTTR) from hours down to 15 minutes by maintaining validated ready-to-swap spares.'
  },
  {
    id: 21,
    filename: '21_ServerRoom_Thermal_Wall_Scan_Diagnostics.jpg',
    title: 'Server Room Thermal Imaging Audit',
    category: 'Infrastructure & Ops',
    description: 'Pre-deployment thermographic wall scan using a Hikvision thermal camera (36.3°C–37.9°C) to plan insulation and cooling capacity.',
    tags: ['Hikvision Thermal Audit', 'HVAC Calculation', 'Boundary Mapping', 'Containment'],
    specs: 'High-precision radiometric sensor, thermal delta mapping, BTU cooling calculation for server density',
    operationalImpact: 'Prevented expensive server hardware overheating by locating external heat infiltration points prior to high-density compute rack rollout.'
  },
  {
    id: 22,
    filename: '22_ServerRoom_Insulation_Thermal_Verification.jpg',
    title: 'Server Room Insulation Verification',
    category: 'Infrastructure & Ops',
    description: 'Post-assessment thermal verification and enclosure insulation prep to ensure optimal ambient rack temperatures.',
    tags: ['Thermal Lining', 'Ambient Temp Control', 'ASHRAE Standards', 'Zero Throttling'],
    specs: 'Target ambient: 21°C - 23°C, thermal barrier insulation, dual redundant inverter AC ducting',
    operationalImpact: 'Maintained rock-solid 22°C ambient rack conditions year-round, extending enterprise server and UPS battery operational lifespan by 40%.'
  },
  {
    id: 23,
    filename: '23_SmartLock_Loock_3DFace_Biometric_Testing.jpg',
    title: '3D Facial & Biometric Lock Bench Test',
    category: 'Smart Access & Security',
    description: 'Pre-installation bench testing and wireless pairing of a Loock 3D facial recognition and fingerprint smart lock.',
    tags: ['Loock 3D Light', 'Biometric Bench Test', 'Zigbee/Wi-Fi Gateway', 'Anti-Spoofing'],
    specs: 'Infrared 3D structured light facial recognition, live fingerprint semiconductor sensor, tamper sensor calibration',
    operationalImpact: 'Validated sub-0.5s recognition and anti-spoofing resilience on bench prior to physical door modification, ensuring 100% install success.'
  },
  {
    id: 24,
    filename: '24_SmartLock_Door_Mortise_Chiseling_Prep.jpg',
    title: 'Commercial Door Mortise & Hardware Prep',
    category: 'Smart Access & Security',
    description: 'Precision door mortise chiseling and structural prep to fit heavy-duty electronic deadbolt assemblies.',
    tags: ['Precision Carpentry', 'Mechanical Mortise', 'Concealed Wiring', 'Fail-Secure'],
    specs: 'ANSI standard stainless steel mortise lock body, laser-aligned strike plate, concealed low-voltage power feed',
    operationalImpact: 'Flawless mechanical alignment preventing motor drag or jammed bolts, guaranteeing smooth 10,000+ cycle commercial access operation.'
  },
  {
    id: 25,
    filename: '25_SmartLock_3DFace_RFID_Deployed.jpg',
    title: 'Smart Access Control Deployed',
    category: 'Smart Access & Security',
    description: 'Completed installation and calibration of 3D facial recognition, RFID card, PIN, and biometric smart lock entry.',
    tags: ['Smart Access Deployed', 'Multi-Factor Auth', 'Access Audit Log', 'Server Security'],
    specs: 'Full-spectrum access control: 3D face, encrypted RFID Mifare, biometric fingerprint, scramble PIN, mechanical emergency override',
    operationalImpact: 'Restricted high-security server rooms and executive management suites with real-time entry logs and automatic audit trail retention.'
  }
];

export const CAREER_TIMELINE = [
  {
    period: 'Nov 2024 – Jul 2026',
    role: 'IT Head, Maintenance Manager & Facility Manager',
    company: 'Magic Carpet Entertainment Consultancy Corp.',
    location: 'Metro Manila, Philippines',
    badge: 'Multi-Site IT & Facilities Leadership',
    summary: 'Directed end-to-end IT, physical security, Pro-AV, and facility operations across 4 high-traffic commercial venues (SecretDoor, Luxxe Cocktail Bar, Lucky Als Hideout, Casablanca RestoBar), managing a cross-functional team of 7 technicians and maintenance staff.',
    highlights: [
      'Engineered a 500-meter dual-core fiber optic network with dual-ISP failover and LACP link aggregation (Aruba/MikroTik) to ensure 99.9% uptime between distant branch venues.',
      'Architected and deployed a custom HRIS and local LAN Digital Signage application via Synology NAS using AI-assisted engineering tools, significantly reducing administrative overhead.',
      'Executed specialized deep hardware servicing on enterprise AI compute infrastructure, meticulously mitigating galvanic corrosion on NVIDIA DGX Station Tesla V100 GPUs and restoring full functionality.',
      'Deployed enterprise ZKTeco biometric terminals and magnetic glass door locks, seamlessly integrating RFID access workflows across all commercial venues.',
      'Architected and deployed an end-to-end Qashier POS & Kitchen Display System (KDS) ecosystem across 4 commercial venues—configuring primary registers, waitress mobile ordering handhelds, and tablet KDS screens for real-time order routing, 380+ SKU inventory tracking, biometric/PIN timecards, and Foodpanda integration.'
    ],
    technologies: ['MikroTik RouterOS v7', 'Aruba LACP', '500m Fiber Optic', 'Synology NAS', 'Claude Code / Antigravity', 'ZKTeco Biometrics', 'NVIDIA DGX Station', 'Team Leadership']
  },
  {
    period: 'May 2024 – Nov 2024',
    role: 'Computer IT Support Specialist',
    company: 'Unified MicroSystems',
    location: 'Dubai, United Arab Emirates (Remote & Onsite)',
    badge: 'Enterprise Tier 1–2 Support',
    summary: 'Delivered rapid Tier 1 and Tier 2 remote and on-site technical support for over 30 corporate client organizations across Dubai under strict SLA compliance.',
    highlights: [
      'Executed out-of-the-box infrastructure deployments, configuring Fortinet Firewalls (ISP-to-switch topology), network switches, and Synology NAS storage units.',
      'Administered Avaya IP Telephone systems and successfully onboarded corporate mobile assets (iOS/Android) via Microsoft Intune MDM.',
      'Managed Microsoft 365 (SharePoint Online site structure & sharing policies, Exchange, Teams, OneDrive) and Google Workspace administrative controls.',
      'Resolved complex hardware, operating system, and software incidents across Windows and macOS environments with granular documentation.'
    ],
    technologies: ['Fortinet FortiGate', 'Microsoft 365', 'SharePoint Online', 'Microsoft Intune MDM', 'Avaya IP Office', 'Synology NAS', 'Google Workspace', 'ITIL SLA Triage']
  },
  {
    period: 'Dec 2022 – Mar 2024',
    role: 'Operations & IT Manager (General Manager)',
    company: 'Magic Carpet Entertainment Consultancy Corp.',
    location: 'Metro Manila, Philippines',
    badge: 'General Operations & Infrastructure',
    summary: 'Directed daily commercial operations, POS network stability, audio/visual control systems, vendor contracts, and cross-functional staff across entertainment venues.',
    highlights: [
      'Directed daily venue operations, ensuring POS network stability and AV control system reliability to eliminate operational downtime during peak business hours.',
      'Introduced structured documentation practices for operational planning, task scheduling, and maintenance pre/post-execution tracking.',
      'Maintained preventive maintenance schedules across high-load commercial audio/video matrix equipment, lighting systems, and guest network bandwidth.'
    ],
    technologies: ['POS Network Stability', 'AV Matrix Routing', 'Preventive Maintenance', 'Vendor SLA Management', 'Operational Checklists', 'Team Management']
  },
  {
    period: 'Dec 2021 – Dec 2022',
    role: 'Pioneer IT & Digital Media Specialist',
    company: 'Magic Carpet Entertainment Consultancy Corp.',
    location: 'Metro Manila, Philippines',
    badge: 'Founding Infrastructure & Media',
    summary: 'Served as the founding IT specialist, configuring initial Wi-Fi access networks, local routing, CCTV setups, biometrics, and pro-audio systems for the company\'s inaugural venue launches.',
    highlights: [
      'Designed and pulled structured Cat6 cabling, configured core routers, Wi-Fi access points, and security NVR systems from an empty shell.',
      'Built multi-zone commercial Pro-AV sound routing and stage video distribution for high-capacity entertainment zones.',
      'Designed promotional marketing graphics and managed official corporate social media profiles and Google Maps local business presence.'
    ],
    technologies: ['Network Topology Design', 'Structured Cat6 Cabling', 'CCTV & NVR', 'Pro-AV Routing', 'Biometric Integration', 'Digital Media Production']
  },
  {
    period: 'Ongoing Sideline Venture',
    role: 'Independent Condo Renovation & Repair Contractor',
    company: 'The Property Fix',
    location: 'Metro Manila, Philippines',
    badge: 'Independent Technical Contractor',
    summary: 'Operate an independent residential condominium maintenance and restoration service handling electrical fixtures, smart-lock retrofits, AC drain pump installations, anti-mold ceiling remediation, and unit turnovers.',
    highlights: [
      'Executed complete condo unit restorations (including Twin Towers Condo Unit Restoration) managing electrical rewiring, cabinetry alignment, and surface repairs.',
      'Replaced and re-wired Schneider Electric switches and outlets in strict compliance with residential electrical safety codes.',
      'Installed and calibrated Daikin air conditioning drain pumps and performed specialized anti-mold ceiling remediation.',
      'Retrofit high-security electronic deadbolt smart locks with custom door mortise preparation, precision strike plates, and wireless bridge calibration.'
    ],
    technologies: ['Schneider Electric Wiring', 'Daikin AC Drain Pumps', 'Precision Mortise Locksmithing', 'Electrical Testing', 'Structural Remediations']
  },
  {
    period: 'Foundational Education & Apprenticeship',
    role: 'Aircraft Maintenance Technology & Aviation Apprenticeship',
    company: 'PhilSCA / Asia Aircraft / R33 Helicopters',
    location: 'Pasay City & Metro Manila',
    badge: 'Aviation Airworthiness Standards',
    summary: 'Bachelor of Science in Aircraft Maintenance Technology (2019–2021) and Associate in Aircraft Maintenance Technology (2017) from Philippine State College of Aeronautics (PhilSCA).',
    highlights: [
      'Self-funded education through local residential construction and civil works (2018–2019), cultivating heavy-duty physical endurance, spatial awareness, and an uncompromising work ethic.',
      'Completed an 8-month apprenticeship as Assistant Helicopter Mechanic at Asia Aircraft / R33 Helicopters (2018–2019), conducting structural inspections, torqueing, fluid checks, and mechanical logbook documentation under licensed A&P engineers.',
      'Grounded in systematic fault-tree isolation, failure mode analysis (FMEA), galvanic corrosion science, and non-negotiable pre/post-task checklist discipline.'
    ],
    technologies: ['Aviation Checklist Protocols', 'Fault Tree Isolation', 'Airworthiness Standards', 'Galvanic Corrosion Science', 'Mechanical Blueprint Tracing', 'Zero-Error Discipline']
  }
];

export const ACTIVE_UPSKILLING = [
  {
    title: 'Siemens TIA Portal (PLC & Industrial Automation Programming)',
    platform: 'Udemy — Self-Studying',
    status: 'In Progress',
    description: 'Mastering programmable logic controllers (S7-1200/1500), ladder logic (LAD), function block diagrams (FBD), HMI design, and industrial automation hardware integration.'
  },
  {
    title: 'Microsoft Azure & AWS Cloud Architecture Fundamentals',
    platform: 'Cloud Architecture Track',
    status: 'In Progress',
    description: 'Deepening enterprise cloud virtualization, IAM security frameworks, hybrid cloud connectivity, and zero-trust infrastructure.'
  }
];

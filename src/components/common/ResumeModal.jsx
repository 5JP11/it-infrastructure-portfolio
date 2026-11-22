import React, { useState } from 'react';
import { X, Printer, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { CANDIDATE_INFO, CAREER_TIMELINE, TECHNICAL_COMPETENCIES, ACTIVE_UPSKILLING } from '../../data/galleryData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumePlainText = `
JOHN PAULO H. NAVARRO
Senior IT Operations & Infrastructure Lead | Network Engineering | AI-Assisted Systems Builder
Taguig City, Philippines | ${CANDIDATE_INFO.email} | ${CANDIDATE_INFO.phone}
Open to 100% Remote / WFH & Hybrid Roles

PROFESSIONAL SUMMARY:
${CANDIDATE_INFO.summary}

CORE COMPETENCIES & TECHNICAL SKILLS:
- Networking & Infrastructure: MikroTik RouterOS (v7), Fortinet Firewalls, Aruba Switches, Dual-ISP Failover & Load Balancing, LACP, Dynamic NAT, 500m Dual-Core Fiber Deployment, SFP Transceivers, Cat6 Cabling.
- Hardware & Enterprise Systems: NVIDIA DGX Station (Tesla V100 GPU deep maintenance) & DGX-1 AI Servers, Synology NAS (OS & RAID), Bare-Metal Ubuntu Servers, Google Workspace, Microsoft 365 (SharePoint, Exchange, Teams), Microsoft MDM (Intune), Avaya IP Telephony.
- Security & Access Control: ZKTeco Biometrics, Magnetic Glass Door Locks, RFID Provisioning, Smart Locks (Tuya, Loock), Dahua/Hikvision IP Cameras, Thermal IP Systems, AI Face Recognition, Synology Surveillance.
- AI-Assisted Engineering: Rapid application development & workflow automation via Claude Code, Antigravity, and Bolt.new (Custom HRIS, Local LAN Digital Signage, automated batch PDF/utility generators).
- Pro-AV & Facilities: Multi-Zone PA Calibration (12"–18" speakers, amps, DJ mixers), Multi-I/O AV Matrix Switching, Local IPTV, Facility Maintenance Management.

PROFESSIONAL EXPERIENCE:
1. IT Head, Maintenance Manager & Facility Manager
   Magic Carpet Entertainment Consultancy Corp. • Metro Manila, Philippines (Nov 2024 – Jul 2026)
   - Directed end-to-end IT, physical security, Pro-AV, and facility operations across 4 high-traffic commercial venues (SecretDoor, Luxxe Cocktail Bar, Lucky Als Hideout, Casablanca RestoBar), managing a cross-functional team of 7 technicians and maintenance staff.
   - Engineered a 500-meter dual-core fiber optic network with dual-ISP failover and LACP link aggregation (Aruba/MikroTik) to ensure 99.9% uptime between distant branch venues.
   - Architected and deployed a custom HRIS and local LAN Digital Signage application via Synology NAS using AI-assisted engineering tools, significantly reducing administrative overhead.
   - Executed specialized deep hardware servicing on enterprise AI compute infrastructure, meticulously mitigating galvanic corrosion on NVIDIA DGX Station Tesla V100 GPUs and restoring full functionality.
   - Deployed enterprise ZKTeco biometric terminals and magnetic glass door locks, seamlessly integrating RFID access workflows across all commercial venues.

2. Computer IT Support Specialist
   Unified MicroSystems • Dubai, United Arab Emirates (May 2024 – Nov 2024)
   - Delivered rapid Tier 1 and Tier 2 remote and on-site technical support for over 30 corporate client organizations across Dubai under strict SLA compliance.
   - Executed out-of-the-box infrastructure deployments, configuring Fortinet Firewalls (ISP-to-switch topology), network switches, and Synology NAS storage units.
   - Administered Avaya IP Telephone systems and successfully onboarded corporate mobile assets (iOS/Android) via Microsoft Intune MDM.

3. Operations & IT Manager (General Manager)
   Magic Carpet Entertainment Consultancy Corp. • Metro Manila, Philippines (Dec 2022 – Mar 2024)
   - Directed daily venue operations, ensuring POS network stability and AV control system reliability to eliminate operational downtime during peak business hours.
   - Introduced structured documentation practices for operational planning, task scheduling, and maintenance pre/post-execution tracking.

4. Pioneer IT & Digital Media Specialist
   Magic Carpet Entertainment Consultancy Corp. • Metro Manila, Philippines (Dec 2021 – Dec 2022)
   - Served as the founding IT specialist, configuring initial Wi-Fi access networks, local routing, CCTV setups, biometrics, and pro-audio systems for the company's inaugural venue launches.

5. Independent Condo Renovation & Repair Contractor
   The Property Fix • Metro Manila, Philippines (Ongoing Sideline)
   - Residential condominium maintenance and restorations: Schneider Electric switch/outlet repairs, Daikin AC drain pumps, anti-mold ceiling remediation, smart-lock retrofitting.

EDUCATION & APPRENTICESHIP:
- Bachelor of Science in Aircraft Maintenance Technology | Philippine State College of Aeronautics (2019–2021)
  (Self-funded through residential construction and civil works, 2018–2019)
- Associate in Aircraft Maintenance Technology | Philippine State College of Aeronautics (Graduated 2017)
- Assistant Helicopter Mechanic (OJT) | Asia Aircraft / R33 Helicopters (2018–2019, 8 months)

ACTIVE UPSKILLING (IN PROGRESS):
- Siemens TIA Portal (PLC & Industrial Automation Programming) | Udemy
- Microsoft Azure & AWS Cloud Architecture Fundamentals
  `.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div 
        className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#121214] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0E0E10]">
          <h3 className="text-xs font-mono font-semibold text-zinc-100 uppercase tracking-wider">
            Curriculum Vitae / Final Resume Dossier
          </h3>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-zinc-200" />
                  <span className="text-zinc-200">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-zinc-950 bg-white hover:bg-zinc-200 transition-colors font-medium"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-zinc-300 font-sans bg-[#121214]">
          {/* Header */}
          <div className="border-b border-zinc-800/80 pb-5 space-y-1">
            <h2 className="text-xl font-bold text-zinc-50">
              {CANDIDATE_INFO.fullName}
            </h2>
            <div className="text-xs font-mono text-zinc-400">
              {CANDIDATE_INFO.headline}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
              <span>{CANDIDATE_INFO.location}</span>
              <span className="text-zinc-600">/</span>
              <span>{CANDIDATE_INFO.email}</span>
              <span className="text-zinc-600">/</span>
              <span>{CANDIDATE_INFO.phone}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Professional Summary
            </div>
            <p className="text-zinc-400 leading-relaxed font-sans">
              {CANDIDATE_INFO.summary}
            </p>
          </div>

          {/* Competencies */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Core Competencies &amp; Technical Skills
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {TECHNICAL_COMPETENCIES.map((comp) => (
                <div key={comp.id} className="p-3 rounded border border-zinc-800 bg-[#09090B] space-y-1">
                  <span className="text-zinc-200 font-medium block">{comp.title}</span>
                  <p className="text-zinc-500">{comp.technologies.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Professional Experience History
            </div>
            {CAREER_TIMELINE.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded border border-zinc-800 bg-[#09090B] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono">
                  <span className="font-semibold text-zinc-100">{item.role}</span>
                  <span className="text-zinc-500">{item.period}</span>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  {item.company} · {item.location}
                </div>
                <ul className="list-disc list-inside space-y-1 text-zinc-400 text-xs">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Active Upskilling */}
          <div className="p-3.5 rounded border border-zinc-800 bg-[#09090B] space-y-2 text-xs font-mono">
            <span className="text-zinc-100 font-semibold block">Active Upskilling (In Progress)</span>
            <div className="space-y-1.5 text-zinc-400">
              {ACTIVE_UPSKILLING.map((u, uIdx) => (
                <div key={uIdx} className="text-xs">
                  <span className="text-zinc-200 font-medium">• {u.title}</span> ({u.platform}) — <span className="text-zinc-500">{u.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-[#0E0E10] flex justify-end">
          <button
            onClick={onClose}
            className="px-3 py-1 rounded text-xs font-mono text-zinc-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

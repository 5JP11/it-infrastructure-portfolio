import React from 'react';

export const VENDOR_ECOSYSTEM = [
  // Networking & Infrastructure
  {
    id: 'mikrotik',
    name: 'MikroTik',
    category: 'Networking',
    role: 'RouterOS v7 · Dual-ISP · 5G ATL',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6.5C4 5.67 4.67 5 5.5 5h13c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-13C4.67 19 4 18.33 4 17.5v-11zm2.5 1.5v8h2v-5l2.5 3 2.5-3v5h2V8h-2l-2.5 3-2.5-3h-2z" />
      </svg>
    )
  },
  {
    id: 'fortinet',
    name: 'Fortinet',
    category: 'Networking',
    role: 'FortiGate Firewalls · VPN · IPS/IDS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h8v4H3V4zm10 0h8v4h-8V4zM3 10h8v4H3v-4zm10 0h8v4h-8v-4zM3 16h8v4H3v-4zm10 0h8v4h-8v-4z" />
      </svg>
    )
  },
  {
    id: 'aruba',
    name: 'Aruba Networks',
    category: 'Networking',
    role: 'LACP Aggregation · 802.1Q VLANs',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5v7.4l-7 3.5-7-3.5V8.3l7-3.5zm-1 4.2v6l-4-2v-2l4 2zm2 0l4 2v2l-4-2v-6z" />
      </svg>
    )
  },

  // AI Compute & Storage
  {
    id: 'nvidia',
    name: 'NVIDIA',
    category: 'AI Hardware',
    role: 'DGX Station (Tesla V100) · DGX-1',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.9 4C5.1 4.6 2 7.9 2 12c0 4.4 3.6 8 8 8 2.3 0 4.3-.9 5.8-2.4l-1.8-1.5c-1 1-2.4 1.7-4 1.7-3.1 0-5.7-2.3-6.1-5.3h14.4c.1-.5.2-1 .2-1.5 0-4.6-3.8-7-9.6-7zm-.2 2.2c3.4 0 5.4 1.4 5.9 3.6H4.8c.6-2.1 2.2-3.6 3.9-3.6z" />
      </svg>
    )
  },
  {
    id: 'synology',
    name: 'Synology',
    category: 'AI Hardware',
    role: 'RS819 / DS920+ · RAID 10 · NVR Host',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
      </svg>
    )
  },
  {
    id: 'ubuntu',
    name: 'Ubuntu Linux',
    category: 'Cloud & OS',
    role: 'Bare-Metal Servers · systemd Daemons',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="6" r="1.5" />
        <circle cx="6.8" cy="15" r="1.5" />
        <circle cx="17.2" cy="15" r="1.5" />
        <path d="M12 7.5v3M8 14.5l2.5-1.5M16 14.5l-2.5-1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },

  // Surveillance & Biometrics
  {
    id: 'hikvision',
    name: 'Hikvision',
    category: 'Security & Access',
    role: 'AI CCTV · Thermal Audits (36°C-38°C)',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    )
  },
  {
    id: 'dahua',
    name: 'Dahua Technology',
    category: 'Security & Access',
    role: 'IP Surveillance · NVR Recording',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    )
  },
  {
    id: 'zkteco',
    name: 'ZKTeco',
    category: 'Security & Access',
    role: 'Biometric Face/Finger · RFID Maglocks',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.5a3 3 0 110 6 3 3 0 010-6zm0 8.5c-2.33 0-4.32-.93-5.74-2.42A7.54 7.54 0 0012 18.5c2.25 0 4.29-.82 5.74-2.42-1.42 1.49-3.41 2.42-5.74 2.42z" />
      </svg>
    )
  },
  {
    id: 'smart-locks',
    name: 'Loock & Tuya',
    category: 'Security & Access',
    role: '3D Facial Locks · Structural Mortise',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    )
  },

  // Cloud, MDM & Telecom
  {
    id: 'windows',
    name: 'Active Directory & Windows',
    category: 'Cloud & OS',
    role: 'Active Directory · GPO Policies · Win Server',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3.5l8-1.1v9.1H3V3.5zm0 9.1h8v9.1l-8-1.1v-8zm9.5-10.3L21 1v10.6h-8.5V2.3zm0 10.3H21V23l-8.5-1.3v-9.1z" />
      </svg>
    )
  },
  {
    id: 'knowledge-base',
    name: 'Visual SOPs & Knowledge Base',
    category: 'Cloud & OS',
    role: 'Step-by-Step SOPs · Annotated Screenshots · ITIL',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    )
  },
  {
    id: 'intune-mdm',
    name: 'Microsoft Intune MDM',
    category: 'Cloud & OS',
    role: 'Endpoint MDM · Compliance · Remote Wipe',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a5 5 0 00-5 5v1H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2h-2V7a5 5 0 00-5-5zm-3 5a3 3 0 016 0v1H9V7zm3 6a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    )
  },
  {
    id: 'm365',
    name: 'Microsoft 365',
    category: 'Cloud & OS',
    role: 'SharePoint Online · Exchange · Teams',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
      </svg>
    )
  },
  {
    id: 'google',
    name: 'Google Workspace',
    category: 'Cloud & OS',
    role: 'Admin Console · Identity & 2FA Enforcement',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-2H12v4h5.65c-.54 2.21-2.45 3.8-4.65 3.8-2.76 0-5-2.24-5-5s2.24-5 5-5c1.24 0 2.37.45 3.25 1.19l2.84-2.84C17.41 3.65 14.86 2 12 2z" />
      </svg>
    )
  },
  {
    id: 'avaya',
    name: 'Avaya IP Office',
    category: 'Cloud & OS',
    role: 'VoIP Telephony · PBX · SIP Trunks',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2a7 7 0 017 7zm-4 0h2a5 5 0 00-5-5v2a3 3 0 013 3z" />
      </svg>
    )
  },

  // POS & Commercial Facilities
  {
    id: 'qashier-pos',
    name: 'Qashier POS & KDS',
    category: 'Hardware, POS & Facilities',
    role: 'Registers · Tablet KDS · Waitress Handhelds · 380+ SKU',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 16h12v2H6v-2zm1-12h10v6H7V7z" />
      </svg>
    )
  },
  {
    id: 'hvac-systems',
    name: 'Commercial HVAC & Facilities',
    category: 'Hardware, POS & Facilities',
    role: '1.5 HP Split-Type · Centralized · Cassette Units',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V19h-2v-2.07A6.005 6.005 0 016.07 13H4v-2h2.07A6.005 6.005 0 0111 6.07V4h2v2.07A6.005 6.005 0 0117.93 11H20v2h-2.07A6.005 6.005 0 0113 16.93zM12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },

  // Automation & Industrial PLC
  {
    id: 'siemens',
    name: 'Siemens TIA Portal',
    category: 'Automation & AI',
    role: 'S7-1200/1500 PLC · Ladder Logic · OT (Learning)',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 7h16v2H4V7zm0 4h12v2H4v-2zm0 4h16v2H4v-2zM3 3h18c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1z" />
      </svg>
    )
  },

  // AI Developer Tools
  {
    id: 'ai-engines',
    name: 'AI Dev Workflows',
    category: 'Automation & AI',
    role: 'Claude Code · Antigravity · Bolt.new',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2zm0 5l1.2 3.3 3.3 1.2-3.3 1.2L12 16l-1.2-3.3L7.5 11.5l3.3-1.2L12 7z" />
      </svg>
    )
  }
];

export const VENDOR_CATEGORIES = [
  'All Ecosystem',
  'Networking',
  'AI Hardware',
  'Security & Access',
  'Cloud & OS',
  'Hardware, POS & Facilities',
  'Automation & AI'
];

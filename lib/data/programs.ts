import type { Program } from "@/lib/types";

export const programs: Program[] = [
  {
    slug: "construction-safety-program",
    title: "Construction Safety Program",
    category: "Construction",
    summary: "A complete safety pathway for site supervisors, contractors, and construction teams.",
    description:
      "Combine construction-specific hazard management with a broad OSH foundation and first-aid essentials. The program is designed for people who manage work on active sites and need to coordinate risk assessments, inductions, inspections, and emergency response.",
    duration: "3 courses · about 24 learning hours",
    image: "/assets/index-slider-7.jpg",
    courseSlugs: [
      "construction-safety-and-health-management",
      "occupational-safety-and-health-osh",
      "first-aid-training",
    ],
    outcomes: [
      "Build a site safety plan around real work activities",
      "Lead toolbox talks and site inductions",
      "Respond to common injuries while help is on the way",
    ],
    audience: "Site supervisors, contractors, project coordinators, and construction safety officers.",
  },
  {
    slug: "workplace-emergency-response",
    title: "Workplace Emergency Response",
    category: "Emergency response",
    summary: "Prepare a team to act early, communicate clearly, and support a safe evacuation.",
    description:
      "A practical package for fire marshals, first-aid responders, and safety committee members. It brings together first aid, fire fighting, and the OSH basics needed to plan drills and coordinate an emergency response.",
    duration: "3 courses · about 21 learning hours",
    image: "/assets/index-slider-11.jpg",
    courseSlugs: ["first-aid-training", "fire-fighting-training", "occupational-safety-and-health-osh"],
    outcomes: [
      "Respond to injuries and sudden illness at work",
      "Choose and use the right fire extinguisher",
      "Support evacuation, roll call, and post-incident review",
    ],
    audience: "Emergency response teams, fire marshals, first aiders, and facility managers.",
  },
  {
    slug: "lifting-and-rigging-operations",
    title: "Lifting and Rigging Operations",
    category: "Lifting & rigging",
    summary: "Strengthen planning, inspection, and communication around every lift.",
    description:
      "This program pairs rigging safety with the workplace safety foundation that supervisors need to manage lifting operations. It is suited to teams working with cranes, hoists, and suspended loads in construction, logistics, and maintenance.",
    duration: "2 courses · about 18 learning hours",
    image: "/assets/index-slider-9.jpg",
    courseSlugs: ["rigger-safety-training", "occupational-safety-and-health-osh"],
    outcomes: [
      "Inspect gear and plan a lift before work starts",
      "Set exclusion zones and communicate with operators",
      "Investigate near misses and improve lift procedures",
    ],
    audience: "Riggers, banksmen, crane operators, lifting supervisors, and maintenance teams.",
  },
  {
    slug: "general-workplace-safety",
    title: "General Workplace Safety",
    category: "Workplace safety",
    summary: "The essential safety and first-aid knowledge every workplace team should share.",
    description:
      "An accessible entry point for offices, warehouses, schools, and service organizations. The program covers everyday hazard awareness, risk control, and basic first aid so that teams can prevent incidents and respond with confidence when something goes wrong.",
    duration: "2 courses · about 16 learning hours",
    image: "/assets/index-slider-1.jpg",
    courseSlugs: ["occupational-safety-and-health-osh", "first-aid-training"],
    outcomes: [
      "Identify and control everyday workplace hazards",
      "Understand roles in a simple safety management system",
      "Provide basic first aid and record an incident",
    ],
    audience: "All employees, team leaders, HR teams, and safety representatives.",
  },
];

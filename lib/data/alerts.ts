import type { SafetyAlert } from "@/lib/types";

export const safetyAlerts: SafetyAlert[] = [
  {
    slug: "heat-advisory-outdoor-teams",
    title: "Heat advisory for outdoor and workshop teams",
    severity: "warning",
    summary:
      "Above-average temperatures are expected across Kigali over the coming weeks. Plan hydration, shade, and work-rest cycles for outdoor and hot indoor work.",
    publishedAt: "2026-11-17",
    effectiveUntil: "2026-12-15",
    source: "Kigali Safety Academy safety desk",
    active: true,
    body: [
      "Sustained heat can reduce concentration and coordination before a person notices the symptoms. Teams working outdoors, in workshops, or near heat-generating equipment should review their work plans for the coming weeks.",
      "Schedule demanding tasks for cooler parts of the day where possible. Provide drinking water close to the work area and make sure supervisors know how to recognize early signs of heat stress.",
      "New workers and anyone returning from leave may need extra time to adjust. Include heat safety in toolbox talks and check that everyone knows how to call for help.",
    ],
    actionItems: [
      "Provide cool drinking water and frequent rest breaks",
      "Plan heavy work for cooler hours where possible",
      "Brief workers on heat-stress symptoms and first aid",
      "Check on workers wearing heavy protective clothing",
      "Record and review any heat-related incidents",
    ],
  },
  {
    slug: "confirm-isolation-before-electrical-work",
    title: "Confirm isolation before electrical maintenance",
    severity: "critical",
    summary:
      "Recent near misses highlight the need to verify isolation, lock out, and test for dead before any electrical maintenance begins.",
    publishedAt: "2026-11-12",
    source: "Kigali Safety Academy safety desk",
    active: true,
    body: [
      "Electrical work must never begin until the equipment is isolated, locked out, and proven de-energized. A label or a verbal assurance is not a substitute for a verified isolation procedure.",
      "Supervisors should confirm that the correct isolation point was used, that locks and tags are in place, and that the tester has been checked before use. Where multiple energy sources exist, each one must be controlled.",
      "Stop the task if the isolation cannot be confirmed. Report the situation and have it resolved before work resumes.",
    ],
    actionItems: [
      "Identify every energy source before work starts",
      "Apply lockout and tagout at the correct isolation point",
      "Test the tester, then test for dead",
      "Keep the key or lock under the worker's control",
      "Stop and escalate if isolation cannot be verified",
    ],
  },
  {
    slug: "wet-season-site-checks",
    title: "Wet-season checks for scaffolding, excavations, and access routes",
    severity: "advisory",
    summary:
      "Rain can change ground conditions quickly. Inspect access routes, excavations, and temporary works after heavy rain before allowing work to continue.",
    publishedAt: "2026-11-05",
    effectiveUntil: "2026-12-31",
    source: "Kigali Safety Academy safety desk",
    active: true,
    body: [
      "Heavy rain can soften ground, undermine temporary works, and make walkways and ladders slippery. Conditions that were safe in the morning may not be safe after a downpour.",
      "Add a post-rain inspection to the daily routine on sites with excavations, scaffolds, or unpaved access roads. Check for standing water, ground movement, damaged edge protection, and blocked drainage.",
      "Where conditions have changed, stop work in the affected area and have the controls checked before people return.",
    ],
    actionItems: [
      "Inspect excavations and scaffold foundations after rain",
      "Clear drainage and remove standing water",
      "Check ladders, walkways, and handrails for stability",
      "Reinforce edge protection where ground has moved",
      "Brief the team on changed site conditions",
    ],
  },
  {
    slug: "replace-damaged-ppe",
    title: "Replace damaged PPE before the next shift",
    severity: "info",
    summary:
      "Cracked hard hats, scratched lenses, and worn harnesses may no longer protect the wearer. Check PPE at the start of every shift.",
    publishedAt: "2026-10-28",
    source: "Kigali Safety Academy safety desk",
    active: true,
    body: [
      "Personal protective equipment works only when it is in good condition. A cracked shell, a frayed strap, or a scratched visor can reduce protection without being obvious at a glance.",
      "Encourage workers to inspect their own PPE before each use and to report damage immediately. Keep spare PPE available so that damaged items can be replaced without delaying the task.",
      "Never modify or repair protective equipment in a way that is not approved by the manufacturer.",
    ],
    actionItems: [
      "Inspect PPE at the start of every shift",
      "Remove damaged items from service immediately",
      "Keep suitable spare PPE available",
      "Record repeated damage to find the root cause",
      "Never modify PPE without manufacturer approval",
    ],
  },
  {
    slug: "toolbox-talk-ppe-season",
    title: "Toolbox talk: getting the most from daily PPE checks",
    severity: "info",
    summary:
      "A short discussion guide for supervisors to use during morning briefings.",
    publishedAt: "2026-09-30",
    source: "Kigali Safety Academy safety desk",
    active: false,
    body: [
      "Use this short guide to encourage workers to check their PPE before starting work. Keep the conversation practical and invite people to share what they have noticed.",
      "Ask the team what makes a PPE check easy or difficult on site, and record any recurring supply or fit issues for follow-up.",
    ],
    actionItems: [
      "Ask each worker to inspect their PPE",
      "Discuss one example of damaged gear",
      "Agree where replacements are kept",
    ],
  },
];

export const severityLabels: Record<SafetyAlert["severity"], string> = {
  critical: "Critical",
  warning: "Warning",
  advisory: "Advisory",
  info: "Information",
};

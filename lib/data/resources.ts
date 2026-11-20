import type { ResourceArticle } from "@/lib/types";

export const resources: ResourceArticle[] = [
  {
    slug: "heat-stress-plan-ahead",
    title: "Heat stress: plan ahead and stay safe",
    category: "Safety spotlight",
    summary:
      "Hot conditions can affect anyone. Learn the early warning signs and the practical controls that protect outdoor and workshop teams.",
    image: "/assets/index-slider-10.jpg",
    readingTime: "6 min read",
    publishedAt: "2026-11-15",
    author: "Kigali Safety Academy",
    featured: true,
    sections: [
      {
        heading: "Why heat matters at work",
        paragraphs: [
          "Heat affects the body's ability to cool itself. When core temperature rises, concentration, coordination, and judgment can decline before a person realizes something is wrong. In workplaces, that can turn a routine task into a serious risk.",
          "Outdoor work, hot workshops, heavy protective clothing, and physically demanding tasks all increase the load. New workers and anyone returning from a break may need time to adjust.",
        ],
      },
      {
        heading: "Recognize the early signs",
        paragraphs: [
          "Early signs include headache, dizziness, fatigue, muscle cramps, and heavy sweating. As heat stress worsens, a person may become confused, stop sweating, or lose consciousness.",
          "Anyone showing signs of heat illness should be moved to a cool area, given cool water if they are alert, and assisted to get medical help if symptoms do not improve quickly.",
        ],
        bullets: [
          "Headache, dizziness, or nausea",
          "Muscle cramps or weakness",
          "Confusion or unusual behavior",
          "Hot, dry skin or heavy sweating",
        ],
      },
      {
        heading: "Plan the work around the heat",
        paragraphs: [
          "Where possible, schedule demanding tasks for cooler parts of the day. Provide shade, frequent rest breaks, and drinking water close to the work area. Rotate tasks so that the same people are not exposed continuously.",
          "Supervisors should check on workers throughout the shift, especially those wearing heavy protective clothing or working in confined spaces. A short check-in can catch problems early.",
        ],
      },
      {
        heading: "Respond quickly",
        paragraphs: [
          "Move the person to a cool place, loosen unnecessary clothing, and cool the skin with water and airflow. If the person is alert, offer cool water. Call for medical help if symptoms are severe, worsen, or do not improve.",
          "Record the incident and review what led to it. Better planning, hydration, and supervision are usually more effective than relying on individual effort alone.",
        ],
      },
    ],
  },
  {
    slug: "ppe-inspection-basics",
    title: "PPE inspection basics: what to check before each shift",
    category: "Workplace topics",
    summary:
      "A quick pre-shift PPE check can catch damage before it becomes an injury. Here is a simple routine for teams.",
    image: "/assets/index-slider-1.jpg",
    readingTime: "4 min read",
    publishedAt: "2026-11-08",
    author: "Kigali Safety Academy",
    sections: [
      {
        heading: "Start with the equipment you wear",
        paragraphs: [
          "Personal protective equipment is the last line of defense. It only helps when it fits, is worn correctly, and is in good condition. Encourage workers to inspect their own gear at the start of every shift.",
        ],
      },
      {
        heading: "A simple check",
        paragraphs: [
          "Look for cracks, cuts, fraying, discoloration, or missing parts. Check straps and fasteners for wear. Make sure the equipment is clean and that the size and fit are still appropriate.",
        ],
        bullets: [
          "Hard hats: cracks, dents, damaged suspension",
          "Eye protection: scratched or loose lenses",
          "Gloves: cuts, holes, or stiff material",
          "Harnesses: frayed webbing, damaged buckles",
          "Respirators: damaged valves, poor seal",
        ],
      },
      {
        heading: "Replace, don't repair",
        paragraphs: [
          "Remove damaged equipment from service immediately and replace it with a suitable spare. Repairs should only be made in line with the manufacturer's instructions. Record repeated damage so that the root cause can be addressed.",
        ],
      },
      {
        heading: "Make it easy to do the right thing",
        paragraphs: [
          "Keep spare PPE where workers can reach it. Make reporting damage simple and blame-free. When replacement is quick and straightforward, people are more likely to stop using damaged gear.",
        ],
      },
    ],
  },
  {
    slug: "fire-extinguisher-pass-technique",
    title: "Using a fire extinguisher: the PASS technique",
    category: "Emergency response",
    summary:
      "Pull, aim, squeeze, sweep. A clear guide to using a fire extinguisher safely and knowing when to step back.",
    image: "/assets/index-slider-2.jpg",
    readingTime: "5 min read",
    publishedAt: "2026-10-30",
    author: "Kigali Safety Academy",
    sections: [
      {
        heading: "Only fight small, early-stage fires",
        paragraphs: [
          "Fire extinguishers are for small fires in their early stages, when the fire is not blocking your escape and you have been trained to use the equipment. If the fire is growing, producing heavy smoke, or spreading, leave the area and call for help.",
          "Always raise the alarm first. Make sure you have a clear exit behind you and that someone knows what is happening.",
        ],
      },
      {
        heading: "The PASS technique",
        paragraphs: [
          "Use the PASS sequence to remember the steps. Keep your distance, stay low if there is smoke, and back away once the fire is out in case it reignites.",
        ],
        bullets: [
          "Pull the pin to break the tamper seal",
          "Aim the nozzle at the base of the fire",
          "Squeeze the handle to release the agent",
          "Sweep side to side across the base of the fire",
        ],
      },
      {
        heading: "Choose the right extinguisher",
        paragraphs: [
          "Using the wrong extinguisher can make a fire worse. Water is generally unsuitable for electrical or cooking-oil fires. Check the label and remember that different agents are designed for different fire classes.",
        ],
      },
      {
        heading: "After the fire",
        paragraphs: [
          "Even if the fire appears out, treat the area as unsafe until it has been checked. Report the incident, record what was used, and arrange for the extinguisher to be recharged or replaced.",
        ],
      },
    ],
  },
  {
    slug: "scaffolding-pre-use-checklist",
    title: "A practical pre-use checklist for scaffolding",
    category: "Workplace topics",
    summary:
      "Before anyone climbs, check the ground, the structure, the access, and the edge protection. A short checklist for site teams.",
    image: "/assets/index-slider-7.jpg",
    readingTime: "5 min read",
    publishedAt: "2026-10-18",
    author: "Kigali Safety Academy",
    sections: [
      {
        heading: "Check the ground first",
        paragraphs: [
          "Scaffolding is only as stable as the ground beneath it. Check for soft ground, standing water, excavations, or slopes. Base plates and sole boards should spread the load and keep the frame level.",
        ],
      },
      {
        heading: "Inspect the structure",
        paragraphs: [
          "Look for missing braces, damaged tubes, loose couplers, or unauthorised alterations. Scaffolding should be erected by competent people and inspected before first use, after changes, and after events that could affect stability.",
        ],
        bullets: [
          "Base plates supported and level",
          "Braces and ties in place",
          "Platforms fully boarded",
          "Guardrails and toe boards secure",
          "Safe access available",
        ],
      },
      {
        heading: "Control access and materials",
        paragraphs: [
          "Keep the area around the scaffold tidy and control access so that people do not walk under work at height. Do not overload platforms and secure loose materials so they cannot fall.",
        ],
      },
      {
        heading: "Record and act",
        paragraphs: [
          "Record the inspection and make sure defects are fixed before the scaffold is used. If something is not right, stop access, tag the area, and arrange for a competent person to check it.",
        ],
      },
    ],
  },
  {
    slug: "incident-reporting-that-works",
    title: "Incident reporting that actually improves safety",
    category: "Workplace topics",
    summary:
      "A short report is only useful if it leads to action. Build a simple reporting habit that teams trust.",
    image: "/assets/index-slider-9.jpg",
    readingTime: "6 min read",
    publishedAt: "2026-10-02",
    author: "Kigali Safety Academy",
    sections: [
      {
        heading: "Why people do not report",
        paragraphs: [
          "Fear of blame, unclear forms, and a sense that nothing changes are common barriers. A reporting system should be simple to use, visibly acted on, and focused on learning rather than punishment.",
        ],
      },
      {
        heading: "Capture the basics",
        paragraphs: [
          "A useful report records what happened, where, when, who was involved, what harm occurred, and what immediate action was taken. Keep the form short enough to complete promptly and add details later if needed.",
        ],
        bullets: [
          "What happened and where",
          "Who was involved and who was notified",
          "What immediate action was taken",
          "What could have prevented it",
          "What follow-up is needed",
        ],
      },
      {
        heading: "Review and act",
        paragraphs: [
          "Review reports regularly, identify recurring patterns, and assign clear actions with owners and dates. Share what changed with the team so that people can see their report made a difference.",
        ],
      },
      {
        heading: "Near misses are valuable",
        paragraphs: [
          "A near miss is a free warning. Encourage people to report close calls and use them to test controls before someone is hurt. Recognise good reporting openly and consistently.",
        ],
      },
    ],
  },
];

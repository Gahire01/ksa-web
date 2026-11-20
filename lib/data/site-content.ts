import type { FaqItem, Instructor } from "@/lib/types";

export const instructors: Instructor[] = [
  {
    name: "Aline Uwase",
    role: "Occupational safety facilitator",
    focus: "Workplace safety · risk assessment",
    bio: "Aline supports teams to turn safety procedures into practical daily habits, with a focus on worker participation and clear communication.",
    initials: "AU",
  },
  {
    name: "Eric Habimana",
    role: "Construction safety facilitator",
    focus: "Construction · working at height",
    bio: "Eric works with site supervisors on hazard planning, inductions, and the everyday details that keep construction teams safe.",
    initials: "EH",
  },
  {
    name: "Diane Mukamana",
    role: "First aid and emergency response facilitator",
    focus: "First aid · emergency preparedness",
    bio: "Diane leads practical first-aid sessions with a calm, scenario-based approach that helps learners remember what to do under pressure.",
    initials: "DM",
  },
  {
    name: "Patrick Nkurunziza",
    role: "Lifting and rigging facilitator",
    focus: "Rigging · lift planning",
    bio: "Patrick brings hands-on lifting experience to the classroom and focuses on inspection, planning, and clear communication with the lifting team.",
    initials: "PN",
  },
];

export const faqs: FaqItem[] = [
  {
    group: "Training",
    question: "How does self-paced training work?",
    answer:
      "After registering your interest, you receive access to the course materials for your chosen training. You work through the lessons in your own time, then complete a short knowledge check. Course access and certification details are confirmed by Kigali Safety Academy.",
  },
  {
    group: "Training",
    question: "Do I need previous safety experience?",
    answer:
      "No. The introductory courses are designed for learners who are new to occupational safety. Intermediate courses are more useful if you already coordinate work or supervise a team, but each course page lists the intended audience.",
  },
  {
    group: "Training",
    question: "Are the courses available in person?",
    answer:
      "Core theory is available online. First aid, fire fighting, and rigging courses also include optional practical sessions and scheduled workshops. Check the events page for upcoming practical dates.",
  },
  {
    group: "Registration",
    question: "How do I create an account?",
    answer:
      "Use the registration page to share your details and course of interest. Account access is being connected to the student portal; until then, the academy team will follow up with the next steps.",
  },
  {
    group: "Registration",
    question: "Can my employer register a group of staff?",
    answer:
      "Yes. Send a training inquiry through the business page or contact us directly with the number of learners, the courses you need, and preferred dates. We will help you plan a suitable programme.",
  },
  {
    group: "Certificates",
    question: "How do I verify a certificate?",
    answer:
      "Use the certificate verification page with the certificate ID and learner surname. If you do not have the ID, contact the academy with the learner's full name and training date so the team can help.",
  },
  {
    group: "Events",
    question: "How do event registrations work?",
    answer:
      "Choose an event and complete the registration form. You will receive the details you need to confirm your place. Places are limited for practical sessions and are confirmed by the academy team.",
  },
  {
    group: "Events",
    question: "What is the cancellation policy for events?",
    answer:
      "Please let us know as early as possible if you cannot attend so that your place can be offered to someone else. Specific cancellation and transfer terms are confirmed when your place is booked.",
  },
  {
    group: "Safety alerts",
    question: "Who writes the safety alerts?",
    answer:
      "Alerts are published by the Kigali Safety Academy safety desk to share timely reminders and practical guidance. They support awareness and do not replace site-specific risk assessments or local legal requirements.",
  },
  {
    group: "General",
    question: "Where are you located?",
    answer:
      "Kigali Safety Academy is based in Kacyiru, Gasabo District, Kigali. Office hours are Monday to Friday, 08:00–17:00 CAT. Please contact us before visiting so that the right team member is available.",
  },
];

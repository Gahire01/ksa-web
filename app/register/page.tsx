import type { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";
import { officialCourses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your Kigali Safety Academy account and register for occupational safety training.",
};

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ course?: string }> }) {
  const { course } = await searchParams;
  return (
    <main className="auth-page">
      <section className="auth-hero">
        <div className="site-container">
          <span className="eyebrow">GET STARTED</span>
          <h1>Create your account</h1>
          <p>Register once, then choose from our official safety training courses and learn at your own pace.</p>
        </div>
      </section>

      <section className="site-container auth-section" aria-label="Create an account">
        <div className="auth-grid">
          <div className="auth-card">
            <h2>Registration</h2>
            <p className="auth-lead">Fields marked with a label are required.</p>
            <RegisterForm defaultCourse={course ?? ""} />
            <p className="auth-alt">Already registered? <a href="/login">Sign in</a></p>
          </div>

          <aside className="auth-aside" aria-label="Registration information">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>Your training in three steps</h2>
            <ul className="auth-list">
              <li>Create your free account and pick a course</li>
              <li>Work through the course materials at your own pace</li>
              <li>Purchase your certificate when you complete the training</li>
            </ul>
            <div className="auth-courses">
              <h3>What you can register for</h3>
              <ul>
                {officialCourses.map((course) => <li key={course}>{course}</li>)}
              </ul>
            </div>
            <p className="auth-help">Training for a team? <a href="/business">Ask about business training</a>.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

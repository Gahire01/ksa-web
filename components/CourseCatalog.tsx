"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/CourseCard";
import type { Course } from "@/lib/types";

export default function CourseCatalog({ courses, categories }: { courses: Course[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All courses");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = category === "All courses" || course.category === category;
      const matchesQuery =
        !normalized ||
        course.title.toLowerCase().includes(normalized) ||
        course.summary.toLowerCase().includes(normalized) ||
        course.category.toLowerCase().includes(normalized) ||
        course.audience.some((audience) => audience.toLowerCase().includes(normalized));
      return matchesCategory && matchesQuery;
    });
  }, [courses, query, category]);

  return (
    <div className="catalog">
      <div className="catalog-controls">
        <div className="catalog-search">
          <label className="sr-only" htmlFor="catalog-search">Search courses</label>
          <input
            id="catalog-search"
            type="search"
            placeholder="Search courses, topics, or audiences"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="filter-chips" role="group" aria-label="Filter courses by category">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-chip${category === item ? " is-active" : ""}`}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="catalog-summary">
          <span>{filtered.length} course{filtered.length === 1 ? "" : "s"}</span>
          {(query || category !== "All courses") && (
            <button type="button" className="text-button" onClick={() => { setQuery(""); setCategory("All courses"); }}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filtered.length ? (
        <div className="card-grid three">
          {filtered.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No courses match that search</h3>
          <p>Try a different keyword or choose another category.</p>
          <button type="button" className="button-inline" onClick={() => { setQuery(""); setCategory("All courses"); }}>
            Show all courses
          </button>
        </div>
      )}
    </div>
  );
}

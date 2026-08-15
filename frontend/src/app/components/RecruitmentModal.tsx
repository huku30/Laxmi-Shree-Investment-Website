"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  formatDeadline,
  jobOpenings,
  mailtoFor,
  recruitmentConfig,
  type JobOpening,
} from "@/app/data/recruitment";

interface RecruitmentModalProps {
  open: boolean;
  onClose: () => void;
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7m-9.5 0h13A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9A1.5 1.5 0 0 1 5.5 7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12.5h16M11 12.5v1.4a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1v-1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function positionLabel(index: number) {
  return `POSITION ${String(index + 1).padStart(2, "0")}`;
}

function JobDetailBody({ job }: { job: JobOpening }) {
  return (
    <>
      {job.overviewHeading && (
        <h3 className="text-[#6633CC] text-sm sm:text-base font-generalSans-semibold font-semibold uppercase tracking-wide">
          {job.overviewHeading}
        </h3>
      )}
      <p className="text-[#4B4160] text-sm leading-relaxed -mt-2">{job.summary}</p>

      <div>
        <h3 className="text-[#6633CC] text-sm sm:text-base font-generalSans-semibold font-semibold mb-2 uppercase tracking-wide">
          {job.responsibilitiesHeading}
        </h3>
        {job.responsibilities.some((r) => r.type === "section") ? (
          <div className="flex flex-col gap-3">
            {job.responsibilities.map((entry, index) => (
              <div key={index}>
                {entry.heading && (
                  <p className="text-[#421855] text-sm font-generalSans-semibold font-semibold mb-1">
                    {entry.heading}
                  </p>
                )}
                {entry.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-[#4B4160] text-sm leading-relaxed mt-1 first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {job.responsibilities.map((entry, index) => (
              <li key={index} className="text-[#4B4160] text-sm leading-relaxed flex gap-2">
                <span className="text-[#DC9320] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DC9320] flex-shrink-0" />
                <span>{entry.paragraphs[0]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 className="text-[#6633CC] text-sm sm:text-base font-generalSans-semibold font-semibold mb-2 uppercase tracking-wide">
          {job.qualificationsHeading}
        </h3>
        <ul className="flex flex-col gap-2">
          {job.qualifications.map((qualification, index) => (
            <li key={index} className="text-[#4B4160] text-sm leading-relaxed flex gap-2">
              <span className="text-[#DC9320] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DC9320] flex-shrink-0" />
              <span>{qualification}</span>
            </li>
          ))}
        </ul>
      </div>

      {job.competencies && job.competencies.length > 0 && (
        <div>
          <h3 className="text-[#6633CC] text-sm sm:text-base font-generalSans-semibold font-semibold mb-2 uppercase tracking-wide">
            {job.competenciesHeading}
          </h3>
          <ul className="flex flex-col gap-2">
            {job.competencies.map((competency, index) => (
              <li key={index} className="text-[#4B4160] text-sm leading-relaxed flex gap-2">
                <span className="text-[#DC9320] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DC9320] flex-shrink-0" />
                <span>{competency}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={mailtoFor(job.title, { body: true })}
        aria-label={`Apply now for ${job.title}`}
        className="self-start inline-flex items-center gap-2 rounded-lg bg-[#DC9320] hover:bg-[#C8851C] transition-colors text-white text-sm font-generalSans-semibold font-semibold px-6 py-3 mt-1"
      >
        Apply Now
        <ArrowIcon className="w-4 h-4" />
      </a>
    </>
  );
}

export default function RecruitmentModal({ open, onClose }: RecruitmentModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const detailScrollRef = useRef<HTMLDivElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Every time the modal opens, start from the 3-position selection screen.
  useEffect(() => {
    if (open) setSelectedJobId(null);
  }, [open]);

  // Whenever the selected job changes, reset the detail scroll position and
  // move focus to the back button so keyboard/screen-reader users land somewhere sensible.
  useEffect(() => {
    if (selectedJobId) {
      detailScrollRef.current?.scrollTo({ top: 0 });
      backButtonRef.current?.focus();
    }
  }, [selectedJobId]);

  // Lock body scroll and manage focus/keyboard while the modal is open.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  const selectedIndex = jobOpenings.findIndex((job) => job.id === selectedJobId);
  const selectedJob = selectedIndex >= 0 ? jobOpenings[selectedIndex] : null;
  const otherJobs = selectedJob ? jobOpenings.filter((job) => job.id !== selectedJob.id) : [];
  const prevJob = selectedJob
    ? jobOpenings[(selectedIndex - 1 + jobOpenings.length) % jobOpenings.length]
    : null;
  const nextJob = selectedJob
    ? jobOpenings[(selectedIndex + 1) % jobOpenings.length]
    : null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
      <div
        className="absolute inset-0 bg-[#241A4A]/60 backdrop-blur-sm"
        aria-hidden="true"
        onMouseDown={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-[1000px] max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-[#E3D9F7] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="relative flex-shrink-0 bg-gradient-to-br from-[#421855] to-[#6633CC] px-5 py-6 sm:px-8 sm:py-8">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close recruitment announcement"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5C144] text-[#421855] text-[0.65rem] sm:text-xs font-generalSans-semibold font-semibold uppercase tracking-wide px-3 py-1">
              <BriefcaseIcon className="w-3.5 h-3.5" />
              Now Hiring
            </span>
          </div>

          <h1
            id={titleId}
            className="text-white text-[1.75rem] sm:text-4xl font-clashGrotesk leading-tight tracking-tight pr-10"
          >
            We&apos;re Hiring
          </h1>
          <p className="text-[#EBDBFF] text-sm sm:text-lg font-generalSans-medium mt-1">
            Join {recruitmentConfig.companyName}
            {!selectedJob && ` — ${jobOpenings.length} open positions`}
          </p>
        </div>

        {/* Main area */}
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
          {!selectedJob ? (
            /* Job selection screen */
            <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
              <div key="selection" className="animate-fadeIn grid grid-cols-1 md:grid-cols-3 gap-4">
                {jobOpenings.map((job, index) => (
                  <button
                    key={job.id}
                    type="button"
                    onClick={() => setSelectedJobId(job.id)}
                    aria-label={`View details for ${job.title}`}
                    className="group text-left flex flex-col justify-between gap-5 rounded-xl border border-[#E3D9F7] bg-[#FCF7FF] hover:bg-[#F3E9FF] hover:border-[#C9AEEF] transition-colors px-5 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6633CC]"
                  >
                    <div>
                      <span className="inline-block text-[#9D4BAD] text-xs font-generalSans-semibold font-semibold tracking-widest mb-2">
                        {positionLabel(index)}
                      </span>
                      <h2 className="text-[#421855] text-lg font-generalSans-semibold font-semibold uppercase leading-snug">
                        {job.title}
                      </h2>
                      <p className="text-[#9D4BAD] text-sm font-generalSans-medium mt-1.5">
                        {job.tagline}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[#DC9320] text-sm font-generalSans-semibold font-semibold">
                      View Details
                      <ArrowIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Selected-job screen: side navigation + detail */
            <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden">
              {/* Side navigation (desktop/tablet only) */}
              <div className="hidden md:flex md:flex-col md:w-[210px] lg:w-[240px] flex-shrink-0 overflow-y-auto border-r border-[#E3D9F7] bg-[#FCF7FF] px-3.5 py-4 gap-3">
                {otherJobs.map((job) => {
                  const jobIndex = jobOpenings.findIndex((j) => j.id === job.id);
                  return (
                    <button
                      key={job.id}
                      type="button"
                      onClick={() => setSelectedJobId(job.id)}
                      aria-label={`Switch to ${job.title} details`}
                      className="group text-left flex flex-col gap-1.5 rounded-lg border border-[#E3D9F7] bg-white hover:bg-[#F3E9FF] hover:border-[#C9AEEF] transition-colors px-3.5 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6633CC]"
                    >
                      <span className="text-[#B79BD1] text-[0.65rem] font-generalSans-semibold font-semibold tracking-widest">
                        {positionLabel(jobIndex)}
                      </span>
                      <span className="text-[#421855] text-sm font-generalSans-semibold font-semibold uppercase leading-snug">
                        {job.title}
                      </span>
                      <span className="text-[#9D4BAD] text-xs font-generalSans-medium">
                        {job.tagline}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#DC9320] text-xs font-generalSans-semibold font-semibold mt-0.5">
                        View
                        <ArrowIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active job detail */}
              <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                <div className="flex-shrink-0 px-5 sm:px-8 pt-5 pb-4 border-b border-[#E3D9F7]">
                  <button
                    ref={backButtonRef}
                    type="button"
                    onClick={() => setSelectedJobId(null)}
                    aria-label="Back to all positions"
                    className="flex items-center gap-1.5 text-[#9D4BAD] hover:text-[#6633CC] text-sm font-generalSans-semibold font-semibold mb-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6633CC] rounded"
                  >
                    <ArrowIcon className="w-4 h-4 rotate-180" />
                    All Positions
                  </button>
                  <span className="block text-[#DC9320] text-xs font-generalSans-semibold font-semibold tracking-widest mb-1">
                    {positionLabel(selectedIndex)}
                  </span>
                  <h2 className="text-[#421855] text-xl sm:text-2xl font-clashGrotesk leading-tight uppercase">
                    {selectedJob.title}
                  </h2>
                  <p className="text-[#9D4BAD] text-sm sm:text-base font-generalSans-medium mt-1">
                    {selectedJob.tagline}
                  </p>
                </div>

                <div
                  ref={detailScrollRef}
                  key={selectedJob.id}
                  className="animate-fadeIn flex-1 min-h-0 overflow-y-auto px-5 sm:px-8 py-5 flex flex-col gap-5"
                >
                  <JobDetailBody job={selectedJob} />
                </div>

                {/* Compact previous/next controls (mobile only) */}
                {prevJob && nextJob && (
                  <div className="md:hidden flex-shrink-0 border-t border-[#E3D9F7] bg-[#FCF7FF] px-4 py-3 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedJobId(prevJob.id)}
                      aria-label={`View previous position: ${prevJob.title}`}
                      className="flex items-center gap-1.5 text-[#6633CC] text-xs font-generalSans-semibold font-semibold px-2 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6633CC] rounded"
                    >
                      <ArrowIcon className="w-3.5 h-3.5 rotate-180 flex-shrink-0" />
                      {prevJob.title}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedJobId(nextJob.id)}
                      aria-label={`View next position: ${nextJob.title}`}
                      className="flex items-center gap-1.5 text-[#6633CC] text-xs font-generalSans-semibold font-semibold px-2 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6633CC] rounded"
                    >
                      {nextJob.title}
                      <ArrowIcon className="w-3.5 h-3.5 flex-shrink-0" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer with application details */}
        <div className="flex-shrink-0 border-t border-[#E3D9F7] bg-[#FCF7FF] px-5 py-4 sm:px-8 sm:py-5">
          <p className="text-[#421855] text-xs sm:text-sm leading-relaxed text-center">
            Interested candidates are invited to submit their resume and cover letter to{" "}
            <a
              href={mailtoFor("Open Position")}
              className="font-generalSans-semibold font-semibold text-[#6633CC] hover:underline"
            >
              {recruitmentConfig.applicationEmail}
            </a>
            .
          </p>
          <p className="text-[#421855] text-xs sm:text-sm text-center mt-1 font-generalSans-semibold font-semibold">
            Application Deadline: {formatDeadline()}
          </p>
          <p className="text-[#7A6E8F] text-xs sm:text-sm text-center mt-1">
            Only shortlisted candidates will be contacted for an interview.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}

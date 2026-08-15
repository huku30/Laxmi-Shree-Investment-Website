"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isRecruitmentActive } from "@/app/data/recruitment";
import RecruitmentModal from "./RecruitmentModal";

// Intentionally no localStorage/sessionStorage: the popup is meant to
// auto-open on every fresh page load/reload, not just once per visitor.
const AUTO_OPEN_DELAY_MS = 1000;

export default function RecruitmentPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [canShowTrigger, setCanShowTrigger] = useState(false);

  const isAdminRoute = pathname?.startsWith("/admin") ?? false;
  const active = isRecruitmentActive() && !isAdminRoute;

  useEffect(() => {
    if (!active) return;

    setCanShowTrigger(true);

    const timer = setTimeout(() => {
      setOpen(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, [active]);

  const handleClose = () => {
    setOpen(false);
  };

  if (!active) return null;

  return (
    <>
      <RecruitmentModal open={open} onClose={handleClose} />

      {canShowTrigger && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="View job openings — We're Hiring"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[90] flex items-center gap-2 rounded-full bg-[#6633CC] hover:bg-[#5A2BB8] text-white shadow-lg shadow-[#421855]/30 px-4 py-3 sm:px-5 sm:py-3.5 transition-colors"
        >
          <svg
            className="w-5 h-5 flex-shrink-0"
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
          <span className="text-sm font-generalSans-semibold font-semibold whitespace-nowrap">
            We&apos;re Hiring
          </span>
        </button>
      )}
    </>
  );
}

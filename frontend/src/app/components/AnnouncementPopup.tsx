"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { announcementConfig, isAnnouncementActive } from "@/app/data/announcement";
import { useModalBehavior } from "./useModalBehavior";

// Like RecruitmentPopup, this intentionally opens on every fresh page load.
export default function AnnouncementPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  const isAdminRoute = pathname?.startsWith("/admin") ?? false;
  const active = isAnnouncementActive() && !isAdminRoute;

  useEffect(() => {
    if (active) setOpen(true);
  }, [active]);

  const handleClose = useCallback(() => setOpen(false), []);
  useModalBehavior(open, handleClose, dialogRef, closeButtonRef);

  if (!active || !open) return null;

  const { title, description, pdfUrl, previewImageUrl, downloadFileName } = announcementConfig;

  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6">
      <div
        className="absolute inset-0 bg-[#241A4A]/60 backdrop-blur-sm"
        aria-hidden="true"
        onMouseDown={handleClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative w-full max-w-[560px] max-h-[92dvh] bg-white rounded-2xl shadow-2xl border border-[#E3D9F7] flex flex-col overflow-hidden"
      >
        <div className="flex-shrink-0 flex items-center justify-between gap-3 bg-gradient-to-br from-[#421855] to-[#6633CC] px-4 py-3 sm:px-5">
          <h2 id={titleId} className="text-white text-lg sm:text-xl font-clashGrotesk leading-tight">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label={`Close ${title}`}
            className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <p id={descriptionId} className="sr-only">
          {description}. Select the notice to open the full PDF in a new tab.
        </p>

        <div className="flex-1 min-h-0 overflow-y-auto [-webkit-overflow-scrolling:touch] bg-[#FCF7FF] p-3 sm:p-4">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open full ${title} PDF in a new tab`}
            className="block rounded-lg overflow-hidden border border-[#E3D9F7] bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6633CC]"
          >
            <Image
              src={previewImageUrl}
              alt={description}
              width={870}
              height={1231}
              priority
              sizes="(max-width: 640px) 100vw, 560px"
              className="w-full h-auto"
            />
          </a>
        </div>

        <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center gap-2 sm:justify-between border-t border-[#E3D9F7] px-4 py-3 sm:px-5">
          <p className="text-[#7A6E8F] text-xs text-center sm:text-left" aria-hidden="true">
            Tap the notice to view the full PDF.
          </p>
          <a
            href={pdfUrl}
            download={downloadFileName}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#DC9320] hover:bg-[#C8851C] transition-colors text-white text-sm font-generalSans-semibold font-semibold px-5 py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6633CC]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

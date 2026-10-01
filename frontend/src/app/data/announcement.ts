// Config for the AGM Notice announcement popup.
// To replace the notice, swap the files in /public/AGM and update the paths below.
// To take it down, set `enabled` to false or let `expiresOn` pass.

export const announcementConfig = {
  enabled: true,
  title: "AGM Notice",
  description: "Notice of the Annual General Meeting of Laxmi Shree Investment Pvt. Ltd.",
  // ISO date (YYYY-MM-DD). The popup stops appearing automatically after this date.
  expiresOn: "2026-10-11",
  // Same-origin static files only. encodeURI handles the space in the filenames.
  pdfUrl: encodeURI("/AGM/AGM Notice.pdf"),
  previewImageUrl: encodeURI("/AGM/AGM Notice.png"),
  downloadFileName: "Laxmi-Shree-AGM-Notice.pdf",
};

export function isAnnouncementActive(): boolean {
  if (!announcementConfig.enabled) return false;
  const expiry = new Date(`${announcementConfig.expiresOn}T23:59:59`);
  return new Date() <= expiry;
}

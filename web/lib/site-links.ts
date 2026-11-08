/** Set these to the new public addresses when the rebrand is deployed there. */
export const siteLinks = {
  website: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  x: process.env.NEXT_PUBLIC_SOCIAL_X_URL || "",
  // Keep the account private until the operator explicitly publishes it.
  repository: "https://github.com/.",
};

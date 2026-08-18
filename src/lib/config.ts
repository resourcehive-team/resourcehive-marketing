const configuredAppUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  "http://localhost:8000";

export const appUrl = configuredAppUrl.replace(/\/$/, "");

export function appPath(path: `/${string}`) {
  return `${appUrl}${path}`;
}

import { chromium } from "playwright";

const base = process.env.RESUME_URL ?? "http://127.0.0.1:3000/resume";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(base, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: "public/Hardik-Pandey-Resume.pdf",
  format: "A4",
  printBackground: false,
  margin: { top: "14mm", right: "16mm", bottom: "14mm", left: "16mm" },
});
await browser.close();
console.log("wrote public/Hardik-Pandey-Resume.pdf");

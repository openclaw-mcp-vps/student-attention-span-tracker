import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Attention Span Tracker",
  description: "Track when students lose focus during online lessons"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d65fcacc-18de-46c9-a13d-6b06312a00db"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

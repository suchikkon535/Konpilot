
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Konpilot AI",
  description:
    "Konpilot AI is a cutting-edge conversational engine that leverages advanced natural language processing and machine learning techniques to deliver intelligent, context-aware interactions.",
  icons: {
    icon: [
      { url: "/TabLogo.png", type: "image/png" },
    ],
    shortcut: "/TabLogo.png",
    apple: "/TabLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

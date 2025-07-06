<<<<<<< HEAD
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
=======
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from "../components/ui/header"
>>>>>>> 8a6096371b41133782208c1524fcb4c24fc62ba5

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Template with TrustlessWork",
  description:
    "A modern e-commerce template with TrustlessWork integration powered by ScaffoldRust",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
=======
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
>>>>>>> 8a6096371b41133782208c1524fcb4c24fc62ba5
}

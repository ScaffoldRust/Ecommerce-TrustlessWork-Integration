import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Imports the wallet provider
import { WalletProvider } from '@/context/wallet.context';
import { Header } from "../components/ui/header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'E-commerce Template with TrustlessWork',
	description:
		'A modern e-commerce template with TrustlessWork integration powered by ScaffoldRust',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<WalletProvider>
					<Header />
					{children}
				</WalletProvider>
			</body>
		</html>
	)
}
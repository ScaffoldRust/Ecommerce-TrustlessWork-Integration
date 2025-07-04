import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WalletProvider } from '@/providers/wallet-provider'

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
					{children}
				</WalletProvider>
			</body>
		</html>
	)
}

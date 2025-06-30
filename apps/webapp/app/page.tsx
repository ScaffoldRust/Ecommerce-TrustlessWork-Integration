import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { WhyChoose } from '@/components/home/why-choose'

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8">
						E-commerce Template with TrustlessWork Integration
					</h1>

					<p className="leading-7 [&:not(:first-child)]:mt-6 text-center mb-8">
						A modern e-commerce template powered by ScaffoldRust, featuring seamless integration with
						TrustlessWork's blockchain-powered Escrow-as-a-Service platform.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div className="p-6 border rounded-lg">
							<h2 className="text-2xl font-bold mb-4">E-commerce Features</h2>
							<ul className="list-disc list-inside space-y-2">
								<li>Product catalog management</li>
								<li>Shopping cart functionality</li>
								<li>Order processing and tracking</li>
								<li>Customer account management</li>
							</ul>
						</div>

						<div className="p-6 border rounded-lg">
							<h2 className="text-2xl font-bold mb-4">TrustlessWork Integration</h2>
							<ul className="list-disc list-inside space-y-2">
								<li>Secure milestone-based payments</li>
								<li>Escrow service integration</li>
								<li>Payment status tracking</li>
								<li>Automated payment releases</li>
							</ul>
						</div>
					</div>

					<div className="flex justify-center space-x-4">
						<Button asChild>
							<Link href="/products">View Products</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="/docs">Documentation</Link>
						</Button>
					</div>
				</div>
			</main>
			<WhyChoose />
		</>
	)
}

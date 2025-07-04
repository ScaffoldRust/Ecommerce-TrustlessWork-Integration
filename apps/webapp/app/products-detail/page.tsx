import { EscrowProtection, Milestone } from '../../components/products-detail/escrow-protection';

const milestones: Milestone[] = [
  { id: 1, title: 'Order confirmation', percentage: 20, amount: 59.99 },
  { id: 2, title: 'Item shipped', percentage: 30, amount: 89.99 },
  { id: 3, title: 'Item delivered', percentage: 50, amount: 149.99 },
];

export default function ProductDetailPage() {
  return (
    <main className="py-8 px-2 min-h-screen bg-gray-50">
      <EscrowProtection
        total={299.99}
        escrowFee={2.99}
        milestones={milestones}
      />
    </main>
  );
} 
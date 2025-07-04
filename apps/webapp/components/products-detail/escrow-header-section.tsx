import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import type { Milestone } from './escrow-protection';

function EscrowHeader() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <ShieldCheck className="text-blue-600" size={24} />
      <h2 className="text-2xl font-semibold">Escrow Protection</h2>
    </div>
  );
}

function SecurePaymentInfo() {
  return (
    <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3 mb-6">
      <Info className="text-blue-500" size={20} />
      <span className="text-blue-700 text-sm font-medium">Secure Payment</span>
      <span className="text-blue-500 text-sm ml-2">
        Your payment is held securely until all milestones are completed.
      </span>
    </div>
  );
}

function MilestoneList({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="mb-4">
      <h3 className="font-medium mb-2">Payment Milestones</h3>
      <ul className="space-y-3">
        {milestones.map((m) => (
          <li key={m.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                {m.id}
              </span>
              <div>
                <div className="font-medium">{m.title}</div>
                <div className="text-xs text-gray-500">{m.percentage}% of total</div>
              </div>
            </div>
            <div className="font-semibold text-gray-700">${m.amount.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EscrowHeaderSection({ milestones }: { milestones: Milestone[] }) {
  return (
    <>
      <EscrowHeader />
      <SecurePaymentInfo />
      <MilestoneList milestones={milestones} />
    </>
  );
} 
"use client";

import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ShieldCheck, Info, Wallet, CheckCircle2 } from 'lucide-react';

export type Milestone = {
  id: number;
  title: string;
  percentage: number;
  amount: number;
};

export type EscrowProps = {
  total: number;
  escrowFee: number;
  milestones: Milestone[];
};

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

function EscrowForm({ total, escrowFee }: { total: number; escrowFee: number }) {
  const [wallet, setWallet] = useState('');
  const [instructions, setInstructions] = useState('');
  const [walletError, setWalletError] = useState('');

  const handleWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWallet(value);
    if (value && !/^0x[a-fA-F0-9]{0,40}$/.test(value)) {
      setWalletError('Enter a valid wallet address (0x...)');
    } else {
      setWalletError('');
    }
  };

  const handleCreateEscrow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet || walletError) {
      setWalletError('Please enter a valid wallet address.');
      return;
    }
    alert('Escrow contract creation is not implemented yet.');
  };

  return (
    <form onSubmit={handleCreateEscrow} className="space-y-4">
      <div>
        <label htmlFor="wallet" className="block text-sm font-medium mb-1">
          Your Wallet Address
        </label>
        <div className="relative">
          <input
            id="wallet"
            type="text"
            value={wallet}
            onChange={handleWalletChange}
            placeholder="0x..."
            className={`w-full rounded-md border px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${walletError ? 'border-red-500' : 'border-gray-300'}`}
            autoComplete="off"
          />
          <Wallet className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>
        {walletError && <p className="text-xs text-red-500 mt-1">{walletError}</p>}
      </div>
      <div>
        <label htmlFor="instructions" className="block text-sm font-medium mb-1">
          Special Instructions (Optional)
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Any special delivery instructions or requirements..."
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[60px]"
        />
      </div>
      {/* Breakdown */}
      <div className="bg-gray-50 rounded-lg p-4 mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span>Product Price</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span>Escrow Fee</span>
          <span>${escrowFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-base mt-2">
          <span>Total</span>
          <span>${(total + escrowFee).toFixed(2)}</span>
        </div>
      </div>
      <Button type="submit" className="w-full flex items-center gap-2" disabled={!!walletError || !wallet}>
        <ShieldCheck size={18} />
        Create Escrow Contract
      </Button>
    </form>
  );
}

function PoweredByTrustlessWork() {
  return (
    <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3 mt-2">
      <CheckCircle2 className="text-green-500" size={20} />
      <div>
        <span className="font-medium text-green-700">Powered by Trustless Work</span>
        <div className="text-xs text-green-700">Blockchain-powered escrow with zero custodians</div>
      </div>
    </div>
  );
}

export function EscrowProtection({ total, escrowFee, milestones }: EscrowProps) {
  return (
    <section className="max-w-xl mx-auto w-full">
      <Card className="p-6 mb-6">
        <EscrowHeader />
        <SecurePaymentInfo />
        <MilestoneList milestones={milestones} />
        <div className="flex justify-end mt-2">
          <span className="font-bold text-lg">Total Amount</span>
          <span className="font-bold text-lg ml-4">${total.toFixed(2)}</span>
        </div>
      </Card>
      <Card className="p-6 mb-4">
        <h3 className="text-xl font-semibold mb-4">Purchase with Escrow</h3>
        <EscrowForm total={total} escrowFee={escrowFee} />
        <p className="text-xs text-gray-500 mt-3 text-center">
          By proceeding, you agree to our Terms of Service and Escrow Agreement.
        </p>
      </Card>
      <PoweredByTrustlessWork />
    </section>
  );
} 
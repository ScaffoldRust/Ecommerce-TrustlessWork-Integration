import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ShieldCheck, Wallet } from 'lucide-react';

export function EscrowFormSection({ total, escrowFee }: { total: number; escrowFee: number }) {
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
"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ShieldCheck, Wallet } from "lucide-react";

export type Milestone = {
  id: number;
  title: string;
  percentage: number;
  amount: number;
};

export function EscrowProtection() {
  // Milestone and payment data now internal
  const milestones: Milestone[] = [
    { id: 1, title: 'Order confirmation', percentage: 20, amount: 59.99 },
    { id: 2, title: 'Item shipped', percentage: 30, amount: 89.99 },
    { id: 3, title: 'Item delivered', percentage: 50, amount: 149.99 },
  ];
  const total = 299.99;
  const escrowFee = 2.99;

  // Form state
  const [wallet, setWallet] = useState("");
  const [instructions, setInstructions] = useState("");
  const [walletError, setWalletError] = useState("");

  const handleWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWallet(value);
    if (value && !/^0x[a-fA-F0-9]{0,40}$/.test(value)) {
      setWalletError("Enter a valid wallet address (0x...)");
    } else {
      setWalletError("");
    }
  };

  const handleCreateEscrow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet || walletError) {
      setWalletError("Please enter a valid wallet address.");
      return;
    }
    alert("Escrow contract creation is not implemented yet.");
  };

  return (
    <section className="max-w-xl mx-auto w-full">
      <Card className="p-6 md:p-8 mb-6 border border-gray-200 rounded-2xl shadow-none">
        <div className="flex items-center justify-center gap-2 mb-6 mt-1">
          <ShieldCheck className="text-blue-600" size={24} />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Escrow Protection
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 rounded-xl p-4 mb-8">
          <div className="h-[40px]">
            <ShieldCheck className="text-blue-600" size={20} />
          </div>
          <div>
            <span className="text-blue-700 text-base font-medium block">
              Secure Payment
            </span>
            <span className="text-blue-500 text-sm block mt-0.5">
              Your payment is held securely until all milestones are completed.
            </span>
          </div>
        </div>
        <h3 className="font-medium mb-3 text-lg">Payment Milestones</h3>
        <ul className="space-y-4 mb-6">
          {milestones.map((m) => (
            <li
              key={m.id}
              className="flex items-center justify-between rounded-xl px-6 py-4 border-2 border-gray-100"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                  {m.id}
                </span>
                <div>
                  <div className="font-medium text-base">{m.title}</div>
                  <div className="text-xs text-gray-500">
                    {m.percentage}% of total
                  </div>
                </div>
              </div>
              <div className="font-semibold text-gray-700 text-base">
                ${m.amount.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
        <hr className="border-t border-gray-200 mb-4" />
        <div className="flex justify-between items-center mt-2">
        <span className="font-semibold text-base">Total Amount</span>
        <span className="font-bold text-xl tracking-tight">
            ${total.toFixed(2)}
          </span>
        </div>
      </Card>
      <Card className="p-6 md:p-8 mb-6 border border-gray-200 rounded-2xl shadow-none">
        <form onSubmit={handleCreateEscrow} className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Purchase With Escrow
          </h2>
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
                className={`w-full rounded-md border px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${walletError ? "border-red-500" : "border-gray-300"}`}
                autoComplete="off"
              />
              <Wallet
                className="absolute right-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            {walletError && (
              <p className="text-xs text-red-500 mt-1">{walletError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="instructions"
              className="block text-sm font-medium mb-1"
            >
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
            <hr className="border-t border-gray-200 mb-4" />
            <div className="flex justify-between font-semibold text-base mt-2">
              <span>Total</span>
              <span>${(total + escrowFee).toFixed(2)}</span>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full flex items-center gap-2 bg-blue-800 text-white"
            disabled={!!walletError || !wallet}
          >
            <ShieldCheck size={18} />
            Create Escrow Contract
          </Button>
        </form>
        <br />
        <p className="text-[12px] text-gray-500 text-center">
          By Proceeding, You agree to the Terms of Service and Escrow Management .
        </p>
      </Card>
    </section>
  );
}

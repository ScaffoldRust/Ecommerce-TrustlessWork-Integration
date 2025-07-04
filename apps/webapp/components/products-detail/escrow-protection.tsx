"use client";

import React from 'react';
import { Card } from '../ui/card';
import { EscrowHeaderSection } from './escrow-header-section';
import { EscrowFormSection } from './escrow-form-section';
import { PoweredByTrustlessWork } from './powered-by-trustlesswork';

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

export function EscrowProtection({ total, escrowFee, milestones }: EscrowProps) {
  return (
    <section className="max-w-xl mx-auto w-full">
      <Card className="p-6 mb-6">
        <EscrowHeaderSection milestones={milestones} />
        <div className="flex justify-end mt-2">
          <span className="font-bold text-lg">Total Amount</span>
          <span className="font-bold text-lg ml-4">${total.toFixed(2)}</span>
        </div>
      </Card>
      <Card className="p-6 mb-4">
        <h3 className="text-xl font-semibold mb-4">Purchase with Escrow</h3>
        <EscrowFormSection total={total} escrowFee={escrowFee} />
        <p className="text-xs text-gray-500 mt-3 text-center">
          By proceeding, you agree to our Terms of Service and Escrow Agreement.
        </p>
      </Card>
      <PoweredByTrustlessWork />
    </section>
  );
} 
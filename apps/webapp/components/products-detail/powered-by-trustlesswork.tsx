import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function PoweredByTrustlessWork() {
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
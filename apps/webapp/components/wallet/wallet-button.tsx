'use client';
import { useWalletConnect, useWalletAddress } from '@/hooks/wallet';
import { Button } from '@/components/ui/button';

export const WalletButton = () => {
  const { connect } = useWalletConnect();
  const { address } = useWalletAddress();

  return (
    <div className="mt-4">
      {address ? (
        <p className="text-sm text-gray-600">Connected: {address.slice(0, 6)}...{address.slice(-6)}</p>
      ) : (
        <Button onClick={connect} className="bg-primary text-primary-foreground">
          Connect Wallet
        </Button>
      )}
    </div>
  );
};
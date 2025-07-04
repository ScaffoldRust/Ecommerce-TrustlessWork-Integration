import { useContext } from 'react';
import { WalletContext } from '@/context/wallet.context';

export const useWalletAddress = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWalletAddress must be used within WalletProvider');
  return { address: context.address };
};
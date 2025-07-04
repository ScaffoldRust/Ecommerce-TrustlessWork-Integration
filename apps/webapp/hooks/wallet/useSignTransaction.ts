import { useContext } from 'react';
import { WalletContext } from '@/context/wallet.context';

export const useSignTransaction = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useSignTransaction must be used within WalletProvider');
  const sign = async (xdr: string) => await context.signTransaction(xdr);
  return { sign };
};
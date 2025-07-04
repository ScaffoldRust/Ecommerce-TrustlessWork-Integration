import { useContext } from 'react';
import { WalletContext } from '@/context/wallet.context';
import { WalletOption } from '@creit.tech/stellar-wallets-kit';

export const useWalletConnect = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWalletConnect must be used within WalletProvider');
  const connect = async (onWalletSelected?: (option: WalletOption) => Promise<void>) =>
    await context.connectWallet(onWalletSelected);
  return { connect };
};
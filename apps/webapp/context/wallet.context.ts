// wallet logic handling
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { walletKit } from '@/lib/stellar/kit';
import { WalletOption } from '@creit.tech/stellar-wallets-kit';

interface WalletContextType {
  address: string | null;
  connectWallet: (onWalletSelected?: (option: WalletOption) => Promise<void>) => Promise<void>;
  signTransaction: (xdr: string) => Promise<string>;
  disconnectWallet: () => void;
}

export const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        const { address } = await walletKit.getAddress();
        setAddress(address);
      } catch (error) {
        console.error('Wallet initialization failed:', error);
      }
    };
    initialize();
  }, []);

  const connectWallet = async (onWalletSelected?: (option: WalletOption) => Promise<void>) => {
    try {
      await walletKit.openModal({
        onWalletSelected: async (option) => {
          await walletKit.setWallet(option.id);
          const { address } = await walletKit.getAddress();
          setAddress(address);
          if (onWalletSelected) await onWalletSelected(option);
        },
        modalTitle: 'Select Stellar Wallet',
      });
    } catch (error) {
      console.error('Wallet connection failed:', error);
      throw error;
    }
  };

  const signTransaction = async (xdr: string) => {
    try {
      const { signedTxXdr } = await walletKit.signTransaction(xdr, {
        address: address!,
        networkPassphrase: WalletNetwork.TESTNET,
      });
      return signedTxXdr;
    } catch (error) {
      console.error('Transaction signing failed:', error);
      throw error;
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    walletKit.setWallet(null);
  };

  return (
    <WalletContext.Provider value={{ address, connectWallet, signTransaction, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
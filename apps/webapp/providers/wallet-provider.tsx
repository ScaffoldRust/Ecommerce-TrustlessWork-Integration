'use client';

import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { kit } from '@/constants/wallet-kit';
import { useWalletStore } from '@/store/wallet-store';

interface WalletContextType {
  isInitialized: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const { isConnected } = useWalletStore();

  useEffect(() => {
    // The wallet kit is initialized as a singleton
    // Zustand persistence will handle the connection state
    // No need to try to reconnect automatically since the kit handles this
    console.log('Wallet provider initialized, connection state:', isConnected);
  }, [isConnected]);

  const contextValue: WalletContextType = {
    isInitialized: true,
  };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
} 
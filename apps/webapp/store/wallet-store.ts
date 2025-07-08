import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WalletState {
  address: string | null;
  name: string | null;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface WalletActions {
  connectWalletStore: (address: string, name: string) => void;
  disconnectWalletStore: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export type WalletStore = WalletState & WalletActions;

export const useWalletStore = create<WalletStore>()(
  persist(
    (set, get) => ({
      // Initial state
      address: null,
      name: null,
      isConnected: false,
      isLoading: false,
      error: null,

      // Actions
      connectWalletStore: (address: string, name: string) => {
        set({
          address,
          name,
          isConnected: true,
          isLoading: false,
          error: null,
        });
      },

      disconnectWalletStore: () => {
        set({
          address: null,
          name: null,
          isConnected: false,
          isLoading: false,
          error: null,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      setError: (error: string | null) => {
        set({ error, isLoading: false });
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'wallet-storage',
      partialize: (state) => ({
        address: state.address,
        name: state.name,
        isConnected: state.isConnected,
      }),
    }
  )
); 
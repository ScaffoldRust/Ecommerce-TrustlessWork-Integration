import { ISupportedWallet } from "@creit.tech/stellar-wallets-kit";
import { kit } from "../../constants/wallet-kit";
import { useWalletStore } from "@/store/wallet-store";

export const useWallet = () => {
  const { 
    connectWalletStore, 
    disconnectWalletStore, 
    setLoading, 
    setError, 
    clearError,
    address,
    name,
    isConnected,
    isLoading,
    error,
  } = useWalletStore();

  const connectWallet = async () => {
    try {
      setLoading(true);
      clearError();
      
      await kit.openModal({
        modalTitle: "Connect to your favorite wallet",
        onWalletSelected: async (option: ISupportedWallet) => {
          try {
            kit.setWallet(option.id);
            const { address } = await kit.getAddress();
            const { name } = option;

            connectWalletStore(address, name);
          } catch (error) {
            console.error("Error selecting wallet:", error);
            setError("Failed to connect selected wallet");
            throw error;
          }
        },
      });
    } catch (error) {
      console.error("Error opening wallet modal:", error);
      setError("Failed to open wallet selection");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      setLoading(true);
      clearError();
      
      await kit.disconnect();
      disconnectWalletStore();
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      setError("Failed to disconnect wallet");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectWallet();
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return {
    // Wallet actions
    connectWallet,
    disconnectWallet,
    handleConnect,
    handleDisconnect,
    
    // Wallet state
    address,
    name,
    isConnected,
    isLoading,
    error,
    
    // Utility actions
    setError,
    clearError,
  };
};
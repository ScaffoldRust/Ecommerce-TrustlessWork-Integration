'use client'

import { Button } from '@/components/ui/button'
import { useWallet } from '@/hooks/wallet/wallet.hook'
import { cn } from '@/lib/utils'

interface WalletConnectProps {
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

export function WalletConnect({ className, variant = 'default', size = 'default' }: WalletConnectProps) {
  const {
    address,
    name,
    isConnected,
    isLoading,
    error,
    handleConnect,
    handleDisconnect,
    clearError,
  } = useWallet()

  const formatAddress = (address: string) => {
    if (address.length <= 12) return address
    return `${address.slice(0, 6)}...${address.slice(-6)}`
  }

  if (isConnected && address) {
    return (
      <div className={cn('flex flex-col items-end gap-2', className)}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex flex-col items-end">
            {name && <span className="font-medium text-foreground">{name}</span>}
            <span className="text-xs">{formatAddress(address)}</span>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <Button
          onClick={handleDisconnect}
          disabled={isLoading}
          variant="outline"
          size={size}
          className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          {isLoading ? 'Disconnecting...' : 'Disconnect'}
        </Button>
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col items-end gap-2', className)}>
      {error && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <span>{error}</span>
          <button
            onClick={clearError}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Clear error"
          >
            ×
          </button>
        </div>
      )}
      <Button
        onClick={handleConnect}
        disabled={isLoading}
        variant={variant}
        size={size}
        className={cn(
          'min-w-[120px]',
          isLoading && 'cursor-not-allowed',
        )}
      >
        {isLoading ? 'Connecting...' : 'Connect Wallet'}
      </Button>
    </div>
  )
} 
// Stellar kit wallets
import {
  StellarWalletsKit,
  WalletNetwork,
  xBullModule,
  FreighterModule,
  AlbedoModule,
  RabetModule,
  WalletConnectModule,
} from '@creit.tech/stellar-wallets-kit';

const walletKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  modules: [
    new xBullModule(),
    new FreighterModule(),
    new AlbedoModule(),
    new RabetModule(),
    new WalletConnectModule({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
      metadata: {
        name: 'E-commerce TrustlessWork',
        description: 'Secure e-commerce with TrustlessWork',
        url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        icons: [process.env.NEXT_PUBLIC_APP_ICON || 'https://example.com/icon.png'],
      },
    }),
  ],
});

export { walletKit };
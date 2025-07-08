import {
    StellarWalletsKit,
    WalletNetwork,
    FREIGHTER_ID,
    FreighterModule,
    HotWalletModule,
    LobstrModule,
    xBullModule,
} from "@creit.tech/stellar-wallets-kit";
  
export const kit: StellarWalletsKit = new StellarWalletsKit({
    network: WalletNetwork.TESTNET,
    selectedWalletId: FREIGHTER_ID,
    modules: [new FreighterModule(), new HotWalletModule(), new LobstrModule(), new xBullModule()],
});
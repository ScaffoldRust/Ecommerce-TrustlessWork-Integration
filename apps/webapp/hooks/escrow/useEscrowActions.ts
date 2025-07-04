import { useWalletAddress, useSignTransaction } from '@/hooks/wallet';
import { TransactionBuilder, Operation, Networks, Server, Asset } from 'stellar-sdk';

export const useEscrowActions = () => {
  const { address } = useWalletAddress();
  const { sign } = useSignTransaction();
  const horizonServer = new Server('https://horizon-testnet.stellar.org');

  const markMilestone = async (escrowAccount: string, assetCode: string) => {
    if (!address) throw new Error('No wallet connected');
    const account = await horizonServer.loadAccount(address);
    const asset = new Asset(assetCode, escrowAccount);
    const transaction = new TransactionBuilder(account, {
      fee: '10000',
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(Operation.changeTrust({ asset, limit: '1000' }))
      .setTimeout(30)
      .build();
    const xdr = transaction.toXDR();
    const signedXdr = await sign(xdr);
    const signedTx = TransactionBuilder.fromXDR(signedXdr, Networks.TESTNET);
    return await horizonServer.submitTransaction(signedTx);
  };

  const releaseFunds = async (escrowAccount: string, amount: string, assetCode: string) => {
    if (!address) throw new Error('No wallet connected');
    const account = await horizonServer.loadAccount(address);
    const asset = new Asset(assetCode, escrowAccount);
    const transaction = new TransactionBuilder(account, {
      fee: '10000',
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(Operation.payment({ destination: escrowAccount, asset, amount }))
      .setTimeout(30)
      .build();
    const xdr = transaction.toXDR();
    const signedXdr = await sign(xdr);
    const signedTx = TransactionBuilder.fromXDR(signedXdr, Networks.TESTNET);
    return await horizonServer.submitTransaction(signedTx);
  };

  return { markMilestone, releaseFunds };
};
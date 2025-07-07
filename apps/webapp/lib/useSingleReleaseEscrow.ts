import {
  useInitializeEscrow,
  useFundEscrow,
  useReleaseFunds,
  useStartDispute,
  useResolveDispute,
} from '@trustless-work/escrow/hooks';

export function useSingleReleaseEscrow() {
  const { deployEscrow } = useInitializeEscrow();
  const { fundEscrow } = useFundEscrow();
  const { releaseFunds } = useReleaseFunds();
  const { startDispute } = useStartDispute();
  const { resolveDispute } = useResolveDispute();

  // Deploy a single-release escrow
  const deploySingleReleaseEscrow = async (payload: any) => {
    return deployEscrow(payload, 'single-release');
  };

  // Fund the escrow
  const fundSingleReleaseEscrow = async (payload: any) => {
    return fundEscrow(payload, 'single-release');
  };

  // Release all funds
  const releaseSingleFunds = async (payload: any) => {
    return releaseFunds(payload, 'single-release');
  };

  // Raise a dispute
  const raiseDispute = async (payload: any) => {
    return startDispute(payload, 'single-release');
  };

  // Resolve a dispute
  const resolveDisputeAction = async (payload: any) => {
    return resolveDispute(payload, 'single-release');
  };

  return {
    deploySingleReleaseEscrow,
    fundSingleReleaseEscrow,
    releaseSingleFunds,
    raiseDispute,
    resolveDisputeAction,
  };
}

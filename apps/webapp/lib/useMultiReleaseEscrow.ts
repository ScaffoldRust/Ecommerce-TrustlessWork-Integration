import {
  useInitializeEscrow,
  useFundEscrow,
  useReleaseFunds,
  useStartDispute,
  useResolveDispute,
  useChangeMilestoneStatus,
  useApproveMilestone,
} from '@trustless-work/escrow/hooks';

export function useMultiReleaseEscrow() {
  const { deployEscrow } = useInitializeEscrow();
  const { fundEscrow } = useFundEscrow();
  const { releaseFunds } = useReleaseFunds();
  const { startDispute } = useStartDispute();
  const { resolveDispute } = useResolveDispute();
  const { changeMilestoneStatus } = useChangeMilestoneStatus();
  const { approveMilestone } = useApproveMilestone();

  // Deploy a multi-release escrow
  const deployMultiReleaseEscrow = async (payload: any) => {
    return deployEscrow(payload, 'multi-release');
  };

  // Fund the escrow
  const fundMultiReleaseEscrow = async (payload: any) => {
    return fundEscrow(payload, 'multi-release');
  };

  // Release milestone funds
  const releaseMilestoneFunds = async (payload: any) => {
    return releaseFunds(payload, 'multi-release');
  };

  // Mark milestone complete
  const markMilestoneComplete = async (payload: any) => {
    return changeMilestoneStatus(payload, 'multi-release');
  };

  // Approve milestone
  const approveMilestoneAction = async (payload: any) => {
    return approveMilestone(payload, 'multi-release');
  };

  // Raise a dispute
  const raiseMilestoneDispute = async (payload: any) => {
    return startDispute(payload, 'multi-release');
  };

  // Resolve a dispute
  const resolveMilestoneDispute = async (payload: any) => {
    return resolveDispute(payload, 'multi-release');
  };

  return {
    deployMultiReleaseEscrow,
    fundMultiReleaseEscrow,
    releaseMilestoneFunds,
    markMilestoneComplete,
    approveMilestoneAction,
    raiseMilestoneDispute,
    resolveMilestoneDispute,
  };
}

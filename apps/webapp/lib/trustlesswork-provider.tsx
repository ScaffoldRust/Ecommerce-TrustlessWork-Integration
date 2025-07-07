
import { TrustlessWorkConfig } from '@trustless-work/escrow';

export function TrustlessWorkEscrowProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_TRUSTLESSWORK_API_KEY;
  if (!apiKey) {
    throw new Error('TrustlessWork API key is missing.');
  }
  // Use dev or mainnet as needed
  return (
    <TrustlessWorkConfig apiKey={apiKey} baseURL="https://dev.api.trustlesswork.com">
      {children}
    </TrustlessWorkConfig>
  );
}

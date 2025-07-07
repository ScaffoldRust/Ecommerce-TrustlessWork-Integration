// Dummy data for escrow and milestones for UI testing
export const dummyEscrows = [
  {
    id: 'escrow1',
    type: 'single-release',
    status: 'pending',
    title: 'Logo Design',
    amount: 100,
    milestones: [
      { id: 'm1', description: 'Initial concept', status: 'pending' }
    ],
    roles: {
      approver: '0x123',
      serviceProvider: '0x456',
      releaseSigner: '0x789',
      disputeResolver: '0xabc',
      receiver: '0xdef',
      platformAddress: '0x000',
    }
  },
  {
    id: 'escrow2',
    type: 'multi-release',
    status: 'funded',
    title: 'Website Development',
    amount: 1000,
    milestones: [
      { id: 'm1', description: 'Frontend', status: 'approved' },
      { id: 'm2', description: 'Backend', status: 'pending' },
      { id: 'm3', description: 'Deployment', status: 'pending' }
    ],
    roles: {
      approver: '0x123',
      serviceProvider: '0x456',
      releaseSigner: '0x789',
      disputeResolver: '0xabc',
      receiver: '0xdef',
      platformAddress: '0x000',
    }
  }
];

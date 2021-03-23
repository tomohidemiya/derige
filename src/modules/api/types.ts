export type PeerNode = {
  version: number;
  publicKey: string;
  networkGenerationHashSeed: string;
  roles: number;
  port: number;
  networkIdentifier: number;
  friendlyName: string;
  host: string;
  nodePublicKey?: string;
};

export type NetworkProperties = {
  network: {
    identifier?: string;
    nodeEqualityStrategy?: string;
    nemesisSignerPublicKey?: string;
    generationHashSeed?: string;
    epochAdjustment?: string;
  };
  chain: {
    enableVerifiableState?: boolean;
    enableVerifiableReceipts?: boolean;
    currencyMosaicId?: string;
    harvestingMosaicId?: string;
    blockGenerationTargetTime?: string;
    blockTimeSmoothingFactor?: string;
    blockFinalizationInterval?: number;
    importanceGrouping?: string;
    importanceActivityPercentage?: string;
    maxRollbackBlocks?: string;
    maxDifficultyBlocks?: string;
    defaultDynamicFeeMultiplier?: string;
    maxTransactionLifetime?: string;
    maxBlockFutureTime?: string;
    initialCurrencyAtomicUnits?: string;
    maxMosaicAtomicUnits?: string;
    totalChainImportance?: string;
    minHarvesterBalance?: string;
    maxHarvesterBalance?: string;
    minVoterBalance?: string;
    maxVotingKeysPerAccount?: string;
    minVotingKeyLifetime?: string;
    maxVotingKeyLifetime?: string;
    harvestBeneficiaryPercentage?: string;
    harvestNetworkPercentage?: string;
    harvestNetworkFeeSinkAddress?: string;
    blockPruneInterval?: string;
    maxTransactionsPerBlock?: string;
  };
  plugins: any;
};

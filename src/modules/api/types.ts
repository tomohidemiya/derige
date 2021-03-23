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

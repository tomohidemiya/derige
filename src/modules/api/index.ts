import { atom } from "jotai";
import { baseNodeUrl } from "../settings/jotai";
import { NetworkProperties, PeerNode } from "./types";

const healthCheckUrl = atom((get) => get(baseNodeUrl) + "/node/health");
const peerNodeUrl = atom((get) => get(baseNodeUrl) + "/node/peers");
const networkPropertiesUrl = atom((get) => get(baseNodeUrl) + "/network/properties");

export const healthCheckResult = atom<Response>(async (get) => {
  return await fetch(get(healthCheckUrl));
});

export const peerNodeList = atom<PeerNode[]>(async (get) => {
  return await (await fetch(get(peerNodeUrl))).json();
});

export const networkProperty = atom<NetworkProperties>(async (get) => {
  return await (await fetch(get(networkPropertiesUrl))).json();
});

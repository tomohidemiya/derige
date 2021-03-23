import { atom } from "jotai";
import { baseNodeUrl } from "../settings/jotai";

const healthCheckUrl = atom((get) => get(baseNodeUrl) + "/node/health");
export const healthCheckResult = atom<Response>(async (get) => {
  return await fetch(get(healthCheckUrl));
});

const peerNodeUrl = atom((get) => get(baseNodeUrl) + "/node/peers");
export const peerNodeList = atom<Response>(async (get) => {
  return await fetch(get(peerNodeUrl));
});

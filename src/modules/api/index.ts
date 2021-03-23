import { atom } from "jotai";
import { baseNodeUrl } from "../settings/jotai";
import { PeerNode } from "./types";

const healthCheckUrl = atom((get) => get(baseNodeUrl) + "/node/health");
const peerNodeUrl = atom((get) => get(baseNodeUrl) + "/node/peers");

export const healthCheckResult = atom<Response>(async (get) => {
  return await fetch(get(healthCheckUrl));
});

export const peerNodeList = atom<PeerNode[]>(async (get) => {
  return await (await fetch(get(peerNodeUrl))).json();
});

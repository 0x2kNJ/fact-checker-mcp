import { withPrismPay } from "@prism/mcp";
import { walletClient, publicClient } from "./lib/viem";

const tokenId = 11n;

export const fetchUrl = withPrismPay(
  "fetch_url",
  async ({ url }) => {
    /* your existing tool logic */
  },
  {
    tokenId,
    payer: walletClient,
    publicClient,
    legs: [
    { recipient: "0xFabb0640acbF0f58A786539c84Cd1cd123180A01", bps: 100n },
    { recipient: "0x6d726306459BbBD7B1e749931a05f6De241f3e8e", bps: 9900n }
    ],
  },
);
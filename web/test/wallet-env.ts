import { Keypair } from "@solana/web3.js";

// Test-only recipients. Production has no fallback addresses.
process.env.PUMP_PLATFORM_WALLET = Keypair.generate().publicKey.toBase58();
process.env.PUMP_AGENT_REWARDS_WALLET = Keypair.generate().publicKey.toBase58();
process.env.NEXT_PUBLIC_AGP_MINT = Keypair.generate().publicKey.toBase58();
process.env.NEXT_PUBLIC_SITE_URL = "https://agentic-games.example";

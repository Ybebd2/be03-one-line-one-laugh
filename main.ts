// One Line, One Laugh — the sponsored bounty for bounty-entrants-03.
//
// Sponsored bounty: "One Line, One Laugh"
// (u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
// Agents write a single funny line; a judge model picks the funniest
// in blind pairwise rounds. $2 over 10 places, free entry.
//
// This program prints the sponsored bounty's details and the
// bounty-entrants-03 entry it backs.

import { readFileSync } from "node:fs";

const bounty = JSON.parse(readFileSync(new URL("./BOUNTY.json", import.meta.url), "utf8"));

console.log("bounty-entrants-03 entry");
console.log("sponsored bounty:", bounty.sponsored_bounty.title);
console.log("slug:", bounty.sponsored_bounty.slug);
console.log("prize pool: $" + bounty.sponsored_bounty.prize_pool_usd + " over " + bounty.sponsored_bounty.places_paid + " places, free entry");

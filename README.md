
# Everyday Things, Two Lines, Longer Run

[![make.fun · u-suga-everyday-things-two-lines-longer-run-f8734479](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/gibalers-rgb/u-suga-everyday-things-two-lines-longer-run-f8734479/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/gibalers-rgb/u-suga-everyday-things-two-lines-longer-run-f8734479/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)

Entry for the [make.fun bounty "Everyday Things, Two Lines, Longer Run"](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479) ($2, winner takes all, judged pairwise by an AI judge on the concreteness of the analogy and the honesty of its second line).

`main.ts` (Node 22, stdlib only, deterministic, no network) writes one
two-line explanation of a traffic jam to `/output/entry.txt`:

> A traffic jam is a parking lot that forgot it was a road.
> It maps the cars sitting still bumper to bumper, but it leaves out that every driver still wants to move and that nobody meant to park there.

Line one is a single vivid sentence built on one concrete, surprising
analogy a 10-year-old can picture: a parking lot that forgot it was a road.
Line two is honest and specific about the mapping — it says what the analogy
covers (cars sitting still, bumper to bumper) and what it leaves out (every
driver still wants to move, and nobody meant to park there). The program
validates the entry against the gate (UTF-8 text, 1–400 characters, exactly
two lines, each one sentence, line two naming what it maps and what it
leaves out) before writing it.

Run: `node main.ts`

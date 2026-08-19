import { describe, expect, test } from "bun:test"
import { bundledGrammars } from "../script/bundled-grammars"

describe("bundled tree-sitter grammars", () => {
  test("embeds every grammar under unique basenames", () => {
    const basenames = Object.values(bundledGrammars).flatMap((g) => [g.wasm.file, g.highlights.file])
    expect(basenames.length).toBeGreaterThan(0)
    expect(new Set(basenames).size).toBe(basenames.length)
  })

  test("pins a sha256 for every asset", () => {
    for (const grammar of Object.values(bundledGrammars)) {
      expect(grammar.wasm.sha256).toMatch(/^[a-f0-9]{64}$/)
      expect(grammar.highlights.sha256).toMatch(/^[a-f0-9]{64}$/)
    }
  })
})

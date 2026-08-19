// Committed stub for bundled tree-sitter grammars. `packages/opencode/script/build.ts`
// regenerates this file in place with `import { type: "file" }` paths for each bundled
// grammar, compiles, then restores this stub via try/finally so `bun typecheck` and
// `bun dev` work without generated files. Consumers fall back to remote URLs when an entry
// is absent.
export default {} as Record<string, { wasm: string; highlights: string }>

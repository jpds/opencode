// Bundled tree-sitter grammars for offline syntax highlighting.
//
// These assets are NOT committed to git. At build time `build.ts` prefers files provided
// by the Nix build (via OPENTUI_BUNDLED_GRAMMARS_DIR) and otherwise fetches them from the
// pinned URLs below. The sha256 is verified in both cases so the build is reproducible.
//
// Add a grammar here to opt it into bundling; `build.ts` embeds it via
// `import { type: "file" }` and `parsers-config.ts` reads the generated paths (falling
// back to the URL in dev).
export interface BundledGrammarAsset {
  url: string
  sha256: string
  /** basename used when embedding into $bunfs and when Nix provides the file */
  file: string
}

export interface BundledGrammar {
  wasm: BundledGrammarAsset
  highlights: BundledGrammarAsset
}

export const bundledGrammars: Record<string, BundledGrammar> = {
  ada: {
    wasm: {
      url: "https://unpkg.com/tree-sitter-wasm@1.1.4/out/ada/tree-sitter-ada.wasm",
      sha256: "dc3c9d3b68284464739b0a4dea25ea6cee78df8d2cbe7ffe5bc4a48e92353e3a",
      file: "ada-tree-sitter.wasm",
    },
    highlights: {
      url: "https://unpkg.com/tree-sitter-wasm@1.1.4/out/ada/highlights.scm",
      sha256: "30a3f0d02112d2a534cf5e9e6685f84d995b438d9d3a2fdeee827effc0109e4d",
      file: "ada-highlights.scm",
    },
  },
}

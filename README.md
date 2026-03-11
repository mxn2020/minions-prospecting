![CI](https://github.com/mxn2020/minions-prospecting-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-prospecting

**Web search configs, prospect discovery rules, and lead scoring criteria**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-prospecting/sdk minions-sdk

# Python
pip install minions-prospecting

# CLI (global)
npm install -g @minions-prospecting/cli
```

---

## CLI

```bash
# Show help
prospecting --help
```

---

## Python SDK

```python
from minions_prospecting import create_client

client = create_client()
```

---

## Project Structure

```
minions-prospecting/
  packages/
    core/           # TypeScript core library (@minions-prospecting/sdk on npm)
    python/         # Python SDK (minions-prospecting on PyPI)
    cli/            # CLI tool (@minions-prospecting/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [prospecting.minions.help](https://prospecting.minions.help)
- Blog: [prospecting.minions.blog](https://prospecting.minions.blog)
- App: [prospecting.minions.wtf](https://prospecting.minions.wtf)

---

## License

[MIT](LICENSE)

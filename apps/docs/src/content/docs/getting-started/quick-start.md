---
title: Quick Start
description: Get up and running with Minions Prospecting in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-prospecting/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_prospecting import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
prospecting info
```

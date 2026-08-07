#!/usr/bin/env node
// Bumps the version in package.json by one each commit, using a single-dot
// MAJOR.MINOR format (e.g. 1.0 -> 1.1 -> 1.2 ...). Run automatically by the
// pre-commit hook (.githooks/pre-commit).
//
// Pass `major` to roll the major and reset the minor to 0 (e.g. 1.7 -> 2.0):
//   node scripts/bump-version.mjs major

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const kind = process.argv[2] ?? 'minor';
const pkgPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'package.json');

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
// Read the first two numeric segments; ignore anything after (e.g. an old patch).
const [major = 1, minor = 0] = String(pkg.version ?? '1.0').split('.').map((n) => Number(n) || 0);

const next = kind === 'major' ? `${major + 1}.0` : `${major}.${minor + 1}`;

pkg.version = next;
// Preserve the file's 2-space indentation and trailing newline.
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log(`version -> ${next}`);

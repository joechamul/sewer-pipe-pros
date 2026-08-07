#!/usr/bin/env node
// Bumps the patch version in package.json (e.g. 1.0.0 -> 1.0.1).
// Run automatically by the pre-commit hook (.githooks/pre-commit).
//
// To bump a different part, pass an argument: `node scripts/bump-version.mjs minor`
// (accepts: major | minor | patch — defaults to patch).

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const kind = process.argv[2] ?? 'patch';
const pkgPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'package.json');

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const [major, minor, patch] = String(pkg.version ?? '0.0.0').split('.').map((n) => Number(n) || 0);

let next;
if (kind === 'major') next = `${major + 1}.0.0`;
else if (kind === 'minor') next = `${major}.${minor + 1}.0`;
else next = `${major}.${minor}.${patch + 1}`;

pkg.version = next;
// Preserve the file's 2-space indentation and trailing newline.
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log(`version -> ${next}`);

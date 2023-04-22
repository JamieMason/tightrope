#!/usr/bin/env bash

filepath="$1"

touch "$filepath"

echo "import { expect, it, vi } from 'vitest';

" >>"$filepath"

code "$filepath"

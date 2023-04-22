#!/usr/bin/env bash

# ==============================================================================
# 1. Add a new function
# 2. Add a new test
# 3. Open both in VS Code
#
# Usage:
# ./scripts/add-fn.sh some-kebab-case-name
# ==============================================================================

PS3='Choice: '
options=("fn" "gen" "guard" "number" "result")
select dirName in "${options[@]}"; do
  case $dirName in
  "fn")
    break
    ;;
  "gen")
    break
    ;;
  "guard")
    break
    ;;
  "number")
    break
    ;;
  "result")
    break
    ;;
  *) echo "invalid option $REPLY" ;;
  esac
done

filename="$1"

src="src/$dirName/$filename.ts"
spec="src/$dirName/$filename.spec.ts"

touch $src

echo "import { expect, it, vi } from 'vitest';

it.todo('implement $filename')
" >$spec

code $src $spec

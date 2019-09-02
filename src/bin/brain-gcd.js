#!/usr/bin/env node
import { greeting, userName } from '..';
import { rules, gcdGame } from '../gcdGame';

console.log(greeting);
console.log(rules);
userName();
gcdGame();

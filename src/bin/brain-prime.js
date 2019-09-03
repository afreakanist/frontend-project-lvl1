#!/usr/bin/env node
import { greeting, userName } from '..';
import { rules, primeGame } from '../primeGame';

console.log(greeting);
console.log(rules);
userName();
primeGame();

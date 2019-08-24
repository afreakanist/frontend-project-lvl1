#!/usr/bin/env node
import { greeting, userName } from '..';
import { rules, isEvenGame } from '../isEvenGame';

console.log(greeting);
console.log(rules);
userName();
isEvenGame();

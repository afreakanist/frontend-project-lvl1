#!/usr/bin/env node
import { greeting, userName } from '..';
import { rules, progressionGame } from '../progressionGame';

console.log(greeting);
console.log(rules);
userName();
progressionGame();

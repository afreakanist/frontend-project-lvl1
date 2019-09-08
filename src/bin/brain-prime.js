#!/usr/bin/env node
import { greeting, userName } from '..';
import { gameDescription, primeGame } from '../games/primeGame';

console.log(greeting);
console.log(gameDescription);
userName();
primeGame();

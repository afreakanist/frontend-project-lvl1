#!/usr/bin/env node
import { greeting, userName } from '..';
import { gameDescription, gcdGame } from '../games/gcdGame';

console.log(greeting);
console.log(gameDescription);
userName();
gcdGame();

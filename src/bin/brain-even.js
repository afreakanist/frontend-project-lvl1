#!/usr/bin/env node
import { greeting, userName } from '..';
import { gameDescription, isEvenGame } from '../games/isEvenGame';

console.log(greeting);
console.log(gameDescription);
userName();
isEvenGame();

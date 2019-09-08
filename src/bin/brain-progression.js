#!/usr/bin/env node
import { greeting, userName } from '..';
import { gameDescription, progressionGame } from '../games/progressionGame';

console.log(greeting);
console.log(gameDescription);
userName();
progressionGame();

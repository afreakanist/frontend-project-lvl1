#!/usr/bin/env node
import { greeting, userName } from '..';
import { gameDescription, calculatorGame } from '../games/calculatorGame';

console.log(greeting);
console.log(gameDescription);
userName();
calculatorGame();

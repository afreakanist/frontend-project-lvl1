#!/usr/bin/env node
import { greeting, userName } from '..';
import { rules, calculatorGame } from '../calculatorGame';

console.log(greeting);
console.log(rules);
userName();
calculatorGame();

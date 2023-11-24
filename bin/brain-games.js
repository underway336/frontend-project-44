#!/usr/bin/env node

import { getWelcome, userName, getGreeting } from '../src/cli.js';

getWelcome;
getGreeting(userName);
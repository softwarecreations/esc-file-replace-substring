'use strict';

import os from 'os';
import fs from 'fs';
import path from 'path';
// import fileReplaceSubstring from 'esc-file-replace-substring';
import fileReplaceSubstring from './main.mjs';

const filePath = path.join(os.tmpdir(), 'esc-file-replace-substring.txt');

const show = () => console.log('---\n' + fs.readFileSync(filePath) + '---');

// let's try stuff

fs.writeFileSync(filePath, 'This is a normal config file\nFOO=friend\nBAR=bear\n');

show();

fileReplaceSubstring(filePath, /^\s*FOO=.+/gm, 'FOO=fantastic');

show();

fileReplaceSubstring(filePath, /^\s*ZOO=.+/gm, 'ZOO=zebra', 'append');

show();

fileReplaceSubstring(filePath, /^\s*ZOO=.+/gm, 'ZOO=zzzzz', 'append');

show();

fileReplaceSubstring(filePath, 'normal', 'special');

show();

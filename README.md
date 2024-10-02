# esc-file-replace-substring
Replace (with option to append) string or RegEx in a file, if different vs old contents (SSD/flash memory friendly).

## Installation
`npm install esc-file-replace-substring`

## Use
```JavaScript
import fileReplaceSubstring from 'esc-file-replace-substring';
fileReplaceSubstring(filePath, 'normal', 'special');
```

## Example
(see test.mjs)
```JavaScript
const show = () => console.log('---\n' + fs.readFileSync(filePath) + '---');

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
```
![image](https://github.com/user-attachments/assets/637abaa3-6bb5-4e92-9d2b-73fac507bae2)

## Project goals
* SSD/flash friendly, only writes if the contents of the file will change
* No dependencies
* No nonsense
* Reliable, no radical changes will ever happen.
* Small, simple, easy to audit, yourself

If I have ideas for something different, I'll make a new package rather than make breaking changes.

## See also
* esc-file-replace-substring-between-comments
* esc-file-replace-contents
* esc-read-file-without-comments
* esc-get-data-from-json-file

## Notes
Have fun!

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-file-replace-substring

### PR's or issues
Welcome

### License
MIT

'use strict';
import colors from 'esc-colors';
import fs from 'fs';

const fileReplaceSubstring = (
  filePath,
  search,
  replace,
  ifNotFound,
  changedLogF = s => console.log(colors.magenta(s)),
  sameLogF,
) => {
	const buf = fs.readFileSync(filePath).toString();
	let newBuf = buf;
	if (buf.match(search)===null) {
		if (ifNotFound!=='append') {
      if (sameLogF) sameLogF(`${replace} not found in ${filePath} - No change.`);
      return false;
    }
		newBuf += `\n${replace}\n`;
	} else {
		newBuf = buf.replace(search, replace);
		if (newBuf===buf) {
      if (sameLogF) sameLogF(`${replace} not found in ${filePath} - No change.`);
      return false;
    }
	}
  if (changedLogF) changedLogF(`Updated ${replace} in ${filePath}`);
	fs.writeFileSync(filePath, newBuf);
	return true;
};

export default fileReplaceSubstring;

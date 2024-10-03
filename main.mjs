'use strict';
import colors from 'esc-colors';
import fs from 'fs';

export const fileReplaceSubstring = (
  filePath,
  search,
  replace,
  ifNotFound,
  changedLogF = s => console.log(colors.magenta(s)),
  notFoundLogF,
  unchangedLogF,
) => {
	const buf = fs.readFileSync(filePath).toString();
	let newBuf = buf;
	if (buf.match(search)===null) {
		if (ifNotFound!=='append') {
      if (notFoundLogF) notFoundLogF(`${replace} not found in ${filePath}`);
      return false;
    }
		newBuf += `\n${replace}\n`;
	} else {
		newBuf = buf.replace(search, replace);
		if (newBuf===buf) {
      if (unchangedLogF) unchangedLogF(`${replace} found, but ${filePath} unchanged.`);
      return false;
    }
	}
  if (changedLogF) changedLogF(`Updated ${replace} in ${filePath}`);
	fs.writeFileSync(filePath, newBuf);
	return true;
};

export default fileReplaceSubstring;

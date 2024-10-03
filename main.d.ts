declare module 'esc-file-replace-substring' {
  export const fileReplaceSubstring: (
    filePath: string,
    search: string | RegExp,
    replace: string,
    ifNotFound?: 'append',
    changedLogF?: ((msg: string) => void) | null,
    notFoundLogF?: ((msg: string) => void) | null,
    unchangedLogF?: ((msg: string) => void) | null
  ) => boolean;

  export default fileReplaceSubstring;
}

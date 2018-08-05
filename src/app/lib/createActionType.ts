export default (module: string, type: string): string =>
`${module}/${type.replace(/ /g, '_').toUpperCase()}`;

const langList = [
  'bootstrap',
  'css',
  'docker',
  'elixir',
  'javascript',
  'php',
  'react',
  'typescript',
  'unity3d',
  'vim',
  'wordpress'
];

export const options = langList.reduce((acc, cur) => {
  acc[cur] = { type: 'string '};
  return acc
}, {});
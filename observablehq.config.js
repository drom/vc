// See https://observablehq.com/framework/config for documentation.
export default {
  title: 'VCDrom',
  pages: [
    {name: 'Introduction', pages: [
      {name: "Getting started", path: "/getting-started"},
    ]},
    {name: "WaveQL", path: "/waveql"},
    {name: 'How to use?', pages: [
      {name: "Online", path: "/online"},
      {name: "VScode plugin", path: "/vscode"},
      {name: "Keys + Mouse", path: "/keys"},
    ]},
    {name: "Contributing", path: "/contributing"},
  ],
  root: 'src', // path to the source root for preview
  output: 'docs/documentation', // path to the output root for build
  search: true
};

import format from "./format.js?sha=f4335d54b5b7de2ea0cbb935d5e16e1d1185e6a40b28339bc0c3951bdad7fe38";

const fp64_2bigint = (val) => {
  const buf = new ArrayBuffer(8);
  const bufFloat = new Float64Array(buf);
  const bufBInt = new BigInt64Array(buf);
  bufFloat[0] = val;
  return bufBInt[0];
};

const fp32_2bigint = (val) => {
  const buf = new ArrayBuffer(8);
  const bufFloat = new Float32Array(buf);
  const bufUInt = new BigInt64Array(buf);
  bufFloat[0] = val;
  return bufUInt[0];
};

const rnda = 40 * (Math.random() - 0.5);

const specs = [
  {fmt: '%b',   val: 255n, len: 24},
  {fmt: '%o',   val: 255n, len: 24},
  {fmt: '%d',   val: 255n, len: 24},
  {fmt: '%h',   val: 255n, len: 24},
  {fmt: '%b',   val: 12345678n, len: 16},
  {fmt: '%o',   val: 12345678n, len: 16},
  {fmt: '%d',   val: 12345678n, len: 16},
  {fmt: '%h',   val: 12345678n, len: 16},
  {fmt: '%b',   val: fp32_2bigint(rnda), len: 32},
  {fmt: '%o',   val: fp32_2bigint(rnda), len: 32},
  {fmt: '%d',   val: fp32_2bigint(rnda), len: 32},
  {fmt: '%h',   val: fp32_2bigint(rnda), len: 32},
  {fmt: '%sb',  val: 12345678n, len: 24},
  {fmt: '%so',  val: 12345678n, len: 24},
  {fmt: '%sd',  val: 12345678n, len: 24},
  {fmt: '%sh',  val: 12345678n, len: 24},
  {fmt: '%sb',  val: 255n, len: 16},
  {fmt: '%so',  val: 255n, len: 16},
  {fmt: '%sd',  val: 255n, len: 16},
  {fmt: '%sh',  val: 255n, len: 16},
  {fmt: '%sb',  val: 12345678n, len: 25},
  {fmt: '%so',  val: 12345678n, len: 25},
  {fmt: '%sd',  val: 12345678n, len: 25},
  {fmt: '%sh',  val: 12345678n, len: 25},

  {fmt: '%b8',  val: 12345678n, len: 24},
  {fmt: '%o8',  val: 12345678n, len: 24},
  {fmt: '%d8',  val: 12345678n, len: 24},
  {fmt: '%h8',  val: 12345678n, len: 24},
  {fmt: '%h8',  val: 0x4142434445n, len: 40},

  {fmt: '%c',   val: 0x4142434445n, len: 40},

  {fmt: '%f64', val: -0x27c0aad9be68b8fbn, len: 64},
  {fmt: '%e64', val: -0x27c0aad9be68b8fbn, len: 64},
  {fmt: '%g64', val: -0x27c0aad9be68b8fbn, len: 64},
  {fmt: '%f64', val: -0x3d23edde7c882195n, len: 64},
  {fmt: '%e64', val: -0x3d23edde7c882195n, len: 64},
  {fmt: '%g64', val: -0x3d23edde7c882195n, len: 64},
  {fmt: '%f64', val: 0x3ee9e0fcaf9380fcn,  len: 64},
  {fmt: '%e64', val: 0x3ee9e0fcaf9380fcn,  len: 64},
  {fmt: '%g64', val: 0x3ee9e0fcaf9380fcn,  len: 64},
  {fmt: '%f64', val: 0x405edd2f1a9fbe77n,  len: 64},
  {fmt: '%e64', val: 0x405edd2f1a9fbe77n,  len: 64},
  {fmt: '%g64', val: 0x405edd2f1a9fbe77n,  len: 64},
  {fmt: '%f64', val: fp64_2bigint(rnda),  len: 64},
  {fmt: '%e64', val: fp64_2bigint(rnda),  len: 64},
  {fmt: '%g64', val: fp64_2bigint(rnda),  len: 64},

  {fmt: '%f32', val: 0x42f6e979n, len: 32},
  {fmt: '%e32', val: 0x42f6e979n, len: 32},
  {fmt: '%g32', val: 0x42f6e979n, len: 32},
  {fmt: '%f32', val: 0x374f07e5n, len: 32},
  {fmt: '%e32', val: 0x374f07e5n, len: 32},
  {fmt: '%g32', val: 0x374f07e5n, len: 32},
  {fmt: '%f32', val: fp32_2bigint(rnda), len: 32},
  {fmt: '%e32', val: fp32_2bigint(rnda), len: 32},
  {fmt: '%g32', val: fp32_2bigint(rnda), len: 32},


];

const getFmtTable = () => {
  const poss = [1, 2, 3, 4, 5, 6, 7, 8, 48];
  const header = [
    '', 'pos\u2192', ...poss,
    '\u2B10fmt', '\u2B10len', ...poss.map(e => '*'.repeat(e))
  ].map(e => ['div', {class: 'tab-header'}, e]);
  const rows = specs.flatMap(spec => [
    spec.fmt, spec.len,
    ...poss.map(pos => format(spec.fmt, spec.len)(spec.val, pos))
  ].map(e => ['div', {class: 'tab-cell'}, e]));

  const res = ['div', {class: 'grid grid-cols-11'}, ...header, ...rows];
  return res;
};

export function formatExamples (customNumPositions) {
  // return Inputs.table()
  // const el = document.createElement('div');
  // el.innerHTML = onml.stringify(getFmtTable());

  // return el;

  const poss = [1, 2, 3, 4, 5, 6, 7, 8, Number(customNumPositions)];
  const table = specs.map(spec => {
    const {fmt, len, val} = spec;
    const row = {fmt, len, val};
    poss.map(pos => {
      row[pos + ' '] = format(fmt, len)(val, pos);
    });
    return row;
  });
  return [
    table,
    {
      height: 560
    }
  ];

};

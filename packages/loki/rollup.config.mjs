import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupTypescript from "rollup-plugin-typescript2";
import RollupPostcss from 'rollup-plugin-postcss';
import RollUpDel from 'rollup-plugin-delete'
import autoprefixer from 'autoprefixer';
import RollupCopy from "rollup-plugin-copy";
import { readFileSync } from 'node:fs';
const Package = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

const externalPackages = [
  "react",
  "react-dom"
];

export default {
  input: Package.source,
  output: [
    {
      file: Package.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: Package.module,
      format: "es",
      sourcemap: true,
    },
  ],
  external: externalPackages,
  plugins: [
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: "tsconfig.json",
    }),
    RollupPostcss({
      plugins: [
        autoprefixer()
      ]
    }),
    RollUpDel({
      targets: 'dist/*'
    }),
    RollupCopy({
      targets: [
        {
          src: "src/style",
          dest: "dist",
        },
      ],
    })
  ],
};

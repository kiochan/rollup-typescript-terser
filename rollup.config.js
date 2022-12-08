import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import dts from "rollup-plugin-dts";

export default [{
        input: 'src/index.ts',
        output: {
            sourcemap: true,
            file: 'dest/test.js',
            format: 'es',
        },
        plugins: [typescript(), terser()],
    }, {
        input: 'src/index.ts',
        output: {
            file: 'dest/test.d.ts',
            format: 'es',
        },
        plugins: [dts()],
    }
]
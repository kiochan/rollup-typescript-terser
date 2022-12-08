import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

/*
    use @wwa/rollup-plugin-terser instead of @rollup/plugin-terser
    until this issue is resolved: https://github.com/rollup/plugins/issues/1366
*/
import { terser } from '@wwa/rollup-plugin-terser';


export default [{
        input: 'src/index.ts',
        output: {
            sourcemap: true,
            file: 'dist/index.mjs',
            format: 'es',
        },
        plugins: [typescript(), terser()],
    }, {
        input: 'src/index.ts',
        output: {
            file: 'types/index.d.ts',
            format: 'es',
        },
        plugins: [dts()],
    }
]
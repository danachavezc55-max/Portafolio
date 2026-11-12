import { defineConfig } from "vite";
import path, { resolve } from 'node:path';
import * as glob from "glob";
import handlebars from 'vite-plugin-handlebars';
import * as purge from '@fullhuman/postcss-purgecss';

import getPageContext from './src/data/index';

const __dirname = import.meta.dirname;

// Compatibilidad ESM/CJS del plugin de PurgeCSS
const purgeCSSPlugin = purge.purgeCSSPlugin ?? purge.default?.purgeCSSPlugin ?? purge.default;

// En GitHub Actions se define DEPLOY_BASE_URL (ej: /Portafolio/).
// Si no existe se usan rutas relativas, que funcionan igual en GitHub Pages.
const base_path = process.env.DEPLOY_BASE_URL || './';

function obtenerHtmlFiles() {
    return Object.fromEntries(
        glob.sync(
            './**/*.html',
            {
                ignore: [
                    './dist/**',
                    './node_modules/**'
                ]
            }
        ).map((file)=>{
            return [
                file.slice(0, file.length - path.extname(file).length), // nombre del archivo sin extensión
                resolve(__dirname, file) // full path a el archivo
            ]
        })
    );
}

export default defineConfig(({ command }) => ({
    appType: 'mpa',
    base: base_path,
    css: {
        postcss: {
            // El purgado solo se aplica al compilar (npm run build)
            plugins: command === 'build'
                ? [
                    purgeCSSPlugin({
                        content: [
                            './*.html',
                            './src/components/**/*.hbs',
                            './src/data/**/*.js',
                            './src/main.js'
                        ],
                        // atributos que agrega main.js en tiempo de ejecución
                        safelist: [/^\[aria-current/, 'aria-current']
                    })
                ]
                : []
        }
    },
    build: {
        minify: true,      // JS minificado
        cssMinify: true,   // CSS minificado
        rolldownOptions: {
            input: obtenerHtmlFiles()
        }
    },
    plugins:[
        new handlebars({
            partialDirectory: "src/components",
            context: getPageContext,
        })
    ]
}));

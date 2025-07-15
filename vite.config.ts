// import { defineConfig } from 'vite';
// import { resolve } from 'path';
//
// // https://vitejs.dev/config/
// export default defineConfig({
//     // public 目录会被完整复制到 dist 目录
//     publicDir: 'public',
//     build: {
//         // 输出目录，默认为 'dist'
//         outDir: 'dist',
//         // sourcemap: 'inline', // 开启内联 source map，方便调试
//         // 为了安全，Chrome 不允许插件执行eval，所以要禁用
//         minify: 'terser',
//         terserOptions: {
//             compress: {
//                 drop_console: true, // 生产环境移除 console
//             },
//         },
//         rollupOptions: {
//             // 这是多入口配置的核心
//             input: {
//                 // key 是输出文件的名字（不带扩展名），value 是源文件的路径
//                 background: resolve(__dirname, 'src/background.ts'),
//                 options: resolve(__dirname, 'src/options.ts'),
//             },
//             output: {
//                 // 指定输出文件的格式和名称
//                 entryFileNames: 'assets/[name].js', // background.js, options.js
//                 chunkFileNames: 'assets/[name].js',
//                 assetFileNames: 'assets/[name].[ext]',
//             }
//         }
//     }
// });

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    publicDir: 'public',
    build: {
        outDir: 'dist',
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: false,
            },
        },
        rollupOptions: {
            // ★★★ This is the key setting ★★★
            // Preserves the entry point files as-is, preventing them from being removed.
            preserveEntrySignatures: 'strict',

            input: {
                background: resolve(__dirname, 'src/background.ts'),
                options: resolve(__dirname, 'src/options.ts'),
            },
            output: {
                // Change format back to 'es' (ES Module)
                format: 'es',
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            }
        }
    }
});
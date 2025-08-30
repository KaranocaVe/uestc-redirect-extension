// import { defineConfig } from 'vite';
// import { resolve } from 'path';
//
// export default defineConfig({
//     publicDir: 'public',
//     build: {
//         outDir: 'dist',
//         minify: 'terser',
//         terserOptions: {
//             compress: {
//                 drop_console: false,
//             },
//         },
//         rollupOptions: {
//             // Preserves the entry point files as-is, preventing them from being removed.
//             preserveEntrySignatures: 'strict',
//
//             input: {
//                 background: resolve(__dirname, 'src/background.ts'),
//                 options: resolve(__dirname, 'src/options.ts'),
//             },
//             output: {
//                 // Change format back to 'es' (ES Module)
//                 format: 'es',
//                 entryFileNames: 'assets/[name].js',
//                 chunkFileNames: 'assets/[name].js',
//                 assetFileNames: 'assets/[name].[ext]',
//             }
//         }
//     }
// });


import { defineConfig } from 'vite';
import { resolve } from 'path';

// 这是一个只用于生产打包的简化配置
export default defineConfig({
    publicDir: 'public',
    build: {
        // 优化1：禁用 sourcemap，减小体积
        sourcemap: false,
        // 优化2：使用 terser 压缩代码
        minify: 'terser',
        terserOptions: {
            compress: {
                // 优化3：移除 console 和 debugger 语句
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            preserveEntrySignatures: 'strict',
            input: {
                background: resolve(__dirname, 'src/background.ts'),
                options: resolve(__dirname, 'src/options.ts'),
            },
            output: {
                format: 'es',
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
});
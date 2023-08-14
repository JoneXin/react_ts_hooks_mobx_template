import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';
// import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),

        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    // style: name => `antd/es/${name}/style/index.css`,
                    // es moudule 下应该引入css.js
                    style: name => `antd/es/${name}/style/css.js`,
                },
            ],
        }),

        // antd处理的另一种方案，需要安装 vite-plugin-style-import consola这两个库
        // createStyleImportPlugin({
        //     resolves: [AntdResolve()],
        // }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
        ],
    },
    css: {
        preprocessorOptions: {
            less: {
                // modifyVars: { '@textcolor': '#13c2c2' },
                javascriptEnabled: true,
            },
        },
    },
    server: {
        open: true,
    },
});

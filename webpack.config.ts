import path from 'path';

const webpackConfiguration = () => ({
    entry: path.join(__dirname, 'src', 'index.tsx'),
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: '/build/',
            },
        ],
    },
    devServer: {
        port: 999,
    },
});

export default webpackConfiguration;

//外枠
module.exports = {
    //エントリーポイント
    entry: './src/index.js',
    mode: 'development',
    output: {
        //出力先のフォルダ
        path: `${__dirname}/dist`,
        //出力先ファイル名
        filename: 'main.js'
    },
    devServer: {
        contentBase: './dist'
    },
};
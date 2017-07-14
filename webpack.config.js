// var webpack = require('webpack'),
// var path = require('path');
 
// module.exports = {
//     //debug: true,
//     entry: {
//         main: './components/cb-menu/cb-menu.js'
//     },
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: '[name].js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.html$/,
//                 loader: 'html-es6-template-loader',
//             }
//         ]
//     }
// };



const path = require('path');

module.exports = {
    module: {
        rules: [
            // {
            //     test: /\.ejs\.html$/,
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: 'ejs-compiled-loader',
            //         options: {
            //             htmlmin: true,
            //             strict: true,
            //             compileDebug: false,
            //             rmWhitespace: true
            //         }
            //     }]
            // },
            {
                test: /\.html$/,
                exclude: [/\.ejs\.html$/, /node_modules/],
                use: {
                    loader: 'html-loader',
                    options: {
                        // attrs: ['link:href'],
                        interpolate: true,
                        // minimize: true,
                        // removeComments: true,
                        // collapseWhitespace: true
                    },
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            // {
            //     test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
            //     loader: 'file-loader?name=/fonts/[name].[ext]'
            // },
            // {
            //     test: /\.(gif|png|jpe?g)$/i,
            //     use: [
            //         'url-loader',
            //         {
            //             loader: 'image-webpack-loader',
            //             query: {
            //                 progressive: true,
            //                 optipng: {
            //                     optimizationLevel: 7,
            //                 },
            //                 gifsicle: {
            //                     interlaced: false,
            //                 },
            //                 pngquant: {
            //                     quality: '65-90',
            //                     speed: 4
            //                 }
            //             }
            //         }
            //     ]
            // },
            // //Separate this out because svg-url-loader is much more efficient than the base64 encoding in url-loader
            // {
            //     test: /\.svg$/i,
            //     loaders: [
            //         {
            //             loader: 'svg-url-loader',
            //             options: {
            //                 noquotes: true
            //             }
            //         },
            //         {
            //             loader: 'image-webpack-loader',
            //             query: {
            //                 progressive: true
            //             }
            //         }
            //     ]
            // }
        ]
    },
    context: path.resolve(__dirname, "components"),
    entry: './bundle.js',
    // entry: {
    //     'bundle': './bundle.js',
    //     'bundle.min': './bundle.js'
    // },
    output: {
        filename: 'components.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    // TESTING UGLIFICATION 
    // plugins: [
    //     new webpack.optimize.UglifyJSPlugin({
    //         include: /\.min\.js$/,
    //         minimize: true
    //     })
    // ]
};
let path = require('path')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const dev = process.env.NODE_ENV === 'dev'

let cssLoaders = [{
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    minimize: !dev
  }
},
'sass-loader'
]

if (!dev) {
  cssLoaders.push({
    loader: 'postcss-loader',
    options: {
      // localIdentName: '[path][name]__[local]--[hash:base64:5]',
      plugins: (loader) => [
        require('autoprefixer')({
          browsers: ['last 2 versions', 'safari >= 7']
        })
      ]
    }
  })
}

let config = {
  entry: {
    main: ['./assets/css/app.scss', './src/main.js']
  },
  output: {
    // config 1
    // filename: "./dist/main.js"
    // config 2
    path: path.resolve(__dirname, 'dist/'),
    filename: dev ? '[name].js' : '[name].[chunkhash:8].js',
    publicPath: './dist/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      '@css': path.resolve('./assets/css/'),
      '@js': path.resolve('./assets/js/'),
      '@src': path.resolve(__dirname, 'src/'),
      '@': path.resolve(__dirname, './'),
      '@ress': path.resolve(__dirname, 'resources/'),
      '@views': path.resolve(__dirname, 'resources/views/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@stores': path.resolve(__dirname, 'src/stores/')
    }
  },
  stats: 'errors-only',
  devServer: {
    noInfo: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-vue-loader'
        }, {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }]
      },
      {
        test: /\.html$/,
        use: ['vue-template-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['eslint-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssLoaders
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [...cssLoaders, 'sass-loader']
        })
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash:7].[ext]'
          }
        },
        {
          loader: 'img-loader',
          options: {
            enabled: !dev
          }
        }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: dev ? '[name].css' : '[name].[contenthash:8].css',
      disable: dev
    })
  ],
  watch: dev,
  devtool: dev ? 'cheap-eval-source-map' : false
}

// the path(s) that should be cleaned
let pathsToClean = [
  'dist'
]

// the clean options to use
let cleanOptions = {
  root: path.resolve('./'),
  exclude: ['shared.js'],
  verbose: true,
  dry: false // permet de lancer un test pour être sur de supprimer le bon dossier
}

if (!dev) {
  config.plugins.push(new UglifyJSPlugin({
    sourceMap: false
  }))
  config.plugins.push(new ManifestPlugin())
  // config.plugins.push(new CleanWebpackPlugin(pathsToClean, cleanOptions))
  config.plugins.push(new LiveReloadPlugin())
}

config.plugins.push(new CleanWebpackPlugin(pathsToClean, cleanOptions))

module.exports = config

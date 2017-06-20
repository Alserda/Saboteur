const gulp = require('gulp');
const webpack = require('webpack');
const eslint = require('gulp-eslint');

/* Requires for the server*/
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');


gulp.task('webpack-dev-server', () => {
  const port = 3000;
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    hot: true,
    filename: webpackConfig.output.filename,
    publicPath: webpackConfig.output.publicPath,
    stats: 'errors-only',
    historyApiFallback: true,
    disableHostCheck: true,
  });

  server.listen(port, error => {
    if (error) return console.error(error);
    return (
      console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    );
  });
});

gulp.task('watch', () => {
  gulp.watch('../src/**', ['lint']);
});

gulp.task('lint', () => (
  gulp.src('../src/**/*.js')
  .pipe(eslint())
  .pipe(eslint.format('table'))
  // .pipe(eslint.failOnError())
));

gulp.task('default', ['webpack-dev-server', 'watch', 'lint']);

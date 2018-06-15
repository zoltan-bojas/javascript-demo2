import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';
/* eslint-disable no-console */

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error=>console.log(chalk.red(error)));
    }

    if(jsonStats.hasWarnings) {
        console.log(chalk.yellow("Webpack warnings:"));
        jsonStats.warnings.map(warning=>console.log(chalk.yellow(warning)));
    }
    return 0;
})

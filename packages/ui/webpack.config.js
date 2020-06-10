const Encore = require("@symfony/webpack-encore");
const path = require("path");

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore
    .setOutputPath(path.join(__dirname, "public/build/"))
    .setPublicPath("/build")

    .addEntry("application", path.join(__dirname, "src/Application.tsx"))

    .enableSingleRuntimeChunk()
    .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableIntegrityHashes(Encore.isProduction())

    .enableTypeScriptLoader()
    .enableSassLoader()
    .enableReactPreset()

    .configureBabel(() => {
    }, {
        useBuiltIns: "usage",
        corejs: 3,
    });

if (Encore.isDevServer()) {
    Encore
        .setManifestKeyPrefix("build/");
}

module.exports = Encore.getWebpackConfig();

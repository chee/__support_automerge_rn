const {getDefaultConfig} = require("expo/metro-config")
const config = getDefaultConfig(__dirname)
config.resolver && (config.resolver.unstable_enablePackageExports = true)
module.exports = config
// config.resolver &&
// 	(config.resolver.unstable_conditionNames = [
// 		"react-native",
// 		"require",
// 		"browser",
// 	])

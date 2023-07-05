/**
 * Utility to perform base conversion of node version to IonVersion.
 * Took from current ionweb-tools implementation since it is not exposed.
 * This script can also be runned as npm command.
 */

const ionwebUtils = require("ionweb-tools/utils");
const getIonVersion = (semVersion) => semVersion.replace(/^([0-9]\.?[0-9]\.?[0-9](\-[^\-]+)?)(\-.+)?$/, '$1').replace(/[\.\-]/g, '');
const moduleNodeVersion = ionwebUtils.getPackageJson().version;
const moduleIonVersion = getIonVersion(moduleNodeVersion);

// make it available to external imports
module.exports = {
	getIonVersion: getIonVersion,
	moduleIonVersion: moduleIonVersion
}

// print only if directly called
if (require.main === module) {
	if (!moduleIonVersion) throw Error('Invalid Version');
	console.log(getIonVersion(moduleIonVersion));
}

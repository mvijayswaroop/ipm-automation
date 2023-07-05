const path = require('path');
const KWCfgPath = path.join(__dirname, '..');
const KWCfgContent = require(path.join(KWCfgPath, 'keywordGen.json'))
const ionwebUtils = require("ionweb-tools/utils");
const packageJson = ionwebUtils.getPackageJson()
const npmPkgVersion = packageJson.version;

if (require.main === module) {
	
	process.chdir(KWCfgPath);

	const opts = KWCfgContent;
	opts.options.wrapperVersion = npmPkgVersion;

  const keywordGenerator = 'html.automation.keywordgenerator';
	require(keywordGenerator).generateKeywords(opts);
}
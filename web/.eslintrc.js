module.exports = {
	extends: ["wesbos"],
	rules: {
		semi: ["error", "never"],
		"prettier/prettier": ["error", { semi: false, singleQuote: true }]
	}
}
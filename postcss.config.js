module.exports = {
	modules: true,
	plugins: [
		require('postcss-import'),
		require('postcss-for'),
		require('postcss-each'),
		require('autoprefixer'),
		require('cssnano')
	]
}
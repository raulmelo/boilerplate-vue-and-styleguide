module.exports = {
  lintOnSave: true,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/style/lib/var-mixin.scss";`
			}
		}
	}
}

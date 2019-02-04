module.exports = {
	entry: './script1.js',

	output: {
		path: __dirname + "/dist/js", // or path: path.join(__dirname, "dist/js"),
	    filename: "bundle.js"
	},

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
};
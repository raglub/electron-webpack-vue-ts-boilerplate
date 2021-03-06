module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.vue?$/,
                use: [
                    {
                        loader: "vue-loader"
                    }
                ]
            }
        ]
    }
};
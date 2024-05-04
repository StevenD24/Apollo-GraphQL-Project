import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema.ts",
    generates: {
        "./src/types.ts": {
            // add type script plugins from packages
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                // match datasources to API class
                contextType: "./context#DataSourceContext",
                // match schema to actual database json
                mappers: {
                    Track: "./models#TrackModel",
                    Author: "./models#AuthorModel",
                },
            },
        },
    },
};

export default config;
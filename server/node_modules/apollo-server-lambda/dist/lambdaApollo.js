"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_env_1 = require("apollo-server-env");
function graphqlLambda(options) {
    if (!options) {
        throw new Error('Apollo Server requires options.');
    }
    if (arguments.length > 1) {
        throw new Error(`Apollo Server expects exactly one argument, got ${arguments.length}`);
    }
    const graphqlHandler = (event, context, callback) => {
        context.callbackWaitsForEmptyEventLoop = false;
        if (event.httpMethod === 'POST' && !event.body) {
            return callback(null, {
                body: 'POST body missing.',
                statusCode: 500,
            });
        }
        apollo_server_core_1.runHttpQuery([event, context], {
            method: event.httpMethod,
            options: options,
            query: event.httpMethod === 'POST' && event.body
                ? JSON.parse(event.body)
                : event.queryStringParameters,
            request: {
                url: event.path,
                method: event.httpMethod,
                headers: new apollo_server_env_1.Headers(event.headers),
            },
        }).then(({ graphqlResponse, responseInit }) => {
            callback(null, {
                body: graphqlResponse,
                statusCode: 200,
                headers: responseInit.headers,
            });
        }, (error) => {
            if ('HttpQueryError' !== error.name)
                return callback(error);
            callback(null, {
                body: error.message,
                statusCode: error.statusCode,
                headers: error.headers,
            });
        });
    };
    return graphqlHandler;
}
exports.graphqlLambda = graphqlLambda;
//# sourceMappingURL=lambdaApollo.js.map
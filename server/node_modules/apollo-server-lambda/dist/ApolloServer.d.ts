import { APIGatewayProxyEvent, Context as LambdaContext } from 'aws-lambda';
import { ApolloServerBase, GraphQLOptions, Config } from 'apollo-server-core';
export interface CreateHandlerOptions {
    cors?: {
        origin?: boolean | string | string[];
        methods?: string | string[];
        allowedHeaders?: string | string[];
        exposedHeaders?: string | string[];
        credentials?: boolean;
        maxAge?: number;
    };
    onHealthCheck?: (req: APIGatewayProxyEvent) => Promise<any>;
}
export declare class ApolloServer extends ApolloServerBase {
    constructor(options: Config);
    createGraphQLServerOptions(event: APIGatewayProxyEvent, context: LambdaContext): Promise<GraphQLOptions>;
    createHandler({ cors, onHealthCheck }?: CreateHandlerOptions): (event: APIGatewayProxyEvent, context: LambdaContext, callback: import("aws-lambda").Callback<import("aws-lambda").APIGatewayProxyResult>) => void;
}
//# sourceMappingURL=ApolloServer.d.ts.map
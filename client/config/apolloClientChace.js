import { InMemoryCache, ApolloClient } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
        Product: {
            keyFields: [
                "id",
                "name",
                "slug",
                "description",
                "price",
                "mainImage",
                "authorId",
                "categoryId",
                ["id", "productId", "imgUrl"],
            ],
        },
    },
});

export const client = new ApolloClient({
    cache,
});

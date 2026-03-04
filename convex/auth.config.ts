import { AuthConfig } from "convex/server";

export default {
    providers: [
        {

            domain: process.env.CLERK_JWT_KEY!,
            applicationID: "convex",
        },
    ]
} satisfies AuthConfig;
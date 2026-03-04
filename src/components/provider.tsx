"use client";

import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    UserButton,
    useAuth,
} from "@clerk/nextjs";
import {
    ConvexReactClient,
    Authenticated,
    Unauthenticated,
    AuthLoading,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthLoadingView } from "@/features/components/auth-loading-view";
import { UnauthenticatedView } from "@/features/components/unauthenticated-view";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function Provider({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider
            appearance={{
                theme: dark,
            }}
        >
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                    <div className="min-h-screen flex items-center justify-center p-4">
                        <Authenticated>
                            <div className="w-full max-w-xl flex flex-col items-center gap-4">
                                <div className="flex items-center gap-2 rounded-md border bg-muted/40 px-3 py-2">
                                    <span className="text-sm font-medium">Profile</span>
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                                {children}
                            </div>
                        </Authenticated>

                        <Unauthenticated>
                            <div className="w-full max-w-xl flex flex-col items-center gap-4">
                                <UnauthenticatedView />
                                <div className="flex items-center gap-2">
                                    <SignInButton mode="modal" />
                                    <SignUpButton mode="modal" />
                                </div>
                            </div>
                        </Unauthenticated>

                        <AuthLoading>
                            <AuthLoadingView />
                        </AuthLoading>
                    </div>
                </ConvexProviderWithClerk>
            </ThemeProvider>
        </ClerkProvider>
    );
}

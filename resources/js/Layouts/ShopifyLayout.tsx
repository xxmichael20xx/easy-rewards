import { PropsWithChildren } from 'react';
import { Layout, Page, Text } from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";

export default function ShopifyLayout({title, isFullWidth = true, children }: PropsWithChildren<{ title: string, isFullWidth?: boolean }>) {
    const shopify = useAppBridge()

    return (
        <Page
            fullWidth={isFullWidth}
        >
            <ui-title-bar>
                <Text as="h1">{title}</Text>
            </ui-title-bar>

            <ui-nav-menu>
                <a href="/" rel="home">Home</a>
                <a href="/settings">Settings</a>
            </ui-nav-menu>

            <Layout>
                {children}
            </Layout>
        </Page>
    );
}

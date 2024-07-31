import React from 'react';
import { Card, Text, Layout } from '@shopify/polaris';
import ShopifyLayout from "@/Layouts/ShopifyLayout";

export default function Home() {
    return (
        <ShopifyLayout
            title="EasyRewards - Home"
        >
            <Layout.Section>
                <Card>
                    <Text as="h2" variant="bodyMd">
                        Home page
                    </Text>
                </Card>
            </Layout.Section>
        </ShopifyLayout>
    );
}

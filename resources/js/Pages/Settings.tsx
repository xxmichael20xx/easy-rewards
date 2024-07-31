import React from 'react';
import { Card, Text, Layout } from '@shopify/polaris';
import ShopifyLayout from "@/Layouts/ShopifyLayout";

export default function Settings() {

    return (
        <ShopifyLayout
            title="EasyRewards - Settings"
        >
            <Layout.Section>
                <Card>
                    <Text as="h2" variant="bodyMd">
                        Settings page
                    </Text>
                </Card>
            </Layout.Section>
        </ShopifyLayout>
    );
}

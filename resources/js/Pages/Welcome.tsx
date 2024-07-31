import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { Page, Card, AppProvider, Text } from '@shopify/polaris';
import { PageProps } from "@/types";

export default function Welcome({ auth }: PageProps) {
    return (
        <AppProvider i18n={enTranslations}>
            <Page title="Inertia App">
                <Card>
                    <Text as="h2" variant="bodyMd">
                        { auth?.user?.name }
                    </Text>
                </Card>
            </Page>
        </AppProvider>
    );
}

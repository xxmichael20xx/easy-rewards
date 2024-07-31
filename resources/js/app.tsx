import './bootstrap';
import '../css/app.css';
import '@shopify/polaris/build/esm/styles.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {AppProvider} from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <AppProvider i18n={enTranslations}>
                    <App {...props} />
                </AppProvider>
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
}).then();

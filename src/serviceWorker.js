// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
);

const registerValidSW = async (swUrl, config) => {
    try {
        const registration = await navigator.serviceWorker.register(swUrl);
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed')
                    if (navigator.serviceWorker.controller) {
                        // At this point, the old content will have been purged and
                        // the fresh content will have been added to the cache.
                        // It's the perfect time to display a "Update is available.
                        // Please refresh." message in your web app.
                        console.warn('Update is available. Please refresh.');
                        // Execute callback
                        if (config.onUpdate) config.onUpdate(registration);
                    } else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "App is cached for offline use." message.
                        console.info('App is cached for offline use.');
                        // Execute callback
                        if (config.onSuccess) config.onSuccess(registration);
                    }
            };
        };
    } catch (error) {
        console.error('Error during service worker registration:', error);
    }
};

const checkValidServiceWorker = async (swUrl, config) => {
    try {
        // Check if the service worker can be found. If it can't reload the page.
        const response = fetch(swUrl);
        // Ensure service worker exists, and that we really are getting a JS file.
        if (
            response.status === 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1
        ) {
            // No service worker found. Probably a different app. Reload the page.
            const registration = await navigator.serviceWorker.ready;
            await registration.unregister();
            window.location.reload();
            // Service worker found. Proceed as normal.
        } else await registerValidSW(swUrl, config);
    } catch {
        console.info(
            'No internet connection found. App is running in offline mode.'
        );
    }
};

export const register = config => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
        // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebook/create-react-app/issues/2374
        if (publicUrl.origin !== window.location.origin) return;
        window.addEventListener('load', async () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                await checkValidServiceWorker(swUrl, config);
                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                await navigator.serviceWorker.ready;
                console.info(
                    'This app is being served cache-first by a service worker. To learn more, visit ' +
                        'https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app'
                );
            }
            // Is not localhost. Just register service worker.
            else registerValidSW(swUrl, config);
        });
    }
};

export const unregister = async () => {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        registration.unregister();
    }
};

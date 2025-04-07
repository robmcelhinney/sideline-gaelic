const CACHE_NAME = "gf-stats-cache-v1"
const urlsToCache = [
    "/",
    "/index.html",
    "/sw.js",
    // Add other assets as needed (e.g., CSS, fonts, images)
]

// Install event: open the cache and add all URLs.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    )
})

// Activate event: clear out any old caches.
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName)
                    }
                })
            )
        )
    )
})

// Fetch event: try to serve cached assets first.
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return cached response if found.
            if (response) {
                return response
            }
            // Clone the request before fetching.
            const fetchRequest = event.request.clone()
            return fetch(fetchRequest).then((networkResponse) => {
                // Check if we received a valid response.
                if (
                    !networkResponse ||
                    networkResponse.status !== 200 ||
                    networkResponse.type !== "basic"
                ) {
                    return networkResponse
                }
                // Clone the response so we can store it in the cache.
                const responseToCache = networkResponse.clone()
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache)
                })
                return networkResponse
            })
        })
    )
})

console.log('sw public is working ')

let cachName = "aapV1"

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cachName).then((cache) => {
            cache.addAll([
              
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((result) => {
            if (result) {
                return result;
            }

        })
    )
})
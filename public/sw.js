/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// caches.match() always resolves
			// but in case of success response will have value
			if (response !== undefined) {
				return response;
			} else {				
				return fetch(event.request)
			}
		})
	);
});
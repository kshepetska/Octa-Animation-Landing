export const cacheImages = (images: string[], cacheKey: string = "octa") => {
  if (window.caches) {
    // Cache all images
    window.caches.open(cacheKey).then((cache) => {
      images.forEach((image) => {
        cache.add(image);
      });
    });
  }
};

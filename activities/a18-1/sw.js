// JavaScript File
self.addEventListener('install', function(e){
    console.log("install", e);
    e.waitUntil(
        caches.open("cache-simple").then(function(cache){
            console.log()
        }
});
self.addEventListener('install', function(event){
    console.log("install", event)
});
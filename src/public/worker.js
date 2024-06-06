console.log('service worker');
// el worker es el que se mantiene escuchando siempre
// self hace referencia al mismo archivo worker
//FUNCIONALIDAD PARA RECIBIR UNA NOTIFICACION
self.addEventListener('push', e =>{
  const data = e.data.json()
  console.log(data);
  console.log('Notification received');
  self.registration.showNotification(data.title,{
    body: data.message,
    data: {
      url: '/'
    },
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYxLjkzNCAzMS45OTJjLjAyMS0uNzEzLjIwOS0xMC45MDQtNS44MjItMTcuNTM4Yy0uMjY4LS41OTMtMS41MzktMi45ODMtNS42NDEtNS45MDRhNDEuOTU5IDQxLjk1OSAwIDAgMC01Ljc3NS0zLjc2M2wtLjAwOC0uMDA0QzQ0LjQzMiA0LjY0NiAzOS40MyAyIDMzLjM1OSAyYy0uNDYxIDAtLjkxNy4wMjctMS4zNjguMDU4VjIuMDVjLTQuNjI5LS4xMDEtOS4yMjcgMS4wOS0xMS45OTggMi4zNDFjLTIuNDU4IDEuMTEtNS4xODcgMi45NzEtNS4zODQgMy4xMTVDMTEuMjA1IDkuNDEgNC43NSAxNy4wNTEgNC4yMzkgMjEuMWMtMi4wNjMgMi42MzctMy43ODcgMTQuNDgyLjAwNCAyMS42OTdjMi42NTggMTAuMDI3IDEyLjY2NCAxNS4wNDUgMTMuNDYgMTUuNDNjLjQ4NC4zMDkgNS45MzcgMy42OCAxMi42MzYgMy42OGMuMjgxIDAgMS45OC4wOTQgMi41ODYuMDk0YzcuMjQxIDAgMTcuOTcxLTUuMTA0IDIwLjIxNy05LjEwMmM2LjE3MS00LjUxNCA5LjM3LTE2LjE0NyA4Ljc5Mi0yMC45MDdNMTcuNzU4IDQ3LjA1NWMtMi44NjktNC42NDEtNC41MDQtMTAuNzA1LTQuODU0LTEyLjA5OGMuOTA4LTEuMzYxIDUuMzg3LTcuOTY1IDcuOTM5LTkuOTUyYzEuNDQ1LjI2NiA3LjQ3OSAxLjM3NCAxMy4xNyAyLjQwNGMuNzE1IDEuODUzIDMuODUyIDEwLjAyOSA0Ljc1IDEzLjE4NWMtLjk5IDEuMTc0LTQuODc5IDUuNzAyLTguNzA4IDkuMjQ4Yy00LjA2NS4wMTktMTAuOTc5LTIuMzI2LTEyLjI5Ny0yLjc4N001My44MjQgMTQuNThjLS4wMTIuNDUtLjExOSAyLjA1LS44ODUgMy44ODdjLTEuNTIxLS43NzctNS4zNDQtMi40NDEtMTAuNTg0LTIuNzIyYy0uNzkzLTEuMTcxLTMuNzc3LTUuMjU0LTguNDktOC4wODZjLjY0NS0xLjI2MiAxLjU0My0yLjgwMSAyLjA2OC0zLjI3Yy4xNy0uMDQ4LjQzNC0uMDkyLjgzNi0uMDkyYzIuNTI3IDAgNi44OTMgMS42NTUgNy4yNzMgMS44MDJjLjQwMy4yMTMgOC4yNTEgNC40MzkgOS43ODIgOC40ODFNMTEuNzczIDM0LjAxMmMtMy40MjMtLjU4NC01LjQ1OC0xLjY0OC02LjA2Ni0yLjAwOGMtMS4yNzMtNC42MTctLjI0OC05LjYwNy0uMDktMTAuMzIyYzEuMjU2LTIuMjQ2IDQuODMyLTcuOTcxIDcuMTkxLTkuMDU4YzIuNDQ1LS40OTkgNS40OTQuMTIxIDYuNzM2LjQyNGMtLjExNyAxLjYxNS0uMzQyIDYuMTI3LjMyNiAxMC44NjJjLTIuNzA2IDIuMTc4LTYuOTg5IDguNDQ3LTguMDk3IDEwLjEwMk0zMS42ODUgMy41M2MuNzY4LjA1NyAxLjg5NS4yMjUgMi42NjcuNDU0Yy0uNzcgMS4wMjQtMS41NTkgMi41NDItMS45MzIgMy4yOTJjLTEuNTcuMjU3LTcuNTMzIDEuMzk3LTEyLjIxMSA0LjQzYy0uOTQzLS4yNS0zLjc5MS0uOTE3LTYuNDg4LS42ODdjLjY2OC0xLjI5MyAxLjY2Ni0yLjI0OSAxLjc3My0yLjM0N2MuMzcxLS4yNjYgNy41MTMtNS4yNjMgMTYuMTkxLTUuMTU1em0xOS4wOTYgMzguMDkzYy0xLjE3LS4wNDgtNS42NzgtLjMwNS0xMC42MjEtMS40NjZjLS45NDctMy4zMDItNC4wNzQtMTEuNDQ0LTQuNzg5LTEzLjI5NmE1NTYuNTg2IDU1Ni41ODYgMCAwIDEgNi45MjgtOS42NTRjNS42ODguMzEyIDkuNjgyIDIuMzg3IDEwLjQ1NSAyLjgyYzMuMjk1IDUuMjk5IDQuMDE4IDEwLjcxMSA0LjExNyAxMS42MTVjLTEuNzUgNS40NDYtNS4yMTEgOS4xMTMtNi4wOSA5Ljk4MU0zLjY1NSAyOC41MTljLjA4NCAxLjI2Ni4yODcgMi41OTkuNjU0IDMuOTE3YTExLjczOCAxMS43MzggMCAwIDAtLjY4MiAyLjY1MWEzMy4wMzkgMzMuMDM5IDAgMCAxIC4wMjgtNi41NjhtOS42NDQgMjMuMzU5YzEuNTA4LTEuNDUzIDMuMzY3LTIuODY3IDQuMDg4LTMuNDAxYzEuNjMuNTc0IDguMzI0IDIuODM3IDEyLjU5MSAyLjgzN2MuNzI3Ljk3NSAzLjEwNCA0LjAyOCA2LjAxOCA2LjM2MmMtMS44MTQgMS43NzUtNC40MzQgMi42MTMtNC44OTcgMi43NTJjLTguMTI3LjIxOC0xNi4wNDItNC4zNS0xNy44LTguNTVtMjEuNDYzIDguNTM4Yy45MjItLjUzNyAxLjg4My0xLjI0NCAyLjY3OC0yLjEzOWMxLjI5Ny0uMTc5IDYuODYzLTEuMTM3IDExLjg5My00LjgzMmMuMzMyLjAzNi44NzkuMDggMS40OS4wNjNjLTMuMDE4IDIuOTU3LTEwLjM4MiA2LjI2LTE2LjA2MSA2LjkwOG0xNS40MjQtOC4zNzZjMS44MDctNC43MDggMS43My04LjI1OCAxLjY0MS05LjM5MmMuOTkyLS45NzIgNC4zOTYtNC41OTkgNi4yODUtMTAuMTEzYzEuMDE4LjE3IDEuNjguNDI5IDEuOTk0LjU3NGMuMTA5LjQuMjkxIDEuMzI0LjE4OCAyLjcyNWMtLjc3IDUuMDQzLTMuNDI4IDEyLjYtOC4wODQgMTUuOTQxYy0uNDY4LjIzOS0xLjI5Mi4yOTEtMi4wMjQuMjY1Ii8+PC9zdmc+'
  })
})

//FUNCIONALIDAD PARA EVENTO DE CLICK EN NOTIFICACION
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'open') {
    // Handle the "Open" action
    clients.openWindow(event.notification.data.url);
  } else {
    // Handle the default click on the notification
    clients.openWindow('/');
  }
});

//FUNCIONALIDAD PARA GUARDAR EN CACHE
const PWA_APP_CACHE = "Pwacache"
const APP_SHELL = [
  "/",
  "index.html",
  "main.js",
]
self.addEventListener("install", e=>{
  const cacheStatic = caches.open(PWA_APP_CACHE).then(cache => cache.addAll(APP_SHELL))

  e.waitUntil(cacheStatic);
})

//FUNCIONALIDAD PARA BUSCAR EN CACHE Y SI NO LAS CARGA EN LA RED
self.addEventListener("fetch",(e)=>{
  e.respondWith(
    caches.match(e.request).then( res => res || fetch(e.request)).catch(error=>console.log(error))
  )
})

//FUNCIONALIDAD PARA CACHE POST
const POST_CACHE = 'post-cache';
self.addEventListener('fetch', function(event) {
  if (event.request.method === 'POST') {
    event.respondWith(
      caches.open(POST_CACHE)
        .then(function(cache) {
          return cache.put(event.request.clone(), event.response.clone())
            .then(function() {
              return event.response;
            });
        })
    );
  }
});
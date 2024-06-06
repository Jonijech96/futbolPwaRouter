// const { application } = require("express")
const PUBLIC_VAPID_KEY='BFr-t_ocAOTeLkd47ot7TtfJDdfTeM7JGPtHxtSwluX28e2zBSroCZSsT3BaVTh8fJmMm92HY3hZy0Tsf2Wzq6I'

// Función para suscribirse a las notificaciones push
async function subscribe() {
  const convertedVapidKey = urlBase64ToUint8Array(PUBLIC_VAPID_KEY);
  try {
    //service worker , se declara el alcance que va a tener el worker
    const register = await navigator.serviceWorker.register('./worker.js', {
    scope: '/'
  })

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey
  });
  
    // Enviando la suscripción al servidor
    await sendSubscriptionToServer(subscription);

    console.log('Subscripción exitosa:', subscription);
  } catch (error) {
    console.error('Error al suscribirse a las notificaciones push:', error);
  }
}
// Función para convertir la clave pública de VAPID de base64 a Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

async function sendSubscriptionToServer(subscription) {
  try {
    // console.log("a ounto de hacer la subscripcion");
    await fetch('/subscription', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Suscripción enviada al servidor');
  } catch (error) {
    console.error('Error al enviar la suscripción al servidor:', error);
  }
}

subscribe();
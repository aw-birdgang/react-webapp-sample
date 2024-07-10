// src/pushNotification.ts
export function askPermission(): Promise<void> {
    return new Promise((resolve, reject) => {
        const permissionResult = Notification.requestPermission(result => {
            resolve(result);
        });

        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    }).then(permissionResult => {
        if (permissionResult !== 'granted') {
            throw new Error('We weren\'t granted permission.');
        }
    });
}

export function subscribeUserToPush(): Promise<PushSubscription> {
    return navigator.serviceWorker.ready.then(registration => {
        const subscribeOptions = {
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array('<Your Public VAPID Key>')
        };

        return registration.pushManager.subscribe(subscribeOptions);
    }).then(pushSubscription => {
        console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
        return pushSubscription;
    });
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

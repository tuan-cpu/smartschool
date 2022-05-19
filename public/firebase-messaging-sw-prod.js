/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-globals */
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAo6efOuVHyiaI-3ladh_TEvuCcGi2gS2A',
  authDomain: 'smartschool-62e80.web.app',
  databaseURL: 'https://smartschool-62e80.firebaseio.com',
  projectId: 'smartschool-prod',
  storageBucket: 'smartschool-62e80.appspot.com',
  messagingSenderId: '578743603219',
  appId: '1:578743603219:web:f895f347b8fe67f1bcefe6',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  // Customize notification here
  const notificationTitle = payload.data.title
  const notificationOptions = {
    body: payload.data.body,
    icon: '/static/images/logo.jpeg',
    data: {
      url: `${self.location.origin}/phong-hoc?eventId=${payload.data.eventId}&date=${payload.data.date}`,
    },
  }

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle,
    notificationOptions)
})

self.addEventListener('notificationclick', function (event) {
  if (Notification.prototype.hasOwnProperty('data')) {
    const { url } = event.notification.data
    event.waitUntil(clients.openWindow(url))
  }
})

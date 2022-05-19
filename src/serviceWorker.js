/* eslint-disable no-param-reassign */
const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  } else {
    console.log('service worker supported')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  } else {
    console.log('PushManager worker supported')
  }
  return true
}

export const registerServiceWorker = (swUrl, config) => {
  try {
    if (check()) {
      navigator.serviceWorker
        .register(process.env.REACT_APP_ENV === 'prod' ? 'firebase-messaging-sw-prod.js' : 'firebase-messaging-sw.js')
        .then((registration) => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing
            if (installingWorker == null) {
              return
            }
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // At this point, the updated precached content has been fetched,
                  // but the previous service worker will still serve the older
                  // content until all client tabs are closed.
                  console.log(
                    'New content is available and will be used when all '
                      + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.',
                  )

                  // Execute callback
                  if (config && config.onUpdate) {
                    config.onUpdate(registration)
                  }
                } else {
                  // At this point, everything has been precached.
                  // It's the perfect time to display a
                  // "Content is cached for offline use." message.
                  console.log('Content is cached for offline use.')

                  // Execute callback
                  if (config && config.onSuccess) {
                    config.onSuccess(registration)
                  }
                }
              }
            }
          }
        })
        .catch((err) => err)
    }
  } catch (errx) {
    console.log(errx)
  }
}

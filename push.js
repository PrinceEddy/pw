var push = require('web-push');

let vapidKeys = {
    publicKey: 'BP7hpzoaALCjd5eLnzaDyopHhFHTEw3FzNvOxwl8DwjiN3F_XplEm-J-cG1SGxvdJTePjEK9aEKgikxR4lNw0G8',
    privateKey: 'G5DRR-dUnWBDE0TWiu460YOd3Rpwb5Y-Kh9nOlV8ZEo'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey vapidKeys.privateKey)

  let sub= {};

  push.sendNotification(sub, 'test message')
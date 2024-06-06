const {Router} = require('express')
const router = Router()

const webpush = require('../webpush');
let pushSubscription

router.post('/subscription', async (req,res)=>{
  pushSubscription = req.body
  console.log(req.body);
  res.status(200).json()

  const payload = JSON.stringify({
    title:'My custom notification',
    message:'Hello World'
  })
  
  try {
    await webpush.sendNotification(pushSubscription,payload)
    console.log("Notificacion enviada!");
  } catch (error) {
    console.log("error al hacer el send notification",error);
  }
})

module.exports = router;

// npx web-push generate-vapid-keys
// para refrescar memoria del navegador es ctrl + shift + r
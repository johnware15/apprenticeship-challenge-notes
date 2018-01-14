* Express-session => create session middleware. Session data NOT saved in cookie, just session ID. Session data saved server-side.


*** For cookies in production, but allowing for testing in development(NODE_ENV in express):


const app = express()
const sess = {
  secret: 'secret value',
  cookie: { }
}

if(app.get('env') === 'production') {
  app.set('trust proxy', 1)
  sess.cookie.secure = true
}

app.use(session(sess))

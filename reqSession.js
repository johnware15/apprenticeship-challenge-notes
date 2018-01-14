Store/access data, simply use request property req.session(generally serialized as JSON by store):

//Use session middleware
app.use(session({ secret: 'secret value', cookie: { maxAge: 60000 }}))

//Access session as req.Session
app.get('/', function(req, res, next) {
  if(req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ', + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.send('Welcome to session demo. Refresh!')
  }
})

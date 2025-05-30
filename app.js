// import express 
import express from 'express'
// create the express app
const app = express()
// set the 'public' folder as a static folder
app.use(express.static('public'))
// get the '/' route and have it load 'index.html' from the public folder
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' })
})
// have the app listen on port 5000   * 5000 is taken so 5001
const PORT = 5001
app.listen(PORT, () => console.log(`Running on port ${PORT}`))
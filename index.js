const express = require('express')
const path = require('path')
const mainRoutes = require('./routes/mainRoutes')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)

app.use((req, res, next) => {
  res.status(404).render('404')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
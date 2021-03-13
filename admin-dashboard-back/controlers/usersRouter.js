const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')


usersRouter.post('/', async (req, res) => {
  const body = req.body
  if (body.password.length >= 3) {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })
    const savedUser = await user.save()
    res.send({success:"succesfully created acc!"})
  } else {
    res.send({error:"error"})
  }

})

module.exports = usersRouter
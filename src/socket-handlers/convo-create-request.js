const verifySession = require('./verify-session')
const generateSessionKey = require('../platychat.utils').generateSessionKey

module.exports = (db, v, socket) => async (jwt, userid, convoname) => {
  let valid = await v(jwt, userid)
  if (!valid) return socket.emit('error', 'LOGIN ERROR: jwt/uid is invalid')

  const convoid = generateSessionKey()

  //Allowing all users for now because there are like two users lol
  const allUsersArray = await new Promise((s, f) => {
    db.all(`SELECT userid FROM users`, (err, rows) => {
      if (err) f()
      s(rows)
    })
  })

  const participants = allUsersArray.reduce((acc, user, index) => {
    if (index < allUsersArray.length - 1) return acc + `${user.userid},`
    return acc + user.userid
  }, '')

  await new Promise(function (s, f) {
    db.all(
      `
        INSERT INTO convos(
          convoid,
          convoname,
          participants
        ) VALUES (
          :convoid,
          :convoname,
          :participants
        )
      `,
      convoid,
      convoname,
      participants,
      function (err) {
        if (err) f()
        s()
      }
    )
  })

  socket.emit('convo-create-response', convoid, convoname)
}

// module.exports = (db) =>
//   async function convoCreateRequest(
//     sessionid,
//     userid,
//     convoname,
//     participants,
//     maxusers
//   ) {
//     let isVerified = await verifySession(db)(sessionid, userid)

//     //the convoid should be edited
//     if (isVerified) {
//       let convoid = generateSessionKey()
//       await new Promise(function (s, f) {
//         db.all(
//           `
//              INSERT INTO convos(
//                 convoid,
//                 convoname,
//                 participants,
//                 maxusers
//              ) VALUES (
//                 :convoid,
//                 :convoname,
//                 :participants,
//                 :maxusers
//              )
//           `,
//           convoid,
//           convoname,
//           participants,
//           maxusers,
//           function (err) {
//             if (err) f()
//             s()
//           }
//         )
//       })

//       return this.emit(
//         'convo-create-response',
//         convoid,
//         convoname,
//         participants
//       )
//     }

//     this.emit('convo-create-response', 'ERROR: CANNOT CREATE NEW CONVO REQUEST')
//   }

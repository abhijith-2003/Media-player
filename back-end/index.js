const JSONServer =require('json-server')
const MPServer = JSONServer.create()
const router = JSONServer.router('db.json')
const middleleware = JSONServer.defaults()

const PORT = 3000 || process.env.PORT

MPServer.use(middleleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log((`MediaPlayer Server Running at PORT:${PORT}& waiting for client request...`));
})
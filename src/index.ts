import { AppDataSource } from "./data-source"
const fastify = require('fastify')({logger: true});
const host = ("DB_HOST" in process.env) ? `0.0.0.0` : `localhost`;
const multer = require('fastify-multer')
const PORT = parseInt(process.env.FASTIFY_PORT) || 7000;
import { User } from "./entity/User"


fastify.register(multer.contentParser)
fastify.register(require("@fastify/cors"), {
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  allowedHeaders: "*",
})

fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/api-docs',
    swagger: {
        info: {
            title: 'School MIS Backend',
            description: 'School MIS Backend using TypeORM, Fastify and Postgres',
            version: "1.0.0",
        }
    }
})


const start = async () => {
    try {
      
      await fastify.listen({host: host, port: PORT }, function (err, address) {
        if (err) {
          fastify.log.error(err)
          process.exit(1)
        }
      })
      AppDataSource.initialize().then(async () => {
  
        console.log("connected!!")
    
    }).catch(error => console.log(error))
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()
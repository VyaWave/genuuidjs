const { v4: uuidv4 } = require('uuid');
const md5 = require("blueimp-md5")


class logTracer {

  createTraceId(): string {

    const uid = uuidv4();
    const timestamp = new Date().valueOf();
    const md5uid = md5(`${timestamp} + ${Math.random()} + ${uid} + traceId`)

    return md5uid

  }

  createSpanId(): string {

    const uid = uuidv4();
    const timestamp = new Date().valueOf();
    const md5uid = md5(`${timestamp} + ${Math.random()} + ${uid} + spanId`)

    return md5uid
  }

  createUuid(): string {

    const uid = uuidv4();
    const timestamp = new Date().valueOf();
    const md5uid = md5(`${timestamp} + ${Math.random()}+ ${uid} + uuid`)

    return md5uid
  }
}

const instanceTracer = new logTracer()

export default instanceTracer

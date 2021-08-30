const { v4: uuidv4 } = require('uuid');
const md5 = require("blueimp-md5")


class mageTracer {

  createTraceId() {

    const uid = uuidv4();
    const timestamp = new Date().valueOf();
    const md5uid = md5(`${timestamp} + ${uid} + traceId`)

    return md5uid

  }

  createSpanId() {

    const uid = uuidv4();
    const timestamp = new Date().valueOf();
    const md5uid = md5(`${timestamp} + ${uid} + spanId`)

    return md5uid
  }
}

const tracer = new mageTracer()


const testSingleTracer = (times) => {
  const traceIdArr = []

  for(let a = 0; a < times; a ++) {

    const uuid = tracer.createTraceId()
    traceIdArr.push(uuid)

  }

  const uniqueCount = Array.from(new Set(traceIdArr)).length

  const passed = uniqueCount === times

  return passed

}

const testBatcherTracer = (count, times) => {

  let allPassed = true

  for (let a = 0; a < count; a ++) {

    const single = testSingleTracer(times)
    if (!single) {
      allPassed = false
    }

  }

  console.info("====== 💪 single test count ========", times)
  console.info("====== 🙏 all test count ========", count)
  console.info("====== 👏 all test result ========", allPassed)

  return allPassed
}


testBatcherTracer(10, 10000)


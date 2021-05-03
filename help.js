const help = (action, object) => {
  if (!typeof action === "string") throw new Error(`Help action, ${action}, must be a string.`)
  if (!typeof object === "object") throw new Error(`Help object, ${object}, must be an object.`)
  if (action === "say") {
    if (message in object && typeof object.message === "string") console.log(object.message); else throw new Error(`Please supply a stringified message of ${object.message} to say!`)
  } else if (action === "warn") {
    if (message in object && typeof object.message === "string") console.warn(object.message); else throw new Error(`Please supply a stringified message of ${object.message} to warn!`)
  } else if (action === "error") {
    if (message in object && typeof object.message === "string") console.error(object.message); else throw new Error(`Please supply a stringified message of ${object.message} to error!`)
  } else if (action === "start-stopwatch") {
    if (name in object && typeof object.name === "string") console.time(name); else throw new Error(`Please supply a stringified name of ${object.name} for the stopwatch to start!`)
  } else if (action === "stop-stopwatch") {
    if (name in object && typeof object.name === "string") console.timeEnd(name); else throw new Error(`Please supply a stringified name of ${object.name} for the stopwatch to stop!`)
  } else {
    throw new Error(`${action} is not a valid action!`)
  }
}

module.exports = help

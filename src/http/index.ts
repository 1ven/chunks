interface Back {
  accept(socket: net.Socket): void,
}

interface Front {
  start(): void,
}

export {
  Back,
}

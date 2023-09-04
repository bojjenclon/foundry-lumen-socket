Hooks.once('ready', () => {
  const essence_used = (id) => {
    const msg = game.messages.find(m => m.id === id)
    if (msg) {
      msg.delete()
    }
  }

  setTimeout(() => {
    const socket = socketlib.registerModule('lumen-socket')
    socket.register('essence_used', essence_used)
    
    window.lumen = window.lumen || {}
    window.lumen.socket = socket
  }, 100)
})

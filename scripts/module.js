let socket

Hooks.once('socketlib.ready', () => {
  socket = socketlib.registerModule('lumen-socket')
  socket.register('essence_used', essence_used)
})

function essence_used(id) {
  const msg = game.messages.find(m => m.id === id)
  if (msg) {
    msg.delete()
  }
}

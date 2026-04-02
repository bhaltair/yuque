# mitt

Tiny 200b functional Event Emitter / pubsub. 



```css
import mitt from 'mitt'

const emitter = mitt()

// listen to an event
emitter.on('foo', e => console.log('foo', e) )

// listen to all events
emitter.on('*', (type, e) => console.log(type, e) )

// fire an event
emitter.emit('foo', { a: 'b' })

// clearing all events
emitter.all.clear()

// working with handler references:
function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten 
```



> 更新: 2023-07-31 17:16:58  
> 原文: <https://www.yuque.com/u3641/dxlfpu/gqms4ww475gxc3qg>
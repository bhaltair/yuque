# clsx

A tiny (234B) utility for constructing className strings conditionally



```json
className={clsx('stroke-steel/30', tooltipOpen ? 'opacity-100' : 'opacity-0')}

// Strings (variadic)
clsx('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
clsx({ foo:true, bar:false, baz:isTrue() });
//=> 'foo baz'

// Objects (variadic)
clsx({ foo:true }, { bar:false }, null, { '--foobar':'hello' });
//=> 'foo --foobar'

// Arrays
clsx(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

```



> 更新: 2023-07-31 16:02:45  
> 原文: <https://www.yuque.com/u3641/dxlfpu/fmem1shl70lxxdm6>
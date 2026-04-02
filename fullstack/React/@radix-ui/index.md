# @radix-ui

**<font style="color:#DF2A3F;">Radix Primitives</font>** 是一个低级 UI 组件库，专注于辅助功能、自定义和开发人员体验。您可以将这些组件用作设计系统的基础层，也可以逐步采用它们。



```json
"@radix-ui/react-dialog": "^1.0.4",
"@radix-ui/react-label": "^2.0.2",
"@radix-ui/react-navigation-menu": "^1.1.3",
"@radix-ui/react-popover": "^1.0.6",
"@radix-ui/react-slot": "^1.0.2",
"@radix-ui/react-tabs": "^1.0.4",
```



```javascript
// index.jsx
import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import './styles.css';

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent">
        Some content
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
```

# style
css-in-js

```javascript
import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { styled } from '@stitches/react';

const StyledItem = styled(Accordion.Item, {
  borderBottom: '1px solid gainsboro',
});

const AccordionDemo = () => (
  <Accordion.Root>
    <StyledItem value="item-1" />
    {/* … */}
  </Accordion.Root>
);

export default AccordionDemo;
```



> 更新: 2023-07-31 15:58:12  
> 原文: <https://www.yuque.com/u3641/dxlfpu/iezawvl7g7feanv9>
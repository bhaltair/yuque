# floating-ui

浮动 UI 是一个小型库，可帮助您创建“浮动”元素，例如工具提示、弹出框、下拉列表等。



```css
import {
	useFloating,
	useInteractions,
	useClick,
	useDismiss,
	offset,
	arrow,
} from '@floating-ui/react';


const {
  x,
  y,
  reference,
  floating,
  strategy,
  context,
  middlewareData,
  placement: finalPlacement,
} = useFloating({
  placement,
  open,
  onOpenChange: (updatedIsOpen) => {
    if (open !== updatedIsOpen && updatedIsOpen && onOpen) {
      onOpen();
    }
    setOpen(updatedIsOpen);
  },
  whileElementsMounted: autoUpdate,
  middleware: [offset(5), flip(), shift(), arrow({ element: arrowRef, padding: 6 })],
});

const { getReferenceProps, getFloatingProps } = useInteractions([
  useHover(context, { move: true, delay: TOOLTIP_DELAY }),
  useFocus(context),
  useRole(context, { role: 'tooltip' }),
  useDismiss(context),
]);
```



> 更新: 2023-07-31 16:59:04  
> 原文: <https://www.yuque.com/u3641/dxlfpu/qighhdruh4gbyfsi>
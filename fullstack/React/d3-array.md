# d3-array

```css
import { bisector, extent } from 'd3-array';

export type EpochGasInfo = {
	epoch: number;
	referenceGasPrice: bigint | null;
	date: Date | null;
};

const bisectEpoch = bisector(({ epoch }: EpochGasInfo) => epoch).center;

const xScale = useMemo(
  () =>
    scaleLinear<number>({
      domain: extent(adjData, ({ epoch }) => epoch) as [number, number],
      range: [SIDE_MARGIN, width - SIDE_MARGIN],
    }),
  [width, adjData],
);

```

# bisector 平分
```css
var data = [
  {date: new Date(2011, 1, 1), value: 0.5},
  {date: new Date(2011, 2, 1), value: 0.6},
  {date: new Date(2011, 3, 1), value: 0.7},
  {date: new Date(2011, 4, 1), value: 0.8}
];

var bisectDate = d3.bisector(function(d) { return d.date; }).right;

```



> 更新: 2023-07-31 16:53:10  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ytaa26a40cyups1f>
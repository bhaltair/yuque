# zod

**<font style="color:#DF2A3F;">TypeScript-first schema validation with static type inference</font>**

**<font style="color:#DF2A3F;"></font>**

**<font style="color:#DF2A3F;">Zod 旨在尽可能对开发人员友好。目标是消除重复的类型声明。使用 Zod，您只需声明一次验证器，Zod 将自动推断静态 TypeScript 类型。将较简单的类型组合成复杂的数据结构很容易</font>**



# useZodForm
```javascript

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { UseFormProps } from 'react-hook-form';
import type { ZodSchema, TypeOf } from 'zod';

const useZodForm = <T extends ZodSchema<any>>({
	schema,
	...formConfig
}: UseZodFormProps<T>) =>
	useForm({
		...formConfig,
		resolver: zodResolver(schema),
	});

```



```javascript
import { useZodForm } from '~/hooks/useZodForm';
import type { TypeOf } from 'zod';

const argsSchema = z.object({
	params: z.optional(z.array(z.string().trim().min(1))),
	types: z.optional(z.array(z.string().trim().min(1))),
});

const { handleSubmit, formState, register, control } = useZodForm({
  schema: argsSchema,
});

const formTypeInputs = useWatch({ control, name: 'types' });

```



# Comparison
+ [Comparison](https://github.com/colinhacks/zod#comparison)
    - [Joi](https://github.com/colinhacks/zod#joi)
    - [Yup](https://github.com/colinhacks/zod#yup)
    - [io-ts](https://github.com/colinhacks/zod#io-ts)
    - [Runtypes](https://github.com/colinhacks/zod#runtypes)
    - [Ow](https://github.com/colinhacks/zod#ow)

  


```javascript
import * as z from 'zod';

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

const userData = {
  username: 'john_doe',
  email: 'john@example.com',
};

const result = userSchema.safeParse(userData);

if (result.success) {
  console.log('Data is valid:', result.data);
} else {
  console.log('Data is invalid:', result.error);
}
```

Zod 还提供了许多其他功能，例如自定义错误消息、异步验证和类型推断



# type infer
```javascript
// all properties are required by default
const Dog = z.object({
  name: z.string(),
  age: z.number(),
});

// extract the inferred type like this
type Dog = z.infer<typeof Dog>;

// equivalent to:
type Dog = {
  name: string;
  age: number;
};
```



> 更新: 2023-07-31 15:56:12  
> 原文: <https://www.yuque.com/u3641/dxlfpu/lmaf5lmhhdxkugbn>
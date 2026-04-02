# yup schema 校验

yup是一个schema校验工具库，一般用于 formik 的表达检测



```javascript
let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

const validated = schema.validateSync({
  name: 'Hulk',
  age: 18,
});

```



# Formik
```javascript
const validation = Yup.object({
	timer: Yup.number()
		.integer()
		.required()
		.min(AUTO_LOCK_TIMER_MIN_MINUTES)
		.max(AUTO_LOCK_TIMER_MAX_MINUTES)
		.label('Auto-lock timer'),
});

<Formik
  initialValues={{ timer: autoLockInterval }}
  validationSchema={validation}
  onSubmit={async ({ timer }) => {
    if (timer !== null) {
      try {
        await dispatch(setKeyringLockTimeout({ timeout: timer })).unwrap();
        toast.success('Auto lock updated');
      } catch (e) {
        // log it?
      }
    }
  }}
  enableReinitialize={true}
/>
        
```

# Form-level Validation
```javascript
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
```

# with test
```javascript
const validation = object({
	privateKey: yupString()
		.ensure()
		.trim()
		.required()
		.transform((value: string) => {
			if (value.startsWith('0x')) {
				return value.substring(2);
			}
			return value;
		})
		.test(
			'valid-hex',
			`\${path} must be a hexadecimal value. It may optionally begin with "0x".`,
			(value: string) => {
				try {
					hexToBytes(value);
					return true;
				} catch (e) {
					return false;
				}
			},
		)
		.test('valid-bytes-length', `\${path} must be either 32 or 64 bytes.`, (value: string) => {
			try {
				const bytes = hexToBytes(value);
				return [32, 64].includes(bytes.length);
			} catch (e) {
				return false;
			}
		})
		.label('Private Key'),
});
```

# type schema
<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">type schema</font><font style="color:rgb(37, 41, 51);"> </font><font style="color:rgb(37, 41, 51);">主要包含有</font><font style="color:rgb(37, 41, 51);"> </font>[mixed](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fyup%23mixed)<font style="color:rgb(37, 41, 51);">、</font>[string](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fyup%23string)<font style="color:rgb(37, 41, 51);">、</font>[number](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fyup%23number)<font style="color:rgb(37, 41, 51);">、</font>[boolean](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fyup%23boolean)<font style="color:rgb(37, 41, 51);">、</font>[date](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fyup%23date)<font style="color:rgb(37, 41, 51);">、</font>[array](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fyup%23array)<font style="color:rgb(37, 41, 51);">、</font>[object](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fyup%23object)<font style="color:rgb(37, 41, 51);"> </font><font style="color:rgb(37, 41, 51);">等。</font>

  


# 其他
+ [Yup](https://www.npmjs.com/package/@hookform/resolvers#Yup)
+ [Zod](https://www.npmjs.com/package/@hookform/resolvers#Zod)
+ [Superstruct](https://www.npmjs.com/package/@hookform/resolvers#Superstruct)
+ [Joi](https://www.npmjs.com/package/@hookform/resolvers#Joi)







> 更新: 2023-07-31 14:33:47  
> 原文: <https://www.yuque.com/u3641/dxlfpu/gsl2e2p0fx3a4onx>
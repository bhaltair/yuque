# zxcvbn password strength

Realistic password strength estimation



```css
export const passwordValidation = Yup.string()
	.ensure()
	.required('Required')
	.test({
		name: 'password-strength',
		test: (password: string) => {
			return zxcvbn(password).score > 2;
		},
		message: ({ value }) => {
			const {
				feedback: { warning, suggestions },
			} = zxcvbn(value);
			return `${addDot(warning) || 'Password is not strong enough.'}${
				suggestions ? ` ${suggestions.join(' ')}` : ''
			}`;
		},
	});
```



> 更新: 2023-07-31 17:18:35  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zewg4nunze047o17>
# CVA class-variance-authority

[Class Variance Authority](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjx8Y_Wn7iAAxXvm1YBHcdwBNcQFnoECA0QAQ&url=https%3A%2F%2Fgithub.com%2Fjoe-bell%2Fcva&usg=AOvVaw3NFnvL2r2zUD2XB3LOd9YL&opi=89978449)



React with Tailwind CSS | cva



Class Variance Authority



# 创建可重复使用的类
在使用 CVA 创建可变样式时，您需要创建可重复使用的类。这些类应该是具有明确用途的，以便您可以轻松地将它们应用到您的组件中。遵循 BEM 命名约定可以帮助您创建易于理解和可重复使用的类。



```javascript
const btnClass = cva({
  base: 'btn',
  color: 'white',
  backgroundColor: 'blue',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '14px',
});

// 变体
const hoverClass = cva({
  hover: {
    backgroundColor: 'red',
    color: 'white',
  },
});

// 响应式
const layoutClass = cva({
  base: 'container',
  '@media (max-width: 768px)': {
    display: 'block',
  },
  '@media (min-width: 768px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// 动画
const fadeInClass = cva({
  animationName: 'fadeIn',
  animationDuration: '1s',
  animationFillMode: 'both',
});

const MyComponent = () => {
  return <div className={fadeInClass}>Hello, world!</div>;
};
```



# css-in-js
| **<font style="color:rgb(46, 40, 57);">Library & Usage Rank</font>** | <font style="color:rgb(51, 51, 51) !important;">2020</font> | <font style="color:rgb(51, 51, 51) !important;">2021</font> | <font style="color:rgb(51, 51, 51) !important;">2022</font> |
| --- | --- | --- | --- |
| [Styled Components](https://stackdiary.com/css-in-js-libraries/#styled-components) | 1 | 1 | 1 |
| [CSS Modules](https://stackdiary.com/css-in-js-libraries/#css-modules) | 2 | 2 | 2 |
| [Styled JSX](https://stackdiary.com/css-in-js-libraries/#styled-jsx) | 3 | 3 | 3 |
| [Emotion](https://stackdiary.com/css-in-js-libraries/#emotion) | 4 | 4 | 4 |
| [JSS](https://stackdiary.com/css-in-js-libraries/#jss) | 5 | 5 | 5 |


# button
```javascript
const ButtonVariants = cva(
    /* button base style */
    "h-fit text-white uppercase transition-colors duration-150",
    {
        variants: {
            /* button colors */
            intent: {
                primary:
                    "bg-green-500 hover:bg-green-600",
                secondary:
                    "bg-red-500 hover:bg-red-600",
                default:
                    "bg-gray-500 hover:bg-gray-600",
            },

            /* button sizes */
            size: {
                small: ["text-sm", "py-1", "px-2"],
                medium: ["text-base", "py-2", "px-4"],
                large: ["text-lg", "py-4", "px-8"],
            },

            /* button roundness */
            roundness: {
                square: "rounded-none",
                round: "rounded-md",
                pill: "rounded-full",
            },
        },

        // defaults
        defaultVariants: {
            intent: "default",
            size: "medium",
            roundness: "round"
        },
    }
);

export default function Button({ intent, size, roundness, children }) {
    return (
        <button className={ButtonVariants({ intent, size, roundness })}>{children}</button>
    )
}

import Button from "./components/button";

function App() {
  return (
    <div>
    	This is a small rounded primary button: 
      <Button intent="primary" size="small" roundness="rounded">Button</Button>
    </div>
  )
}

```

# BEM
```javascript
import { cva } from "class-variance-authority";
 
const button = cva("button", {
  variants: {
    intent: {
      primary: "button--primary",
      secondary: "button--secondary",
    },
    size: {
      small: "button--small",
      medium: "button--medium",
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", class: "button--primary-small" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});
 
button();
// => "button button--primary button--medium"
 
button({ intent: "secondary", size: "small" });
// => "button button--secondary button--small"
```

# CSS Modules
```javascript
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./button.module.css";

const button = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", className: styles.primaryMedium },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

```

# TailwindCSS
```javascript
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

```



> 更新: 2023-07-31 14:16:18  
> 原文: <https://www.yuque.com/u3641/dxlfpu/uof18xzfbelr7b0t>
# Objective-C

Objective-C是C的超集

Objective-C默认扩展名为 .m 。头文件扩展名跟普通C一样 .h 。

Objective-C推荐引入头文件的方式为：#import ，等同于C++的#include



# Hello world
```txt
#import <Foundation/Foundation.h>

@interface SampleClass:NSObject
- (void)sampleMethod;
@end

@implementation SampleClass

- (void)sampleMethod {
   NSLog(@"Hello, World! \n");
}

@end

int main() {
   /* my first program in Objective-C */
   SampleClass *sampleClass = [[SampleClass alloc]init];
   [sampleClass sampleMethod];
   return 0;
}
//更多请阅读：https://www.yiibai.com/objective_c/objective_c_program_structure.html




```



# 函数声明
```java
- (int) max: (int)a and: (int)b;

- (返回类型) 函数名: (参数类型1)参数名1
name2: (参数类型2)参数名2 ...
name: (参数类型)参数名;
```



+ 使用“+”表示这是一个类方法，直接使用类调用（不需要实例），类似于Java中的static静态方法
+ –：表示这是一个对象函数/方法（必须由实例调用），也就是说不能在一个对象外部进行声明，在对象外部声明，可以使用extern关键字，但是不能使用“-”。
+ name2: 连接参数



```txt
#import <Foundation/Foundation.h>

@interface SampleClass:NSObject
// 函数声明
- (int)max:(int)num1 andNum2:(int)num2;
@end

@implementation SampleClass

// 返回两个数的最大值
- (int)max:(int)num1 andNum2:(int)num2 {

    int result;

    if (num1 > num2) {
       result = num1;
   } else {
       result = num2;
   }

    return result; 
}

@end

int main () {

    int a = 100;
    int b = 200;
    int ret;

    SampleClass *sampleClass = [[SampleClass alloc]init];

    // 调用函数
    ret = [sampleClass max:a andNum2:b];

    NSLog(@"Max value is : %d\n", ret );
    return 0;
}
```

# 变量
```txt
#import <Foundation/Foundation.h>

// Variable declaration:
extern int a, b;
extern int c;
extern float f;

int main () {
  /* variable definition: */
  int a, b;
  int c;
  float f;

  /* actual initialization */
  a = 10;
  b = 20;

  c = a + b;
  NSLog(@"value of c : %d \n", c);

  f = 80.0/3.0;
  NSLog(@"value of f : %f \n", f);

  return 0;
}
//更多请阅读：https://www.yiibai.com/objective_c/objective_c_variables.html


```

# #pragma mark
在objective-c中定义多个类之后,作用#pragma mark 对类进行分组使用这种代码可以在导航栏的文件栏查看到这一点



> 更新: 2023-07-26 16:23:52  
> 原文: <https://www.yuque.com/u3641/dxlfpu/wxsodf>
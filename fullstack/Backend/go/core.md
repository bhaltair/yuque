# core

# basic
main函数必须有，入口

```javascript
package main

import "fmt"

func main() {
  	var a string = "Runoob"
    var b, c int = 1, 2
    fmt.Println("Hello, World!")
    fmt.Println(a)
}
```



执行

```javascript
go run hello.go
go build hello.go
sh ./hello
```



## 变量
:= 只可以在函数中使用

```bash
func() {
  power := 9000

  // 多个变量
  name, power := "Goku", 9000
}


// 常量
const s string = "constant"
```

## 类型


值类型：int float bool string 



+ 布尔 bool
+ 数字 init
+ 字符串 string
+ 派生
    - 指针
    - 数组
    - struct
    - Channel
    - 函数
    - 切片 slice
    - 接口
    - Map



忽略类型

可以省略类型说明符 [type]，因为编译器可以根据变量的值来推断其类型。



字符串

```go
stra := "the spice must flow"
byts := []byte(stra)
strb := string(byts)
```



## 接口


接口是定义了合约但并没有实现的类型



<font style="background-color:#FADB14;">接口有助于将代码与特定的实现进行分离。</font>



```go
// 这里是一个几何体的基本接口。
type geometry interface {
    area() float64
    perim() float64
}

type rect struct {
    width, height float64
}

// 要在 Go 中实现一个接口，我们就需要实现接口中的所有方法。
// 这里我们在 `rect` 上实现了 `geometry` 接口。
func (r rect) area() float64 {
    return r.width * r.height
}
func (r rect) perim() float64 {
    return 2*r.width + 2*r.height
}

r := rect{width: 3, height: 4}
```



**空接口**



因为空接口没有方法，可以说所有类型都实现了空接口，并且由于空接口是隐式实现的，因此每种类型都满足空接口契约。



```go
func add(a interface{}, b interface{}) interface{} {
  return a.(int) + b.(int)
}
```



## map
```go
lookup := make(map[string]int)
lookup["goku"] = 9001
power, exists := lookup["vegeta"]

// 键的数量
total := len(lookup)
```

## 包管理


+ 当你想去导入一个包的时候，你需要指定完整路径
+ 当你想去命名一个包的时候，可以通过 package 关键字，提供一个值，而不是完整的层次结构
+ 需要注意包名和文件夹名是一样的。
+ 可见性：如果类型或者函数名称以一个大写字母开始，它就具有了包外可见性。

```go
package db

import (
  "github.com/mattn/go-sqlite3"
)

type Item struct {
  Price float64
}

func LoadItem(id int) *Item {
  return &Item{
    Price: 9.001,
  }
}
```



使用 go mod 的好处就是不必强制把项目放到 GOPATH 下了



**依赖管理**

```go
// 更新所有包
go get -u
```

## 数组


常用数据结构

+ 数组
+ 切片
+ 字典 map



```javascript
// 数组
var n [10]int
for i = 0; i < 10; i++ {
  n[i] = i + 100
}
fmt.Println(n)

// 声明一个数组
var scores [10]int
scores[0] = 339

len(scores)

// 我们可以在初始化数组的时候指定值：
scores := [4]int{9001, 9333, 212, 33}

// 迭代
for index, value := range scores {
	fmt.Println(value)
}
```

## 
## 结构体


+ 因为没有面向对象，它没有对象和继承的概念
+ 类似 JS 中的对象，区别很大
+ 可以将一些方法和结构体关联
+ 通过组合实现继承



```go
type Saiyan struct {
  Name string
  Power int
}

goku := Saiyan{
  Name: "Goku",
  Power: 9000,
}

goku := Saiyan{}

// `&` 前缀生成一个结构体指针。
goku := &Saiyan{Name: "Goku"}

// 省略字段名
goku := Saiyan{"Goku", 9000}
```

**组合和继承**



go 只有组合，没有 Java 的继承

```go
type Person struct {
  Name string
}

// 方法
func (p *Person) Introduce() {
  fmt.Printf("Hi, I'm %s\n", p.Name)
}

type Saiyan struct {
  *Person
  Power int
}

// 使用它
goku := &Saiyan{
  Person: &Person{"Goku"},
  Power: 9001,
}
goku.Introduce()
```

**方法**



*Saiyan 类型是 Super 方法的接受者



```go
type Saiyan struct {
  Name string
  Power int
}

// 类似 Saiyan.Super
func (s *Saiyan) Super() {
  s.Power += 10000
}

// 调用
goku := new(Saiyan)
// same as
goku := &Saiyan{}

goku := &Saiyan{"Goku", 9001}
goku.Super()
fmt.Println(goku.Power) // 将会打印出 19001
```

## 函数


```go
func log(message string) {
}

// 一个返回值
func add(a int, b int) int {
}

// 指定返回值
func add(a int, b int) result int {
    result := a + b
    return
}

// 两个返回值
func power(name string) (int, bool) {
}

// _ 代表不使用
_, exists := power("goku")
if exists == false {
  // handle this error case
}
```



**省略用法**

```go
// 如果参数有相同的类型，您可以用这样一个简洁的用法
func add(a, b int) int {

}
```

## 指针


一个指针变量指向了一个值的内存地址。

```javascript
package main

import "fmt"

func main() {
   var a int= 20   /* 声明实际变量 */
   var ip *int        /* 声明指针变量 */

   ip = &a  /* 指针变量的存储地址 */

   fmt.Printf("a 变量的地址是: %x\n", &a  )

   /* 指针变量的存储地址 */
   fmt.Printf("ip 变量储存的指针地址: %x\n", ip )

   /* 使用指针访问值 */
   fmt.Printf("*ip 变量的值: %d\n", *ip )
}
```

**镜像复制**

 Go 中传递参数到函数的方式：镜像复制



**指针和值的传递**

```go
func main() {
  goku := Saiyan{"Power", 9000}
  Super(goku)
  fmt.Println(goku.Power)
}

func Super(s Saiyan) {
  s.Power += 10000
}

// 返回9000
```



为了达到你的期望，我们可以传递一个指针到函数中：



+ 使用了 & 操作符以获取值的地址（它就是 取地址 操作符）
+ Super 期望一个地址类型 *Saiyan，这里 *X 意思是 指向类型 X 值的指针



```go
func main() {
  goku := &Saiyan{"Power", 9000}
  Super(goku)
  fmt.Println(goku.Power)
}

func Super(s *Saiyan) {
  s.Power += 10000
}
```

我们仍然传递了一个 goku 的值的副本给 Super，但这时 goku 的值其实是一个地址。所以这个副本值也是一个与原值相等的地址



**函数类型**

```go
package main

import (
  "fmt"
)

type Add func(a int, b int) int

func main() {
  fmt.Println(process(func(a int, b int) int{
      return a + b
  }))
}

func process(adder Add) int {
  return adder(1, 2)
}
```



## 并发
![1614490997653-7d465561-c996-4c48-b801-020712f5247a.png](./img/cZbR_Hd5yW6acmsE/1614490997653-7d465561-c996-4c48-b801-020712f5247a-509875.png)



**协程 和 通道**

在 协程 中运行的代码可以与其他代码同时运行。



**同步问题**

Go 语言的并发同步模型是 CSP，通过在 goroutine 之前传递消息来同步，而不是通过对数据进行加锁来实现同步访问。





## 切片


数组非常高效但是很死板。很多时候，我们在事前并不知道数组的长度是多少。



针对这个情况，slices （切片） 出来了。



> 在 Go 语言中，我们很少直接使用数组。取而代之的是使用切片。切片是轻量的包含并表示数组的一部分的结构。
>



**创建切片**

```javascript
// 1 声明数组
scores := []int{1,4,293,4,9}

// 2 创建了一个长度是 0 ，容量是 10 的切片。    
scores := make([]int, 10)
```



错误的例子

```javascript
func main() {
  scores := make([]int, 0, 10)
  scores[7] = 9033
  fmt.Println(scores)
}

// 切片长度为0
```



扩展切片的方式

```javascript
// 想去设置索引为 7 的元素值
func main() {
  scores := make([]int, 0, 10)
  scores = append(scores, 5)
  fmt.Println(scores) // prints [5]
}

func main() {
  scores := make([]int, 0, 10)
  scores = scores[0:8]
  scores[7] = 9033
  fmt.Println(scores)
}

```

**Go 使用 2x 算法来增加数组长度**



**这有四种方式初始化一个切片：**

```javascript
names := []string{"leto", "jessica", "paul"}
checks := make([]bool, 10)
var names []string
scores := make([]int, 0, 20)
```





**迭代**



range 关键字用于 for 循环中迭代数组(array)、切片(slice)、通道(channel)或集合(map)的元素



```javascript
//range也可以用在map的键值对上。
kvs := map[string]string{"a": "apple", "b": "banana"}
for k, v := range kvs {
  fmt.Printf("%s -> %s\n", k, v)
}
```

## 错误处理


错误处理方式是返回值

```go
  n, err := strconv.Atoi(os.Args[1])
  if err != nil {
    fmt.Println("not a valid number")
  } else {
    fmt.Println(n)
  }

```



panic，表示没有处理好的错误

```go
    _, err := os.Create("/tmp/file")
    if err != nil {
        panic(err)
    }
```

## 
## range 遍历
```go
nums := []int{2, 3, 4}
sum := 0
for _, num := range nums {
	sum += num
}

// 遍历map
kvs := map[string]string{"a": "apple", "b": "banana"}
for k, v := range kvs {
	fmt.Printf("%s -> %s\n", k, v)
}

```

## defer 延迟调用
Defer 被用来确保一个函数调用在程序执行结束前执行，类似finally

```go
    f := createFile("/tmp/defer.txt")
    defer closeFile(f)
    writeFile(f)
```

## 工具函数
```go
// strings
p("Replace:   ", s.Replace("foo", "o", "0", -1))
p("Index:     ", s.Index("test", "e"))

// printf
// 需要打印值的类型，使用 `%T`。
fmt.Printf("%T\n", p)
https://learnku.com/docs/gobyexample/2020/string-formatting/6297


// copy
// append
```

## json 解析
```go
import "encoding/json"

mapD := map[string]int{"apple": 5, "lettuce": 7}
mapB, _ := json.Marshal(mapD)
fmt.Println(string(mapB))


```



## 时间
```go
import "time"
now := time.Now()
secs := now.Unix()

then := time.Date(
        2009, 11, 17, 20, 34, 58, 651387237, time.UTC)

p := fmt.Println
p(then.Year())
p(then.Month())
p(then.Day())

p(then.Before(now))
```

## 随机数
```go
import "math/rand"

// `0 <= n <= 100`。
fmt.Print(rand.Intn(100), ",")
```

## url
```go
import "net/url"

s := "postgres://user:pass@host.com:5432/path?k=v#f"

// 解析这个 URL 并确保解析没有出错。
u, err := url.Parse(s)
if err != nil {
    panic(err)
}


```

## 文件


```go
"path/filepath"
"os"

// 您应该总是使用 `Join` 代替手动拼接 `/` 和 `\`。
fmt.Println(filepath.Join("dir1//", "filename"))
fmt.Println(filepath.Join("dir1/../dir1", "filename"))

err := os.Mkdir("subdir", 0755)
```

## 命令行参数 Arguments
```go
argsWithProg := os.Args
argsWithoutProg := os.Args[1:]
```

## 环境变量
```go
os.Setenv("FOO", "1")
fmt.Println("FOO:", os.Getenv("FOO"))
fmt.Println("BAR:", os.Getenv("BAR"))


```

# faq
## framework
![1601454527913-e5769354-7a7a-42d2-90a7-0b9628036d30.png](./img/cZbR_Hd5yW6acmsE/1601454527913-e5769354-7a7a-42d2-90a7-0b9628036d30-706366.png)



## gin


[https://github.com/gin-gonic/gin](https://github.com/gin-gonic/gin)



```javascript
go mod init
go run gin.go
```



教程 [https://qiita.com/hyo_07/items/59c093dda143325b1859](https://qiita.com/hyo_07/items/59c093dda143325b1859)



## Golang 1.13: 解决国内 go get 无法下载的问题
![1601455728203-2570b4b3-9056-4e35-883c-43608ea7db62.png](./img/cZbR_Hd5yW6acmsE/1601455728203-2570b4b3-9056-4e35-883c-43608ea7db62-819801.png)



## protobuf
>  ProtoBuf 是google团队开发的用于高效存储和读取结构化数据的工具。什么是结构化数据呢，正如字面上表达的，就是带有一定结构的数据。比如电话簿上有很多记录数据，每条记录包含姓名、ID、邮件、电话等，这种结构重复出现。
>



XML、JSON 也可以用来存储此类结构化数据，但是使用ProtoBuf表示的数据能更加高效，并且将数据压缩得更小。



在go中使用google protobuf，有两个可选用的包goprotobuf（go官方出品）和gogoprotobuf。



用protobuf序列化后的大小是json的10分之一,是xml格式的20分之一,但是性能却是它们的5~100倍



## 和 node.js 对比


[https://zhuanlan.zhihu.com/p/29847628](https://zhuanlan.zhihu.com/p/29847628)



## nouns
+ zero value
+ gogo
+ protobuf
    - proto3 里咩有 optional 的
+ grpc



> 更新: 2021-05-08 14:38:45  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zck3c6>
# gin

[https://github.com/gin-gonic/gin](https://github.com/gin-gonic/gin)



```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
```



run



```go
# run example.go and visit 0.0.0.0:8080/ping (for windows "localhost:8080/ping") on browser
$ go run example.go
```



# examples


[https://github.com/gin-gonic/examples](https://github.com/gin-gonic/examples)



## restful
```go
func main() {
	// Creates a gin router with default middleware:
	// logger and recovery (crash-free) middleware
	router := gin.Default()
    
    // r := gin.New()
    // r.Use(gin.Logger())

    // 静态文件
	router.Static("/assets", "./assets")
	router.StaticFS("/more_static", http.Dir("my_file_system"))
	router.StaticFile("/favicon.ico", "./resources/favicon.ico")    

	router.GET("/someGet", getting)
	router.POST("/somePost", posting)
	router.PUT("/somePut", putting)
	router.DELETE("/someDelete", deleting)
	router.PATCH("/somePatch", patching)
	router.HEAD("/someHead", head)
	router.OPTIONS("/someOptions", options)
    
    // params
	router.GET("/user/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.String(http.StatusOK, "Hello %s", name)
	})  
    
    // query
	router.GET("/welcome", func(c *gin.Context) {
		firstname := c.DefaultQuery("firstname", "Guest")
		lastname := c.Query("lastname") // shortcut for c.Request.URL.Query().Get("lastname")

		c.String(http.StatusOK, "Hello %s %s", firstname, lastname)
	})  
    
    // post 
	router.POST("/post", func(c *gin.Context) {

		id := c.Query("id")
		page := c.DefaultQuery("page", "0")
		name := c.PostForm("name")
		message := c.PostForm("message")

		fmt.Printf("id: %s; page: %s; name: %s; message: %s", id, page, name, message)
	})
    
    // json
	r.GET("/someJSON", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "hey", "status": http.StatusOK})
	})    
    
    // 重定向
    r.GET("/test", func(c *gin.Context) {
        c.Redirect(http.StatusMovedPermanently, "http://www.google.com/")
    })    

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	router.Run()
	// router.Run(":3000") for a hard coded port
}
```



build

```go
go build main.go
// 上面的命令将构建一个可执行的二进制文件 main ，你可以使用 $ ./main 命令来运行构建号的应用。 哇，我们的 todo 应用现在运行在了本地的 8080 端口了。 它将在终端显示调试日志，因为 gin 默认以 debug 模式运行在 8080 端口。
```

## todo-mvc


[https://medium.com/@_ektagarg/golang-a-todo-app-using-gin-980ebb7853c8](https://medium.com/@_ektagarg/golang-a-todo-app-using-gin-980ebb7853c8)



to view code 



[https://github1s.com/ektagarg/gin-gorm-todo-app](https://github1s.com/ektagarg/gin-gorm-todo-app)



> 更新: 2021-03-10 10:20:43  
> 原文: <https://www.yuque.com/u3641/dxlfpu/yddfoo>
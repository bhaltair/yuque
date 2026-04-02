# JDBC

## 介绍


<font style="color:#666666;">JDBC是Java DataBase Connectivity的缩写，它是Java程序访问数据库的标准接口。</font>

<font style="color:#666666;"></font>

Java DataBase Connectivity



JDBC 驱动由数据库厂商提供，只要实现了 JDBC 接口就行。



引入依赖

```yaml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.47</version>
    <scope>runtime</scope>
</dependency>
```



## 一个 Demo
```java
static List<Student> queryStudents() throws SQLException {
    List<Student> students = new ArrayList<>();
    // 获取连接
    try (Connection conn = DriverManager.getConnection(jdbcUrl, jdbcUsername, jdbcPassword)) {
        try (PreparedStatement ps = conn.prepareStatement("SELECT * FROM students WHERE grade = ? AND score >= ?")) {
            ps.setInt(1, 3); // 第一个参数grade=?
            ps.setInt(2, 90); // 第二个参数score=?
            
            // 执行sql语句，并接收返回结果
            try (ResultSet rs = ps.executeQuery()) {
                
                // 处理结果
                while (rs.next()) {
                    students.add(extractRow(rs));
                }
            }
        }
    }
    return students;
}

// 释放资源
con.close();
stat.close();
rs.close();
```



现在这种方式比较少了，都是用 Mybatis





## 增删改查的 Demo


数据准备

```sql
-- 创建db14数据库
CREATE DATABASE db14;
-- 使用db14数据库
USE db14;
-- 创建student表
CREATE TABLE student(
  sid INT PRIMARY KEY AUTO_INCREMENT, -- 学生id
  NAME VARCHAR(20),         -- 学生姓名
  age INT,              -- 学生年龄
  birthday DATE           -- 学生生日
);
-- 添加数据
INSERT INTO student VALUES (NULL,'张三',23,'1999-09-23'),(NULL,'李四',24,'1998-08-10'),(NULL,'王五',25,'1996-06-06'),(NULL,'赵六',26,'1994-10-20');
```



[https://www.yuque.com/yuchenhuang/dgl7mw/5a97c02304c0ccb420de830f5d6f6d8e#693059d9](https://www.yuque.com/yuchenhuang/dgl7mw/5a97c02304c0ccb420de830f5d6f6d8e#693059d9)



+ 持久层

```java
/*
     查询所有学生信息
*/
@Override
public ArrayList<Student> findAll() {
    ArrayList<Student> list = new ArrayList<>();
    Connection con = null;
    Statement stat = null;
    ResultSet rs = null;
    try{
        //1.注册驱动
        Class.forName("com.mysql.jdbc.Driver");
        //2.获取数据库连接
        con = DriverManager.getConnection("jdbc:mysql://192.168.59.129:3306/db14", "root", "itheima");
        //3.获取执行者对象
        stat = con.createStatement();
        //4.执行sql语句，并且接收返回的结果集
        String sql = "SELECT * FROM student";
        
        // 使用prepareStatement解决SQL注入
        rs = stat.executeQuery(sql);
        //5.处理结果集
        while(rs.next()) {
            Integer sid = rs.getInt("sid");
            String name = rs.getString("name");
            Integer age = rs.getInt("age");
            Date birthday = rs.getDate("birthday");
            //封装Student对象
            Student stu = new Student(sid,name,age,birthday);
            //将student对象保存到集合中
            list.add(stu);
        }
    } catch(Exception e) {
        e.printStackTrace();
    } finally {
        //6.释放资源
        if(con != null) {
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if(stat != null) {
            try {
                stat.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if(rs != null) {
            try {
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    //将集合对象返回
    return list;
}
```

+ 业务层

```java
/*
    查询所有学生信息
*/
@Override
public ArrayList<Student> findAll() {
    // 调用持久层
    return dao.findAll();
}
```

+ 控制层

```java
/*
    查询所有学生信息
*/
@Test
public void findAll() {
    // 调用业务层
    ArrayList<Student> list = service.findAll();
    
    // 这句话什么意思
    for(Student stu : list) {
        System.out.println(stu);
    }
}
```



> 更新: 2021-04-13 21:55:48  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ntvq1f>
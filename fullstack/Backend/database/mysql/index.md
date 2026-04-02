# mysql

# install

* Docker 启动
* 直接官网下载

# GUI

* SQLyog
* MySQL Workbench
* DataGrip 推荐
* dbeaver

# 连接数据库

> mysql -uroot -p123456

# 基本概念

## 主键

## 外键

用户表的role\_id就可以称为外键

通过外键可以实现一对多、多对多和一对一的关系

## 索引

> <font style="color:rgb(102, 102, 102);">在关系数据库中，如果有上万甚至上亿条记录，在查找记录的时候，想要获得非常快的速度，就需要使用索引。</font>

```sql
ALTER TABLE students
ADD INDEX idx_score (score);
```

**对于主键，关系数据库会自动对其创建主键索引。使用主键索引的效率是最高的，因为主键会保证绝对唯一。**

# 常用命令

## 管理

创建数据库

创建表

删除数据库

删除表

## 增

增加一行数据

## 删

## 改

## 查

# 常用 SQL 语句速查

ALTER TABLE

COMMIT

CREATE INDEX 创建索引

CREATE TABLE

DELETE

DROP 删除表或索引

INSERT 添加新行

INSERT SELECT

ROLLBACK 撤销事务

UPDATE 更新一行或多行

# 事务

一个转账操作

```bash
-- 从id=1的账户给id=2的账户转账100元
-- 第一步：将id=1的A账户余额减去100
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- 第二步：将id=2的B账户余额加上100
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

// 这两条SQL语句必须全部执行，或者，由于某些原因，如果第一条语句成功，第二条语句失败，就必须全部撤销。
```

> <font style="color:#666666;">这种把多条语句作为一个整体进行操作的功能，被称为数据库</font>事务

数据库事务可以确保该事务范围内的所有操作都可以全部成功或者全部失败。如果事务失败，那么效果就和没有执行这些SQL一样，不会对数据库数据有任何改动。

**多条SQL作为一个事务执行**

> <font style="color:#666666;">使用</font>`BEGIN`<font style="color:#666666;">开启一个事务，使用</font>`COMMIT`<font style="color:#666666;">提交一个事务</font>

```bash
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```


> 更新: 2021-04-24 16:27:51  
> 原文: <https://www.yuque.com/u3641/dxlfpu/vadgzg>
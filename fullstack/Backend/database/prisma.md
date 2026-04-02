# prisma

Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL, MariaDB, SQL Server & SQLite

  
[https://github.com/prisma/prisma](https://github.com/prisma/prisma)



[https://www.prisma.io/docs/concepts/components/prisma-client/select-fields](https://www.prisma.io/docs/concepts/components/prisma-client/select-fields)



分页

```javascript
const results = await prisma.post.findMany({
  skip: 3,
  take: 4,
})
```

聚合

```javascript
const aggregations = await prisma.user.aggregate({
  _avg: {
    age: true,
  },
  where: {
    email: {
      contains: 'prisma.io',
    },
  },
  orderBy: {
    age: 'asc',
  },
  take: 10,
})

console.log('Average age:' + aggregations._avg.age)
```



> 更新: 2023-08-10 14:19:21  
> 原文: <https://www.yuque.com/u3641/dxlfpu/dyxv4e>
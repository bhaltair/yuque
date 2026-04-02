# 阿里云OSS子账户权限管理

## 限制某个bucket的读写


> RAM （Resource Access Management）是阿里云提供的资源访问控制服务。RAM Policy是基于用户的授权策略。通过设置RAM Policy，您可以集中管理您的用户（比如员工、系统或应用程序），以及控制用户可以访问您名下哪些资源的权限。比如能够限制您的用户只拥有对某一个 Bucket 的读权限。子账号是从属于主账号的，并且这些账号下不能拥有实际的任何资源，所有资源都属于主账号。
>
> 
>



新建用户 -> 加入 用户组 -> 为用户组设置RAW Policy



新用户使用AK和SK登录操作



```plain
{
    "Statement": [
        {
            "Action": [
               "oss:GetObject",
               "oss:PutObject",
               "oss:ListObjects"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:oss:*:*:chengshi2",
                "acs:oss:*:*:chengshi2/*"
            ]
        }
    ],
    "Version": "1"
}
```





> 更新: 2019-02-22 10:31:39  
> 原文: <https://www.yuque.com/u3641/dxlfpu/waha7c>
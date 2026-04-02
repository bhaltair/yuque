# JDK

For the system Java wrappers to find this JDK, symlink it with

sudo ln -sfn /usr/local/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk



If you need to have openjdk@17 first in your PATH, run:

echo 'export PATH="/usr/local/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc



For compilers to find openjdk@17 you may need to set:

export CPPFLAGS="-I/usr/local/opt/openjdk@17/include"



/Library/Java/JavaVirtualMachines/openjdk-11.jdk/Contents/Home

/usr/local/Cellar/openjdk@11/11.0.16/libexec/openjdk.jdk/Contents/Home



> 更新: 2023-08-11 17:18:08  
> 原文: <https://www.yuque.com/u3641/dxlfpu/nn58gf8xgn6h1swg>
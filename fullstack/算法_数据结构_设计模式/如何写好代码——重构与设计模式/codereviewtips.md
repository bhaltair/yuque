# code review tips

## Introduction 引言

Code reviews can inspire dread in both reviewer and reviewee. Having your code analyzed can feel as invasive and uncomfortable. Even worse, reviewing other people's code can feel like a painful and ambiguous exercise, searching for problems and not even knowing where to begin.

代码审查可以激发审查者和审查者的恐惧。 对你的代码进行分析会让你觉得有侵略性和不舒服。 更糟糕的是，审查别人的代码可能会让人感到痛苦和模棱两可，寻找问题，甚至不知道从哪里开始。

This project aims to provide some solid tips for how to review the code that you and your team write. All examples are written in JavaScript, but the advice should be applicable to any project of any language. This is by no means an exhaustive list, but hopefully this will help you catch as many bugs as possible long before users ever see your feature.

本项目旨在提供一些可靠的技巧，帮助您和您的团队审查编写的代码。 所有的例子都是用 JavaScript 编写的，但是这个建议应该适用于任何语言的任何项目。 这绝不是一个详尽的列表，但希望这将帮助您在用户看到您的特性之前尽可能多地捕捉 bug。

## [](https://github.com/ryanmcdermott/code-review-tips#why-review-code)Why Review Code? 为什么要审查代码？

Code reviews are a necessary part of the software engineering process because you alone can't catch every problem in a piece of code you write. That's ok though! Even the best basketball players in the world miss shots.

代码审查是软件工程过程中必不可少的一部分，因为您不可能在编写的一段代码中捕捉到所有问题。 不过没关系！ 即使是世界上最好的篮球运动员也投不中。

Having others review our work ensures that we deliver the best product to users and with the least amount of errors. Make sure your team implements a code review process for new code that is introduced into your codebase. Find a process that works for you and your team. There's no one size fits all. The important point is to do code reviews as regularly as possible.

让其他人审查我们的工作可以确保我们以最少的错误向用户交付最好的产品。 确保您的团队为引入到代码库中的新代码实现代码审查过程。 找到一个适合你和你的团队的流程。 没有放之四海而皆准的方法。 重要的一点是尽可能定期地进行代码审查。

## [](https://github.com/ryanmcdermott/code-review-tips#basics)Basics 基本知识

### [](https://github.com/ryanmcdermott/code-review-tips#code-reviews-should-be-as-automated-as-possible)Code reviews should be as automated as possible 代码审查应该尽可能地自动化

Avoid discussing details that can be handled by a static analysis tool. Don't argue about nuances such as code formatting and whether to use `let` or `var`. Having a formatter and linter can save your team a lot of time from reviews that your computer can do for you.

避免讨论可以由静态分析工具处理的细节。 不要争论诸如代码格式和是否使用 let 或 var 之类的细微差别。 拥有一个格式化程序和链接程序可以为您的团队节省大量的时间，而您的计算机可以为您进行评审。

### [](https://github.com/ryanmcdermott/code-review-tips#code-reviews-should-avoid-api-discussion)Code reviews should avoid API discussion 代码审查应该避免讨论 API

These discussions should happen before the code is even written. Don't try to argue about the floor plan once you've poured the concrete foundation.

这些讨论应该在编写代码之前进行。 一旦你浇筑了混凝土地基，就不要再争论平面图了。

### [](https://github.com/ryanmcdermott/code-review-tips#code-reviews-should-be-kind)Code reviews should be kind 代码审查应该是友好的

It's scary to have your code reviewed and it can bring about feelings of insecurity in even the most experienced developer. Be positive in your language and keep your teammates comfortable and secure in their work!

审查代码是很可怕的，即使是最有经验的开发人员也会感到不安全。 积极地使用你的语言，让你的队友在工作中感到舒适和安全！

## [](https://github.com/ryanmcdermott/code-review-tips#readability)Readability 可读性

### [](https://github.com/ryanmcdermott/code-review-tips#typos-should-be-corrected)Typos should be corrected 拼写错误应该改正

Avoid nitpicking as much as you can and save it for your linter, compiler, and formatter. When you can't, such as in the case of typos, leave a kind comment suggesting a fix. It's the little things that make a big difference sometimes!

尽可能避免吹毛求疵，并将其保存到链接器、编译器和格式化程序中。 当你不能的时候，比如在拼写错误的情况下，留下友好的评论，建议修改。 有时候，正是这些小事情造成了很大的不同！

### [](https://github.com/ryanmcdermott/code-review-tips#variable-and-function-names-should-be-clear)Variable and function names should be clear 变量和函数名应该是清晰的

Naming is one of the hardest problems in computer science. We've all given names to variables, functions, and files that are confusing. Help your teammate out by suggesting a clearer name, if the one you're reading doesn't make sense.

命名是计算机科学中最难的问题之一。 我们都给令人困惑的变量、函数和文件起了名字。 如果你正在阅读的文章没有意义，帮助你的队友，提出一个更清晰的名字。

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> This function could be better named as namesToUpperCase</font>

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">u</font>(<font style="color:#24292E;">names</font>) {

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> ...</font>

}

### [](https://github.com/ryanmcdermott/code-review-tips#functions-should-be-short)Functions should be short 职能应当简短

Functions should do one thing! Long functions usually mean that they are doing too much. Tell your teammate to split out the function into multiple different ones.

函数应该做一件事！ 长函数通常意味着他们做得太多了。 告诉你的队友将函数分解成多个不同的函数。

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> This is both emailing clients and deciding which are active. Should be</font>

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> 2 different functions.</font>

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">emailClients</font>(<font style="color:#24292E;">clients</font>) {

  <font style="color:#24292E;">clients</font>.<font style="color:#005CC5;">forEach</font>(<font style="color:#24292E;">client</font> <font style="color:#D73A49;">=></font> {

    <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">clientRecord</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">database</font>.<font style="color:#6F42C1;">lookup</font>(client);

    <font style="color:#D73A49;">if</font> (<font style="color:#24292E;">clientRecord</font>.<font style="color:#6F42C1;">isActive</font>()) {

      <font style="color:#6F42C1;">email</font>(client);

    }

  });

}

### [](https://github.com/ryanmcdermott/code-review-tips#files-should-be-cohesive-and-ideally-short)Files should be cohesive, and ideally short 文件应该是内聚的，最好是短的

Just like functions, a file should be about one thing. A file represents a module and a module should do one thing for your codebase.

就像函数一样，文件也应该是关于一件事情的。 文件表示一个模块，模块应该为代码库做一件事。

For example, if your module is called `fake-name-generator` it should just be responsible for creating fake names like "Keyser Söze". If the `fake-name-generator` also includes a bunch of utility functions for querying a database of names, that should be in a separate module.

例如，如果您的模块被称为“冒名生成器” ，那么它应该只负责创建“ Keyser s ze”之类的假名。 如果假名生成器还包含一组查询名称数据库的实用函数，那么这些函数应该在单独的模块中。

There's no rule for how long a file should be, but if it's long like below **and** includes functions that don't relate to one another, then it should probably be split apart.

一个文件应该有多长没有规则，但是如果它像下面那样长，并且包含彼此不相关的函数，那么它可能应该被分开。

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> Line 1</font>

<font style="color:#D73A49;">import</font> <font style="color:#24292E;">\_</font> <font style="color:#D73A49;">from</font> <font style="color:#032F62;">'</font><font style="color:#032F62;">lodash</font><font style="color:#032F62;">'</font>;

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">generateFakeNames</font>() {

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> ..</font>

}

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> Line 1128</font>

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">queryRemoteDatabase</font>() {

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> ...</font>

}

### [](https://github.com/ryanmcdermott/code-review-tips#exported-functions-should-be-documented)Exported functions should be documented 导出的函数应该被记录下来

If your function is intended to be used by other libraries, it helps to add documentation so users of it know what it does.

如果您的函数打算被其他库使用，那么添加文档以便其用户知道它的作用是有帮助的。

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> This needs documentation. What is this function for? How is it used?</font>

<font style="color:#D73A49;">export</font> <font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">networkMonitor</font>(<font style="color:#24292E;">graph</font>, <font style="color:#24292E;">duration</font>, <font style="color:#24292E;">failureCallback</font>) {

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> ...</font>

}

### [](https://github.com/ryanmcdermott/code-review-tips#complex-code-should-be-commented)Complex code should be commented 复杂的代码应该加上注释

If you have named things well and the logic is still confusing, then it's time for a comment.

如果你已经很好地命名了事物，但是逻辑仍然是混乱的，那么是时候发表评论了。

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">leftPad</font>(<font style="color:#24292E;">str</font>, <font style="color:#24292E;">len</font>, <font style="color:#24292E;">ch</font>) {

  str <font style="color:#D73A49;">=</font> str <font style="color:#D73A49;">+</font> <font style="color:#032F62;">'</font><font style="color:#032F62;">'</font>;

  len <font style="color:#D73A49;">=</font> len <font style="color:#D73A49;">-</font> <font style="color:#24292E;">str</font>.<font style="color:#005CC5;">length</font>;

  <font style="color:#D73A49;">while</font> (<font style="color:#005CC5;">true</font>) {

    <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> This needs a comment, why a bitwise and here?</font>

    <font style="color:#D73A49;">if</font> (len <font style="color:#D73A49;">&</font> <font style="color:#005CC5;">1</font>) pad <font style="color:#D73A49;">+=</font> ch;

    <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> This needs a comment, why a bit shift here?</font>

    len <font style="color:#D73A49;">>>=</font> <font style="color:#005CC5;">1</font>;

    <font style="color:#D73A49;">if</font> (len) ch <font style="color:#D73A49;">+=</font> ch;

    <font style="color:#D73A49;">else</font> <font style="color:#D73A49;">break</font>;

  }

  <font style="color:#D73A49;">return</font> pad <font style="color:#D73A49;">+</font> str;

}

## [](https://github.com/ryanmcdermott/code-review-tips#side-effects)Side Effects 副作用

### [](https://github.com/ryanmcdermott/code-review-tips#functions-should-be-as-pure-as-possible)Functions should be as pure as possible 函数应该尽可能地纯粹

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> Global variable is referenced by the following function.</font>

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> If we had another function that used this name, now it'd be an array and it</font>

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> could break it. Instead it's better to pass in a name parameter</font>

<font style="color:#D73A49;">let</font> name <font style="color:#D73A49;">=</font> <font style="color:#032F62;">'</font><font style="color:#032F62;">Ryan McDermott</font><font style="color:#032F62;">'</font>;

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">splitIntoFirstAndLastName</font>() {

  name <font style="color:#D73A49;">=</font> <font style="color:#24292E;">name</font>.<font style="color:#005CC5;">split</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;"> </font><font style="color:#032F62;">'</font>);

}

<font style="color:#6F42C1;">splitIntoFirstAndLastName</font>();

### [](https://github.com/ryanmcdermott/code-review-tips#io-functions-should-have-failure-cases-handled)I/O functions should have failure cases handled I / o 函数应该处理故障情况

Any function that does I/O should handle when something goes wrong

当出现问题时，任何 i / o 函数都应该处理

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">getIngredientsFromFile</font>() {

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">onFulfilled</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">buffer</font> <font style="color:#D73A49;">=></font> {

    <font style="color:#D73A49;">let</font> lines <font style="color:#D73A49;">=</font> <font style="color:#24292E;">buffer</font>.<font style="color:#005CC5;">split</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">\n</font><font style="color:#032F62;">'</font>);

    <font style="color:#D73A49;">return</font> <font style="color:#24292E;">lines</font>.<font style="color:#005CC5;">forEach</font>(<font style="color:#24292E;">line</font> <font style="color:#D73A49;">=></font> <font style="color:#D73A49;"><</font>Ingredient ingredient<font style="color:#D73A49;">=</font>{line} <font style="color:#D73A49;">/</font><font style="color:#D73A49;">></font>);

  };

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> What about when this rejected because of an error? What do we return?</font>

  <font style="color:#D73A49;">return</font> <font style="color:#6F42C1;">readFile</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">./ingredients.txt</font><font style="color:#032F62;">'</font>).<font style="color:#005CC5;">then</font>(onFulfilled);

}

## [](https://github.com/ryanmcdermott/code-review-tips#limits)Limits 极限

### [](https://github.com/ryanmcdermott/code-review-tips#null-cases-should-be-handled)Null cases should be handled 应该处理空情况

If you have a list component for example, all is well and good if you display a nice beautiful table that shows all its data. Your users love it and you get a promotion! But what happens when no data comes back? What do you show in the null case? Your code should be resilient to every case that can occur. If there's something bad that can happen in your code, eventually it will happen.

例如，如果您有一个列表组件，如果您显示一个漂亮的表，显示其所有数据，那么一切都很好。 你的用户喜欢它，你得到了提升！ 但是，如果没有数据返回，会发生什么呢？ 在 null 情况下会显示什么？ 您的代码应该能够适应可能发生的每一种情况。 如果在您的代码中可能发生一些不好的事情，那么它最终会发生。

<font style="color:#D73A49;">class</font> <font style="color:#6F42C1;">InventoryList</font> {

  <font style="color:#6F42C1;">constructor</font>(<font style="color:#24292E;">data</font>) {

    <font style="color:#005CC5;">this</font>.<font style="color:#005CC5;">data</font> <font style="color:#D73A49;">=</font> data;

  }

  <font style="color:#6F42C1;">render</font>() {

    <font style="color:#D73A49;">return</font> (

      <font style="color:#D73A49;"><</font>table<font style="color:#D73A49;">></font>

        <font style="color:#D73A49;"><</font>tbody<font style="color:#D73A49;">></font>

          <font style="color:#D73A49;"><</font>tr<font style="color:#D73A49;">></font>

            <font style="color:#D73A49;"><</font>th<font style="color:#D73A49;">></font><font style="color:#005CC5;">ID</font><font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>th<font style="color:#D73A49;">></font>

            <font style="color:#D73A49;"><</font>th<font style="color:#D73A49;">></font>Product<font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>th<font style="color:#D73A49;">></font>

          <font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>tr<font style="color:#D73A49;">></font>

          <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> We should show something for the null case here if there's // nothing</font>

          <font style="color:#D73A49;">in</font> the data inventory

          {<font style="color:#005CC5;">Object</font>.<font style="color:#005CC5;">keys</font>(<font style="color:#005CC5;">this</font>.<font style="color:#005CC5;">data</font>.<font style="color:#24292E;">inventory</font>).<font style="color:#6F42C1;">map</font>(<font style="color:#24292E;">itemId</font> <font style="color:#D73A49;">=></font> (

            <font style="color:#D73A49;"><</font>tr key<font style="color:#D73A49;">=</font>{i}<font style="color:#D73A49;">></font>

              <font style="color:#D73A49;"><</font>td<font style="color:#D73A49;">></font>{itemId}<font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>td<font style="color:#D73A49;">></font>

              <font style="color:#D73A49;"><</font>td<font style="color:#D73A49;">></font>{<font style="color:#005CC5;">this</font>.<font style="color:#24292E;">state</font>.<font style="color:#24292E;">inventory</font>\[itemId].<font style="color:#005CC5;">product</font>}<font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>td<font style="color:#D73A49;">></font>

            <font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>tr<font style="color:#D73A49;">></font>

          ))}

        <font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>tbody<font style="color:#D73A49;">></font>

      <font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>table<font style="color:#D73A49;">></font>

    );

  }

}

### [](https://github.com/ryanmcdermott/code-review-tips#large-cases-should-be-handled)Large cases should be handled 大案件应该处理

In the list above, what would happen if 10,000 items came back from the inventory? In that case you need some form of pagination or infinite scroll. Be sure to always assess the potential edge cases in terms of volume, especially when it comes to UI programming.

在上面的列表中，如果10,000件物品从库存中拿回来会发生什么？ 在这种情况下，您需要某种形式的分页或无限滚动。 一定要根据容量来评估潜在的边缘情况，尤其是在 UI 编程方面。

### [](https://github.com/ryanmcdermott/code-review-tips#singular-cases-should-be-handled)Singular cases should be handled 应该处理单一情况

<font style="color:#D73A49;">class</font> <font style="color:#6F42C1;">MoneyDislay</font> {

  <font style="color:#6F42C1;">constructor</font>(<font style="color:#24292E;">amount</font>) {

    <font style="color:#005CC5;">this</font>.<font style="color:#24292E;">amount</font> <font style="color:#D73A49;">=</font> amount;

  }

  <font style="color:#6F42C1;">render</font>() {

    <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> What happens if the user has 1 dollar? You can't say plural "dollars"</font>

    <font style="color:#D73A49;">return</font> (

      <font style="color:#D73A49;"><</font>div className<font style="color:#D73A49;">=</font><font style="color:#032F62;">"</font><font style="color:#032F62;">fancy-class</font><font style="color:#032F62;">"</font><font style="color:#D73A49;">></font>

        You have {<font style="color:#005CC5;">this</font>.<font style="color:#24292E;">amount</font>} dollars <font style="color:#D73A49;">in</font> your account

      <font style="color:#D73A49;"><</font><font style="color:#D73A49;">/</font>div<font style="color:#D73A49;">></font>

    );

  }

}

### [](https://github.com/ryanmcdermott/code-review-tips#user-input-should-be-limited)User input should be limited 用户输入应该受到限制

Users can potentially input an unlimited amount of data to send to you. It's important to set limits if a function takes any kind of user data in.

用户可以无限量地输入数据发送给您。 如果函数接受任何类型的用户数据，那么设置限制非常重要。

<font style="color:#24292E;">router</font>.<font style="color:#6F42C1;">route</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">/message</font><font style="color:#032F62;">'</font>).<font style="color:#6F42C1;">post</font>((<font style="color:#24292E;">req</font>, <font style="color:#24292E;">res</font>) <font style="color:#D73A49;">=></font> {

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">message</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">req</font>.<font style="color:#005CC5;">body</font>.<font style="color:#005CC5;">content</font>;

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> What happens if the message is many megabytes of data? Do we want to store</font>

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> that in the database? We should set limits on the size.</font>

  <font style="color:#24292E;">db</font>.<font style="color:#6F42C1;">save</font>(message);

});

### [](https://github.com/ryanmcdermott/code-review-tips#functions-should-handle-unexpected-user-input)Functions should handle unexpected user input 函数应该处理意外的用户输入

Users will always surprise you with the data they give you. Don't expect that you will always get the right type of data or even any data in a request from a user. [And don't rely on client-side validation alone](https://twitter.com/ryconoclast/status/885523459748487169)

用户给你的数据总是会让你大吃一惊。 不要期望总能从用户的请求中获得正确的数据类型，甚至任何数据。 不要仅仅依赖于客户端验证

<font style="color:#24292E;">router</font>.<font style="color:#6F42C1;">route</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">/transfer-money</font><font style="color:#032F62;">'</font>).<font style="color:#6F42C1;">post</font>((<font style="color:#24292E;">req</font>, <font style="color:#24292E;">res</font>) <font style="color:#D73A49;">=></font> {

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">amount</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">req</font>.<font style="color:#005CC5;">body</font>.<font style="color:#24292E;">amount</font>;

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">from</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">user</font>.<font style="color:#005CC5;">id</font>;

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">to</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">req</font>.<font style="color:#005CC5;">body</font>.<font style="color:#24292E;">to</font>;

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> What happens if we got a string instead of a number as our amount? This</font>

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> function would fail</font>

  <font style="color:#6F42C1;">transferMoney</font>(from, to, amount);

});

## [](https://github.com/ryanmcdermott/code-review-tips#security)Security 保安

Data security is the most important aspect of your application. If users can't trust you with their data, then you won't have a business. There are numerous different types of security exploits that can plague an app, depending on the particular language and runtime environment. Below is a very small and incomplete list of common security problems. Don't rely on this alone! Automate as much security review as you can on every commit, and perform routine security audits.

数据安全性是应用程序最重要的方面。 如果用户不能把他们的数据交给你，那么你就没有生意可做了。 有许多不同类型的安全漏洞可以困扰一个应用程序，这取决于特定的语言和执行期函式库。 下面是一个非常小且不完整的常见安全问题列表。 不要仅仅依靠这一点！ 在每次提交时尽可能多地自动化安全审查，并执行例行安全审计。

### [](https://github.com/ryanmcdermott/code-review-tips#xss-should-not-be-possible)XSS should not be possible Xss 应该是不可能的

Cross-site scripting (XSS), is one of the largest vectors for security attacks on a web application. It occurs when you take user data and include it in your page without first properly sanitizing it. This can cause your site to execute source code from remote pages.

跨网站脚本是 web 应用中最大的安全攻击载体之一。 当您没有事先对用户数据进行适当的清理就将其包含在页面中时，就会发生这种情况。 这可能导致您的站点从远程页面执行源代码。

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">getBadges</font>() {

  <font style="color:#D73A49;">let</font> badge <font style="color:#D73A49;">=</font> <font style="color:#005CC5;">document</font>.<font style="color:#005CC5;">getElementsByClassName</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">badge</font><font style="color:#032F62;">'</font>);

  <font style="color:#D73A49;">let</font> nameQueryParam <font style="color:#D73A49;">=</font> <font style="color:#6F42C1;">getQueryParams</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">name</font><font style="color:#032F62;">'</font>);

  <font style="color:#6A737D;">/\*\*</font>

<font style="color:#6A737D;">   \* What if nameQueryParam was `<script>sendCookie(document.cookie)</script>`?</font>

<font style="color:#6A737D;">   \* If that was the query param, a malicious user could lure a user to click a</font>

<font style="color:#6A737D;">   \* link with that as the `name` query param, and have the user unknowingly</font>

<font style="color:#6A737D;">   \* send their data to a bad actor.</font>

<font style="color:#6A737D;">   </font><font style="color:#6A737D;">\*/</font>

  <font style="color:#24292E;">badge</font>.<font style="color:#24292E;">children</font>\[<font style="color:#005CC5;">0</font>].<font style="color:#24292E;">innerHTML</font> <font style="color:#D73A49;">=</font> nameQueryParam;

}

### [](https://github.com/ryanmcdermott/code-review-tips#personally-identifiable-information-pii-should-not-leak)Personally Identifiable Information (PII) should not leak 个人身份信息不应该泄漏

You bear an enormous weight of responsibility every time you take in user data. If you leak data in URLs, in analytics tracking to third parties, or even expose data to employees that shouldn't have access, you greatly hurt your users and your business. Be careful with other people's lives!

每次处理用户数据时，您都要承担巨大的责任。 如果你在 url 中泄露数据，在分析跟踪中泄露给第三方，或者甚至将数据暴露给不应该访问的员工，你会极大地伤害你的用户和你的企业。 小心别人的生活！

<font style="color:#24292E;">router</font>.<font style="color:#6F42C1;">route</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">/bank-user-info</font><font style="color:#032F62;">'</font>).<font style="color:#005CC5;">get</font>((<font style="color:#24292E;">req</font>, <font style="color:#24292E;">res</font>) <font style="color:#D73A49;">=></font> {

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">name</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">user</font>.<font style="color:#005CC5;">name</font>;

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">id</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">user</font>.<font style="color:#005CC5;">id</font>;

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">socialSecurityNumber</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">user</font>.<font style="color:#24292E;">ssn</font>;

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> There's no reason to send a socialSecurityNumber back in a query parameter</font>

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> This would be exposed in the URL and potentially to any middleman on the</font>

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> network watching internet traffic</font>

  <font style="color:#24292E;">res</font>.<font style="color:#6F42C1;">addToQueryParams</font>({

    name,

    id,

    socialSecurityNumber

  });

});

## [](https://github.com/ryanmcdermott/code-review-tips#performance)Performance 工作表现

### [](https://github.com/ryanmcdermott/code-review-tips#functions-should-use-efficient-algorithms-and-data-structures)Functions should use efficient algorithms and data structures 函数应该使用有效的算法和数据结构

This is different for every particular case, but use your best judgment to see if there are any ways to improve the efficiency of a piece of code. Your users will thank you for the faster speeds!

这对于每个特定的情况都是不同的，但是使用您的最佳判断来看看是否有任何方法可以提高一段代码的效率。 您的用户将感谢您提供更快的速度！

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> If mentions was a hash data structure, you wouldn't need to iterate through</font>

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> all mentions to find a user. You could simply return the presence of the</font>

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> user key in the mentions hash</font>

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">isUserMentionedInComments</font>(<font style="color:#24292E;">mentions</font>, <font style="color:#24292E;">user</font>) {

  <font style="color:#D73A49;">let</font> mentioned <font style="color:#D73A49;">=</font> <font style="color:#005CC5;">false</font>;

  <font style="color:#24292E;">mentions</font>.<font style="color:#005CC5;">forEach</font>(<font style="color:#24292E;">mention</font> <font style="color:#D73A49;">=></font> {

    <font style="color:#D73A49;">if</font> (<font style="color:#24292E;">mention</font>.<font style="color:#24292E;">user</font> <font style="color:#D73A49;">===</font> user) {

      mentioned <font style="color:#D73A49;">=</font> <font style="color:#005CC5;">true</font>;

    }

  });

  <font style="color:#D73A49;">return</font> mentioned;

}

### [](https://github.com/ryanmcdermott/code-review-tips#important-actions-should-be-logged)Important actions should be logged 应该记录重要的操作

Logging helps give metrics about performance and insight into user behavior. Not every action needs to be logged, but decide with your team what makes sense to keep track of for data analytics. And be sure that no personally identifiable information is exposed!

日志记录有助于提供性能指标和对用户行为的洞察力。 不是所有的行动都需要被记录，但是要和你的团队一起决定什么对于跟踪数据分析是有意义的。 确保没有个人身份信息暴露在外！

<font style="color:#24292E;">router</font>.<font style="color:#6F42C1;">route</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">/request-ride</font><font style="color:#032F62;">'</font>).<font style="color:#6F42C1;">post</font>((<font style="color:#24292E;">req</font>, <font style="color:#24292E;">res</font>) <font style="color:#D73A49;">=></font> {

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">currentLocation</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">req</font>.<font style="color:#005CC5;">body</font>.<font style="color:#24292E;">currentLocation</font>;

  <font style="color:#D73A49;">const</font> <font style="color:#005CC5;">destination</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">req</font>.<font style="color:#005CC5;">body</font>.<font style="color:#24292E;">destination</font>;

  <font style="color:#6F42C1;">requestRide</font>(user, currentLocation, destination).<font style="color:#005CC5;">then</font>(<font style="color:#24292E;">result</font> <font style="color:#D73A49;">=></font> {

    <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> We should log before and after this block to get a metric for how long</font>

    <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> this task took, and potentially even what locations were involved in ride</font>

    <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> ...</font>

  });

});

## [](https://github.com/ryanmcdermott/code-review-tips#testing)Testing 测试

### [](https://github.com/ryanmcdermott/code-review-tips#new-code-should-be-tested)New code should be tested 应该测试新的代码

All new code should include a test, whether it fixes a bug, or is a new feature. If it's a bug fix it should have a test proving that the bug is fixed. And if it's a new feature, then every component should be unit tested and there should be an integration test ensuring that the feature works with the rest of the system.

所有的新代码都应该包含一个测试，无论它是修复了一个错误，还是一个新特性。 如果这是一个 bug 修复它应该有一个测试证明这个 bug 是修复的。 如果这是一个新特性，那么每个组件都应该经过单元测试，并且应该有一个集成测试来确保这个特性能够与系统的其余部分一起工作。

### [](https://github.com/ryanmcdermott/code-review-tips#tests-should-actually-test-all-of-what-the-function-does)Tests should actually test all of what the function does 实际上，测试应该测试函数的所有功能

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">payEmployeeSalary</font>(<font style="color:#24292E;">employeeId</font>, <font style="color:#24292E;">amount</font>, <font style="color:#24292E;">callback</font>) {

  <font style="color:#24292E;">db</font>.<font style="color:#005CC5;">get</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">EMPLOYEES</font><font style="color:#032F62;">'</font>, employeeId)

    .<font style="color:#005CC5;">then</font>(<font style="color:#24292E;">user</font> <font style="color:#D73A49;">=></font> {

      <font style="color:#D73A49;">return</font> <font style="color:#6F42C1;">sendMoney</font>(user, amount);

    })

    .<font style="color:#005CC5;">then</font>(<font style="color:#24292E;">res</font> <font style="color:#D73A49;">=></font> {

      <font style="color:#D73A49;">if</font> (callback) {

        <font style="color:#6F42C1;">callback</font>(res);

      }

      <font style="color:#D73A49;">return</font> res;

    });

}

<font style="color:#D73A49;">const</font> <font style="color:#005CC5;">callback</font> <font style="color:#D73A49;">=</font> <font style="color:#24292E;">res</font> <font style="color:#D73A49;">=></font> <font style="color:#6F42C1;">console</font>.<font style="color:#005CC5;">log</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">called</font><font style="color:#032F62;">'</font>, res);

<font style="color:#D73A49;">const</font> <font style="color:#005CC5;">employee</font> <font style="color:#D73A49;">=</font> <font style="color:#6F42C1;">createFakeEmployee</font>(<font style="color:#032F62;">'</font><font style="color:#032F62;">john jacob jingleheimer schmidt</font><font style="color:#032F62;">'</font>);

<font style="color:#D73A49;">const</font> <font style="color:#005CC5;">result</font> <font style="color:#D73A49;">=</font> <font style="color:#6F42C1;">payEmployeeSalary</font>(<font style="color:#24292E;">employee</font>.<font style="color:#005CC5;">id</font>, <font style="color:#005CC5;">1000</font>, callback);

<font style="color:#6F42C1;">assert</font>(<font style="color:#24292E;">result</font>.<font style="color:#005CC5;">status</font> <font style="color:#D73A49;">===</font> <font style="color:#24292E;">enums</font>.<font style="color:#005CC5;">SUCCESS</font>);

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> What about the callback? That should be tested</font>

### [](https://github.com/ryanmcdermott/code-review-tips#tests-should-stress-edge-cases-and-limits-of-a-function)Tests should stress edge cases and limits of a function 测试应该强调函数的边界情况和限制

<font style="color:#D73A49;">function</font> <font style="color:#6F42C1;">dateAddDays</font>(<font style="color:#24292E;">dateTime</font>, <font style="color:#24292E;">day</font>) {

  <font style="color:#6A737D;">//</font><font style="color:#6A737D;"> ...</font>

}

<font style="color:#D73A49;">let</font> dateTime <font style="color:#D73A49;">=</font> <font style="color:#032F62;">'</font><font style="color:#032F62;">1/1/2017</font><font style="color:#032F62;">'</font>;

<font style="color:#D73A49;">let</font> date1 <font style="color:#D73A49;">=</font> <font style="color:#6F42C1;">dateAddDays</font>(dateTime, <font style="color:#005CC5;">5</font>);

<font style="color:#6F42C1;">assert</font>(date1 <font style="color:#D73A49;">===</font> <font style="color:#032F62;">'</font><font style="color:#032F62;">1/6/2017</font><font style="color:#032F62;">'</font>);

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> What happens if we add negative days?</font>

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> What happens if we add fractional days: 1.2, 8.7, etc.</font>

<font style="color:#6A737D;">//</font><font style="color:#6A737D;"> What happens if we add 1 billion days?</font>

## [](https://github.com/ryanmcdermott/code-review-tips#miscellaneous)Miscellaneous 杂项

> *"Everything can be filed under miscellaneous"*
>
> ”一切可归入杂项”
>
> George Bernard Shaw
>
> 萧伯纳

### [](https://github.com/ryanmcdermott/code-review-tips#todo-comments-should-be-tracked)TODO comments should be tracked 注释应该被跟踪

TODO comments are great for letting you and your fellow engineers know that something needs to be fixed later. Sometimes you gotta ship code and wait to fix it later. But eventually you'll have to clean it up! That's why you should track it and give a corresponding ID from your issue tracking system so you can schedule it and keep track of where the problem is in your codebase.

Todo 注释非常适合让你和你的工程师同事知道有些东西以后需要修改。 有时候你需要发送代码，然后等待以后修复它。 但是最终你还是要清理干净的！ 这就是为什么您应该跟踪它，并从问题跟踪系统中提供相应的 ID，以便您可以安排它并跟踪问题在代码库中的位置。

### [](https://github.com/ryanmcdermott/code-review-tips#commit-messages-should-be-clear-and-accurately-describe-new-code)Commit messages should be clear and accurately describe new code 提交消息应该清晰准确地描述新代码

We've all written commit messages like "Changed some crap", "damn it", "ugg one more to fix this stupid bug". These are funny and satisfying, but not helpful when you're up on a Saturday morning because you pushed code on a Friday night and can't figure out what the bad code was doing when you `git blamed` the commit. Write commit messages that describe the code accurately, and include a ticket number from your issue tracking system if you have one. That will make searching through your commit log much easier.

我们都写过诸如“修改了一些垃圾”、“该死的”、“再修复一个愚蠢的 bug”之类的提交消息。 这些都很有趣，也很令人满意，但是当你在周六早上起床的时候，这些并没有什么帮助，因为你在周五晚上推送代码，当你把错误的代码归咎于提交的时候，你不知道它们在做什么。 编写能够准确描述代码的提交消息，如果有问题跟踪系统的话，还要包含一个票证号码。 这将使搜索提交日志变得更加容易。

### [](https://github.com/ryanmcdermott/code-review-tips#the-code-should-do-what-its-supposed-to-do)The code should do what it's supposed to do 代码应该做它应该做的事情

This seems obvious, but most reviewers don't have the time or take the time to manually test every user-facing change. It's important to make sure the business logic of every change is as per design. It's easy to forget that when you're just looking for problems in the code!


> 更新: 2019-07-29 15:17:31  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ynrxxo>
# SwiftUI

# <font style="color:rgb(29, 29, 31);">syntax</font>
```kotlin
import SwiftUI

struct AlbumDetail: View {
	var album: Album

	var body: some View {
		List(album.songs) { song in 
			HStack {
				Image(album.cover)
				VStack(alignment: .leading) {
					Text(song.title)
					Text(song.artist.name)
						.foregroundStyle(.secondary)
				}
			}
		}
	}
}
```

# learn iOS
> 1. 先学习基础编程语言：Swift 是一门基于 C、Objective-C 和其他语言的多范式编程语言。如果你没有编程经验，建议先学习一些基础的编程语言概念和语法，例如变量、数据类型、控制流、函数等等。
> 2. 学习 Swift 语言基础知识：Swift 语言具有很多独特的特性和语法，例如可选值、元组、枚举、闭包等等。建议通过官方文档、在线教程或书籍来学习 Swift 的基础知识，深入了解这门语言的特点和使用方法。
> 3. 学习 iOS 应用程序开发基础知识：iOS 开发还需要掌握一些基础知识，例如 UIKit 框架、应用程序生命周期、视图控制器、界面设计等等。可以通过在线教程、书籍或视频课程来学习 iOS 应用程序开发基础知识。
> 4. 练习 Swift 编程和 iOS 应用程序开发：为了熟练掌握 Swift 语言和 iOS 应用程序开发技能，需要不断练习和实践。可以通过编写简单的应用程序来练习 Swift 编程和 iOS 应用程序开发，例如一个简单的计算器或天气预报应用程序。
> 5. 参考其他开发者的代码和经验：学习其他开发者的代码和经验可以帮助你更好地理解 Swift 编程和 iOS 开发。可以参考一些优秀的开源项目或社区中的代码示例，了解一些最佳实践和技巧。
> 6. 持续学习和更新知识：Swift 和 iOS 应用程序开发都是不断发展和更新的领域。需要不断学习和更新知识，掌握新的技术和工具，以适应快速变化的市场需求和技术发展。  
总之，学习 Swift 和 iOS 应用程序开发需要时间和耐心，需要不断学习和实践。但是如果你有热情和毅力，相信你会在这个领域成为一名优秀的开发者。
>



# 脑图
[SWIFTUI - 幕布](https://www.mubucm.com/doc/6q8jbp5kRII)

# AppKit UIKit
iOS 和 iPadOS 开发基本完全一样，都是 UIKit，就是少数几个 API 不一样而已。

macOS 用的 AppKit，差别也不是太大。



Swift + SwiftUI + UIKit 就足够你开发 iOS 、macOS 、tvOS 的 App 了



UI 可以选用 storyboard 或者 swiftUI

# <font style="color:rgb(55, 65, 81);background-color:rgb(247, 247, 248);">参考</font>
斯坦福 cs193p，由浅入深，有一些最佳实践

[SwiftUI | Apple Developer Documentation](https://developer.apple.com/documentation/swiftui)

[CS193p - Developing Apps for iOS](https://cs193p.sites.stanford.edu/)

[Getting started with Scrumdinger | Apple Developer Documentation](https://developer.apple.com/tutorials/app-dev-training/getting-started-with-scrumdinger)

[Creating and Combining Views | Apple Developer Documentation](https://developer.apple.com/tutorials/swiftui/creating-and-combining-views)

[Learning SwiftUI | Apple Developer Documentation](https://developer.apple.com/tutorials/swiftui-concepts)

> SwiftUI 很好用，目前学了一个月，月底前会上架个应用。最吸引我的应该是可打断动画吧，SwiftUI 写动画很简单，造各种 Shapes 还有自定义的 View 也很轻松。之前因为一直在用 Java 开发安卓的 app ，一下子转到 SwiftUI 这种 declarative 的框架还稍微会一点点不适应。看到很多人推荐 Flutter ，Flutter 确实好，但不知道为什么我就是喜欢不起来，我用过很多用 Flutter 写的软件，感触最大的一点就是 Flutter 做出来的软件总感觉卡卡的，会跳帧，不是很舒服，有一种莫名其妙在用安卓机的感觉，总之就不是特别喜欢，可能我还是比较喜欢原生开发环境吧，当然这样开发成本也就高很多了。SwiftUI 相比几年前那已经是完善蛮多的了，我是觉得可以直接上手的。
>
> 
>



> 更新: 2023-05-12 15:29:48  
> 原文: <https://www.yuque.com/u3641/dxlfpu/hbflbehv1l3dnb11>
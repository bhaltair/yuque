import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const sidebarOptions = {
  // 关键配置：指向你的 fullstack 文件夹
  documentRootPath: '/fullstack',     // ← 改成这个
  scanStartPath: '/',                 // 从 fullstack 根开始扫描
  resolvePath: '/fullstack/',         // 链接前缀保持一致

  // 以下是推荐的实用选项
  useTitleFromFileHeading: true,      // 使用 Markdown 里的 # 一级标题作为菜单名
  useFolderTitleFromIndexFile: true,  // 如果有子文件夹里的 index.md，用它作为标题
  hyphenToSpace: true,                // 文件名中的 - 自动转成空格（更好看）
  capitalizeEachWords: true,          // 自动首字母大写
  collapsed: false,                   // 默认不折叠（可改成 true）
  collapseDepth: 2,
  sortMenusByFrontmatterOrder: true,  // 支持在 md 文件顶部加 order: 1 来手动排序
  // includeFolderIndexFile: true,       // 显示 index.md
}

export default defineConfig(
  withSidebar(
    {
      title: '星原学AI',
      description: '星原学AI',
      base: '/yuque/',                      // GitHub Pages 通常用这个
      sitemap: {
        hostname: 'https://bhaltair.github.io/yuque/'
      },
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },   // 指向 fullstack/index.md
          { text: 'GitHub', link: 'https://github.com/bhaltair' }
        ],

        // 搜索功能
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                translations: {
                  button: { buttonText: '搜索' },
                  modal: { noResultsText: '没有找到相关结果' }
                }
              }
            }
          }
        }
      }
    },
    sidebarOptions
  )
)
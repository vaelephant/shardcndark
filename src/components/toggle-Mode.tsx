"use client"

// 引入 React 库
import * as React from "react"
// 引入 `Moon` 和 `Sun` 图标组件
import { Moon, Sun } from "lucide-react"
// 引入 `next-themes` 库中的 `useTheme` 钩子，用于处理主题切换
import { useTheme } from "next-themes"

// 引入自定义的 `Button` 组件
import { Button } from "@/components/ui/button"
// 引入自定义的 `DropdownMenu` 组件及其相关子组件
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// 导出 `ModeToggle` 组件
export function ModeToggle() {
  // 使用 `useTheme` 钩子从 `next-themes` 中获取 `setTheme` 函数，用于切换主题
  const { setTheme } = useTheme()

  return (
    // 渲染一个下拉菜单组件
    <DropdownMenu>
      {/* 将按钮组件作为 DropdownMenu 的触发器 */}
      <DropdownMenuTrigger asChild>
        {/* 使用自定义的 Button 组件，并传递变体和大小 */}
        <Button variant="outline" size="icon">
          {/* Sun 图标，默认为可见，在 dark 模式下旋转和缩放隐藏 */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Moon 图标，默认为隐藏，在 dark 模式下旋转和缩放显示 */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* 隐藏的文本，仅供屏幕阅读器使用，用于辅助功能 */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      {/* 下拉菜单内容部分，`align="end"` 使其在右侧对齐 */}
      <DropdownMenuContent align="end">
        {/* 当用户点击此项时，调用 `setTheme` 函数将主题设置为 "light" */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        {/* 当用户点击此项时，调用 `setTheme` 函数将主题设置为 "dark" */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// 主要功能解释：

// 	1.	DropdownMenu: 使用下拉菜单来展示可选的主题模式（亮模式和暗模式）。
// 	2.	DropdownMenuTrigger: 用来触发下拉菜单的显示，这里使用了自定义的 Button 组件。
// 	3.	Button: 包含了两种图标（Sun 和 Moon），通过 CSS 类名和条件样式，依据当前的主题模式显示不同的图标。
// 	4.	setTheme: 通过 next-themes 提供的 useTheme 钩子获取，允许用户在点击菜单项时切换主题模式。
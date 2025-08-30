# 电子科技大学 WebVPN 自动重定向助手

一个简单的 Chrome 浏览器插件，旨在帮助电子科技大学的师生在校外访问校内资源时，自动将普通 URL 转换为 WebVPN 加密链接，简化访问流程。

<a href="https://microsoftedge.microsoft.com/addons/detail/uestc-webvpn-redirector/gaeimafnekjecfdoblnacdpfhkfepplh">
	<img src="https://get.microsoft.com/images/zh-cn%20dark.svg" width="200"/>
</a>

## ✨ 主要功能

- **🚀 自动重定向**：访问 `*.uestc.edu.cn` 域名下的网址时，自动转换为 WebVPN 加密链接。
- **⚙️ 可配置开关**：在设置页面提供总开关，可以随时一键启用或禁用重定向功能。
- **🔔 通知提醒**：重定向成功后，会弹出桌面通知进行提醒。此功能同样可以在设置中开启或关闭。
- **💡 智能检测（预留）**：已预留校内外网络环境的检测接口，未来可实现仅在校外时自动启用重定向。

## 📖 使用说明

1. 插件安装后默认启用。
2. 当您在校外访问成电校内网站（如 `news.uestc.edu.cn`, `jwc.uestc.edu.cn` 等）时，插件会自动将页面重定向到 `webvpn.uestc.edu.cn` 的对应链接。
3. 右键点击浏览器右上角的插件图标，选择**“选项”**，即可进入设置页面。

## 🛠️ 设置选项

在选项页面，您可以配置以下功能：

- **启用重定向功能**：插件的总开关。取消勾选后，插件将不会进行任何重定向操作。
- **启用重定向通知**：控制重定向成功后是否弹出桌面通知。

## 💻 开发与构建

本项目使用 TypeScript 和 Vite 进行开发，遵循 Manifest V3 规范。

#### 环境要求

- [Node.js](https://nodejs.org/) (LTS 版本)
- npm 或 pnpm/yarn

#### 开发流程

1. 克隆本仓库：

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2. 安装依赖：

    ```bash
    npm install
    ```

3. 启动开发模式：

    ```bash
    npm run dev
    ```

    此命令会以监听模式启动构建。每当您修改 `src` 目录下的文件，Vite 都会自动重新打包。您需要手动在 `chrome://extensions` 页面刷新插件来加载最新代码。

#### 打包发布

当您准备发布新版本时，运行以下命令：

```bash
npm run build
```

该命令会执行生产环境的构建，进行代码压缩、移除调试信息，并最终在项目根目录的 `package` 文件夹下生成一个可直接用于发布的 `uestc-redirect-extension.zip` 文件。

## 🔧 技术栈

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [aes-js](https://github.com/ricmoo/aes-js)
- Chrome Extension Manifest V3

## 🗺️ 未来计划 (Roadmap)

- [ ] 实现真实的 `isOffCampus` 校内外网络环境自动检测功能。
- [ ] 优化选项页面的 UI/UX。
- [ ] 支持用户自定义重定向规则。

## 🙏 致谢

本插件的核心 URL 加密/解密算法主要参考了 [lcandy2/webvpn-converter](https://github.com/lcandy2/webvpn-converter) 项目的实现，对原作者的开源贡献表示衷心感谢！

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源。

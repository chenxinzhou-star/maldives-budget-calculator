# 🏝️ 马尔代夫旅行预算计算器 | Maldives Travel Budget Calculator

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://yein.cn)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://yein.cn)

一个开源的马尔代夫旅行预算计算工具，帮助旅行者规划完美的马尔代夫之旅。

An open-source Maldives travel budget calculator to help travelers plan their perfect Maldives trip.

![Screenshot](assets/screenshot.png)

## ✨ 功能特点 | Features

- 📊 **智能预算计算** - 根据旅行天数、人数、岛屿类型自动计算预算
- 🏨 **多种酒店类型** - 支持经济型到超豪华型酒店选择
- 🍽️ **餐食方案对比** - BB/HB/FB/AI 四种餐食方案
- ✈️ **多出发城市** - 支持北京、上海、广州、香港、新加坡等
- 💡 **省钱小贴士** - 智能生成个性化的省钱建议
- 📱 **响应式设计** - 完美支持手机、平板、电脑

## 🚀 在线演示 | Live Demo

访问 [yein.cn](https://yein.cn) 查看在线演示。

## 📦 安装使用 | Installation

### 直接使用
```bash
# 克隆仓库
git clone https://github.com/yein-maldives/maldives-budget-calculator.git

# 进入目录
cd maldives-budget-calculator

# 用浏览器打开 index.html
open index.html
```

### 本地服务器
```bash
# 使用 Python
python -m http.server 8080

# 使用 Node.js
npx serve .
```

## 🛠️ 技术栈 | Tech Stack

- **HTML5** - 语义化标签
- **CSS3** - Flexbox, Grid, 动画
- **JavaScript (ES6+)** - 原生 JS，无依赖
- **响应式设计** - 移动优先

## 📁 项目结构 | Project Structure

```
maldives-budget-calculator/
├── index.html          # 主页面
├── style.css           # 样式文件
├── calculator.js       # 计算逻辑
├── README.md           # 项目文档
├── LICENSE             # 许可证
└── assets/             # 资源文件
    └── screenshot.png  # 截图
```

## 🎨 自定义 | Customization

### 修改价格数据
编辑 `calculator.js` 中的 `priceData` 对象：

```javascript
const priceData = {
    flights: { beijing: 800, ... },
    hotels: { budget: { min: 150, max: 300 }, ... },
    // ...
};
```

### 修改样式
编辑 `style.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #0077b6;
    --secondary-color: #00b4d8;
    // ...
}
```

## 🤝 贡献 | Contributing

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证 | License

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢 | Acknowledgments

- 马尔代夫旅游数据来源: [YEIN 马尔代夫](https://yein.cn)
- 设计灵感: 现代旅行网站

## 📞 联系方式 | Contact

- 网站: [yein.cn](https://yein.cn)
- Email: contact@yein.cn

---

**⭐ 如果这个项目对你有帮助，请给一个 Star！**

**⭐ If this project helps you, please give it a Star!**

Made with ❤️ by [YEIN](https://yein.cn)

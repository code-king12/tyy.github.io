# 🚀 科技感爱心与流星动画

一个充满科技感的爱心动画项目，结合了流星雨效果、粒子系统和交互式动画，打造出令人惊艳的视觉体验。

## ✨ 功能特色

### 🎯 核心动画效果
- **科技感爱心**: 渐变色彩、脉冲效果、发光边框
- **流星雨动画**: 多方向流星轨迹，带有光尾效果
- **动态星空**: 闪烁的星星背景，营造太空氛围
- **粒子系统**: 围绕爱心的浮动粒子效果

### 🎮 交互功能
- **鼠标跟随**: 爱心会轻微跟随鼠标移动
- **鼠标轨迹**: 鼠标移动时产生发光粒子轨迹
- **点击爆炸**: 点击爱心触发粒子爆炸效果
- **键盘交互**: 按空格键触发彩虹波纹特效

### 🎨 视觉效果
- **故障文字**: 科技感的文字故障效果
- **扫描线**: 模拟CRT显示器的扫描线
- **网格背景**: 动态移动的科技网格
- **音频可视化**: 装饰性的音频频谱条

## 🛠️ 技术栈

- **HTML5**: 语义化结构
- **CSS3**: 高级动画和视觉效果
- **JavaScript**: 交互逻辑和动态效果
- **纯前端**: 无需后端服务器

## 📁 项目结构

```
├── index.html          # 主页面文件
├── style.css           # 样式文件
├── script.js           # 交互脚本
└── README.md           # 项目说明
```

## 🚀 快速开始

### 本地运行

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/tech-heart-animation.git
   cd tech-heart-animation
   ```

2. **直接打开**
   - 双击 `index.html` 文件
   - 或使用本地服务器（推荐）

3. **使用本地服务器**（推荐）
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx serve .
   
   # 使用 PHP
   php -S localhost:8000
   ```

4. **访问页面**
   打开浏览器访问 `http://localhost:8000`

### GitHub Pages 部署

1. **Fork 本项目**
   点击右上角的 Fork 按钮

2. **启用 GitHub Pages**
   - 进入项目的 Settings 页面
   - 滚动到 Pages 部分
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 点击 Save

3. **访问网站**
   几分钟后，你的网站将在以下地址可用：
   `https://your-username.github.io/tech-heart-animation`

## 🎯 使用说明

### 基本操作
- **观看动画**: 页面加载后自动播放所有动画效果
- **鼠标交互**: 移动鼠标查看跟随效果和粒子轨迹
- **点击爱心**: 点击中央的爱心触发爆炸特效
- **键盘特效**: 按空格键触发彩虹波纹效果

### 自定义配置

#### 修改颜色主题
在 `style.css` 中找到以下变量进行修改：
```css
/* 主要颜色 */
--primary-color: #00ffff;    /* 青色 */
--secondary-color: #ff0080;  /* 粉色 */
--accent-color: #00ff00;     /* 绿色 */
```

#### 调整动画速度
```css
/* 爱心跳动速度 */
animation: heartbeat 2s ease-in-out infinite;

/* 流星生成频率 */
setInterval(() => {
    // 修改这里的时间间隔（毫秒）
}, 2000);
```

## 🎨 自定义开发

### 添加新的粒子效果
```javascript
function createCustomParticle(x, y) {
    const particle = document.createElement('div');
    // 自定义粒子样式和动画
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        // 添加你的样式
    `;
    document.body.appendChild(particle);
}
```

### 修改爱心形状
在 `style.css` 中的 `.heart::before` 和 `.heart::after` 部分：
```css
.heart::before,
.heart::after {
    /* 修改这些属性来改变爱心形状 */
    width: 100px;
    height: 160px;
    border-radius: 100px 100px 0 0;
}
```

## 📱 响应式设计

项目已适配移动设备：
- 自动调整爱心大小
- 优化触摸交互
- 适配不同屏幕尺寸

## 🔧 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ IE 不支持

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- 感谢所有为开源社区做出贡献的开发者
- 灵感来源于现代科技美学和太空主题设计

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/tech-heart-animation/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/tech-heart-animation/discussions)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！

🚀 **Live Demo**: [点击查看在线演示](https://your-username.github.io/tech-heart-animation)
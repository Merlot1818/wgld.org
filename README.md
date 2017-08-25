# WebGL Study Master
https://wgld.org/


# Git 操作

- git init
- git add .
- git commit -m 'init'
- git remote add origin https://github.com/abopaper/wgld.org.git
- git pull origin master --allow-unrelated-histories
- git push origin master

# Tag标签
## 列出标签
- git tag
## 创建附注标签 
- git tag -a v0.0.1 -m '[v0.0.1] - 2017-08-25'
## 补打标签
- git log --pretty=oneline
- git tag -a v0.0.1 [commit_id] -m '[v0.0.1] - 2017-08-25'
## 推送标签
- git push origin v0.0.1
- git push origin --tags
## 检出标签
- git checkout -b v0.0.1 
## 查看指定版本
- git tag -l 'v0.0.*'



# 内容
  ## 浏览器
  ## Canvas Tag
    - 2d Context
    - webgl Context
  ## 3D渲染基础
    - 2维坐标系
    - 3维坐标系
    - 坐标转换
    - 模型变换(Model)
    - 视角变换(View)
    - 投影变换(Project)
  ## 准备渲染
    - HTML and Javascript
    - Shader
  ## 矩阵Matrix
  ## Vertex and polygon
  ## GLSL(OpenGL Shader Language)
  ## 


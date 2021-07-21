# *Chương 2: Phân tích tổng quan thiết kế*

# 13. Giới thiệu chương 2

* Phân tích tổng quan thiết kế PSD
* Màu sắc, Font, Space
* Thiết lập Class, Structure cho Design
* Code cơ bản: box-sizing, font toàn bộ website,...
* PS cơ bản
* Tách ảnh để sử dụng vào Design

# 14. Phân tích màu sắc

Khai báo những màu sắc vào biến ở trong SASS `_variables.scss`: màu sắc, font chữ, class chung, thiết lập code cơ bản

# 15. Phân tích kiểu chữ

Sử dụng Photoshop lấy font -> tra trên gg font -> đưa vào `_variables.scss`

# 16. Phân tích khoảng cách

Sử dụng Photoshop đo khoảng cách -> đưa vào _variable.scss, thiết lập class trong `_structure.scss`

# 17. Thiết lập code cơ bản ban đầu

Những đoạn code sử dụng xuyên suốt trong project, `img, a, font family, font size, đơn vị`
```css
/* _typography.scss */
html{
  font-size: 62.5%;
}
```
```css
/* _global.scss */
a{
  text-decoration: none;
}
img{
  display: block;
  max-width: 100%;
}
body{
  font-family: $primary-font;
  line-height: 1;
  color: $title-color;
}
```
`--> import`

# 18. Hướng dẫn cắt ảnh trong Photoshop

- Alt + con mắt click chuột trái vào
- Image -> Trim
- C1 File -> Export -> Save for web (shift+alt+ctrl+S) -> bấm jpeg, Maximum
- C2 chuột phải -> Quick Export of PNG

# 19. Tạm kết chương 2

# *Chương 3: Phân tích và code block Header*

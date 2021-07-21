# 1. Lời cám ơn, hướng dẫn và giới thiệu khoá học

* Phân tích thiết kế,
* Tái sử dụng code,
* sử dụng Gulp, Pug, Sass

### Extensions: ✔✔✔
* Highlight Matching Tag, 
* auto complete tag, 
* Bracket Pair Colorizer, 
* Color Highlight, 
* HTML Snippets, 
* HTML to CSS autocompletion, 
* Live Server, 
* Live Server Preview, 
* Material Icon Theme, 
* Prettier, 
* pug, pug(Jade) snippets, Pug beautify, 
* SCSS IntelliSense,


# 2. Các khái niệm cơ bản

### Gulp???

* Công cụ tự động hóa nhiều Tags trong quá trình phát triển Web, thường đc tạo ra để sử dụng các tác vụ như là tạo webserver khi code xong ko cần F5 lại, sử dụng các cái set Reduce se như là Sass, tối ưu hóa tài nguyên như Hình ảnh, File, CSS,...

    ---> thực hiện nhiều tác vụ cùng lúc

### Component???

* code Web thành những thành phần nhỏ hơn để sử dụng đi sử dụng lại ở nhiều nơi -> Save Time

### NodeJs & Photoshop (crack) -> `google`

### Tại sao dùng Gulp mà ko code thuần?

* nếu code thuần giao diện thì code sẽ rất dài, sửa file lớn sẽ rất cực, Gulp nó chia làm nhiều Component, thì chúng ta cần dùng cái nào sẽ import nó vào để sử dụng 

    ---> khi sửa sẽ chỉ cần sửa từ 1 file

### PUG??? -> Ở Dưới

# 3. Cài đặt Gulp boilerplate 

* clone `gulp-workflow`
* `cmd` npm install 
* npm run dev

# 4. Tìm hiểu cơ bản về Gulp boilerplate

* node_modules: các files khi cài đặt các package của `npm`
* **app**
    * fonts: chứa những font chữ
    * images: ảnh
    * scripts: js
    * styles: dùng Sass(giải thích sau)
    * views dùng .pug, pug là HTML, code Pug thì sẽ đc render ra HTML -> code nhanh hơn, thuận tiện dùng Component
* **public**
    * khi chạy lệnh **app** sẽ biến, render sang **public** để hiển thị

# 5. Tìm hiểu file layout trong Pug

* layout là cấu trúc chuẩn chung -> để những files khác sẽ kế thừa từ cái này. 

# 6. Xử lý các lỗi hay gặp khi làm việc với Pug

* Chú ý ko dùng chung Tab và Space

# 7. Kiến thức cơ bản về Pug cho người mới(video & code)
# 8. Mixins trong Pug 

* Tạo cấu trúc chung cho các components giống nhau

# 9. Biến trong Pug

* Gán biến vào Mixin -> truyền các giá trị khác nhau cho components 

# 10. Điều kiện trong Pug

* if && Tab

    *READ MORE:* **[PUGJS.ORG](https://pugjs.org/api/getting-started.html)**

# 11. Tìm hiểu cấu trúc thư mục styles của Sass

* base 
    * _typography.scss chữ, font chữ
* components
    * _button.scss
    *....
* helpers (chứa biến)
    * _functions.scss
    * _mixins.scss
    * _utilities.scss
    * _variables.scss
    - Xem thêm ở lớp `HTML & CSS`, ytb 
* layout
    * _footer.scss
    * _header.scss
    * _sidebar.scss
    * _structure.scss
    - Sẽ đc hiểu sâu hơn ở các chap sau
* pages
    * _home.scss
    * _about.scss 
    * ....
* themes
* vendors
    * chứa những bên thứ 3 boostrap, jQuery, fontawesome,.... 

những files để **import** sẽ có dấu `_` ở trước

những files đc render ra ko có `_`

code xong sẽ **import** vào file `styles.scss`

*READ MORE:*

**[Sass pattern 7 – 1](https://viblo.asia/p/to-chuc-css-files-voi-pattern-7-1-yMnKMJozZ7P)**

**[Watch more about SASS](https://www.youtube.com/watch?v=77QwgOBOg7Y)**

# 13. Tạm kết chương 1 
***
## [Chương 2: Phân tích tổng quan thiết kế](..\02-Design-Analysis\README.md)

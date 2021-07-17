**Mon-12/7/2021**

# Bài 2: 2 cách chèn Javascript vào HTML

2 cách sử dụng JS 
* code bên trong html 
* hoặc là bên ngoài 

    ✨ Sẽ sử dụng cách thứ 2: (Tạo file và chèn ở dưới cùng), vì file sẽ đc load từ trên xuống dưới, js sẽ load sau cùng vì khi html load xong rồi sau đó load js thì mới chạy vào đc những cái `DOM`

# Bài 3: Tìm hiểu hàm console.log

`console.log` là 1 hàm dùng để debug, in ra kết quả ở chrome 


# Bài 4: Kiến thức về biến cần nắm

`Biến - Variables`: 
* để lưu giá trị dữ liệu, sử dụng đi sử dụng lại ở nhiều nơi, và khi thay đổi ở 1 chỗ thì có thể thay đổi đc ở nhiều nơi.                 
* khi sử dụng biến thì p nghĩ đến đặt tên (`camelCase`).
* không nên đặt tên tiếng việt, có dấu, kí tự đặc biệt, các từ hệ thống.

# Bài 5: Khai báo biến (`declare`) với const và let

`const`: hằng số, ko thể thay đổi, khai báo hằng số duy nhất để sử dụng đi sử dụng lại ở nhiều chỗ

`let`: biến có thể thay đổi

# Bài 6: Hoisting là gì ?

`Hoisting`: là vấn đề khi khai báo biến, biến đc gọi ra trước khi đc khởi tạo --> ctr lỗi và dừng chạy.

# Bài 6.5: Bổ sung kiến thức hoisting

* `const` và `let` ko bị hoisting 

* `var` sẽ bị hoisting, có thể xảy ra nhiều vấn đề; từ khi có **let** và **const** thì **var** ít đc dùng. 

TH: khai báo biến chưa gán giá trị gì.
```js
var a;
console.log(a); //-> Undefined
```

TH: hoisting
```js
console.log(a); 
var a; //-> Undefined, tương tự khi khai báo var ở trên console.log
```
==> `var a` đã được tự động đưa lên trên dù đã khai báo sau (hoisting) -> sẽ xảy ra những vấn đề ko mong muốn 



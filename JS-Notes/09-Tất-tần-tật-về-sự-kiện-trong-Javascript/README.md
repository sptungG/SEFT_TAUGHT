## _Chương 9: Tất tần tật về sự kiện trong Javascript_

# Bài 149: Giới thiệu

```js
// 1. Sự kiện (event)? Là những cái tương tác với DOM, ...
// 2. Thêm 1 sự kiện
// selector.addEventListener("eventName", handler(function), [optional]);
// evenName: keydown, keypress, keyup, mouseover, mousemove, mouseleave, load, DOMContentLoaded ,....
// handler: function
// capture. bubbling
```

# Bài 150: Sự kiện click

```js
// click
const button = document.querySelector(".button");
// *
// button.addEventListener("click", function () {
//   console.log("Click me");
// });
// **
function handleClick() {
  console.log("Click Button");
}
// button.addEventListener("click",handleClick()); // lỗi sai khi dùng function vào eventListener
button.addEventListener("click", handleClick);
```

# Bài 151: Bubbling trong click

```js
// Bubbling: nổi bọt
// sự kiện click ,chạy từ trong ra ngoài
const span = document.querySelector("span");
// span.addEventListener("click", function () {
//   console.log("Click Span");
// });

// Ngăn chạn nổi bọt? -> e.stopPropagation();
span.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click Span");
});

// PROBLEM: 2 event click -> ra cả 2
span.addEventListener("click", function (e) {
  // e.stopPropagation();
  e.stopImmediatePropagation();
  console.log("Click Span");
});
span.addEventListener("click", function () {
  console.log("Click Span 2");
});
```

# Bài 152: Capturing trong click

```js
// *** Capturing: ngược lại với Bubbling, từ ngoài vào trong
const capturing = {
  capture: true,
};
document.body.addEventListener(
  "click",
  function () {
    console.log("Click Body");
  },
  capturing
);
// Click Body
// Click Span
```

# Bài 153: Sự khác nhau giữa target và currentTarget

```js
button.addEventListener("click", function (e) {
  console.log("event.target " + e.target);
  console.log("event.currentTarget " + e.currentTarget);
  // event.target [object HTMLSpanElement]
  // event.currentTarget [object HTMLButtonElement]

  // event.target: chọn chính xác phần tử element click tới
  // event.currentTarget: chọn phần tử mình click
});
```

# Bài 154: preventDefault() để làm gì ?

```js
// event.preventDefault() -> ngăn chận hành vi mục đích nào đó
const link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault(); //-> ngăn chặn hành vi mặc định,
  // ví dụ: mặc định là "submit" form thì load lại trang, bấm thẻ a thì load cái web,... -> ngăn chặn
  console.log("Click me");
});
```

# Bài 155: Bài tập `Random background color`

# Bài 156: Bài tập `Counter`

# Bài 157: Tìm hiểu object style

```js

```

# Bài 158: Truy xuất giá trị của custom attribute như nào?

```js

```

# Bài 159-160: Bài tập `Toggle menu`

```js

```

# Bài 161-162-163: Bài tập `Tab`

```js

```

# Bài 164-165-166: Bài tập `Accordion`

```js

```

# Bài 167-168: Bài tập `Modal`

```js

```

# Bài 169-170-171-172-173: Bài tập `Lightbox`

```js

```

# Bài 174-175: Bài tập `Dropdown`

```js

```

# Bài 176: Sự khác nhau giữa load và DOMContentLoaded

```js

```

# Bài 177: Sự kiện di chuyển chuột cần nắm

```js

```

# Bài 178: Sự khác nhau giữa clientXY và pageXY

```js

```

# Bài 179-180-181-182: Bài tập `Tooltip`

```js

```

# Bài 183-184: Bài tập `Link hover effect`

```js

```

# Bài 185-186-187-188-189: Bài tập `Image Zoom hover effect`

```js

```

# Bài 190: Sự kiện keydown

```js

```

# Bài 191: Sự kiện keyup

```js

```

# Bài 192: Sự kiện keypress

```js

```

# Bài 193: Sự kiện change

```js

```

# Bài 194: Sự kiện focus và blur

```js

```

# Bài 195: Sự kiện submit trong form

```js

```

# Bài 196: Truy xuất các giá trị trong cơ bản

```js

```

# Bài 197: Truy xuất giá trị của checkboxes như thế nào?

```js

```

# Bài 198: Ví dụ về Form Validation cơ bản

```js

```

# Bài 199: Bài tập `Show hide password` đơn giản

```js

```

# Bài 200-201-202-203-204: Bài tập `Highlight search text`

```js

```

# Bài 205: Giới thiệu sự kiện scroll

```js

```

# Bài 206: Debounce là gì?

```js

```

# Bài 207: window.pageXOffset và window.pageYOffset

```js

```

# Bài 208: Các phương thức, thuộc tính về scroll khác

```js

```

# Bài 209: offsetWidth và scrollWidth

```js

```

# Bài 210: scrollIntoView()

```js

```

# Bài 211-212: Bài tập `Fixed Header`

```js

```

# Bài 213-214: Bài tập `Progress Bar`

```js

```

# Bài 215-216: Bài tập `Tab Scroll`

```js

```

# Bài 217-218-219-220-221: Bài tập `Tab Scroll nâng cao`

```js

```

# Bài 222: localStorage toàn tập

```js

```

# Bài 223-224-225-226-227: Bài tập `todoList`

```js

```

# Bài 228-229: Bài tập `Sweet Alert`

```js

```

## _Chương 10: Regular expression cơ bản_

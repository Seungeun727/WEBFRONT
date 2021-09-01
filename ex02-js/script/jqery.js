<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>iPhones</title>
    <style>
        #product-info img.selected {
            width: 225px;
            height: 265px;
            float: left;
            border: 1px solid lightslategrey;
            margin: 5px;
        }

        #product-list li {
            list-style-type: none;
            border: 1px solid lightslategrey;
            margin: 5px;
            float: left;
        }

        #product-list li img {
            width: 100px;
            height: 100px;
        }
    </style>
    <!-- jQuery -->
    <!-- 로컬 서버에 설치 -->
    <!-- script src="script/jquery.js"></script -->
    <!-- CDN 버전 -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
</head>

<body>
    <div id="product-info">
        <!-- 태그에 이벤트 리스너를 붙이는 방법: 
            Inline JavaScript: 추천하지 않음 -->
        <img id="main-image" 
            src="images/iphone-xs.jpeg" 
            class="selected" 
            onclick="alert(this.title)"
            title="iPhones XS">
        <h2>iPhone Xs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
        <h3>Products</h3>
        <ul id="product-list">
            <li><img class="sub-image" 
                src="./images/iphone-xs.jpeg" 
                title="iPhone XS"
                data-color="red"></li>
            <li><img 
                class="sub-image" 
                src="./images/iphone-xr.jpeg" 
                title="iPhone XR"
                data-color="green"></li>
            <li><img 
                class="sub-image" 
                src="./images/iphone8.jpeg" 
                title="iPhone 8"
                data-color="blue"></li>
            <li><img 
                class="sub-image" 
                src="./images/ipad-mini.jpeg" 
                title="iPad Mini"
                data-color="purple"></li>
        </ul>
        <input type="text" id="keyword" /><button id="btn-search">검색</button>
    </div>
</body>
<script>
    function testAttributes() {
        //  id가 main-image인 요소를 가지고 와서 속성 확인
        //  Wrapper는 다양한 방식으로 활용
        //  HTMLElement가 아닌 jQuery로 감싼 객체

        let obj = $("#main-image"); // == getElementById
        console.log("#main-image:", obj);

        //  가지고 있는 모든 속성의 반환
        console.log(obj[0].getAttributeNames());
        //  title 속성을 확인
        console.log("title:", obj.attr("title"));
        //  title 속성의 변경
        obj.attr("title", "사진:" + obj.attr("title"));

        //  하단 Products의 이미지들의 title 속성도 변경해 봅시다.
        let subs = $(".sub-image"); //  == getElementsByClassName

        console.log(".sub-image:", subs);
        for (let i = 0; i < subs.length; i++) {
            // jQuery 객체가 아닌 HTML 엘리먼트는 
            //  $로 묶어야 jQuery 메서드를 호출할 수 있다.
            $(subs[i]).attr("title", 
                            "사진:" + $(subs[i]).attr("title"));

        }
    }
    testAttributes();


    
</script>
</html>
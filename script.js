      var mainImg = document.getElementById("mainImg");
      var pageMain = document.getElementById("page-main");
      var smallImg = document.getElementsByClassName("smallImg");

      smallImg[0].onclick = function () {
        mainImg.src = smallImg[0].src;
        pageMain.href = smallImg[0].src;
      };
      smallImg[1].onclick = function () {
        mainImg.src = smallImg[1].src;
        pageMain.href = smallImg[1].src;
      };
      smallImg[2].onclick = function () {
        mainImg.src = smallImg[2].src;
        pageMain.href = smallImg[2].src;
      };
      smallImg[3].onclick = function () {
        mainImg.src = smallImg[3].src;
        pageMain.href = smallImg[3].src;
      };

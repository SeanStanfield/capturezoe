images = document.querySelectorAll("main img");
imagesArray = Array.from(images);
currentIndex = 0;

setInterval(() => {
  nextImage();
}, 3000);

const nextImage = function () {
  console.log(imagesArray);

  if (currentIndex == 2) {
    imagesArray[0].classList.add("active");
    imagesArray[2].classList.remove("active");
    currentIndex = 0;
  } else {
    imagesArray[currentIndex + 1].classList.add("active");
    imagesArray[currentIndex].classList.remove("active");
    currentIndex++;
  }

  //   for (let index = 0; index < imagesArray.length; index++) {
  //     // console.log(imagesArray[index]);
  //     if (index == imagesArray.length - 1) {
  //       index = 0;
  //       console.log("last index");
  //     }

  //     if (imagesArray[index].classList.contains("active")) {
  //       console.log("i am active");
  //       imagesArray[index].classList.remove("active");
  //       imagesArray[index + 1].classList.add("active");
  //       break;
  //     }
  //   }
};

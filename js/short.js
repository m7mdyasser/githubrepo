let lis = document.querySelectorAll(".sidebar ul li");
lis.forEach((ele) =>
  ele.classList.add(
    "d-flex",
    "align-center",
    "fs-14",
    "c-black",
    "rad-6",
    "p-10"
  )
);
let spans = document.querySelectorAll(".sidebar ul li span");
spans.forEach((ele) => ele.classList.add("hide-mobile"));

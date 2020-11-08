document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.querySelector("#button1")
    button1.addEventListener("click", () => {
      previous();
  })
  const button2 = document.querySelector("#button2")
    button2.addEventListener("click", () => {
      next();
  })

function previous()
{
  let imgid = document.getElementById("image");
  if(imgid.src == "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG")
  {
    imgid.src = "https://i.frog.ink/Ar3d0mbx/ncab71913_600.jpg?v=1530001110.107";
  }else if(imgid.src == "https://i.frog.ink/Ar3d0mbx/ncab71913_600.jpg?v=1530001110.107")
  {
    imgid.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBFjnQTqk6xC-lvPFCjBQRp7l6I7IIGUig3g&usqp=CAU";
  }else if(imgid.src == "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBFjnQTqk6xC-lvPFCjBQRp7l6I7IIGUig3g&usqp=CAU")
  {
    imgid.src = "https://i.ytimg.com/vi/lS2q4xyobkg/maxresdefault.jpg";
  }else if(imgid.src == "https://i.ytimg.com/vi/lS2q4xyobkg/maxresdefault.jpg")
  {
    imgid.src = "https://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/10/nyan-cat-05-625x450.jpg";

  }else if(imgid.src == "https://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/10/nyan-cat-05-625x450.jpg")
  {
    imgid.src = "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG";
  }
}

function next()
{
  let imgid = document.getElementById("image");
  if(imgid.src == "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG")
  {
    imgid.src = "https://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/10/nyan-cat-05-625x450.jpg";
  }else if(imgid.src == "https://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/10/nyan-cat-05-625x450.jpg")
  {
    imgid.src = "https://i.ytimg.com/vi/lS2q4xyobkg/maxresdefault.jpg";
  }else if(imgid.src == "https://i.ytimg.com/vi/lS2q4xyobkg/maxresdefault.jpg")
  {
    imgid.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBFjnQTqk6xC-lvPFCjBQRp7l6I7IIGUig3g&usqp=CAU";
  }else if(imgid.src == "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBFjnQTqk6xC-lvPFCjBQRp7l6I7IIGUig3g&usqp=CAU")
  {
    imgid.src = "https://i.frog.ink/Ar3d0mbx/ncab71913_600.jpg?v=1530001110.107";
  }else if(imgid.src == "https://i.frog.ink/Ar3d0mbx/ncab71913_600.jpg?v=1530001110.107")
  {
    imgid.src = "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG";
  }
}
})

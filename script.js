function buscarReceta() {
    console.log("buscar receta")
  document.getElementById("titulo").innerHTML = "Tu Paulina de hoy:";

  document.getElementById("paulinaEstampita").style.display = "none";
  document.getElementById("subtitle").style.display = "none";

  let videoUrl = videos[Math.floor(Math.random() * videos.length)];
  var videoFrame = document.getElementById("video");
  videoFrame.src = videoUrl;
  videoFrame = adjustSize(videoFrame);
  videoFrame.scrollIntoView(true);
  document.getElementById("video").style.display = "block";

  document.getElementById("submitBtn").innerHTML = "Buscar de nuevo";
  event.preventDefault();
}

function adjustSize(video) {
  var sizes;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    sizes = [400, 240];
  } else {
    sizes = [640, 360];
  }
  video.width = sizes[0];
  video.height = sizes[1];
  return video;
}
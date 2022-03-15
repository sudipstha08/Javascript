const videoList = [
    {
      id: 1,
      src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-panorama-of-a-landscape-with-mountains-and-a-lake-42491-large.mp4"
    },
    {
      id: 2,
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
      id: 3,
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
      id: 4,
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
      id: 5,
      src: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",

    },
    {
      id: 6,
      src: "https://assets.mixkit.co/videos/preview/mixkit-two-urban-girls-between-bars-of-colored-light-42286-large.mp4",
    },
    {
      id: 7,
      src: "https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-tree-wet-18310-large.mp4",
    },
    {
      id: 8,
      src: "https://assets.mixkit.co/videos/preview/mixkit-landscape-with-mountains-and-a-lake-seen-from-above-42490-large.mp4"
    },
    {
      id: 9,
      src: "https://assets.mixkit.co/videos/preview/mixkit-people-pouring-a-warm-drink-around-a-campfire-513-large.mp4"
    },
    {
      id: 10,
      src: "https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4"
    }

  ]

  let videoContainer = document.getElementById("video-container");

  const mappedVideos = videoList.map((video, index) => {
  return `<div class="video-card" key=${index}>
               <video autoplay src=${video.src} muted controls height="500" width="700" autoplay="false" playsinline loop preload="none"/>
          </div>`
  })

  console.log(mappedVideos)

  videoContainer.innerHTML = mappedVideos

  let isMuted = true
  const videos = document.querySelectorAll("video")

  document.body.onclick = () => {
    console.log("clicked")
    console.log("vidoes", videos)
    isMuted = false
    videos.forEach(vid => {
      console.log()
      if (isMuted) return
      vid.muted = !vid.muted
    })
  }


  document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll(".video-card video"));
    console.log("laxyVidoe", lazyVideos)
      // document.click()
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          const onscreen = entries.filter(video => video.isIntersecting === true)
          if (video.isIntersecting) {
            // for (var source in video.target.children) {
            //   var videoSource = video.target.children[source];
            //   if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
            //     videoSource.src = videoSource.dataset.src;
            //   }
            // }

            // console.log(" ON screen",onscreen)

            // if (onscreen?.length) {
            //   onscreen[0].target.play()
            //   onscreen[0].target !== video.target && video.target.pause()
            // } else {
            //   console.log("vidoe", video)
            //   // video.target.load();
            // }

              video.target.play()
              // console.log("video.", video.target.muted)
              // video.target.muted = !video.target.muted

            
            // video.target.classList.remove("lazy");
            // lazyVideoObserver.unobserve(video.target);
          } else {
            video.target.pause()
          }
        });
      }, {
        threshold: 1,
        rootMargin: "100px"
      });

      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });


  // https://web.dev/lazy-loading-video/
  // https://stackoverflow.com/questions/39041960/how-to-unmute-html5-video-with-a-muted-prop
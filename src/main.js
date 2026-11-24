
      function play(video){
       
        if(video==='svbc2'){
          console.log(`playing ${video}`)
          const iframe=document.body.appendChild(document.createElement("iframe"));
          
          iframe.setAttribute("title",video)
        //   console.log(iframe)
          let link="https://www.youtube.com/embed/NGZPKl79SLo?si=XHfwa7oTzlwncuNS"
          iframe.setAttribute("src",encodeURI(link));
          iframe.setAttribute("frameborder","0" )
        //   iframe.setAttribute("allowfullscreen","")
          iframe.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
          iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" )
          iframe.setAttribute("allowfullscreen","")
        
        }else{
          console.log(`playing ${video}`)
          const iframe=document.body.appendChild(document.createElement("iframe"));
          
          iframe.setAttribute("title",video)
        //   console.log(iframe)
          let link="https://mcncdndigital.com/_player/Divya/livestream" 
          iframe.setAttribute("src",encodeURI(link));
        //   iframe.setAttribute("allowfullscreen","")
          iframe.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
          iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" )
          iframe.setAttribute("allowfullscreen","")
      }
    }
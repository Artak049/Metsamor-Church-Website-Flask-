"use strict"

const movesDiv = document.querySelector(".moves__div");


const filmImg = [
  {
    name: "Պեղոսը Քրիստոսի Առաքյալը",
    link: "https://img.youtube.com/vi/TkVJ-wvS7rc/sddefault.jpg",
  },

  {
    name: "Հիսուս Քրիստոս",
    link: "https://img.youtube.com/vi/D675NAu3hmw/sddefault.jpg",
  },

  {
    name: "Եսթեր - ֆիլմ հայերեն թարգմանությամբ",
    link: "https://i3.ytimg.com/vi/U5fG_a1HXN0/hqdefault.jpg",
  },

  {
    name: "Սամսոն և Դալիլա - 1-ին մաս - ֆիլմ հայերեն թարգմանությամբ",
    link: "https://img.youtube.com/vi/TkVJ-wvS7rc/sddefault.jpg",
  },

  {
    name: "ՍՈՒՐԲ ԾՆՈՒՆԴ - ֆիլմ հայերեն թարգմանությամբ",
    link: "https://img.youtube.com/vi/mBr3inbd-oo/maxresdefault.jpg",
  },

  {
    name: "Հովհաննես Առաքյալ - Հայտնություն - ֆիլմ հայերեն թարգմանությամբ",
    link: "https://img.youtube.com/vi/Gh8JL2zepSw/maxresdefault.jpg",
  },

  {
    name: "Աստված չի մահացել (2014)",
    link: "https://img.youtube.com/vi/ouVvxTMuZ2A/maxresdefault.jpg",
  },

  {
    name: "Դամասկոս - ֆիլմ հայերեն թարգմանությամբ",
    link: "https://img.youtube.com/vi/TkVJ-wvS7rc/sddefault.jpg",
  },
];


const filmArr = [
  {
    id: 1,
    name: "Պեղոսը Քրիստոսի Առաքյալը",
    link: '<iframe height="84%"   src="https://www.youtube.com/embed/TkVJ-wvS7rc" title="Հոգևոր Կինո - Պողոսը  Քրիստոսի Առաքյալը  / Հոգևոր Կինոներ հայերեն թարգմանությամբ  ©️ 23STUDIO FILMER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; rel=0; modestbranding=1 encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    id: 2,
    name: "Հիսուս Քրիստոս",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/D675NAu3hmw" title="ՀԻՍՈւՍ ՔՐԻՍՏՈՍ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    id: 3,
    name: "Եսթեր - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/U5fG_a1HXN0" title="Եսթեր -  ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    id: 4,
    name: "Սամսոն և Դալիլա - 1-ին մաս - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/Ed31DIX_kfY" title="Սամսոն և Դալիլա - 1-ին մաս  -   ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    id: 5,
    name: "ՍՈՒՐԲ ԾՆՈՒՆԴ - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/mBr3inbd-oo" title="ՍՈՒՐԲ ԾՆՈՒՆԴ - ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    id: 6,
    name: "Հովհաննես Առաքյալ - Հայտնություն - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/Gh8JL2zepSw" title="Հովհաննես Առաքյալ - Հայտնություն - ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    id: 7,
    name: "Աստված չի մահացել (2014)",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/ouVvxTMuZ2A" title="Աստված չի մահացել (2014) FHD Բարձրորակ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    id: 8,
    name: "Դամասկոս - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/AMceNVLePFk" title="Դամասկոս - ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
];


const moves = () => {
    return `
    <div class="moves">
    ${filmImg
      .map((obj) => {
        return `
          <div class="move">
          <a href=""><img class="moveImg" src=${obj.link} alt=""></a>
          
  
          <div class="moveTitle">
          <a class="move__a" href="">${obj.name}</a>

          </div>
          
          </div >
              `;
      })
      .join("")}


    </div>
    
    `;
    
}

movesDiv.innerHTML = moves()

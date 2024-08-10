"use strict"

const movesDiv = document.querySelector(".moves__div");


const filmArr = [
  {
    name: "Պեղոսը Քրիստոսի Առաքյալը",
    link: '<iframe height="84%"   src="https://www.youtube.com/embed/TkVJ-wvS7rc" title="Հոգևոր Կինո - Պողոսը  Քրիստոսի Առաքյալը  / Հոգևոր Կինոներ հայերեն թարգմանությամբ  ©️ 23STUDIO FILMER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    name: "Հիսուս Քրիստոս",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/D675NAu3hmw" title="ՀԻՍՈւՍ ՔՐԻՍՏՈՍ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    name: "Եսթեր - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/U5fG_a1HXN0" title="Եսթեր -  ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    name: "Սամսոն և Դալիլա - 1-ին մաս - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/Ed31DIX_kfY" title="Սամսոն և Դալիլա - 1-ին մաս  -   ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    name: "ՍՈՒՐԲ ԾՆՈՒՆԴ - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/mBr3inbd-oo" title="ՍՈՒՐԲ ԾՆՈՒՆԴ - ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    name: "Հովհաննես Առաքյալ - Հայտնություն - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/Gh8JL2zepSw" title="Հովհաննես Առաքյալ - Հայտնություն - ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    name: "Աստված չի մահացել (2014)",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/ouVvxTMuZ2A" title="Աստված չի մահացել (2014) FHD Բարձրորակ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },

  {
    name: "Դամասկոս - ֆիլմ հայերեն թարգմանությամբ",
    link: '<iframe height="84%"  src="https://www.youtube.com/embed/AMceNVLePFk" title="Դամասկոս - ֆիլմ հայերեն թարգմանությամբ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
];


const moves = () => {
    return `
    <div class="moves">
    ${filmArr.map((obj) => {
        return `
          <div class="move">
          ${obj.link}
          <div class="moveTitle">
          <a class="move__a" href="">${obj.name}</a>

          </div>
          
          </div >
              `
          
        
        
    }).join("")}


    </div>
    
    `;
    
}

movesDiv.innerHTML = moves()

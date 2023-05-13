var color;
var colorCount=0;
var allColor = [];
const PickColor = () =>{
    const eyeDropper = new EyeDropper();
    eyeDropper
    .open()
    .then((result) => {
      console.log(result.sRGBHex);
       color = result.sRGBHex;
       addColor()
       allColor.push(color)
      document.getElementById(`colorValue_${colorCount}`).style.background=color;
    })
    .catch((e) => {
      console.log(e)
    });
}

const image = document.getElementById("image")
const file = document.getElementById("fileInput")

const GetImage = ()=>{
   
   let reader = new FileReader();
   reader.readAsDataURL(fileInput.files[0]);
   reader.onload = () => {
    image.setAttribute("src", reader.result);
  };
}


const addColor =()=>{
    colorCount++;
    const div = document.createElement('div')
    div.className="color"
    div.innerHTML=`
    <div id="listItem">
    <div class="colorDiv" id="colorValue_${colorCount}"></div>
    <input class="colorText" type="text" id="colorText_${colorCount}">${color}</input>
    <div id="copyButton" onclick="copyColor(${colorCount})">Copy</div>
    </div>
    
    `
    document.getElementById("list").appendChild(div)
}

const copyColor = (id)=>{
   navigator.clipboard.writeText(allColor[id-1]).then(()=>{
    alert("Color Code Copied : " + allColor[id-1]);
   })
    
}


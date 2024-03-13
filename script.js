let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let content = document.querySelector(".content");
let image = document.querySelector(".image-container");

let count = 0;

let list = ["Majestic peaks pierce the sky, cloaked in mist and mystery. Each summit a silent sentinel, guarding ancient secrets and stories untold. Sunlight dances on snow-capped ridges, painting the landscape in hues of gold. In the valley below, whispers of adventure echo, beckoning wanderers to ascend and embrace the wilderness's embrace.","The vast expanse above, an azure canvas stretched endlessly. Wisps of clouds drift lazily, painting fleeting masterpieces against the cerulean backdrop. Birds soar with effortless grace, while the sun casts its warm embrace upon the earth below. Day turns to night, unveiling a tapestry of stars, each one a shimmering promise in the celestial dome.",`Within the embrace of ancient trees, a realm of verdant wonders unfolds. Shafts of sunlight filter through the canopy, dappling the forest floor with ethereal light. Moss carpets the ground, softening every step. Birds sing melodies of hidden depths, while wildlife rustles in the underbrush, a symphony of life in this green sanctuary.`,`Water, the essence of life, in its myriad forms, captivates the senses. A tranquil lake mirrors the sky's splendor, serene and reflective. Rivers carve paths through rugged terrain, sculpting landscapes over eons. Ocean waves crash against the shore, a rhythmic reminder of nature's power. In its purity lies both beauty and sustenance.`,`Ice, nature's crystalline sculpture, adorns the landscape with delicate intricacy. Frost etches patterns on windowpanes, a fleeting artwork of winter's touch. Glaciers loom with ancient majesty, their frozen rivers sculpting valleys over epochs. Each snowflake a unique masterpiece, blanketing the world in quiet purity, a testament to the cold's sublime beauty.`]

console.log(list.length);

const counts = (count)=>{
    const images = document.createElement("img");
    images.setAttribute("src",`image${count}.jpg`);
    const paragraph = document.createElement("p");
    const text =document.createTextNode(list[count]);
    paragraph.appendChild(text);
    image.appendChild(images);
    content.appendChild(paragraph);
}

const remv = (count)=>{
    image.removeChild(image.children[0]);
    content.removeChild(content.children[0]);
}

btn1.addEventListener("click",()=>{
    if(count<=0){
        count=4;    
        remv(count);
        counts(count);
    }else{
        remv(count);
        counts(count);
        count--;
    }
})

btn2.addEventListener("click",()=>{
    if(count>=4){
        count=0;
        remv(count);
        counts(count);
    }else{

        remv(count);
        count++;
        // remv(count);
        counts(count);
    }
})

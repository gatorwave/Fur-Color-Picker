import Color from "https://colorjs.io/dist/color.js";

let red;
let green;
let blue;
let currentColor;
let match;
var hexInput = document.getElementById("hexInput");

var picker = new iro.ColorPicker('#picker' , {
    display: "inline",
    layout: [
        { 
          component: iro.ui.Box,
        },
        { 
          component: iro.ui.Slider,
          options: {
            sliderType: 'hue'
          }
        },
      ]
  });

picker.on('color:change', function(color) {
    // log the current color as a HEX string
    currentColor = extractColor(color.hexString);
    match = closestMatch();
    displayFur(match);
    hexInput.value = color.hexString;
});

// listens for changes
hexInput.addEventListener('change', function() {
    picker.color.hexString = this.value;
  });


  // convert hex code to lab
function extractColor(hex) {
    red = (parseInt(hex.substring(1,3), 16) / 255);
    green = (parseInt(hex.substring(3,5), 16) / 255);
    blue = (parseInt(hex.substring(5), 16) / 255);

    let temp = new Color("sRGB", [red, green, blue]);
    return temp.to("lab");
}

// displays an image of the fur along with links to buy it
function displayFur(fur) {
    document.getElementById("img").innerHTML = "<a href=\"" + fur[1] + "\">" + "<img src=\"./furs/" + fur[2] + "\" alt=\"" + fur[0] + "\">" + "</a>";
    document.getElementById("link").innerHTML = "<a href=\"" + fur[1] + "\">" + fur[0] + "</a>";
}

// takes the RGB values from each fur and converts them into a value between 0 and 1
function extractFurlist(index) {
    let temp = furList[index][3].slice();
    for (let i = 0; i < temp.length; i++) {
        temp[i] /= 255;
    }
    return temp; 
}

function closestMatch() {
    let smallestDistance = 1000;
    let match;
    let listColor;
    for (let i = 0; i < furList.length; i++) {
        listColor = new Color("srgb", extractFurlist(i));
        if (listColor.deltaE(currentColor, "2000") < smallestDistance) {
            match = furList[i];
            smallestDistance = listColor.deltaE(currentColor, "2000");
        }
    }
    return match;
}

const furList = [
    [
        "Camel  驼色",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147374088509",
        "mofu1.jpg",
        [183,129,79],
        ["mofu", "shag"]
    ],
    [
        "Yellow Brown  黄棕",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375300925",
        "mofu2.webp",
        [141,91,47],
        ["mofu", "shag"]
    ],
    [
        "Otter Brown  水獭褐",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375333693",
        "mofu3.jpg",
        [81,53,40],
        ["mofu","shag"]
    ],
    [
        "Reddish Brown 红棕",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375366461",
        "mofu4.webp",
        [218,198,206],
        ["mofu","shag"]
    ],
    [
        "jujube red 枣红",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375399229",
        "mofu5.webp",
        [151,0,71],
        ["mofu","shag"]
    ],
    [
        "eggplant red 茄红",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375431997",
        "mofu6.webp",
        [168,51,56],
        ["mofu","shag"]
    ],
    [
        "Red 大红",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375464765",
        "mofu7.webp",
        [236,0,68],
        ["mofu","shag"]
    ],
    [
        "Carmine Red 胭脂红",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375497533",
        "mofu8.webp",
        [255,72,91],
        ["mofu","shag"]
    ],
    [
        "Grapefruit Red 西柚红",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375530301",
        "mofu9.webp",
        [247,129,125],
        ["mofu","shag"]
    ],
    [
        "Apricot red 杏红",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375563069",
        "mofu10.webp",
        [235,104,81],
        ["mofu","shag"]
    ],
    [
        "Orange Red 橘红",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375595837",
        "mofu11.webp",
        [231,82,0],
        ["mofu","shag"]
    ],
    [
        "Tangerine Yellow 橘黄",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375628605",
        "mofu12",
        [255,131,0],
        ["mofu","shag"]
    ],
    [
        "Warm Orange 暖橙",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375661373",
        "mofu13",
        [255,185,141],
        ["mofu","shag"]
    ],
    [
        "3A Yellow 3A黄",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375694141",
        "mofu14",
        [255,181,70],
        ["mofu","shag"]
    ],
    [
        "Medium Yellow 中黄",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375726909",
        "mofu15.webp",
        [255,183,24],
        ["mofu","shag"]
    ],
    [
        "Creamy Orange 奶橘",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375759677",
        "mofu16.webp",
        [224,204,97],
        ["mofu","shag"]
    ],
    [
        "Milk Tea 奶茶",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375792445",
        "mofu17.jpg",
        [204,167,132],
        ["mofu","shag"]
    ],
    [
        "Khaki 卡其",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375825213",
        "mofu18.jpg",
        [225,197,172],
        ["mofu","shag"]
    ],
    [
        "Cheese Yellow 芝士黄",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375857981",
        "mofu19.webp",
        [254,209,152],
        ["mofu","shag"]
    ],
    [
        "Chicken Yellow 小鸡黄",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375890749",
        "mofu20.webp",
        [242,231,122],
        ["mofu","shag"]
    ],
    [
        "Goose Yellow 鹅黄",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375923517",
        "mofu21.webp",
        [236,222,151],
        ["mofu","shag"]
    ],
    [
        "Green Feather Green 青羽绿",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147375956285",
        "mofu22.webp",
        [198,232,149],
        ["mofu","shag"]
    ],
    [
        "Fluorescent Green 荧光绿",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376021821",
        "mofu23.webp",
        [188,222,22],
        ["mofu","shag"]
    ],
    [
        "Bean Green 豆绿",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376054589",
        "mofu24.jpg",
        [167,210,185],
        ["mofu","shag"]
    ],
    [
        "Lake Green 湖绿",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376087357",
        "mofu25.jpg",
        [151,212,233],
        ["mofu","shag"]
    ],
    [
        "Dark lake green 深湖绿",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376120125",
        "mofu26.jpg",
        [27,207,201],
        ["mofu","shag"]
    ],
    [
        "Grass Green 草绿",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376152893",
        "mofu27.jpg",
        [115,152,73],
        ["mofu","shag"]
    ],
    [
        "Mori Green 森绿",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376185661",
        "mofu28.jpg",
        [0,75,68],
        ["mofu","shag"]
    ],
    [
        "Dark Cyan 浅葱",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376218429",
        "mofu29.jpg",
        [28,145,157],
        ["mofu","shag"]
    ],
    [
        "Lake Blue 湖蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376251197",
        "mofu30.jpg",
        [0,178,226],
        ["mofu","shag"]
    ],
    [
        "Moon White 月白",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376283965",
        "mofu31.webp",
        [212,220,229],
        ["mofu","shag"]
    ],
    [
        "Aquamarine 水蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376316733",
        "mofu32.jpg",
        [196,213,236],
        ["mofu","shag"]
    ],
    [
        "Blue Gray 蓝灰",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376382269",
        "mofu33.jpg",
        [113,129,160],
        ["mofu","shag"]
    ],
    [
        "Sea Blue 海蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376447805",
        "mofu35.webp",
        [90,135,217],
        ["mofu","shag"]
    ],
    [
        "Starry sky blue 星空蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376480573",
        "mofu36.webp",
        [0,71,186],
        ["mofu","shag"]
    ],
    [
        "Sky Blue 天空蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376513341",
        "mofu37.webp",
        [64,124,201],
        ["mofu","shag"]
    ],
    [
        "Cobalt Blue 钴蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376546109",
        "mofu38.webp",
        [0,96,151],
        ["mofu","shag"]
    ],
    [
        "Phthalo Blue 酞青蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376578877",
        "mofu39.jpg",
        [0,47,86],
        ["mofu","shag"]
    ],
    [
        "Navy Blue 军蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376611645",
        "mofu40.jpg",
        [0,57,111],
        ["mofu","shag"]
    ],
    [
        "Deep Purple 深紫",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376644413",
        "mofu41.jpg",
        [62,16,81],
        ["mofu","shag"]
    ],
    [
        "Deep Lilac 深紫丁香",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376677181",
        "mofu42.jpg",
        [133,88,179],
        ["mofu","shag"]
    ],
    [
        "Lavender 薰衣紫",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376709949",
        "mofu43.jpg",
        [177,162,202],
        ["mofu","shag"]
    ],
    [
        "Sakura Pink 櫻粉",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376742717",
        "mofu44.webp",
        [245,211,214],
        ["mofu","shag"]
    ],
    [
        "Ice Pink 冰粉",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376775485",
        "mofu45.webp",
        [240,200,217],
        ["mofu","shag"]
    ],
    [
        "Deep Pink 深粉",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376808253",
        "mofu46.webp",
        [255,142,158],
        ["mofu","shag"]
    ],
    [
        "Black 黑色",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376841021",
        "mofu47.jpg",
        [16,24,31],
        ["mofu","shag"]
    ],
    [
        "Carbon Black 碳黑",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376873789",
        "mofu48.jpg",
        [69,65,66],
        ["mofu","shag"]
    ],
    [
        "Carbon Gray 碳灰",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376906557",
        "mofu49.jpg",
        [83,86,90],
        ["mofu","shag"]
    ],
    [
        "Silver Mice Gray 銀鼠灰",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376939325",
        "mofu50.jpg",
        [137,141,141],
        ["mofu","shag"]
    ],
    [
        "Light Gray 淺灰",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147376972093",
        "mofu51.jpg",
        [173,164,174],
        ["mofu","shag"]
    ],
    [
        "Silver Gray 銀灰",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147377004861",
        "mofu52.jpg",
        [208,196,197],
        ["mofu","shag"]
    ],
    [
        "White 本白",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46147377037629",
        "mofu53.jpg",
        [229,225,230],
        ["mofu","shag"]
    ],
    [
        "Very Peri 长春花蓝",
        "https://www.mofumofu.shop/products/2333-stretch-fur-fabric?variant=46685895295293",
        "mofu54.jpg",
        [105,106,173],
        ["mofu","shag"]
    ],
    [
        "White Beaver",
        "https://www.canfur.ca/product-page/white-beaver",
        "NA161.jpg",
        [241,240,237],
        ["canfur","beaver"]
        ],
        [
        "Dusk Purple Teddy Fox",
        "https://www.canfur.ca/product-page/pre-order-dusk-purple",
        "NA160.jpg",
        [36,24,68],
        ["canfur","teddyfox"]
        ],
        [
        "Black Beaver",
        "https://www.canfur.ca/product-page/black-beaver",
        "NA159.jpg",
        [16,24,32],
        ["canfur","beaver"]
        ],
        [
        "Glacier Teddy Fox",
        "https://www.canfur.ca/product-page/glacier",
        "NA157.jpg",
        [148,179,229],
        ["canfur","teddyfox"]
        ],
        [
        "Brilliant Umber Teddy Fox",
        "https://www.canfur.ca/product-page/pre-order-brilliant-umber",
        "NA158.jpg",
        [202,54,4],
        ["canfur","teddyfox"]
        ],
        [
        "Boysenberry Teddy Fox",
        "https://www.canfur.ca/product-page/boysenberry",
        "NA155.jpg",
        [130,39,105],
        ["canfur","teddyfox"]
        ],
        [
        "Malachite Teddy Fox",
        "https://www.canfur.ca/product-page/pre-order-malachite",
        "NA154.jpg",
        [0,157,130],
        ["canfur","teddyfox"]
        ],
        [
        "Chartreuse Teddy Fox",
        "https://www.canfur.ca/product-page/charteuse",
        "NA152.jpg",
        [181,222,20],
        ["canfur","teddyfox"]
        ],
        [
        "Electric Purple Teddy Fox",
        "https://www.canfur.ca/product-page/pre-order-electric-purple",
        "NA151.jpg",
        [135,56,214],
        ["canfur","teddyfox"]
        ],
        [
        "Sunset Teddy Fox",
        "https://www.canfur.ca/product-page/pre-order-sunset",
        "NA153.jpg",
        [238,150,38],
        ["canfur","teddyfox"]
        ],
        [
        "Chocolate Beaver",
        "https://www.howlfabrics.com/product-page/chocolate-beaver-super-seal-faux-fur",
        "NA150.jpg",
        [87,49,20],
        ["howl","beaver"]
        ],
        [
        "Caramel Luxury Shag",
        "https://www.howlfabrics.com/product-page/caramel-luxury-shag-faux-fur",
        "NA149.jpg",
        [140,106,49],
        ["howl","shag"]
        ],
        [
        "Ivory Luxury Shag",
        "https://www.howlfabrics.com/product-page/ivory-luxury-shag-faux-fur",
        "NA148.jpg",
        [229,224,204],
        ["howl","shag"]
        ],
        [
        "Teracotta Luxury Shag",
        "https://www.howlfabrics.com/product-page/terracotta-luxury-shag-faux-fur",
        "NA147.jpg",
        [166,24,8],
        ["howl","shag"]
        ],
        [
        "Orange Luxury Shag",
        "https://www.howlfabrics.com/product-page/orange-luxury-shag-faux-fur",
        "NA146.jpg",
        [255,94,26],
        ["howl","shag"]
        ],
        [
        "Coral Luxury Shag",
        "https://www.howlfabrics.com/product-page/coral-luxury-shag-faux-fur-1",
        "NA145.jpg",
        [253,170,155],
        ["howl","shag"]
        ],
        [
        "Silver Grey Luxury Teddy",
        "https://www.howlfabrics.com/product-page/silver-grey-luxury-teddy-faux-fur",
        "NA144.jpg",
        [154,151,161],
        ["howl","teddy"]
        ],
        [
        "Bright White Luxury Teddy",
        "https://www.howlfabrics.com/product-page/bright-white-luxury-teddy-faux-fur",
        "NA143.jpg",
        [250,250,249],
        ["howl","teddy"]
        ],
        [
        "Black Monster",
        "https://www.howlfabrics.com/product-page/black-monster-faux-fur",
        "NA142.jpg",
        [13,13,13],
        ["howl","monster"]
        ],
        [
        "Sweet Potato Deluxe Fox",
        "https://www.howlfabrics.com/product-page/sweet-potato-deluxe-fox-faux-fur",
        "NA141.jpg",
        [184,57,15],
        ["howl","fox"]
        ],
        [
        "Charcoal Grey Luxury Shag",
        "https://www.howlfabrics.com/product-page/charcoal-grey-luxury-shag-faux-fur",
        "NA140.jpg",
        [53,51,49],
        ["howl","shag"]
        ],
        [
        "Mint Green Luxury Shag",
        "https://www.howlfabrics.com/product-page/mint-green-luxury-shag-faux-fur",
        "NA139.jpg",
        [172,251,177],
        ["howl","shag"]
        ],
        [
        "Dark Purple Luxury Shag",
        "https://www.howlfabrics.com/product-page/dark-purple-luxury-shag-faux-fur",
        "NA138.jpg",
        [47,13,110],
        ["howl","shag"]
        ],
        [
        "Butterscotch Luxury Shag",
        "https://www.howlfabrics.com/product-page/butterscotch-luxury-shag-faux-fur",
        "NA137.jpg",
        [217,140,89],
        ["howl","shag"]
        ],
        [
        "Snow White Luxury Shag",
        "https://www.howlfabrics.com/product-page/snow-white-luxury-shag-faux-fur",
        "NA136.jpg",
        [244,243,241],
        ["howl","shag"]
        ],
        [
        "Lion Gold Deluxe Fox",
        "https://www.howlfabrics.com/product-page/lion-gold-deluxe-fox-faux-fur",
        "NA135.jpg",
        [246,186,19],
        ["howl","fox"]
        ],
        [
        "Dark Emerald Luxury Teddy",
        "https://www.howlfabrics.com/product-page/dark-emerald-luxury-teddy-faux-fur",
        "NA134.jpg",
        [11,76,81],
        ["howl","teddy"]
        ],
        [
        "Latte Luxury Shag",
        "https://www.howlfabrics.com/product-page/latte-luxury-shag-faux-fur",
        "NA133.jpg",
        [209,194,169],
        ["howl","shag"]
        ],
        [
        "Dark Purple Luxury Teddy",
        "https://www.howlfabrics.com/product-page/dark-purple-luxury-teddy-faux-fur",
        "NA132.jpg",
        [45,26,96],
        ["howl","teddy"]
        ],
        [
        "Black Deluxe Fox",
        "https://www.howlfabrics.com/product-page/black-deluxe-fox-faux-fur",
        "NA131.jpg",
        [23,23,22],
        ["howl","fox"]
        ],
        [
        "Teal Blue Luxury Shag",
        "https://www.howlfabrics.com/product-page/teal-blue-luxury-shag-faux-fur",
        "NA130.jpg",
        [13,137,191],
        ["howl","shag"]
        ],
        [
        "Purple Luxury Shag",
        "https://www.howlfabrics.com/product-page/purple-luxury-shag-faux-fur",
        "NA129.jpg",
        [103,11,177],
        ["howl","shag"]
        ],
        [
        "Cherry Red Luxury Teddy",
        "https://www.howlfabrics.com/product-page/uv-cherry-red-luxury-teddy-faux-fur",
        "NA128.jpg",
        [222,13,55],
        ["howl","teddy"]
        ],
        [
        "Pink Beaver",
        "https://www.howlfabrics.com/product-page/pink-beaver-super-seal-faux-fur",
        "NA127.jpg",
        [255,184,198],
        ["howl","beaver"]
        ],
        [
        "Indigo Luxury Shag",
        "https://www.howlfabrics.com/product-page/indigo-luxury-shag-faux-fur",
        "NA126.jpg",
        [44,11,162],
        ["howl","shag"]
        ],
        [
        "Classic Rust Deluxe Fox",
        "https://www.howlfabrics.com/product-page/classic-rust-deluxe-fox-faux-fur",
        "NA125.jpg",
        [152,58,27],
        ["howl","fox"]
        ],
        [
        "Orange Sherbert Luxury Shag",
        "https://www.howlfabrics.com/product-page/orange-sherbert-luxury-shag-faux-fur",
        "NA124.jpg",
        [251,195,157],
        ["howl","shag"]
        ],
        [
        "Fluro Yellow Luxury Shag",
        "https://www.howlfabrics.com/product-page/uv-fluro-yellow-luxury-shag-faux-fur",
        "NA123.jpg",
        [215,250,41],
        ["howl","shag"]
        ],
        [
        "Orange Luxury Teddy",
        "https://www.howlfabrics.com/product-page/orange-luxury-teddy-faux-fur",
        "NA122.jpg",
        [255,99,15],
        ["howl","teddy"]
        ],
        [
        "Amethyst Purple Luxury Teddy",
        "https://www.howlfabrics.com/product-page/amethyst-purple-luxury-teddy-faux-fur",
        "NA121.jpg",
        [127,78,166],
        ["howl","teddy"]
        ],
        [
        "Charcoal Gray Beaver",
        "https://www.howlfabrics.com/product-page/charcoal-grey-beaver-super-seal-faux-fur",
        "NA120.jpg",
        [54,56,58],
        ["howl","beaver"]
        ],
        [
        "Black Luxury Teddy",
        "https://www.howlfabrics.com/product-page/black-luxury-mink-faux-fur",
        "NA119.jpg",
        [21,20,20],
        ["howl","teddy"]
        ],
        [
        "Baby Pink Luxury Shag",
        "https://www.howlfabrics.com/product-page/baby-pink-luxury-shag-faux-fur",
        "NA118.jpg",
        [253,216,225],
        ["howl","shag"]
        ],
        [
        "Purple Fizz Luxury Teddy",
        "https://www.howlfabrics.com/product-page/purple-fizz-luxury-teddy-faux-fur",
        "NA117.jpg",
        [123,101,236],
        ["howl","teddy"]
        ],
        [
        "UV Hot Pink Luxury Shag",
        "https://www.howlfabrics.com/product-page/hot-pink-luxury-shag-faux-fur",
        "NA116.jpg",
        [248,27,145],
        ["howl","shag"]
        ],
        [
        "Sandstone Luxury Teddy",
        "https://www.howlfabrics.com/product-page/sandstone-luxury-teddy-faux-fur",
        "NA115.jpg",
        [216,165,131],
        ["howl","teddy"]
        ],
        [
        "Sienna Brown Luxury Teddy",
        "https://www.howlfabrics.com/product-page/sienna-brown-luxury-teddy-faux-fur",
        "NA114.jpg",
        [119,63,40],
        ["howl","teddy"]
        ],
        [
        "Baby Pink Luxury Teddy",
        "https://www.howlfabrics.com/product-page/baby-pink-luxury-teddy-faux-fur",
        "NA113.jpg",
        [241,197,208],
        ["howl","teddy"]
        ],
        [
        "Cream Deluxe Fox",
        "https://www.howlfabrics.com/product-page/cream-deluxe-fox-faux-fur",
        "NA112.jpg",
        [249,233,200],
        ["howl","fox"]
        ],
        [
        "Black Beaver",
        "https://www.howlfabrics.com/product-page/black-beaver-faux-fur",
        "NA111.jpg",
        [40,38,37],
        ["howl","beaver"]
        ],
        [
        "Grey Beaver",
        "https://www.howlfabrics.com/product-page/grey-beaver-faux-fur",
        "NA110.jpg",
        [142,147,149],
        ["howl","beaver"]
        ],
        [
        "Platinum Luxury Shag",
        "https://www.howlfabrics.com/product-page/platinum-luxury-shag-faux-fur",
        "NA109.jpg",
        [208,199,189],
        ["howl","shag"]
        ],
        [
        "Navy Luxury Shag",
        "https://www.howlfabrics.com/product-page/navy-luxury-shag-faux-fur",
        "NA108.jpg",
        [28,49,99],
        ["howl","shag"]
        ],
        [
        "Chocolate Luxury Teddy",
        "https://www.howlfabrics.com/product-page/chocolate-luxury-teddy-faux-fur",
        "NA107.jpg",
        [86,59,47],
        ["howl","teddy"]
        ],
        [
        "Honey Bear Luxury Teddy",
        "https://www.howlfabrics.com/product-page/honey-bear-luxury-teddy-faux-fur",
        "NA106.jpg",
        [182,151,84],
        ["howl","teddy"]
        ],
        [
        "Mystic Blue Luxury Teddy",
        "https://www.howlfabrics.com/product-page/mystic-blue-luxury-teddy-faux-fur",
        "NA105.jpg",
        [51,142,240],
        ["howl","teddy"]
        ],
        [
        "Lavender Luxury Shag",
        "https://www.howlfabrics.com/product-page/lavender-luxury-shag-faux-fur",
        "NA104.jpg",
        [180,144,234],
        ["howl","shag"]
        ],
        [
        "Neptune Blue Luxury Teddy",
        "https://www.howlfabrics.com/product-page/neptune-blue-luxury-teddy-faux-fur",
        "NA103.jpg",
        [39,64,190],
        ["howl","teddy"]
        ],
        [
        "Lime Beaver",
        "https://www.howlfabrics.com/product-page/lime-beaver-super-seal-faux-fur",
        "NA102.jpg",
        [125,204,46],
        ["howl","beaver"]
        ],
        [
        "Pastel Yellow Luxury Teddy",
        "https://www.howlfabrics.com/product-page/pastel-yellow-luxury-teddy-faux-fur",
        "NA101.jpg",
        [255,241,153],
        ["howl","teddy"]
        ],
        [
        "Sandstone Deluxe Fox",
        "https://www.howlfabrics.com/product-page/sandstone-deluxe-fox-faux-fur",
        "NA100.jpg",
        [216,165,131],
        ["howl","fox"]
        ],
        [
        "Brick Red Luxury Shag",
        "https://www.howlfabrics.com/product-page/brick-red-luxury-shag-faux-fur",
        "NA099.jpg",
        [116,17,6],
        ["howl","shag"]
        ],
        [
        "Pastel Pink Bunny",
        "https://www.howlfabrics.com/product-page/pastel-pink-bunny-faux-fur",
        "NA098.jpg",
        [242,212,212],
        ["howl","bunny"]
        ],
        [
        "Lime Luxury Shag",
        "https://www.howlfabrics.com/product-page/lime-luxury-shag-faux-fur",
        "NA097.jpg",
        [125,204,46],
        ["howl","shag"]
        ],
        [
        "Royal Blue Beaver",
        "https://www.howlfabrics.com/product-page/royal-blue-beaver-super-seal-faux-fur",
        "NA096.jpg",
        [5,17,189],
        ["howl","beaver"]
        ],
        [
        "Spring Green Luxury Teddy",
        "https://www.howlfabrics.com/product-page/uv-spring-green-luxury-teddy-faux-fur",
        "NA095.jpg",
        [194,234,46],
        ["howl","teddy"]
        ],
        [
        "Yellow Beaver",
        "https://www.howlfabrics.com/product-page/yellow-beaver-super-seal-faux-fur",
        "NA094.jpg",
        [255,197,36],
        ["howl","beaver"]
        ],
        [
        "Classic Rust Luxury Teddy",
        "https://www.howlfabrics.com/product-page/classic-rust-luxury-teddy-faux-fur",
        "NA093.jpg",
        [132,57,16],
        ["howl","teddy"]
        ],
        [
        "Yellow Luxury Shag",
        "https://www.howlfabrics.com/product-page/yellow-luxury-shag-faux-fur",
        "NA092.jpg",
        [255,197,36],
        ["howl","shag"]
        ],
        [
        "Pastel Lavender Luxury Shag",
        "https://www.howlfabrics.com/product-page/pastel-lavender-luxury-shag-faux-fur",
        "NA091.jpg",
        [204,185,233],
        ["howl","shag"]
        ],
        [
        "Stone Beaver",
        "https://www.howlfabrics.com/product-page/stone-beaver-super-seal-faux-fur",
        "NA090.jpg",
        [156,152,150],
        ["howl","beaver"]
        ],
        [
        "White Beaver",
        "https://www.howlfabrics.com/product-page/white-beaver-faux-fur",
        "NA089.jpg",
        [252,250,247],
        ["howl","beaver"]
        ],
        [
        "Saddle Tan Luxury Teddy",
        "https://www.howlfabrics.com/product-page/saddle-tan-teddy-faux-fur",
        "NA088.jpg",
        [174,101,45],
        ["howl","teddy"]
        ],
        [
        "UV Lemon Luxury Teddy",
        "https://www.howlfabrics.com/product-page/uv-lemon-luxury-teddy-faux-fur",
        "NA087.jpg",
        [243,246,49],
        ["howl","teddy"]
        ],
        [
        "Tomato Luxury Teddy",
        "https://www.howlfabrics.com/product-page/tomato-luxury-teddy-faux-fur",
        "NA086.jpg",
        [243,74,32],
        ["howl","teddy"]
        ],
        [
        "Emerald Luxury Shag",
        "https://www.howlfabrics.com/product-page/emerald-luxury-shag-faux-fur",
        "NA085.jpg",
        [12,105,60],
        ["howl","shag"]
        ],
        [
        "Charcoal Grey Luxury Teddy",
        "https://www.howlfabrics.com/product-page/charcoal-grey-luxury-teddy-faux-fur",
        "NA084.jpg",
        [71,65,62],
        ["howl","teddy"]
        ],
        [
        "Blue Grey Luxury Teddy",
        "https://www.howlfabrics.com/product-page/blue-grey-luxury-teddy-faux-fur",
        "NA083.jpg",
        [122,141,153],
        ["howl","teddy"]
        ],
        [
        "Saddle Tan Deluxe Fox",
        "https://www.howlfabrics.com/product-page/saddle-tan-deluxe-fox-faux-fur",
        "NA082.jpg",
        [174,101,45],
        ["howl","fox"]
        ],
        [
        "Bright Blue Beaver",
        "https://www.howlfabrics.com/product-page/bright-blue-beaver-super-seal-faux-fur",
        "NA081.jpg",
        [28,121,242],
        ["howl","beaver"]
        ],
        [
        "Fluro Orange Luxury Shag",
        "https://www.howlfabrics.com/product-page/uv-fluro-orange-luxury-shag-faux-fur",
        "NA080.jpg",
        [255,129,61],
        ["howl","shag"]
        ],
        [
        "Crimson Jewel Teddy",
        "https://www.howlfabrics.com/product-page/crimson-jewel-teddy-faux-fur-fabric",
        "NA079.jpg",
        [193,31,56],
        ["howl","teddy"]
        ],
        [
        "Pastel Blue Bunny",
        "https://www.howlfabrics.com/product-page/Pastel-Blue-Bunny-Faux-Fur",
        "NA078.jpg",
        [195,220,229],
        ["howl","bunny"]
        ],
        [
        "Teal Blue Luxury Teddy",
        "https://www.howlfabrics.com/product-page/teal-blue-luxury-teddy-faux-fur",
        "NA077.jpg",
        [8,116,170],
        ["howl","teddy"]
        ],
        [
        "Blue Raspberry Luxury Shag",
        "https://www.howlfabrics.com/product-page/blue-raspberry-luxury-shag-faux-fur",
        "NA076.jpg",
        [47,190,238],
        ["howl","shag"]
        ],
        [
        "Cobalt Luxury Shag",
        "https://www.howlfabrics.com/product-page/cobalt-luxury-shag-faux-fur",
        "NA075.jpg",
        [20,84,153],
        ["howl","shag"]
        ],
        [
        "Cool Mint Luxury Teddy",
        "https://www.howlfabrics.com/product-page/cool-mint-luxury-teddy-faux-fur",
        "NA074.jpg",
        [162,236,217],
        ["howl","teddy"]
        ],
        [
        "Lilac Luxury Teddy",
        "https://www.howlfabrics.com/product-page/lilac-luxury-teddy-faux-fur",
        "NA073.jpg",
        [223,185,212],
        ["howl","teddy"]
        ],
        [
        "Tomato Luxury Shag",
        "https://www.howlfabrics.com/product-page/tomato-luxury-shag-faux-fur",
        "NA072.jpg",
        [243,74,32],
        ["howl","shag"]
        ],
        [
        "Fire Red Beaver",
        "https://www.howlfabrics.com/product-page/fire-red-beaver-super-seal-faux-fur",
        "NA071.jpg",
        [243,18,18],
        ["howl","beaver"]
        ],
        [
        "Black Arctic Fox",
        "https://www.howlfabrics.com/product-page/black-arctic-fox-faux-fur",
        "NA070.jpg",
        [15,15,15],
        ["howl","fox"]
        ],
        [
        "Fire Red Luxury Shag",
        "https://www.howlfabrics.com/product-page/fire-red-luxury-shag-faux-fur",
        "NA069.jpg",
        [243,18,18],
        ["howl","shag"]
        ],
        [
        "Pewter Luxury Shag",
        "https://www.howlfabrics.com/product-page/pewter-luxury-shag-faux-fur",
        "NA068.jpg",
        [93,81,75],
        ["howl","shag"]
        ],
        [
        "Mystic Blue Luxury Shag",
        "https://www.howlfabrics.com/product-page/mystic-blue-luxury-shag-faux-fur",
        "NA067.jpg",
        [51,158,240],
        ["howl","shag"]
        ],
        [
        "Stone Luxury Shag",
        "https://www.howlfabrics.com/product-page/stone-luxury-shag-faux-fur",
        "NA066.jpg",
        [156,152,150],
        ["howl","shag"]
        ],
        [
        "Charcoal Grey Deluxe Fox",
        "https://www.howlfabrics.com/product-page/charcoal-grey-deluxe-fox-faux-fur",
        "NA065.jpg",
        [71,65,62],
        ["howl","fox"]
        ],
        [
        "Butterscotch Deluxe Fox",
        "https://www.howlfabrics.com/product-page/butterscotch-deluxe-fox-faux-fur",
        "NA064.jpg",
        [220,126,76],
        ["howl","fox"]
        ],
        [
        "Grass Green Luxury Teddy",
        "https://www.howlfabrics.com/product-page/grass-green-luxury-teddy-faux-fur",
        "NA063.jpg",
        [66,200,40],
        ["howl","shag"]
        ],
        [
        "Purple Fizz Luxury Teddy",
        "https://www.howlfabrics.com/product-page/purple-fizz-luxury-shag-faux-fur",
        "NA062.jpg",
        [114,91,230],
        ["howl","shag"]
        ],
        [
        "Natural Black Luxury Teddy",
        "https://www.howlfabrics.com/product-page/Black-luxury-teddy-faux-fur",
        "NA061.jpg",
        [36,27,25],
        ["howl","teddy"]
        ],
        [
        "Blue Grey Luxury Shag",
        "https://www.howlfabrics.com/product-page/blue-grey-luxury-shag-faux-fur",
        "NA060.jpg",
        [122,141,153],
        ["howl","shag"]
        ],
        [
        "Mango Luxury Shag",
        "https://www.howlfabrics.com/product-page/mango-luxury-shag-faux-fur",
        "NA059.jpg",
        [255,153,36],
        ["howl","shag"]
        ],
        [
        "Purple Beaver",
        "https://www.howlfabrics.com/product-page/purple-beaver-super-seal-faux-fur",
        "NA058.jpg",
        [102,13,175],
        ["howl","beaver"]
        ],
        [
        "Lilac Luxury Shag",
        "https://www.howlfabrics.com/product-page/lilac-luxury-shag-faux-fur",
        "NA057.jpg",
        [223,185,212],
        ["howl","shag"]
        ],
        [
        "Glacier Blue Luxury Shag",
        "https://www.howlfabrics.com/product-page/glacier-blue-luxury-shag-faux-fur",
        "NA056.jpg",
        [145,195,232],
        ["howl","shag"]
        ],
        [
        "Mango Luxury Teddy",
        "https://www.howlfabrics.com/product-page/mango-luxury-teddy-faux-fur",
        "NA055.jpg",
        [255,153,36],
        ["howl","teddy"]
        ],
        [
        "Sweet Potato Luxury Teddy",
        "https://www.howlfabrics.com/product-page/sweet-potato-luxury-teddy-faux-fur",
        "NA054.jpg",
        [148,39,20],
        ["howl","teddy"]
        ],
        [
        "Cream Luxury Teddy",
        "https://www.howlfabrics.com/product-page/cream-luxury-teddy-faux-fur",
        "NA053.jpg",
        [249,233,200],
        ["howl","teddy"]
        ],
        [
        "Grey Luxury Shag",
        "https://www.howlfabrics.com/product-page/grey-luxury-shag-faux-fur",
        "NA052.jpg",
        [89,86,84],
        ["howl","shag"]
        ],
        [
        "Sienna Brown Luxury Shag",
        "https://www.howlfabrics.com/product-page/sienna-brown-luxury-shag-faux-fur",
        "NA051.jpg",
        [119,63,40],
        ["howl","shag"]
        ],
        [
        "Lion Gold Beaver",
        "https://www.howlfabrics.com/product-page/gold-beaver-super-seal-faux-fur",
        "NA050.jpg",
        [247,183,43],
        ["howl","beaver"]
        ],
        [
        "Cherry Red Luxury Shag",
        "https://www.howlfabrics.com/product-page/uv-cherry-red-luxury-shag-faux-fur",
        "NA049.jpg",
        [218,16,47],
        ["howl","shag"]
        ],
        [
        "Coral Luxury Teddy",
        "https://www.howlfabrics.com/product-page/coral-luxury-teddy-faux-fur",
        "NA048.jpg",
        [242,181,166],
        ["howl","teddy"]
        ],
        [
        "Brown Luxury Shag",
        "https://www.howlfabrics.com/product-page/brown-luxury-shag-faux-fur",
        "NA047.jpg",
        [63,44,39],
        ["howl","shag"]
        ],
        [
        "Savannah Lion Luxury Teddy",
        "https://www.howlfabrics.com/product-page/savannah-lion-luxury-teddy-faux-fur",
        "NA046.jpg",
        [164,114,101],
        ["howl","teddy"]
        ],
        [
        "Bubble Gum Luxury Shag",
        "https://www.howlfabrics.com/product-page/bubble-gum-luxury-shag-faux-fur",
        "NA045.jpg",
        [247,146,220],
        ["howl","shag"]
        ],
        [
        "Pastel Lavender Luxury Teddy",
        "https://www.howlfabrics.com/product-page/pastel-lavender-luxury-teddy-faux-fur",
        "NA044.jpg",
        [204,185,233],
        ["howl","teddy"]
        ],
        [
        "Cool Mint Luxury Shag",
        "https://www.howlfabrics.com/product-page/cool-mint-luxury-shag-faux-fur",
        "NA043.jpg",
        [162,236,217],
        ["howl","shag"]
        ],
        [
        "Honey Luxury Shag",
        "https://www.howlfabrics.com/product-page/honey-luxury-shag-faux-fur",
        "NA042.jpg",
        [236,206,142],
        ["howl","shag"]
        ],
        [
        "White Monster",
        "https://www.howlfabrics.com/product-page/white-monster-faux-fur",
        "NA041.jpg",
        [249,247,246],
        ["howl","monster"]
        ],
        [
        "Platinum Luxury Teddy",
        "https://www.howlfabrics.com/product-page/platinum-luxury-teddy-faux-fur",
        "NA040.jpg",
        [208,199,189],
        ["howl","teddy"]
        ],
        [
        "Lavender Beaver",
        "https://www.howlfabrics.com/product-page/lavender-beaver-super-seal-faux-fur",
        "NA039.jpg",
        [198,144,234],
        ["howl","beaver"]
        ],
        [
        "Lychee Luxury Teddy",
        "https://www.howlfabrics.com/product-page/lychee-luxury-teddy-faux-fur",
        "NA038.jpg",
        [245,106,81],
        ["howl","teddy"]
        ],
        [
        "Orange Sherbert Luxury Teddy",
        "https://www.howlfabrics.com/product-page/orange-sherbert-luxury-teddy-faux-fur",
        "NA037.jpg",
        [253,179,129],
        ["howl","teddy"]
        ],
        [
        "Turquoise Luxury Shag",
        "https://www.howlfabrics.com/product-page/turquoise-luxury-shag-faux-fur",
        "NA036.jpg",
        [33,176,202],
        ["howl","shag"]
        ],
        [
        "Baby Blue Luxury Shag",
        "https://www.howlfabrics.com/product-page/baby-blue-luxury-shag-faux-fur",
        "NA035.jpg",
        [197,221,241],
        ["howl","shag"]
        ],
        [
        "Royal Blue Luxury Shag",
        "https://www.howlfabrics.com/product-page/royal-blue-luxury-shag-faux-fur",
        "NA034.jpg",
        [36,33,176],
        ["howl","shag"]
        ],
        [
        "Chocolate Deluxe Fox",
        "https://www.howlfabrics.com/product-page/chocolate-brown-deluxe-fox-faux-fur",
        "NA033.jpg",
        [86,59,47],
        ["howl","fox"]
        ],
        [
        "Indigo Luxury Teddy",
        "https://www.howlfabrics.com/product-page/indigo-luxury-teddy-faux-fur",
        "NA032.jpg",
        [43,15,143],
        ["howl","teddy"]
        ],
        [
        "Merlot Luxury Shag",
        "https://www.howlfabrics.com/product-page/merlot-luxury-shag-faux-fur",
        "NA031.jpg",
        [89,34,47],
        ["howl","shag"]
        ],
        [
        "Silver Gray Deluxe Fox",
        "https://www.howlfabrics.com/product-page/silver-deluxe-fox-faux-fur",
        "NA030.jpg",
        [156,153,159],
        ["howl","fox"]
        ],
        [
        "Bronze Luxury Shag",
        "https://www.howlfabrics.com/product-page/bronze-luxury-shag-faux-fur",
        "NA029.jpg",
        [132,100,82],
        ["howl","shag"]
        ],
        [
        "Azure Luxury Shag",
        "https://www.howlfabrics.com/product-page/azure-blue-luxury-shag-faux-fur",
        "NA028.jpg",
        [19,135,236],
        ["howl","shag"]
        ],
        [
        "Amethyst Purple Luxury Shag",
        "https://www.howlfabrics.com/product-page/amethyst-purple-luxury-shag-faux-fur",
        "NA027.jpg",
        [129,85,195],
        ["howl","shag"]
        ],
        [
        "Caramel Beaver",
        "https://www.howlfabrics.com/product-page/caramel-beaver-super-seal-faux-fur",
        "NA026.jpg",
        [157,122,47],
        ["howl","beaver"]
        ],
        [
        "Snow White Deluxe Fox",
        "https://www.howlfabrics.com/product-page/snow-white-deluxe-fox-faux-fur",
        "NA025.jpg",
        [250,246,244],
        ["howl","fox"]
        ],
        [
        "Butterscotch Luxury Teddy",
        "https://www.howlfabrics.com/product-page/butterscotch-luxury-teddy-faux-fur",
        "NA024.jpg",
        [220,126,76],
        ["howl","teddy"]
        ],
        [
        "Merlot Luxury Teddy",
        "https://www.howlfabrics.com/product-page/burgundy-red-bunny-faux-fur",
        "NA023.jpg",
        [89,34,47],
        ["howl","teddy"]
        ],
        [
        "Orange Beaver",
        "https://www.howlfabrics.com/product-page/orange-beaver-super-seal-faux-fur",
        "NA022.jpg",
        [245,89,5],
        ["howl","beaver"]
        ],
        [
        "Cranberry Beaver",
        "https://www.howlfabrics.com/product-page/cranberry-beaver-super-seal-faux-fur",
        "NA021.jpg",
        [157,27,46],
        ["howl","beaver"]
        ],
        [
        "Cream Beaver",
        "https://www.howlfabrics.com/product-page/cream-beaver-super-seal-faux-fur",
        "NA020.jpg",
        [249,233,200],
        ["howl","beaver"]
        ],
        [
        "Lion Gold Luxury Teddy",
        "https://www.howlfabrics.com/product-page/lion-gold-luxury-teddy-faux-fur",
        "NA019.jpg",
        [247,183,43],
        ["howl","teddy"]
        ],
        [
        "Lychee Luxury Shag",
        "https://www.howlfabrics.com/product-page/lychee-luxury-shag-faux-fur",
        "NA018.jpg",
        [245,106,81],
        ["howl","shag"]
        ],
        [
        "UV Electric Rose Teddy",
        "https://www.howlfabrics.com/product-page/electric-rose-teddy-faux-fur",
        "NA017.jpg",
        [234,62,171],
        ["howl","teddy"]
        ],
        [
        "Snow White Arctic Fox",
        "https://www.howlfabrics.com/product-page/snow-white-arctic-fox-faux-fur",
        "NA016.jpg",
        [247,244,243],
        ["howl","fox"]
        ],
        [
        "Classic Rust Beaver",
        "https://www.howlfabrics.com/product-page/classic-rust-beaver-super-seal-faux-fur",
        "NA015.jpg",
        [132,57,16],
        ["howl","beaver"]
        ],
        [
        "Buttercup Luxury Shag",
        "https://www.howlfabrics.com/product-page/buttercup-luxury-shag-faux-fur",
        "NA014.jpg",
        [247,208,126],
        ["howl","shag"]
        ],
        [
        "Savannah Lion Deluxe Fox",
        "https://www.howlfabrics.com/product-page/savannah-lion-deluxe-fox-faux-fur",
        "NA013.jpg",
        [164,114,101],
        ["howl","fox"]
        ],
        [
        "Dark Red Luxury Shag",
        "https://www.howlfabrics.com/product-page/dark-red-luxury-shag-faux-fur",
        "NA012.jpg",
        [142,26,44],
        ["howl","shag"]
        ],
        [
        "Dusty Purple Luxury Shag",
        "https://www.howlfabrics.com/product-page/dusty-purple-luxury-shag-faux-fur",
        "NA010.jpg",
        [170,165,197],
        ["howl","shag"]
        ],
        [
        "Grass Green Luxury Shag",
        "https://www.howlfabrics.com/product-page/grass-green-luxury-shag-faux-fur",
        "NA009.jpg",
        [66,200,40],
        ["howl","shag"]
        ],
        [
        "Aruba Luxury Shag",
        "https://www.howlfabrics.com/product-page/aruba-luxury-shag-faux-fur",
        "NA008.jpg",
        [111,236,234],
        ["howl","shag"]
        ],
        [
        "Azure Luxury Teddy",
        "https://www.howlfabrics.com/product-page/azure-blue-luxury-teddy-faux-fur",
        "NA007.jpg",
        [19,135,236],
        ["howl","teddy"]
        ],
        [
        "Baby Blue Beaver",
        "https://www.howlfabrics.com/product-page/baby-blue-beaver-super-seal-faux-fur",
        "NA006.jpg",
        [197,221,241],
        ["howl","beaver"]
        ],
        [
        "Blue Raspberry Luxury Teddy",
        "https://www.howlfabrics.com/product-page/blue-raspberry-luxury-teddy-faux-fur",
        "NA005.jpg",
        [47,190,238],
        ["howl","teddy"]
        ],
        [
        "Honey Luxury Teddy",
        "https://www.howlfabrics.com/product-page/honey-luxury-teddy-faux-fur",
        "NA004.jpg",
        [236,206,142],
        ["howl","teddy"]
        ],
        [
        "Snow White Luxury Teddy",
        "https://www.howlfabrics.com/product-page/snow-white-luxury-teddy-faux-fur",
        "NA003.jpg",
        [250,247,245],
        ["howl","teddy"]
        ],
        [
        "Amber Luxury Shag",
        "https://www.howlfabrics.com/product-page/amber-luxury-shag-faux-fur",
        "NA002.jpg",
        [189,73,10],
        ["howl","shag"]
        ],
        [
        "Black Bunny",
        "https://www.howlfabrics.com/product-page/black-bunny-faux-fur",
        "NA001.jpg",
        [10,10,10],
        ["howl","bunny"]
        ]
];
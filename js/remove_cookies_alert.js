/* functions */
String.prototype.includesFromArr = (arr)=> {
    for (let i = 0; i < arr.length; i++) {
        if (this.includes(arr[i]))
            return true;
    }
    return false;
}

const createSelectorString = (keywords)=> {
    let str = "";

    keywords.forEach(function(keyword) {
        str += "div[class*="+keyword+"],";
        str += "span[class*="+keyword+"],";
        str += "p[class*="+keyword+"],";
        str += "div[id*="+keyword+"],";
        str += "span[id*="+keyword+"],";
        str += "p[id*="+keyword+"],";

        let capped = keyword.charAt(0).toUpperCase() + keyword.slice(1);
        str += "div[class*="+capped+"],";
        str += "span[class*="+capped+"],";
        str += "p[class*="+capped+"],";
        str += "div[id*="+capped+"],";
        str += "span[id*="+capped+"],";
        str += "p[id*="+capped+"],";
    })

    return str.slice(0, -1); // remove last comma
}

const removeCookieAlert = ()=> {
    $(selectorString).remove();
};


/* variables */
const keywords = ["cookie", "ccpa", "gdpr"];
const selectorString = createSelectorString(keywords);
let cookiePage = false; // cookie page flag
console.log("Mark Zuckerberg sends his regards.");


/* on doc ready / on window load */
$(function(){
    if ((location.href).includesFromArr(keywords)) {
        cookiePage = true;
        return;
    }

    setTimeout(function() {
        removeCookieAlert();
    }, 500);
});

$(window).on('load', function () {
    if (!cookiePage)
        removeCookieAlert();
})
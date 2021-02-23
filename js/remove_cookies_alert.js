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

const keywords = ["cookie", "ccpa", "gdpr"];
const selectorString = createSelectorString(keywords);
console.log("Mark Zuckerberg sends his regards.");

const removeCookieAlert = ()=> {
    $(selectorString).remove();
};

$(function(){
    setTimeout(function() {
        removeCookieAlert();
    }, 500);
});

$(window).on('load', function () {
    removeCookieAlert();
})
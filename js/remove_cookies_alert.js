const createSelectorString = (keywords)=> {
    let str = "";

    keywords.forEach(function(keyword) {
        str += "[class*="+keyword+"],";
        str += "[id*="+keyword+"],";

        let capped = keyword.charAt(0).toUpperCase() + keyword.slice(1);
        str += "[class*="+capped+"],";
        str += "[id*="+capped+"],";
    })

    return str.slice(0, -1);
}

const keywords = ["cookie", "ccpa", "gdpr"];
const selectorString = createSelectorString(keywords);
console.log("Mark Zuckerberg is sending his regards.");

const removeCookieAlert = ()=> {
    $(selectorString).remove();
    /*while ($(selectorString).length) {
        $(selectorString).remove();
    }*/
};

$(function(){
    setTimeout(function() {
        removeCookieAlert();
    }, 500);
});

$(window).on('load', function () {
    removeCookieAlert();
})
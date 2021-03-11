var intervalId = null;
window.onclick=function(){
    if(intervalId!==null){return;}
    intervalId = window.setInterval(function(){
        replaceLinks();
        }, 500);
}

function pause(){
    clearInterval(intervalId)
    intervalId = null
}
  
function replaceLinks(){

    var element = getElement()
    if(element.singleNodeValue !== null){
        pause();
        var url = element.singleNodeValue.nodeValue;
        if(url.includes("light.gg")){return};
        var itemId = getItemIdFromUrl(url)
        var new_url = buildLightGGUrl(itemId)
        setNewDIMUrl(new_url)
    }
}

function getElement() {
    return document.evaluate('//div[@class="_2hFLg"]//a//@href', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
}

function setNewDIMUrl(url) {
    return document.evaluate('//div[@class="_2hFLg"]//a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.href=url
}

function getItemIdFromUrl(url){
    return url.split("https://destinytracker.com/destiny-2/db/items/")[1].split("?")[0]
}

function buildLightGGUrl(itemId){
    return "https://www.light.gg/db/items/" + itemId;
}
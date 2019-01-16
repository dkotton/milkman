



// only perform certain actions once
// keep track of if perfomred by adding a unique element to the dom
var MLGchecker = "xXx_mlg_checker_xXx";

// Replace sources of all images
//var images = [
//	  "http://i612.photobucket.com/albums/tt205/machinespartan/johncenaname_zps4adyuh0x.png",
//    "http://i612.photobucket.com/albums/tt205/machinespartan/johncenaname_zps4adyuh0x.png" // the sanic one
//];

var sounds = [
    "audio.mp3"
];

var weedColors = [
    [249,247,246],
    [251,245,215],
    [255,221,73],
    [252,189,73],
    [122,186,113]
];



// Only perform these actions once
if ($("#xXx_mlg_checker_xXx").length === 0){
    $("img:not(#sanic2fast)").each(function(){
        $(this).attr("src", getRandomElement(images)).attr("height","").css("height","auto");
    });
    
    // Get all text nodes on the page and increase the dankness of the text
    var textNodes = textNodesUnder(document.documentElement);
    for (var nodeNum = 0; nodeNum < textNodes.length; nodeNum++) {
        var text = textNodes[nodeNum].nodeValue;
        var words = new Lexer().lex(text);
        var taggedWords = new POSTagger().tag(words);
        for (var i in taggedWords) {
            var taggedWord = taggedWords[i];
            var word = taggedWord[0];
            var tag = taggedWord[1];

            // 50% chance of changing each word
            if (tag in treeBank && Math.random() < 0.5){
                if (Math.random() < 0.1){
                    text = text.replace(word, "xXx_" + word + "_xXx");
                }
                else {
                    var randWord = getRandomElement(treeBank[tag]);

                    // 5% (0.5*0.1) chance of adding xXx_word_xXx to noun
                    if (tag === "NN" || tag === "NNS" || tag === "NNP"){
                        if (Math.random() < 0.05){
                            randWord = "xXx_" + randWord + "_xXx";
                        }
                    }
                    text = text.replace(word, randWord);
                }
            }
        }
    
        text = ayylmao(text);

        textNodes[nodeNum].nodeValue = text;
    }
    
    /* ( ͡° ͜ʖ ͡°) MLG event handling */
    /* "oi u cheeky cunt 1v1 me" --skrillex */
    document.addEventListener("click", function(evt) {
        evt = (evt || event);
        mark(evt.clientX, evt.clientY);
        causeSeizure();
    });

    window.addEventListener("scroll", function(evt) {
        /* rate limit for smooth scrolling */
        if (Date.now() - scrollTime < 50) return;
        scrollTime = Date.now();
        hornAudio.pause();
        hornAudio.currentTime = 0;
        hornAudio.play();
        intensifyScrolling();
    });

    window.addEventListener("contextmenu", function(evt) {
        damnAudio.pause();
        damnAudio.currentTime = 0;
        damnAudio.play();    
        causeSeizure();
    });

    /* ( ͡° ͜ʖ ͡°) MLG copy-and-paste solutions from the internet */
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = "* { font-family: \"Comic Sans MS\" !important; }";
    document.body.appendChild(css);
}


function addSound(id, src){
    if ($("#" + id).length)
        changeSound(id,src)
    else
        $("body").append('<audio id="' + id + '" src="' + src + '" preload="auto"></audio>');
}

function removeSound(id){
    $("#" + id).remove();
}

function playSound(id){
    $('#' + id)[0].play();
}

function changeSound(id, sound){
    $("#" + id).attr("src", sound);
}

function getRandomElement(items){
	return items[Math.floor(Math.random()*items.length)];
}

function runSanic(){
    $("#sanic2fast").animate({left: $(window).width()}, 2000, "linear", function(){
        $("#sanic2fast").css("left","-256px");
    });
}


function textNodesUnder(node){
    // Shamelessly stolen from stack overflow
    var all = [];
    for (node = node.firstChild; node; node = node.nextSibling) {
        if (node.nodeType == 3) // If it is a text node
            all.push(node);
        else
            all = all.concat(textNodesUnder(node));
    }
    return all;
}

// Audio tag for playing sound
var randSound = getRandomElement(sounds);
var initRandSoundID = "initSound";
if (typeof chrome.extension !== "undefined")
    addSound(initRandSoundID, chrome.extension.getURL('sounds/' + randSound));
else
    addSound(initRandSoundID, 'sounds/' + randSound);
playSound(initRandSoundID);

if (!$("#sanic2fast").length)
    $("body").append("<img id='sanic2fast' src='http://i612.photobucket.com/albums/tt205/machinespartan/johncenaname_zps4adyuh0x.png' />");

$("#sanic2fast").css({
    "position": "fixed",
    "top": "calc(50% - 128px)",
    "left": "-256px",
    "z-index": "10000000"
});

if (randSound === "audio.mp3"){
    runSanic();
}


// add the mlg checker
if ($("#xXx_mlg_checker_xXx").length === 0)
    $("body").append("<div id='xXx_mlg_checker_xXx'></div>");


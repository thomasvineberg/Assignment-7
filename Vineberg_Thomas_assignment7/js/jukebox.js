/*eslint-env browser*/

var playMe, showFavorite;

var Jukebox = function () {
    "use strict";
    var albums = [], self, selectedAlbum;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        printAlbum: function () {
            window.console.log(albums);
        },
        selectAlbum: function () {
            //use dropdown to find index of selected album
            selectedAlbum = window.document.getElementById("drop");
            selectedAlbum.addEventListener("change", function () {
                return selectedAlbum.value;
            });
        },
        playAlbum: function () {
            albums[selectedAlbum.value].play();
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return "Your favorite album is " + this.artist + " : " + this.title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};

var jbox = new Jukebox();

var albumDropDown = [{artist: "Operation Ivy", title: "Energy"}, {artist: "Blink 182", title: "Dude Ranch"}, {artist: "New Found Glory", title: "Sticks and Stones"}, {artist: "Ira Wolf", title: "The Closest Thing to Home"}, {artist: "John Williams", title: "The Empire Strikes Back"}];

for (var i = 0; i < albumDropDown.length; i++) {
    var album = new Album();
    album.artist = albumDropDown[i].artist;
    album.title = albumDropDown[i].title;
    jbox.addAlbum(album);
}

//CONFIRMING THAT ALBUMS WERE SUCCESSFULLY ADDED TO JBOX
jbox.printAlbum();

window.addEventListener("load", function () {
    "use strict";
    var sel, i, opt, textFave, faveText;
    
    //Programatically create dropdown menu    
    sel = window.document.getElementById("drop");
    for (i = 0; i < albumDropDown.length; i++) {
        opt = window.document.createElement("option");
        opt.innerHTML = albumDropDown[i].title;
        opt.value = i;
        opt.id = i;
        sel.add(opt, 0);
    }
    
    //Select and play current option when PLAY button is clicked
    playMe = window.document.getElementById("playback");
    playMe.addEventListener("click", function () {
        jbox.selectAlbum();
        jbox.playAlbum();
    });
    
    //Populate paragraph with new favorite album
    textFave = window.document.getElementById("favoriteAlbum");
    showFavorite = window.document.getElementById("faveAlb");
    showFavorite.addEventListener("click", function () {
        faveText = jbox.favoriteAlbum();
        textFave.innerHTML = faveText;
    });
    
});
    












//IGNORE - practice

/*$("playback").addEventListener("click", album[valueDrop].play);
    $("faveAlb").addEventListener("click", logFave);
*/






/*
album1.play();
album1.play();
album1.play();
album2.play();
album3.play();

//var album1 = new Album("Operation Ivy", "Energy");
//var album2 = new Album("Blink 182", "Dude Ranch");
//var album3 = new Album("New Found Glory", "Sticks and Stones");


//ISOLATED DROPDOWN TO TEST
/* window.addEventListener("load", function() {
    var sel = window.document.getElementById("drop");
for (var i = 2010; i <= 2018; i += 1) {
    var opt = window.document.createElement("option");
    opt.text = i;
    opt.value = i;
    sel.add(opt, 0);
    }
});    


var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

/*
var logFave = window.console.log("You favorite album is: " + jbox.favoriteAlbum());

var playMe = $("drop");
var valueDrop = playMe.options[playMe.selectedIndex].value;

    //index of selected album
*/


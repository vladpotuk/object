// const arr =[];
// console.dir(arr);
// arr.push()

// const obj = { name: "John"};
// console.dir(obj.name);

const playlist = {
    name:"My favorite playlist",
    rating:5,
    tracks:["Track-1", "Track-2","Track-3","Track-4"],
    trackCount:4,

    addTrack(newTrack){
        this.tracks.push(newTrack);
        this.trackCount++;
    },
};

playlist.rating=1;
playlist.subs=12;
console.log(playlist);

playlist.addTrack("Track-5");

console.log(playlist);

//масив з об'єкта

const keysArr=Object.keys(playlist);
console.log(keysArr);

const valuesArr = Object.values(playlist);
console.log(valuesArr);
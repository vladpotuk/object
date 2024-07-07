// const arr1 = [1,35,5,6,7];
// const arr2 = [234,45,67,8,2];
// const arr3 =[23,45];

// const totalArr = arr1.concat(arr2,arr3);
// console.log(totalArr);
// const restArr=[...arr1,...arr2,...arr3];
// console.log(restArr);

// const min = Math.min(...restArr)
// console.log(min);



const objA={x:1,y:2};
const objB={x:0,p:12};

const objC = {...objA,...objb};
console.log(objC);


const defaultSettings = {
    theme:"light",
    showNotification:true,
    hideSidebar:false,
};
const userAettings ={
   showNotification:false,
   hideSidebar:true,
};

const finalSettings ={
    ...{ userName:"mark"},
    ...defaultSettings,
    ...userAettings,
};

console.log(finalSettings);
const finalSettings2=Object.assign(defaultSettings, userSettings);
console.log(finalSettings2);




//desc
const playlist = {
    name:"My favorite playlist",
    rating:5,
    tracks:["Track-1", "Track-2","Track-3","Track-4"],
    trackCount:4,
    albumId:{
        fd22:1,
        fd33:2,
        fd44:3,

    },

};


const{name,rating,trackCountalbumId:{fd22,fd33,fd44}}=playlist;
console.log(name);
console.log(rating);
console.log(trackCount);

const arr=[1,2,3.4];

const[a,b,c,d]= arr;
console.log(a,b,c,d);
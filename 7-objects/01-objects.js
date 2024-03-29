// Object = a container that holds data
// key : value pair
// key value pairs are separated by comma

let netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"}
          ]
        }
      },
      season2: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Secret Shopper"},
            { episode: 2, episodeName: "Color Wars"},
            { episode: 3, episodeName: "Wedding Day Sale"},
            { episode: 4, episodeName: "All-Nighter"},
            { episode: 5, episodeName: "Demotion"},
            { episode: 6, episodeName: "Labor"}
          ]
        }
      },
      season3: {}
    };

  
  
// DOT NOTATION

// allows you to walk through an object to get to the key.
// then if you conole log, you'll get the value connected to it.


// console.log("All data: ", netflix); 

// console.log("Just season info: ", netflix.season2.seasonInfo);
// console.log(netflix.season2.seasonInfo.episodeInfo[1].episodeName);

console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName, netflix.season1.seasonInfo.episodeInfo[3].episode);
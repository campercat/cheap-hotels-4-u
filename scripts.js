// /10/ START HERE
// STEP 1. Create a variable called 'hotels' that is an array of objects. Enter in the following information for the 3 hotels:

// HOTEL #1 - Name is Hotel Paradise, there are 50 total rooms and there are 0 booked rooms
// HOTEL #2 - Name is Quay Hotel, there are 75 total rooms and there are 0 booked rooms
// HOTEL #3 - Name is Parker Place, there are 140 total rooms and there are 0 booked rooms
const hotels = [
  {
    name: "Hotel Paradise",
    totalRooms: 50,
    bookedRooms: 0
  },
  {
    name: "Quay Hotel",
    totalRooms: 75,
    bookedRooms: 0
  },
  {
    name: "Parker Place",
    totalRooms: 140,
    bookedRooms: 0
  }
]

// STEP 2. We missed some additional information for each hotel but its okay! Add the following information below for each hotel object. Do not manipulate the code in Step 1.

// HOTEL PARADISE
// -has a gym - NO
// -has a pool - YES
// -allows pets - NO
hotels[0].hasGym = false
hotels[0].hasPool = true
hotels[0].allowsPets = false

// QUAY HOTEL
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES
hotels[1].hasGym = true
hotels[1].hasPool = true
hotels[1].allowsPets = true

// PARKER PLACE
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES
hotels[2].hasGym = true
hotels[2].hasPool = true
hotels[2].allowsPets = true

// STEP 3. Print the name of each hotel on a separate line
console.log("-------------\n");
console.log("3. Hotel Names");
hotels.forEach(hotel => {
  console.log(hotel.name)
})


// STEP 4. Print the total number of rooms each hotel has
console.log("-------------\n");
console.log("4. Total Rooms");
hotels.forEach(hotel => {
  console.log(hotel.totalRooms)
})

// STEP 5. Print the names of hotels that have gyms
console.log("-------------\n");
console.log("5. Hotels with Gyms");
hotels.forEach(hotel => {
  if(hotel.hasGym) {
    console.log(hotel.name)
  }
})

// STEP 6. Since building this new website, customers are starting to book rooms. Cheap Hotels 4 U has provided the number of rooms booked for each hotel. Update each object with the numbers of booked rooms.

// HOTEL PARADISE = 6 booked rooms
hotels[0].bookedRooms = 6

// QUAY HOTEL = 15 booked rooms
hotels[1].bookedRooms = 15

// PARKER PLACE = 35 booked rooms
hotels[2].bookedRooms = 35

// STEP 7. Now print the number of rooms that are booked for each hotel to confirm that the system has been updated.
console.log("-------------\n");
console.log("7. Rooms Booked");
hotels.forEach(hotel => {
  console.log(hotel.bookedRooms)
})

// STEP 8. Calculate and print the number of rooms available per hotel
console.log("-------------\n");
console.log("8. Rooms Available");
hotels.forEach(hotel => {
  console.log(hotel.totalRooms - hotel.bookedRooms)
})

// STEP 9. The Marketing Team believes the new site has 500 rooms, but the Construction Team says less than 300. To figure out the actual total, print the total number of rooms by adding this across all 3 hotels.
console.log("-------------\n");
console.log("9. Total Rooms Across All Hotels");
let allRooms = 0
hotels.forEach(hotel => {
  allRooms += hotel.totalRooms
})
console.log(allRooms)
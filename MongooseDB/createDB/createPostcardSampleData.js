db = db.getSiblingDB('fannypackdb')
db.createCollection('postcards')
postcardsCollection = db.getCollection("postcards")
postcardsCollection.remove({})
postcardsCollection.insert(
{
	postcardID: 1,
	userID: 123,
	title: "Coffee at Starbucks Reserve",
	imageURL: "https://goo.gl/K1mGuJ",
    description: "The reserve was a really great place to enjoy some of Starbuck's best coffee! I really recommend anyone visiting the city to check this place out!",
    rating: 5,
    cost: 2,
    activityLocation: "Starbucks Reserve",
    activityCity: "Seattle"
}
)
postcardsCollection.insert(
{
	postcardID: 2,
	userID: 234,
	title: "Paddle boarding on Lake Union",
	imageURL: "https://goo.gl/PzLa1n",
    description: "Super fun time! Stunning views of the city! you have to try it out. Staff is really nice and helpful. They made me feel comfortable even though it was my first time.",
    rating: 5,
    cost: 3,
    activityLocation: "Lake Union",
    activityCity: "Seattle"
}
)
postcardsCollection.insert(
{
	postcardID: 3,
	userID: 345,
	title: "UW Cherry Blossoms",
	imageURL: "https://goo.gl/ryXGQd",
    description: "Such a great place in the spring. Be warned, there's a lot of tourists and litte parking. Don't climb on the trees!",
    rating: 3,
    cost: 1,
    activityLocation: "University of Washington",
    activityCity: "Seattle"
}
)

postcardsCollection.insert(
{
	postcardID: 4,
	userID: 456,
	title: "Space Needle",
	imageURL: "https://goo.gl/5n4uy2",
    description: "Over priced and overrated. Don't fall for this tourist trap!!",
    rating: 1,
    cost: 4,
    activityLocation: "Space Needle",
    activityCity: "Seattle"
}
)

postcardsCollection.insert(
{
	postcardID: 5,
	userID: 456,
	title: "Ballard Locks",
	imageURL: "https://goo.gl/iUkHTN",
    description: "A nice place to stroll around on a nice sunny Seattle day",
    rating: 4,
    cost: 1,
    activityLocation: "Ballard Locks",
    activityCity: "Seattle"
}
)

postcardsCollection.insert(
{
	postcardID: 6,
	userID: 456,
	title: "Alki Beach",
	imageURL: "https://goo.gl/uDwuQR",
    description: "A decent beach. Gets very crowded on a nice sunny day. Parking is already tough and gets exponentially worse.",
    rating: 3,
    cost: 1,
    activityLocation: "Alki Beach",
    activityCity: "Seattle"
}
)

postcardsCollection.insert(
{
	postcardID: 7,
	userID: 233,
	title: "Seattle Public Library",
	imageURL: "https://goo.gl/mYhuxA",
    description: "Stunning architecture. A great place to sit down and do some work, read from thousands of books, or even take some nice photos!",
    rating: 4,
    cost: 1,
    activityLocation: "Seattle Public Library",
    activityCity: "Seattle"
}
)


postcardsCollection.insert(
{
	postcardID: 8,
	userID: 346,
	title: "Pikes Place",
	imageURL: "https://goo.gl/KpEvFK",
    description: "Iconic. I love the hustle and bustle of Pike's. It's always buzzing with activity and features great local products. Take a stop by to enjoy what's fresh in the Northwest!",
    rating: 4,
    cost: 2,
    activityLocation: "Pikes Place",
    activityCity: "Seattle"
}
)


postcardsCollection.insert(
{
	postcardID: 9,
	userID: 456,
	title: "Columbia Tower",
	imageURL: "https://goo.gl/6XrcC3",
    description: "Going to the observatory is so much cheaper than at the Space Needle! I would definitely recommend a visit.",
    rating: 4,
    cost: 1,
    activityLocation: "Columbia Tower",
    activityCity: "Seattle"
}
)

postcardsCollection.insert(
{
	postcardID: 10,
	userID: 456,
	title: "AmazonGo",
	imageURL: "https://goo.gl/szNvdT",
    description: "Wow! So great to experience this. Truly a testament of Seattle as a tech capital.",
    rating: 4,
    cost: 1,
    activityLocation: "Amazon",
    activityCity: "Seattle"
}
)

postcardsCollection.insert(
{
	postcardID: 11,
	userID: 456,
	title: "Gas Works",
	imageURL: "https://goo.gl/JiRghV",
    description: "It's so cool to see the skyline of Seattle atop this hill!",
    rating: 4,
    cost: 1,
    activityLocation: "Gas Works Park",
    activityCity: "Seattle"
}
)

postcardsCollection.insert(
{
	postcardID: 12,
	userID: 456,
	title: "Olympic Sculpture Park",
	imageURL: "https://goo.gl/MJ4g88",
    description: "My favorite spot in the city! So  many pieces of artwork around the park overlooking the expanses of the bay",
    rating: 4,
    cost: 1,
    activityLocation: "Olympic Structure Park",
    activityCity: "Seattle"
}
)


db = db.getSiblingDB('postcardsSample')
db.createCollection('collections')
collectionsCollection = db.getCollection("collections")
collectionsCollection.remove({})
collectionsCollection.insert(
{
    collectionID: 1,
    userID: 1,
    title: "Seattle Trip!",
    imageURL: "https://goo.gl/sFyCPP",
    description: "Places to visit in Seattle"
}
)
collectionsCollection.insert(
{
    collectionID: 2,
    userID: 1,
    title: "Houston Trip!",
        imageURL: "https://goo.gl/ydRJ8E",
    description: "Places to visit in Houston"
}
)

collectionsCollection.insert(
{
    collectionID: 3,
    userID: 1,
    title: "San Francisco Trip!",
        imageURL: "https://goo.gl/Mk1v5C",
    description: "Things to see in the Bay area"
}
)

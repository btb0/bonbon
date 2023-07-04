
# bonbon+

bonbon+ is a MERN-Stack mock e-commerce application that sells different snack products such as candy, chocolate, chips, and drinks from different countries and areas. As a Canadian, there are many different types of snacks that I do not have the ability to purchase easily with the limited options available here in comparison to other locations. bonbon+ allows users to filter by both category and location for specific snacks from specific locations.

This application utilizes JSON Web Tokens to provide authentication to users when making an account, giving users the ability and authorization to browse bonbon's catalog, add products to their shopping cart, and ultimately 'pay' for their order by checking out. Users can also view any and all orders made previously, including the price, quantity of items in that order as well as which items were in it.
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Technologies Used

- React
- MongoDB / Mongoose
- Node.js / Express.js
- JavaScript, JSX, HTML/CSS
- Bulma CSS / Mostly custom CSS
- NotionAPI (I made a seperate application to seed my MongoDB database from a Notion table for better ease of use and formatting)
- Figma, Lucid, Notion, and Trello for planning/visualization
- Heroku for deployment

## Getting Started
The website can be found here:

### Planning Materials

#### Trello Board
- https://trello.com/b/pCWO51DN/project-4
#### Component Hierarchy
- https://www.figma.com/file/OdAbW7lOEIhzAkSUfU0Clo/Project-4-Component-Hierarchy?type=whiteboard&node-id=0%3A1&t=DnZ67jODvh6llf1u-1


## Future Enhancements

Things I would like to add in the future are:

#### Currency Conversion/Filtering
- I planned to add this earlier on but ran out of time unfortunately with the time constraints I had during this project. I plan to add a little select somewhere on the page that allows for users to toggle different currencies that they would like the products to be displayed in. To start I was thinking of doing CAD (Default), USD, and Euros.


#### Reviews / Ratings

- This is something that should be fairly easy to implement, I just did not have enough time to implement it with the time I had. I would like users to be able to provide reviews / ratings for the different snacks and for the reviews to be displayed on the product details page.


#### Visitor/Guest Viewing & Purchasing

- As of right now, the website requires for a user to signup/sign in to be able to access the site. In the future I would like to refactor this, allowing for someone to visit the page and view the different products without needing an account. 


#### Improve Error Handling

- I meant to add most of this near the end but had things come up and ran out of time but I would like to improve the error handling by wrapping most things in try catch blocks. 

#### Mock Purchase Information

- I plan to add additional screens that request for the user's (fake) shipping and billing information to emulate a real e-commerce style website. I would like to add a profile feature that allows for the user to also then save this infromation to be able to use it again with future purchases.

#### More Responsive / Mobile Support

- I would like to make the page more responsive and implement different media queries to make the page look how I would like it to at different sizes, as well as adjusting the content to fit on a mobile screen.

#### Search Functionality

- I plan to implement a search bar on the shop page allowing for users to type in the product that they are looking for, rather than having to use a filter to locate what it is that they want.

#### Increase Catalog Size

- I wanted to add many other products from different locations as well as more categories and just increase the amount of products per location/category by a large amount, though unfortunately did not have the time to do so. For example, an additional category I would like to add is a 'Mystery Box', filtered by location. This would have a base price and have random products from the desired location.

#### Higher Quality Product Images

- Considering this is only a mock website and these products are not actually from myself, I was limited to simple images with white backgrounds and not too many options on the way they look and the quality of the photo. I was hoping to be able to find pngs of the different products to be able to create my own backgrounds for the different products to give the website pages a more 'full' feeling and reducing teh amount of white space by giving the products backgrounds that are more fitting to the general theme of the website.

#### Styling/UI Improvements

- During the period of time I had to create this application, a few emergencies came up reducing the amount of time I had to work on it, which ultimately gave me much less time to style the page and thus did not turn out the way I planned for it to visually.


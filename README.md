1. Describe the goal of the application and value to a user
  - This application helps Ping Pong players find sports equipments. They can filter items by type (rackets, rubbers, balls) and prices. They can also sort 
  the items on this webpage by id which is a unique popularity score.

2. Link to your deployed web application running online
  - https://uiuxdevelopmentproject.web.app


3. Explain the organization of your Components, and the props and state related to them
  - I made an item componet which takes in the following as props:
  itemName: string,
	itemType: string,
	itemId: number,
  itemDescription: string,
  price: string,
  imageUrl: string,
	cart: IItem[]
	cartOn: boolean,
	setCart: (cart: IItem[]) => void
	total: number,
	setTotal: (total: number) => void
  
  Each item has a name, type, id, description, price, and image. In App I sort items by Id and filter by price and itemType. So my app renders items based on the filters that were applied on the web page.

4. Note the usability principles considered for layout and hierarchy
  - I have 2 filters and one sort drop down menus on the top of my page under the title. A user can use those menus to filter and sort items. There is a button
  on next to my sort drop down menu that shows the items in the cart. If you click on the cart button it'll display the items in the cart. If you want to go back to the main menu then click on the cart button again. Next to the cart button, I display the total price of all items in the cart. 

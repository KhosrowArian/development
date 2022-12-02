import * as React from "react"
import {
	ChakraProvider,
	Heading,
	theme,
	Select,
	FormControl,
	FormLabel,
	Button
} from "@chakra-ui/react"
import "./App.css"
import { useState } from "react"
import { Item, IItem } from "./components/item"

export const itemsArray: IItem[] = [
	{
		itemName: "Viscaria",
		itemType: "Blade",
		itemId: 10,
		itemDescription: "The Viscaria ALC blade combines the Arylate fibre features of lightness, flexibility, and shock absorption with the Carbon fibre features of high elasticity and minimal dissipation of energy.",
		price: '210',
		imageUrl: "https://i.ebayimg.com/images/g/I6IAAOSwOFFdw7-J/s-l1600.jpg",
	},
	{
		itemName: "Hurricane",
		itemType: "Blade",
		itemId: 2,
		itemDescription: "Hurricane LONG 5 has 7 layers(5 wood + 2 aryl-carbon) and is the fastest blade in DHS Long series.",
		price: '101.99',
		imageUrl: "https://www.tabletennisstore.us/images/product/large/2570.jpg",
	}, 
	{
		itemName: "The Boll",
		itemType: "Blade",
		itemId: 13,
		itemDescription: "Butterfly Timo Boll Paddle penhold blade features the use of butterfly's ZL fibre. ZL fibre is harder, more flexible, and lighter in weight than carbon fibre.",
		price: '150',
		imageUrl: "https://shop.butterflyonline.com/Item%20Images/1243FL.media.01.jpg?resizeid=3&resizeh=600&resizew=600",
	}, 
	{
		itemName: "Harimoto",
		itemType: "Blade",
		itemId: 4,
		itemDescription: "The Harimoto ALC is was developed for and used by Tomokazu Harimoto, Japanese National Team Member.",
		price: '249.99',
		imageUrl: "https://cdn.shopify.com/s/files/1/1171/6530/products/Butterfly-Harimoto-Innerforce-ZLC-Table-Tennis-Blade-Anatomic-Version_1400x.png?v=1592231829",
	}, 
	{
		itemName: "Stiga",
		itemType: "Blade",
		itemId: 9,
		itemDescription: "One of the World's Favorite Table Tennis Brands in the Industry. From Home Game Rooms, to Outdoor Patios, STIGA Table Tennis Has You Covered.",
		price: '10.2',
		imageUrl: "https://i.ibb.co/k2Xyvzn/9esh9-Wnlv-QUm.jpg",
	}, 
	{
		itemName: "Victas",
		itemType: "Rubber",
		itemId: 6,
		itemDescription: "what you need to know when buying rubber sheets. Compare rubber ratings - compare ratings to other sheets.",
		price: '35',
		imageUrl: "https://m.media-amazon.com/images/I/41n1z3budWL._AC_SY1000_.jpg",
	}, {
		itemName: "Donic",
		itemType: "Rubber",
		itemId: 7,
		itemDescription: "Offensive players that love spin-elastic rubbers with excellent dynamics. Soft, with a great feel, fast and spinny.",
		price: '40',
		imageUrl: "https://tt-japan.net/images/CL019A.jpg",
	}, 
	{
		itemName: "Baracuda",
		itemType: "Rubber",
		itemId: 8,
		itemDescription: "Baracuda rubber with built-in speed glue effect produces fantastic spin.",
		price: '55',
		imageUrl: "http://www.paddlepalace.com/images/RDBAR-donic-baracuda.jpg",
	}, 
	{
		itemName: "Tenergy",
		itemType: "Rubber",
		itemId: 5,
		itemDescription: "High Quality Equipment Used By Top Players Like Timo Boll.",
		price: '10.2',
		imageUrl: "https://d3d71ba2asa5oz.cloudfront.net/12008923/images/tn05%20main%201.png",
	},
	{
		itemName: "Evolution",
		itemType: "Rubber",
		itemId: 1,
		itemDescription: "This version confers the highest dynamic and thus makes MX-P the fastest rubber of the EVOLUTION rubber family.",
		price: '65',
		imageUrl: "https://i.ebayimg.com/images/g/B0UAAOSwgLdawcTs/s-l500.jpg",
	}, 
	{	
		itemName: "DHS balls",
		itemType: "Ball",
		itemId: 11,
		itemDescription: "DHS ABS D40+ 3-Star Table Tennis Ball is Approved by ITTF for top-level tournament Professional play; ABS is an environmentally friendly material.",
		price: '1.5',
		imageUrl: "https://static.tabletennis11.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/d/h/dhs_d40_outdoor_10_balls_seam_11589.jpg",
	}, 
	{
		itemName: "Butterfly balls",
		itemType: "Ball",
		itemId: 12,
		itemDescription: "#1 USA Ping Pong Supplier. Shop Top Brands & Get Great Prices Today.",
		price: '2.5',
		imageUrl: "https://butterflyonline.com/wp-content/uploads/2020/07/BPB120-894x894-1.jpg",
	}, 
	{
		itemName: "Stiga balls",
		itemType: "Ball",
		itemId: 3,
		itemDescription: "Today, We're One of the World's Favorite Table Tennis Brands in the Industry.",
		price: '1',
		imageUrl: "https://ae01.alicdn.com/kf/H366a1fb0e83842a5b6f7056f2736f8b1W.jpg",
	}

]
// export const myCart: IItem[] = []


export const App = () => {
	const [currentArray, setCurrentArray]: [IItem[], any] = useState(itemsArray)
	const [cart, setCart]: [IItem[], any] = useState([])
	const [total, setTotal] = useState(0)
	const [type, setType]: [string | undefined, any] = useState(undefined)
	const [priceFilter, setPriceFilter]: [string | undefined, any] = useState(undefined)
	const [sortId, setSortId]: [boolean | undefined, any] = useState(false) 

	React.useEffect(() => {
		displayCards()
	}, [type, priceFilter, sortId])


	const changeType = (e: any) => {
		const state = e.target.value
		if (state === "") {
			setType(undefined)
		} else {
			setType(state)
		}
	}

	const changeSort = (e: any) => {
		const state = e.target.value
		console.log(state)
		if (state === "option1") {
			setSortId(true)
		} else {
			setSortId(false)
		}
	}

	const changePrice = (e: any) => {
		const state = e.target.value
		if (state === "") {
			setPriceFilter(undefined)
		} else {
			setPriceFilter(state)
		}
	}


	const displayCards = () => {
		let resultArray: IItem[] = JSON.parse(JSON.stringify(itemsArray))
		console.log('inside displaycards')
		
		// sort
		if (sortId) {
			console.log('inside sortid')

			resultArray = resultArray.sort((a: IItem, b: IItem) => {
				return Number(a.itemId) - Number(b.itemId)
			})
		} 


		if (type !== undefined) {
			resultArray = resultArray.filter((item) => {
				return (item.itemType === type)
			})
		}


		if (priceFilter !== undefined) {
			resultArray = resultArray.filter((item) => {
				switch (priceFilter) {
					case 'option1': {
						return (+item.price < 25)
					}
					case 'option2': {
						return (+item.price > 25 && +item.price <= 75)
					}
					case 'option3': {
						return (+item.price > 75 && +item.price <= 200)
					}
					case 'option4': {
						return (+item.price > 200)
					}
				}
			})
		}

		setCurrentArray(resultArray)
	}

	const [cartOn, setCartOn] = useState(false)
	

	const displayArray = cartOn ? cart : currentArray

	return (
		<ChakraProvider theme={theme} >
			<div className="wrapper">
				<Heading as='h2' size='xl' className="heading">
					Equipment for pro Table Tennis players
				</Heading>
				<div className="filter-wrapper">
					<FormControl className="filter" onChange={(e) => changeType(e)}>
						<FormLabel>Types</FormLabel>
						<Select placeholder='types'>
							<option value='Blade'>Blades</option>
							<option value='Rubber'>Rubbers</option>
							<option value='Ball'>Balls</option>
						</Select>
					</FormControl>
					<FormControl onChange={(e) => changePrice(e)}>
						<FormLabel>Price Range</FormLabel>
						<Select placeholder='prices'>
							<option value='option1'>$0-$25</option>
							<option value='option2'>$25-$75</option>
							<option value='option3'>$75-$200</option>
							<option value='option4'>$200+</option>
						</Select>
					</FormControl>
					<FormControl onChange={(e) => changeSort(e)}>
						<FormLabel>Sort by</FormLabel>
						<Select placeholder='sort'>
							<option value='option1'>ID</option>
						</Select>
					</FormControl>
					<Button colorScheme='teal' variant='solid' onClick={(e) => setCartOn(!cartOn)}>
						Cart
					</Button>
					<div className="cart-total">
						<b>Cart total amount: </b>
						<div>${total}</div>
					</div>
				</div>
				<div className="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded">
					{displayArray.map((item) => {
						return (
              <Item
								key = {item.itemId}
                itemName = {item.itemName}
                itemType = {item.itemType}
                itemId =  {item.itemId}
                itemDescription = {item.itemDescription}
                price = {item.price}
                imageUrl = {item.imageUrl}
								cart = {cart}
								cartOn = {!cartOn}
								setCart = {setCart}
								total = {total}
								setTotal = {setTotal}
								/>)
							})}
				</div>
			</div>
		</ChakraProvider >
	)
}
import React, { useState } from 'react';
import "./item.css"
import {
	Button, CardFooter
} from "@chakra-ui/react"

export interface IItem {
	itemName: string,
	itemType: string,
	itemId: number,
  itemDescription: string,
  price: string,
  imageUrl: string,
}

export interface IItemProps {
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
}

export const Item = (props: IItemProps) => {
	const { itemName, itemType, itemId, itemDescription, price, imageUrl, cart, cartOn, setCart, total, setTotal} = props
	const [selected, setSelected] = useState(false);

	const handleSelect = () => {
		if (!selected) {
			
			const newArray: IItem[] = JSON.parse(JSON.stringify(cart))
			const hello = newArray.concat([{itemName, itemType, itemId, itemDescription, price, imageUrl}])
			setTotal(total + +price)
			setCart(hello)
			
		} else {
			const newArray: IItem[] = cart.filter(item => item.itemId !== itemId)
			setTotal(total - +price)
			setCart(newArray)
		}
		setSelected(!selected)		
	}

	return (
		<div className="item-wrapper">
			<div className="itemName">
				<div className="left-flex">
					<div>
						<div><b>ID: </b>{itemId}</div>
						<div className="itemName"><b>Name: </b>{itemName}</div>
						<div><b>Price: </b>${price}</div>
						<div><b>Type: </b>{itemType}</div>
						<div><b>Description: </b>{itemDescription}</div>
					</div>
					
				{cartOn && <Button colorScheme='teal' variant={selected ? "outline" : "solid"} size='xs' onClick={handleSelect}>
					{selected ? "Remove From Cart" : "Add to cart"}
					</Button>}	
			</div>
				
			</div>
			<div>
				<img src={imageUrl} alt="item image" width="250" height="350"></img>
			</div>
		</div>
	);
}
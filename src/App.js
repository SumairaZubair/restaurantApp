import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'


const categories = []
function App() {
	const [menuItems, setMenuItems] = useState(items)


	const filterItems = (categories) => {
     if(categories === 'all'){
      setMenuItems(items); 
     }
     else{
      setMenuItems(() => items.filter((item) => item.category === categories))}
     }
	

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				 <Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}
console.log()

export default App

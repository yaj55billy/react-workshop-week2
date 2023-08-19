import propTypes from "prop-types";

const Menu = ({ menu, addCart }) => {
	return (
		<div className="">
			{/* 菜單 */}
			<h2 className="text-2xl font-bold text-primary">選擇飲品</h2>
			<hr className="mt-2 mb-4" />
			<ul className="flex flex-wrap -mx-3">
				{menu.map((item) => {
					return (
						<li
							key={item.id}
							className="md:w-1/2 w-full px-3 pb-6"
							onClick={() => addCart(item)}
						>
							<div className="rounded-lg border-2 p-3 cursor-pointer border-brown-light hover:bg-brown-100">
								<h3 className="text-xl text-brown font-medium">
									{item.name} <span>${item.price}</span>
								</h3>
								<p className="mt-1 text-md text-brown">{item.description}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

Menu.propTypes = {
	menu: propTypes.array.isRequired,
	addCart: propTypes.func.isRequired,
};

export default Menu;

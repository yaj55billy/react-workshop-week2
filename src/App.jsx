import { useState, useEffect } from "react";
import Menu from "@/components/Menu";
import Cart from "@/components/Cart";
import Order from "@/components/Order";

const data = [
	{
		id: 1,
		name: "珍珠奶茶",
		description: "香濃奶茶搭配QQ珍珠",
		price: 50,
	},
	{
		id: 2,
		name: "冬瓜檸檬",
		description: "清新冬瓜配上新鮮檸檬",
		price: 45,
	},
	{
		id: 3,
		name: "翡翠檸檬",
		description: "綠茶與檸檬的完美結合",
		price: 55,
	},
	{
		id: 4,
		name: "四季春茶",
		description: "香醇四季春茶，回甘無比",
		price: 45,
	},
	{
		id: 5,
		name: "阿薩姆奶茶",
		description: "阿薩姆紅茶搭配香醇鮮奶",
		price: 50,
	},
	{
		id: 6,
		name: "檸檬冰茶",
		description: "檸檬與冰茶的清新組合",
		price: 45,
	},
	{
		id: 7,
		name: "芒果綠茶",
		description: "芒果與綠茶的獨特風味",
		price: 55,
	},
	{
		id: 8,
		name: "抹茶拿鐵",
		description: "抹茶與鮮奶的絕配",
		price: 60,
	},
];

const App = () => {
	const [menu] = useState(data); // 原始 menu
	const [cart, setCart] = useState([]); // 購物車資料
	const [total, setTotal] = useState(0); // 總計
	const [note, setNote] = useState(""); // 備註
	const [order, setOrder] = useState([]); // 訂單

	const addCart = (item) => {
		const conformIndex = cart.findIndex((cartItem) => item.id === cartItem.id);

		if (conformIndex === -1) {
			// -1 表示購物車還沒有這個品項
			const tempCart = [
				...cart, // [] 淺拷貝
				{
					...item,
					qty: 1, // 數量預設為 1
				},
			];
			setCart(tempCart);
		} else {
			const tempCart = cart.map((cartItem) => {
				return item.id === cartItem.id
					? {
							...cartItem,
							qty: cartItem.qty < 10 ? cartItem.qty + 1 : cartItem.qty,
					  }
					: { ...cartItem };
			});
			setCart(tempCart);
		}
	};

	const updateCart = (item, value) => {
		const tempCart = cart.map((cartItem) => {
			return item.id === cartItem.id
				? {
						...cartItem,
						qty: Number(value),
				  }
				: { ...cartItem };
		});
		setCart(tempCart);
	};

	const deleteCartItem = (item) => {
		const tempCart = cart.filter((cartItem) => {
			return item.id !== cartItem.id;
		});
		setCart(tempCart);
	};

	const createOder = () => {
		const tempOrder = [
			...order,
			{
				id: new Date().getTime(),
				cart,
				note,
				total,
			},
		];

		setOrder(tempOrder);
		setCart([]);
		setNote("");
	};

	useEffect(() => {
		const totalPrice = cart.reduce((prev, curr) => {
			return prev + curr.price * curr.qty;
		}, 0);
		setTotal(totalPrice);
	}, [cart]);

	return (
		<div className="bg-[#F8F6F2] min-h-screen">
			<div className="container mx-auto px-3 py-8">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
					<Menu menu={menu} addCart={addCart} />
					<Cart
						cart={cart}
						deleteCartItem={deleteCartItem}
						updateCart={updateCart}
						total={total}
						note={note}
						setNote={setNote}
						createOder={createOder}
					/>
				</div>
				<hr className="mt-4 mb-6" />
				<Order order={order} />
			</div>
		</div>
	);
};

export default App;

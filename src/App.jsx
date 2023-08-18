import { useState, useEffect } from "react";
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
						qty: value,
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
		// const tempOrder = [
		// 	...order, // [] 淺拷貝
		// 	{
		// 		...item,
		// 		qty: 1, // 數量預設為 1
		// 	},
		// ];
		// setOrder(tempOrder);
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
											<p className="mt-1 text-md text-brown">
												{item.description}
											</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="">
						{/* 購物車 */}
						<h2 className="text-2xl font-bold text-primary">購物列表</h2>
						<hr className="mt-2 mb-4" />
						{cart.length === 0 ? (
							<div className="rounded-lg border-2 border-brown-light mt-4 p-4 text-center text-brown font-bold">
								尚未選擇飲品～
							</div>
						) : (
							<div className="rounded-lg border-2 border-brown-light mt-4 p-4">
								<table className="min-w-full leading-normal">
									<thead>
										<tr>
											<th className="p-3 text-left text-xs font-semibold text-brown-light">
												飲品資訊
											</th>
											<th className="p-3 text-center text-xs font-semibold text-brown-light">
												數量
											</th>
											<th className="p-3 text-center text-xs font-semibold text-brown-light">
												單價
											</th>
											<th className="p-3 text-center text-xs font-semibold text-brown-light">
												小計
											</th>
										</tr>
									</thead>
									<tbody>
										{cart.map((item) => {
											return (
												<tr key={item.id}>
													<td className="p-3 border-b border-dashed border-brown-light">
														<h3 className="text-xl text-brown font-medium">
															{item.name}
														</h3>
														<p className="mt-1 text-md text-brown">
															{item.description}
														</p>
														<button
															type="button"
															className="mt-2 text-red-400 text-sm"
															onClick={() => deleteCartItem(item)}
														>
															刪除品項
														</button>
													</td>
													<td className="p-3 border-b border-dashed border-brown-light text-center text-md text-brown w-32">
														<select
															name=""
															id=""
															className="w-1/2 h-[32px] rounded-md text-center bg-brown-100 focus:outline-none focus:border-brown-dark"
															value={item.qty}
															onChange={(e) => updateCart(item, e.target.value)}
														>
															{[...Array(10).keys()].map((item) => {
																return (
																	<option value={item + 1} key={item}>
																		{item + 1}
																	</option>
																);
															})}
														</select>
													</td>
													<td className="p-3 border-b border-dashed border-brown-light text-center text-md text-brown">
														{item.price}
													</td>
													<td className="p-3 border-b border-dashed border-brown-light text-center text-md text-brown">
														{item.price * item.qty}
													</td>
												</tr>
											);
										})}
									</tbody>
									<tfoot>
										<tr>
											<td colSpan="3"></td>
											<td colSpan="1" className="p-3">
												<h3 className="text-center text-xl text-brown font-medium">
													總計: ${total}
												</h3>
											</td>
										</tr>
									</tfoot>
								</table>
								<textarea
									id="OrderNotes"
									className="mt-1 w-full rounded-lg border border-brown-light p-3 focus:outline-none focus:border-brown-dark"
									rows="2"
									placeholder="備註"
									value={note}
									onChange={(e) => setNote(e.target.value)}
								></textarea>
								<div className="text-right">
									<button
										className="inline-block mt-1 px-4 py-2 w-[150px] text-md font-medium text-white bg-brown-light hover:bg-brown"
										onClick={() => createOder()}
									>
										送出訂單
									</button>
								</div>
							</div>
						)}
					</div>
				</div>

				<hr className="mt-4 mb-6" />

				<div className="mx-auto lg:w-3/5 w-full">
					{/* 訂單  */}

					<div className="rounded-lg border-2 border-brown-light mt-4 p-4 text-center text-brown font-bold">
						尚未建立訂單～
					</div>
					<div className="rounded-lg border-2 border-brown-light mt-4 p-4 text-brown text-center">
						<h2 className="text-2xl font-bold text-primary text-left">訂單</h2>
						<p className="mt-1 text-md text-brown text-left">備註：...</p>
						<div className="mt-2 mb-4">
							<table className="w-full">
								<thead className="border-b-2 border-brown-light">
									<tr>
										<th className="p-3 font-medium text-brown">品項</th>
										<th className="p-3 font-medium text-brown">數量</th>
										<th className="p-3 font-medium text-brown">小計</th>
									</tr>
								</thead>
								<tbody className="">
									{[1, 2, 3].map((item) => {
										return (
											<tr key={item} className="border-b border-brown-light">
												<td className="p-3 text-brown">芒果綠茶</td>
												<td className="p-3 text-brown">2</td>
												<td className="p-3 text-brown">50</td>
											</tr>
										);
									})}
								</tbody>
								<tfoot>
									<tr>
										<td colSpan="2"></td>
										<td colSpan="1" className="p-3">
											<h3 className="text-center text-xl text-brown font-medium">
												總計: ${500}
											</h3>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

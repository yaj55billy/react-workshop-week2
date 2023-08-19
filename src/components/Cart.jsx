import propTypes from "prop-types";
const Cart = ({
	cart,
	deleteCartItem,
	updateCart,
	total,
	note,
	setNote,
	createOder,
}) => {
	return (
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
	);
};

Cart.propTypes = {
	cart: propTypes.array.isRequired,
	deleteCartItem: propTypes.func.isRequired,
	updateCart: propTypes.func.isRequired,
	total: propTypes.number.isRequired,
	note: propTypes.string.isRequired,
	setNote: propTypes.func.isRequired,
	createOder: propTypes.func.isRequired,
};

export default Cart;

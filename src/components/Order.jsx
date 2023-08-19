import propTypes from "prop-types";
const Order = ({ order }) => {
	return (
		<div className="mx-auto lg:w-3/5 w-full">
			{/* 訂單  */}
			{order.length === 0 ? (
				<div className="rounded-lg border-2 border-brown-light mt-4 p-4 text-center text-brown font-bold">
					尚未建立訂單～
				</div>
			) : (
				order.map((item) => {
					return (
						<div
							className="rounded-lg border-2 border-brown-light mt-4 p-4 text-brown text-center"
							key={item.id}
						>
							<h2 className="text-2xl font-bold text-primary text-left">
								訂單
							</h2>
							<p className="mt-1 text-md text-brown text-left">
								編號：{item.id}
							</p>
							<p className="mt-1 text-md text-brown text-left">
								備註：{item.note}
							</p>
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
										{item.cart.map((innerItem) => {
											return (
												<tr
													key={innerItem.id}
													className="border-b border-brown-light"
												>
													<td className="p-3 text-brown">{innerItem.name}</td>
													<td className="p-3 text-brown">{innerItem.qty}</td>
													<td className="p-3 text-brown">
														{innerItem.qty * innerItem.price}
													</td>
												</tr>
											);
										})}
									</tbody>
									<tfoot>
										<tr>
											<td colSpan="2"></td>
											<td colSpan="1" className="p-3">
												<h3 className="text-center text-xl text-brown font-medium">
													總計: ${item.total}
												</h3>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};

Order.propTypes = {
	order: propTypes.array.isRequired,
};

export default Order;

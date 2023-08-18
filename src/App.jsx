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
	return (
		<div className="bg-[#F8F6F2] min-h-screen">
			<div className="container mx-auto py-8">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
					<div className="">
						{/* 菜單 */}
						<h2 className="text-2xl font-bold text-primary">選擇飲品</h2>
						<hr className="mt-2 mb-4" />
						<ul className="flex flex-wrap -mx-3">
							{data.map((item) => {
								return (
									<li key={item.id} className="md:w-1/2 w-full px-3 pb-6">
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
						<div className="rounded-lg border-2 border-brown-light mt-4 p-4 text-center text-brown font-bold">
							尚未選擇飲品～
						</div>
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
									{[1, 2, 3].map((item) => {
										return (
											<tr key={item}>
												<td className="p-3 border-b border-dashed border-brown-light">
													<h3 className="text-xl text-brown font-medium">
														四季春茶
													</h3>
													<p className="mt-1 text-md text-brown">
														香醇四季春茶，回甘無比
													</p>
													<button
														type="button"
														className="mt-2 text-red-400 text-sm"
													>
														刪除品項
													</button>
												</td>
												<td className="p-3 border-b border-dashed border-brown-light text-center text-md text-brown w-32">
													<select
														name="HeadlineAct"
														id="HeadlineAct"
														className="w-1/2 h-[32px] rounded-md text-center bg-brown-100 focus:outline-none focus:border-brown-dark"
													>
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
														<option value="4">4</option>
														<option value="5">5</option>
														<option value="6">6</option>
														<option value="7">7</option>
														<option value="8">8</option>
														<option value="9">9</option>
														<option value="10">10</option>
													</select>
												</td>
												<td className="p-3 border-b border-dashed border-brown-light text-center text-md text-brown">
													50
												</td>
												<td className="p-3 border-b border-dashed border-brown-light text-center text-md text-brown">
													100
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
												總計: ${500}
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
							></textarea>
							<div className="text-right">
								<button className="inline-block mt-1 px-4 py-2 w-[150px] text-md font-medium text-white bg-brown-light hover:bg-brown">
									送出訂單
								</button>
							</div>
						</div>
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

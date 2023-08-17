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
						<div className="rounded-lg border-2 border-brown-light mt-4 p-4">
							<table className="min-w-full leading-normal">
								<thead>
									<tr>
										<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											飲品資訊
										</th>
										<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											數量
										</th>
										<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											價錢
										</th>
										<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											小計
										</th>
									</tr>
								</thead>
								<tbody>
									{[1, 2, 3].map((item) => {
										return (
											<tr key={item}>
												<td className="px-5 py-5 border-b border-gray-200">
													<h3 className="text-xl text-brown font-medium">
														四季春茶
													</h3>
													<p className="mt-1 text-md text-brown">
														香醇四季春茶，回甘無比
													</p>
													<button type="button" className="mt-2">
														刪除品項
													</button>
												</td>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													<select name="" id="">
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
													</select>
												</td>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													<p className="text-gray-900 whitespace-no-wrap">
														$50
													</p>
												</td>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													$100
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
						<div className="border lg:col-span-2">
							{/* 訂單  */}
							<h2 className="text-3xl font-bold underline text-primary">
								訂單
							</h2>
							<div className="overflow-x-auto rounded-lg border border-gray-200">
								<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
									<thead className="ltr:text-left rtl:text-right">
										<tr>
											<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
												Name
											</th>
											<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
												Date of Birth
											</th>
											<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
												Role
											</th>
											<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
												Salary
											</th>
										</tr>
									</thead>

									<tbody className="divide-y divide-gray-200">
										<tr>
											<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
												John Doe
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												24/05/1995
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												Web Developer
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												$120,000
											</td>
										</tr>

										<tr>
											<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
												Jane Doe
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												04/11/1980
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												Web Designer
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												$100,000
											</td>
										</tr>

										<tr>
											<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
												Gary Barlow
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												24/05/1995
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												Singer
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												$20,000
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

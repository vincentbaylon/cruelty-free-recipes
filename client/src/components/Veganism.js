function Veganism() {
	const url =
		'https://www.vegansociety.com/go-vegan/definition-veganism#:~:text=%22Veganism%20is%20a%20philosophy%20and,benefit%20of%20animals%2C%20humans%20and' +
		'&output=embed'

	return (
		<div className='p-5 max-w-5xl w-full flex flex-col justify-center m-auto'>
			<h1 className='text-green-700 text-4xl font-bold'>Veganism</h1>
			<br></br>
			<h1 className='italic'>
				"Veganism is a philosophy and way of living which seeks to exclude—as
				far as is possible and practicable—all forms of exploitation of, and
				cruelty to, animals for food, clothing or any other purpose; and by
				extension, promotes the development and use of animal-free alternatives
				for the benefit of animals, humans and the environment. In dietary terms
				it denotes the practice of dispensing with all products derived wholly
				or partly from animals."
			</h1>
			<br></br>
			<h1>
				There are many ways to embrace vegan living. Yet one thing all vegans
				have in common is a plant-based diet avoiding all animal foods such as
				meat (including fish, shellfish and insects), dairy, eggs and honey - as
				well as avoiding animal-derived materials, products tested on animals
				and places that use animals for entertainment.
			</h1>
			<br></br>
			<h1 className='text-green-600 text-2xl font-semibold'>
				It's not just about diet
			</h1>
			<h1>
				Vegans avoid exploiting animals for any purpose, with compassion being a
				key reason many choose a vegan lifestyle. From accessories and clothing
				to makeup and bathroom items, animal products and products tested on
				animals are found in more places than you might expect.
			</h1>
			<br></br>
			<h1 className='text-green-600 text-2xl font-semibold'>Entertainment</h1>
			<h1>
				Vegans choose not to support animal exploitation in any form and so
				avoid visiting zoos or aquariums, or taking part in dog or horse racing.
				A great alternative is visiting and supporting animal sanctuaries that
				provide safe and loving homes for rescued animals.
			</h1>
			<br></br>
			<h1>
				Source:{' '}
				<a
					className='text-green-500 font-semibold hover:underline'
					href='https://www.vegansociety.com/go-vegan/definition-veganism#:~:text=%22Veganism%20is%20a%20philosophy%20and,benefit%20of%20animals%2C%20humans%20and'
					target='_blank'
					rel='noreferrer noopener'
				>
					The Vegan Society
				</a>
			</h1>
		</div>
	)
}

export default Veganism

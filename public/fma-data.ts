export type Character = {
	name: string;
	skillset: string[];
	votes: number;
	imageUrl: string;
	background: string;
	nickName: null | string;
};

export const data: Character[] = [
	{
		name: "Alex Louis Armstrong",
		nickName: "Major Armstrong",
		skillset: ["Flawless Bodybuilding", "Stone Alchemy"],
		votes: 90,
		background:
			"Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show",
		imageUrl:
			"https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
	},
	{
		name: "Alfonse Elrich",
		nickName: null,
		skillset: ["Being Loveable, Alchemy"],
		votes: 110,
		background:
			"Alphonse is a walking suit of armor on a quest to find his real body",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg",
	},
	{
		name: "Edward Elrich",
		nickName: "The Fullmetal Alchemist",
		skillset: ["Human Transmutation", "Alchemy", "Being Short"],
		votes: 109,
		background:
			"Edward is a master alchemist and our main character... just don't call him short",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIYeJmt-b6uoJB43ClYihsNePSPK2NB7g8A&usqp=CAU",
	},
	{
		name: "Greed",
		nickName: "Greed",
		votes: 45,
		skillset: ["Skin Hardening", "Homunculii"],
		imageUrl: "../src/assets/images/Greed2.jpeg",
		background:
			"Greed is one of the seven deadly sins Homunculii. He's the most 'on our side' of all of them.",
	},
	{
		name: "Nina Tucker",
		nickName: null,
		skillset: ["Being Adorable", "Combining..."],
		votes: 80,
		imageUrl:
			"https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/fullmetal-alchemist-nina-tucker.jpg",
		background:
			"Nina is an adorable little girl! If you've watched FMA you know...",
	},
	{
		name: "Riza Hawkeye",
		nickName: "Hawkeye",
		skillset: ["Loyal AF", "Sniper"],
		votes: 95,
		background:
			"Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show",
		imageUrl:
			"data:image/jpeg;base64,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",
	},
	{
		name: "Solf J. Kimblee",
		nickName: "The Crimson Alchemist",
		votes: -9000,
		skillset: ["Being a piece of sh*t", "Alchemy"],
		background: "Kimblee suckkkkkssss, seriously he's not very nice",
		imageUrl: "../src/assets/images/SolfJKimbleeEp37.webp",
	},
	{
		name: "Tim Marcoh",
		nickName: "Dr. Marcoh",
		votes: 40,
		skillset: ["Healing Alchemy", "Making Philospher Stones"],
		background:
			"Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong",
		imageUrl: "../src/assets/images/Marcoh.webp",
	},
	{
		name: "Winrey Rockbell",
		nickName: null,
		votes: 93,
		skillset: ["Automail Expert", "Delivering Babies"],
		background:
			"Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there",
		imageUrl: "../src/assets/images/800-by-600-366874-20090424144049.webp",
	},
];

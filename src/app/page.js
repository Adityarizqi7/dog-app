import Link from "next/link";
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import DogsGenerator from "./components/DogsGenerator";

/** @type {import("next").Viewport} */
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 4,
    userScalable: true,
    shrinkToFit: 'no',
}

/** @type {import("next").Metadata} */
export async function generateMetadata() {
	return {
		title: 'Dogs',
		description: 'Dogs World',
		applicationName: 'Dogs World',
		category: 'dogs',
		keywords: ['dogs', 'world'],
		authors: [{ name: 'Aditya Rizqi Ardhana', url: 'https://adityara.netlify.app' }],
		creator: 'Aditya Rizqi Ardhana',
		publisher: 'Aditya Rizqi Ardhana',
		robots: {
			index: false,
			follow: true,
			nocache: true,
			googleBot: {
			  index: true,
			  follow: false,
			  noimageindex: true,
			  'max-video-preview': -1,
			  'max-image-preview': 'large',
			  'max-snippet': -1,
			},
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Dogs World',
			description: 'Dogs World',
		},
	}
}

export default async function Page() {

	return (
		<section className="home-component">

			<article>
				<div className="title-article text-center mt-2 rounded-[4px]">
					<h1 className="text-slate-900 text-[1.35rem] font-semibold">Lets Find Your Favourite Dogs</h1>
				</div>
				<DogsGenerator />
			</article>

			<ToastContainer />
		</section>
	);
}
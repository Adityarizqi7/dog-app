import { ToastContainer } from 'react-toastify';

import DogsList from "./components/DogsList";
import NoDataExists from '../components/common/no-data-exists';

async function getData(breed) {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`, { 
      next: {
		revalidate: 1000
	  }
    })
	
    if (!res) {
		throw new Error('Failed to Collect Dogs Data.')
    }
    return res.json()
}

/** @type {import("next").Viewport} */
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 4,
    userScalable: true,
    shrinkToFit: 'no',
}

/** @type {import("next").Metadata} */
export async function generateMetadata({ searchParams }) {

	return {
		title: `Result Dogs - '${String(searchParams.breed).toUpperCase()}'`,
		description: `Result Dogs '${String(searchParams.breed).toUpperCase()}' - Dogs World`,
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
			title: `Result Dog '${String(searchParams.breed).toUpperCase()} - Dogs World`,
			description: `Result Dog '${String(searchParams.breed).toUpperCase()} - Dogs World`,
		},
	}
}

export default async function Page({searchParams}) {

  	const dogsData = await getData(searchParams.breed, 12);

	return (
		<section className="dogs-list-component px-5">

			<article>
				<div className="title-article mt-2 mb-5 rounded-[4px]">
					<h1 className="text-slate-900 text-[1.20rem] font-medium">Pencarian untuk ras Anjing <span className="capitalize font-bold">&quot;{searchParams.breed}&quot;</span></h1>
				</div>
				{
					Array.isArray(dogsData?.message) ?
						<DogsList dataDogs={dogsData?.message} breed_dog={searchParams.breed || 'Unknown'} />
					:
						<NoDataExists />
				}
			</article>

			<ToastContainer />
		</section>
	);
}
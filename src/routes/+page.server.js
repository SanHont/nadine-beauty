import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query MyQuery {
			nadineBeauties {
				aboutMeText
				aboutMeText2
				aboutMeTitle
				browsTitle
				eyelashesTitle
				galleryTitle
				quote
				eyelashesText
				browsText
				browsImage {
					url
				}
				eyelashesImage {
					url
				}
				aboutMeImage {
					url
				}
				galleryImage {
					url
				}
			}
		}
	`;

	return await hygraph.request(query);
}

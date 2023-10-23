import client from './sanity';
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(client);

export function urlForImage(source) {
  return imageBuilder.image(source);
}

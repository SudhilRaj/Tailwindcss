// const Images = {
//    logo: require('./logo.svg').default
// }

// export default Images;

function importAllImages(r) {
   let images = {};
   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
   return images;
 }
 
 export const images = importAllImages(require.context('./', false, /\.(png|jpe?g|svg)$/));

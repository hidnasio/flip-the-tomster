/*
 * @public
 *
 * @param {integer} min - minimun value inclusive
 * @param {integer} max - maximun value inclusive
 *
 * @return {array}
 */
export default function range(min, max) {
  return [...Array(max-min+1).keys()].map(n => n + min);
}

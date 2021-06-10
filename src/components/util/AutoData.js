import client from "../util/Contentful";

export default function AutoData() {
  return client.getEntries({}).then(response => {
    const autos = response.items;
    return autos;
  });
}

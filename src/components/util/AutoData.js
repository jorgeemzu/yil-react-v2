import client from "../util/Contentful";

const autoInfo = [];

client.getEntries({}).then(response => {
  const autos = response.items;
  const autoData = formatData(autos);
  autoData.map(auto => autoInfo.push(auto));
  //   console.log(autoInfo);
});

function formatData(items) {
  let tempItems = items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);

    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
}

export default autoInfo;

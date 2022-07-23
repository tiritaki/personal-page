var images;


images = ['https://thumbs.dreamstime.com/b/happy-woman-jumping-enjoying-life-sunset-mountains-happy-woman-jumping-enjoying-life-field-sunset-mountains-140869977.jpg', 'https://image.shutterstock.com/image-photo/happy-life-success-260nw-628904273.jpg', 'https://st.depositphotos.com/1070914/4619/i/600/depositphotos_46190731-stock-photo-woman-relaxing.jpg'];


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images.shift());
  let element_picture = document.getElementById('picture');
  element_picture.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.pop());
  let element_picture2 = document.getElementById('picture');
  element_picture2.setAttribute("src", images.slice(-1)[0]);

});
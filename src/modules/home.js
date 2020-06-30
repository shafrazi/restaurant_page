const renderHero = () => {
  const imgWrapper = document.querySelector(".img-wrapper");
  const img = document.createElement("img");
  img.setAttribute("src", "img/hero_image.jpg");
  img.setAttribute("class", "hero-img");
  imgWrapper.appendChild(img);
};

const renderMain = () => {
  const mainDiv = document.querySelector(".main");
  const h2 = document.createElement("h2");
  h2.innerHTML = "Main Headline";
  const p = document.createElement("p");
  p.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis lobortis quam id venenatis. Integer eget pulvinar elit. Nunc magna mauris, sollicitudin eget ex quis, sagittis pretium velit. Morbi eget tortor vel massa iaculis tincidunt in eget nunc. Curabitur ornare faucibus fringilla. Praesent magna neque, auctor ac euismod sed, suscipit sed lorem. Curabitur euismod tellus et nibh condimentum mollis. Phasellus eleifend semper augue, ut feugiat orci fringilla non. Cras vel ultricies eros. Sed sed ante a ante gravida efficitur quis non dui. Fusce sagittis ullamcorper metus et tempus.";
  mainDiv.appendChild(h2);
  mainDiv.appendChild(p);
};

const renderAbout = () => {
  const about = document.querySelector(".about");
  const h2 = document.createElement("h2");
  h2.innerHTML = "About";
  const p = document.createElement("p");
  p.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis lobortis quam id venenatis. Integer eget pulvinar elit. Nunc magna mauris, sollicitudin eget ex quis, sagittis pretium velit. Morbi eget tortor vel massa iaculis tincidunt in eget nunc. Curabitur ornare faucibus fringilla. Praesent magna neque, auctor ac euismod sed, suscipit sed lorem. Curabitur euismod tellus et nibh condimentum mollis. Phasellus eleifend semper augue, ut feugiat orci fringilla non. Cras vel ultricies eros. Sed sed ante a ante gravida efficitur quis non dui. Fusce sagittis ullamcorper metus et tempus.";
  about.appendChild(h2);
  about.appendChild(p);
};

const renderContact = () => {
  const contact = document.querySelector(".contact");
  const h2 = document.createElement("h2");
  h2.innerHTML = "Contact";
  const p = document.createElement("p");
  p.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis lobortis quam id venenatis. Integer eget pulvinar elit. Nunc magna mauris, sollicitudin eget ex quis, sagittis pretium velit. Morbi eget tortor vel massa iaculis tincidunt in eget nunc. Curabitur ornare faucibus fringilla. Praesent magna neque, auctor ac euismod sed, suscipit sed lorem. Curabitur euismod tellus et nibh condimentum mollis. Phasellus eleifend semper augue, ut feugiat orci fringilla non. Cras vel ultricies eros. Sed sed ante a ante gravida efficitur quis non dui. Fusce sagittis ullamcorper metus et tempus.";
  contact.appendChild(h2);
  contact.appendChild(p);
};

export { renderHero, renderMain, renderAbout, renderContact };

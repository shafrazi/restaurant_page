const clearHome = () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
};

const renderAboutPage = () => {
  clearHome();
  const wrapper = document.querySelector(".wrapper");
  const about = document.createElement("div");
  about.setAttribute("class", "about-section");
  about.classList.add("card");
  about.innerHTML =
    "lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis lobortis quam id venenatis. Integer eget pulvinar elit. Nunc magna mauris, sollicitudin eget ex quis, sagittis pretium velit. Morbi eget tortor vel massa iaculis tincidunt in eget nunc. Curabitur ornare faucibus fringilla. Praesent magna neque, auctor ac euismod sed, suscipit sed lorem. Curabitur euismod tellus et nibh condimentum mollis. Phasellus eleifend semper augue, ut feugiat orci fringilla non. Cras vel ultricies eros. Sed sed ante a ante gravida efficitur quis non dui. Fusce sagittis ullamcorper metus et tempus.";
  wrapper.appendChild(about);
};

export { renderAboutPage };

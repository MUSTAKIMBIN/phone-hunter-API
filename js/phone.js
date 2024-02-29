const lodePhone = async (serchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${serchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phene-container");
  phoneContainer.textContent = "";
  const showAllContainer = document.getElementById("show-more-container");
  if (phones.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    // console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList.add("card", "p-5", "bg-gray-100", "shadow-xl");
    phoneCard.innerHTML = ` 
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button onclick="showDetels('${phone.slug}')" class="btn btn-primary">Show Detels</button>
          </div>
        </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });
  loddingSpinner(false);
};
// handel serch
const serchHandel = () => {
  loddingSpinner(true);
  const serchFeld = document.getElementById("serch-feld");
  const serchFeldText = serchFeld.value;
  lodePhone(serchFeldText);
};
const loddingSpinner = (isLodding) => {
  const loddingSpinner = document.getElementById("loading-spinner");
  if (isLodding) {
    loddingSpinner.classList.remove("hidden");
  } else {
    loddingSpinner.classList.add("hidden");
  }
};

const showDetels = async (id) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data
  
  showPhoneDetels(phone)
};
const showPhoneDetels = (phone)=>{
    const showDetelsContainer = document.getElementById("show-detel-container")
    showDetelsContainer.innerHTML= `
    <img src="${phone.image}" alt="">
    <h2 class="text-3xl font-bold my-2">${phone.name}</h2>
    <p><span class="text-xl font-bold">Storage : </span>${phone.mainFeatures.storage}</p>
    <p><span class="text-xl font-bold">Display Size : </span>${phone.mainFeatures.displaySize}</p>
    <p><span class="text-xl font-bold">Chipset : </span>${phone.mainFeatures.chipSet}</p>
    <p><span class="text-xl font-bold">Memory : </span>${phone.mainFeatures.memory}</p>
    <p><span class="text-xl font-bold">Slug : </span>${phone.slug}</p>
    <p><span class="text-xl font-bold">Release data : </span>${phone.releaseDate}</p>
    <p><span class="text-xl font-bold">Brand : </span>${phone.brand}</p>
    <p><span class="text-xl font-bold">GPS : </span>${phone.others.GPS}</p>
    `
    console.log(phone)
    show_detel_modal.showModal(phone)
}
// lodePhone();

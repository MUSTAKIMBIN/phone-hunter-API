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
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList.add("card", "p-5", "bg-gray-100", "shadow-xl");
    phoneCard.innerHTML = ` 
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });
  loddingSpinner(false)
};
// handel serch
const serchHandel = () => {
    loddingSpinner(true)
  const serchFeld = document.getElementById("serch-feld");
  const serchFeldText = serchFeld.value;
  lodePhone(serchFeldText);
};
const loddingSpinner = (isLodding) => {
    const loddingSpinner = document.getElementById("loading-spinner")
    if(isLodding){
        loddingSpinner.classList.remove("hidden")
    }else{
        loddingSpinner.classList.add("hidden")
    }
}

lodePhone();

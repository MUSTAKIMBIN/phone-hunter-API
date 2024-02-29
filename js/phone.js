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
};
// handel serch
const serchHandel = () => {
  const serchFeld = document.getElementById("serch-feld");
  const serchFeldText = serchFeld.value;
  console.log(serchFeldText);
  lodePhone(serchFeldText);
};

lodePhone();

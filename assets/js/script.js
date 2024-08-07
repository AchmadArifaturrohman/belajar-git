// DOM Elements
const tipeDriverEl = document.getElementById("tipe-driver"); // Get the element for driver type
const tanggalEl = document.getElementById("tanggal"); // Get the element for date
const waktuEl = document.getElementById("waktu"); // Get the element for time
const jumlahPenumpangEl = document.getElementById("jumlah-penumpang"); // Get the element for number of passengers
const cariMobilEl = document.getElementById("cari-mobil"); // Get the element for the search button

const inputData = { // Initialize filter data object
    tipeDriver: " ", // Store driver type
    tanggal: " ", // Store date
    waktu: " ", // Store time
    jumlahPenumpang: " " // Store number of passengers
}

// Event Listeners
cariMobilEl.addEventListener("click", function(e) { // Add click event listener to the search button
    inputData.tipeDriver = tipeDriverEl.value; // Update filter data with driver type
    inputData.tanggal = tanggalEl.value; // Update filter data with date
    inputData.waktu = waktuEl.value; // Update filter data with time
    inputData.jumlahPenumpang = jumlahPenumpangEl.value; // Update filter data with number of passengers
    getData(inputData);
});

async function getData(inputData) {
    let itemHtml;
    const getCars = await fetch("https://api-car-rental.binaracademy.org/customer/car");
    const result = await getCars.json();
    const data = Binar.populateCars(result);

    const filteredData = data.filter(function(e) {
        return e.typeDriver === inputData.tipeDriver;
    })

    filteredData.forEach(element => {
    itemHtml += `<div class="col-4">
        <img class="img-fluid"   src="${element.image}">
        <h3>${element.name}</h3>
        <p>${element.typeDriver}</p>
        <p>${element.capacity}</p>
        <p>${element.price}</p>
    </div>`
    })
    document.getElementById("search-result").innerHTML = itemHtml;
}


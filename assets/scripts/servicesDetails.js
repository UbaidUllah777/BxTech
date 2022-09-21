const ElServicerowGrid = document.querySelector(".rowGrid");

let myService = sessionStorage.getItem("service");

if (ElServicerowGrid) {
  ElServicerowGrid.innerHTML = "";
  for (singleserviceGrid of ourServiceDetails)
    if (singleserviceGrid.id === myService) {
      for (singleserviceGridDesc of singleserviceGrid.serviceCategDetails) {
        ElServicerowGrid.innerHTML += `
      <div class="col-10 col-sm-5 gridServices">
              <div class="row">
                <div class="col-3">
                  <img
                    src="${singleserviceGrid.serviceCategDetails.categImg}"
                    alt="${singleserviceGrid.categHeading}"
                  />
                </div>
                <div class="col-9 text-left">
                  <h3>${singleserviceGrid.categHeading}</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <p>
                   ${singleserviceGrid.categDesc}
                  </p>
                </div>
              </div>
            </div>
      `;
      }
    }
}

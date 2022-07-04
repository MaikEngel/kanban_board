async function initArchive() {
  await init();
  await addArchive();
}

function addArchive() {
  let checks = tasks.filter(t => t['position'] == "check");
  let archive = document.getElementById("archiveItem");
  archive.innerHTML = ``;
  for (let i = 0; i < checks.length; i++) {
    let check = checks[i];

    archive.innerHTML += `
        <div id="backlogContainer${i}" class="backlogContainer ">
                <div class="assignedTo" class="category">
                    <img src=${check["selectetAvatar"]["picture"]} alt="" class="backlogAssignedToPicture" />
                    <div>
                        <p class="margin0">${check["selectetAvatar"]["name"]}</p>
                        <p class="fontColor margin0">${check["selectetAvatar"]["email"]}</p>
                    </div>
                </div>
                <div class="category">
                  <p>${check["catergory"]}</p>
                </div>  
                <div class="detailsContainer">
                    <span class="fontColor detailsHeadlineResponsiv">DETAILS</span>
                    <p class="details">
                        ${check["description"]}
                    </p>
                </div>
            </div>
        </div>
        `;
    let bgColor = document.getElementById("backlogContainer" + i);
    let urgencyLevel = check["urgency"];

    if (urgencyLevel == "high") {
      bgColor.classList.add("urgencyColorRed");
    }
    if (urgencyLevel == "medium") {
      bgColor.classList.add("urgencyColorBlue");
    }
    if (urgencyLevel == "low") {
      bgColor.classList.add("urgencyColorOrange");
    }
  }
}

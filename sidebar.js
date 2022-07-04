const sidebarContainer = document.getElementById("sidebar-cont");
fetch("./sidebar.html")
  //fetches sidebar
  .then((res) => res.text())
  .then((text) => {
    sidebarContainer.innerHTML = text;
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    sidebarToggle.addEventListener("click", function toggle() {
      sidebar.classList.toggle("sidebar-small");
      sidebar.classList.contains("d_none")
        ? sidebar.classList.remove("d_none")
        : setTimeout(() => {
            sidebar.classList.add("d_none");
          }, 500);
      this.classList.toggle("burger-small");
      document.querySelector("main").classList.toggle("small");
    });
  });

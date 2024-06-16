// const cont1 = document.getElementById("contributors");
// const loadMoreButton = document.getElementById("load-more");
const owner1 = "mdazfar2";
const repoName1 = "HelpOps-Hub";
// const itemsPerPage = 11; // Number of items per page
// let currentPage = 1; // Initialize the page number
// let allContributors = []; // To store all contributors data
let pageNumber1 = 1; // Initialize the page number
// const loading = document.getElementById("skeleton-wrapper");
//   cont.appendChild(loading);
async function fetchContributors1(pageNumber1) {
  const _0x57c7a2 = _0x55df;
  (function (_0x7afde4, _0x279ad2) {
    const _0x373dbd = _0x55df,
      _0x449b85 = _0x7afde4();
    while (!![]) {
      try {
        const _0x5aa9a9 =
          -parseInt(_0x373dbd(0xad)) / 0x1 +
          -parseInt(_0x373dbd(0xb7)) / 0x2 +
          -parseInt(_0x373dbd(0xaf)) / 0x3 +
          (parseInt(_0x373dbd(0xac)) / 0x4) *
            (-parseInt(_0x373dbd(0xae)) / 0x5) +
          -parseInt(_0x373dbd(0xa8)) / 0x6 +
          (-parseInt(_0x373dbd(0xb3)) / 0x7) *
            (-parseInt(_0x373dbd(0xab)) / 0x8) +
          (-parseInt(_0x373dbd(0xaa)) / 0x9) *
            (-parseInt(_0x373dbd(0xb5)) / 0xa);
        if (_0x5aa9a9 === _0x279ad2) break;
        else _0x449b85["push"](_0x449b85["shift"]());
      } catch (_0x36680b) {
        _0x449b85["push"](_0x449b85["shift"]());
      }
    }
  })(_0x470c, 0xe59c7);
  function _0x55df(_0x3c5be2, _0x22e4d2) {
    const _0x470c8f = _0x470c();
    return (
      (_0x55df = function (_0x55dfa5, _0x40ac15) {
        _0x55dfa5 = _0x55dfa5 - 0xa8;
        let _0x120ab5 = _0x470c8f[_0x55dfa5];
        return _0x120ab5;
      }),
      _0x55df(_0x3c5be2, _0x22e4d2)
    );
  }
  const apiUrl = _0x57c7a2(0xb1);
  async function getkey() {
    const _0x36503b = _0x57c7a2;
    try {
      const _0x37cb91 = await fetch(apiUrl);
      if (!_0x37cb91["ok"]) throw new Error(_0x36503b(0xb4));
      const _0x1d7bab = await _0x37cb91[_0x36503b(0xb2)]();
      return _0x1d7bab[_0x36503b(0xa9)][0x0][_0x36503b(0xb6)];
    } catch (_0x45ce9f) {
      console["error"](_0x36503b(0xb0), _0x45ce9f);
    }
  }
  function _0x470c() {
    const _0x57b2f6 = [
      "11073704OnHOnz",
      "192616eTlKBl",
      "1549488wLKhSq",
      "170ZCfKen",
      "754176DlyvCG",
      "Error\x20fetching\x20data:",
      "https://script.google.com/macros/s/AKfycbzipat1oQlBel7YwZaPl7mCpshjRpvyouFSRgunjqGlKC-0gv46hypYD0EnSMsOEBeC-Q/exec",
      "json",
      "7Sgnepe",
      "Network\x20response\x20was\x20not\x20ok",
      "70NJzGMO",
      "apikey",
      "1110902JNcOiC",
      "1677348FGGESa",
      "apik",
      "4923513NUAFJk",
    ];
    _0x470c = function () {
      return _0x57b2f6;
    };
    return _0x470c();
  }
  const token = await getkey();
  const perPage1 = 100;
  const url = `https://api.github.com/repos/${owner1}/${repoName1}/contributors?page=${pageNumber1}&per_page=${perPage1}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch contributors data. Status code: ${response.status}`
    );
  }

  const contributorsData = await response.json();
  // const cont = document.getElementById("team-grid1");
  // cont.removeChild(cont.firstChild);
  // console.log(cont.removeChild(cont.firstChild));
  return contributorsData;
}

// Function to fetch all contributors
function renderContributors1(contributors) {
  var r = 1;

  contributors.forEach((contributor) => {
    if (contributor.login === owner) {
      return;
    }
    // if ((r) => 4) return;
    // const contributorCard = document.createElement("div");
    // contributorCard.classList.add("contributors");
    const avatarImg = document.createElement("img");
    avatarImg.src = contributor.avatar_url;
    avatarImg.alt = `${contributor.login}'s Picture`;
    let name = contributor.name || contributor.login;
    const fname = name;
    if (name.length > 12) {
      name = name.slice(0, 10) + "...";
    }

    const loginLink = document.createElement("a");
    loginLink.href = contributor.html_url;
    loginLink.target = "_blank";
    const contri = contributor.contributions;
    // contributorCard.innerHTML = `
    //     <div class="contributor">
    //             <img src=${avatarImg.src} class="circle">
    //                 <div class="rank">${r}</div>
    //             <div class="crown" id="rank"><img src="crown.png"></div>
    //             <p>${name}</p>
    //             <p>Contributions ${contri}</p>
    //         </div>`;

    if (
      r < 4 &&
      fname != "azfar-2" &&
      fname != "Ayushmaanagarwal1211" &&
      fname != "RamakrushnaBiswal" &&
      fname != "pandeyji711"
    ) {
      const img = document.getElementById(`id${r}`);
      document.getElementById(`id${r}`).src = avatarImg.src;
      // loginLink.appendChild(img);
      img.parentNode.insertBefore(loginLink, img);
      loginLink.appendChild(img);
      document.getElementById(`name${r}`).innerHTML = name;
      document.getElementById(`co${r}`).innerHTML = `contribution ${contri}`;

      r++;
    }
  });
}
// Fetch all contributors with pagination

// Initial fetch

async function fetchAllContributors1() {
  const contributorsData1 = await fetchContributors1();
  allContributors1 = contributorsData1;
  // console.log(allContributors1.slice(0, 10));
  renderContributors1(allContributors1.slice(0, 7));
  //   if (allContributors.length > itemsPerPage) {
  //     loadMoreButton.style.display = "block"; // Show the Load More button if more data exists
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
}

// loadMoreButton.addEventListener("click", () => {
//   const start = currentPage * itemsPerPage;
//   const end = start + itemsPerPage;
//   renderContributors(allContributors.slice(start, end));
//   currentPage++;
//   if (end >= allContributors.length) {
//     loadMoreButton.style.display = "none"; // Hide the Load More button if no more data
//   }
// });

// Initial fetch
// const contributorsData = await fetchContributors();
fetchAllContributors1();

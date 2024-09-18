const websites = [
  {
    companyName: "Company 1",
    owner: "Owner 1",
    sponsors: [
      { lastName: "Lion", firstName: "Alex", contribution: 150000 },
      { lastName: "Bond", firstName: "James", contribution: 50000 },
    ],
    releaseYear: 2005,
    websiteValue: 12000,
  },
  {
    companyName: "Company 2",
    owner: "Owner 2",
    sponsors: [
      { lastName: "Terminator", firstName: "Arnold", contribution: 200000 },
    ],
    releaseYear: 2010,
    websiteValue: 25000,
  },
  {
    companyName: "Company 3",
    owner: "Owner 3",
    sponsors: [{ lastName: "Black", firstName: "Jack", contribution: 80000 }],
    releaseYear: 1998,
    websiteValue: 8000,
  },
  {
    companyName: "Company 4",
    owner: "Owner 1",
    sponsors: [
      { lastName: "Lion", firstName: "Alex", contribution: 15000 },
      { lastName: "Bond", firstName: "James", contribution: 30000 },
    ],
    releaseYear: 2005,
    websiteValue: 12000,
  },
];

// 1. Загальна вартість усіх сайтів
const totalValue = websites.reduce(
  (acc, website) => acc + website.websiteValue,
  0
);
document.getElementById(
  "total-value"
).innerHTML = `<strong>Загальна вартість усіх сайтів:</strong> ${totalValue}`;

// 2. Кількість сайтів, що було зроблено між 2000 та 2009 рр.
const countBetween2000And2009 = websites.filter(
  (website) => website.releaseYear >= 2000 && website.releaseYear <= 2009
).length;
document.getElementById(
  "count-between-years"
).innerHTML = `<strong>Кількість сайтів між 2000 та 2009 рр.:</strong> ${countBetween2000And2009}`;

// 3. Кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const countHighContribution = websites.filter(
  (website) =>
    website.sponsors.reduce((acc, sponsor) => acc + sponsor.contribution, 0) >
    100000
).length;
document.getElementById(
  "count-high-contribution"
).innerHTML = `<strong>Кількість сайтів з вкладеннями більше 100000:</strong> ${countHighContribution}`;

// 4. Загальний список усіх спонсорів
const allSponsors = websites.flatMap((website) => website.sponsors);
const sponsorsList = document.getElementById("sponsors-list");
allSponsors.forEach((sponsor) => {
  const li = document.createElement("li");
  li.textContent = `${sponsor.firstName} ${sponsor.lastName}, Вкладення: ${sponsor.contribution}`;
  sponsorsList.appendChild(li);
});

// 5. Рік, коли прибуток був найбільшим
const yearWithMaxProfit = websites.reduce(
  (maxYear, website) =>
    website.websiteValue >
    (websites.find((w) => w.releaseYear === maxYear).websiteValue || 0)
      ? website.releaseYear
      : maxYear,
  websites[0].releaseYear
);
document.getElementById(
  "year-with-max-profit"
).innerHTML = `<strong>Рік з найбільшим прибутком:</strong> ${yearWithMaxProfit}`;

// 6. Упорядкувати список за спаданням прибутку
const sortedByProfitDescending = [...websites].sort(
  (a, b) => b.websiteValue - a.websiteValue
);
const sortedWebsites = document.getElementById("sorted-websites");
sortedByProfitDescending.forEach((website) => {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${website.companyName}</td>
  <td>${website.owner}</td>
  <td>${website.releaseYear}</td>
  <td>${website.websiteValue}</td>
`;
  sortedWebsites.appendChild(row);
});

// 7. Сайти з вартістю до 10000
const sitesBelow10000 = websites.filter(
  (website) => website.websiteValue <= 10000
);
const sitesAbove10000 = websites.filter(
  (website) => website.websiteValue > 10000
);
const sitesBelowList = document.getElementById("sites-below-10000");
sitesBelow10000.forEach((website) => {
  const li = document.createElement("li");
  li.textContent = `${website.companyName} - Вартість: ${website.websiteValue}`;
  sitesBelowList.appendChild(li);
});

// Сайти з вартістю більше 10000
const sitesAboveList = document.getElementById("sites-above-10000");
sitesAbove10000.forEach((website) => {
  const li = document.createElement("li");
  li.textContent = `${website.companyName} - Вартість: ${website.websiteValue}`;
  sitesAboveList.appendChild(li);
});

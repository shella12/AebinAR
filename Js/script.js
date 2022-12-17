const arr = [

  {
    image: './images/speaker_01.png',
    title: 'Yochai Benkler',
    occupation: 'Professor at Harvard Law School',
    detail: 'By developing Asia\'s first Internet protocol network SDN and leading Korea\'s first private line Internet connection in 1990,it ushered in the era of the Internet in earnest.',
  },
  {
    image: './images/speaker_02.png',
    title: 'Jeon Gil-nam Kilnam Chon',
    occupation: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    detail: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.(Main books: The Wealth of the Network , Penguins and Leviathan)',
  },
  {
    image: './images/speaker_03.png',
    title: 'Carol Sue. Dwecker, Ph.D.',
    occupation: 'Director of University of Islamabad, Aebinar Director',
    detail: 'As the author of "mindset the new psychology of success", she opened \'Psychology Center Islamabad\', Pakistan\'s first institution in 2000, helping youth of educational institutions to develop an innovative mindset, and is currently serving.',
  },
  {
    image: './images/speaker_04.png',
    title: 'Julia Lee Julia R.',
    occupation: 'Head of the Young world of Asia',
    detail: 'Asian integration and online youth participation in business and entrepreneurship are major concerns, and a report has been published that will potentially affect the revision of the Asia\'s small bussiness investment and incentive policy in July',
  }, {
    image: './images/speaker_05.png',
    title: 'May Brotiko',
    occupation: 'Secretary General of the Wikimedia Foundation',
    detail: 'May Brotiko is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world\'s population',
  }, {
    image: './images/speaker_06.png',
    title: 'Ryan Merkley Ryan Merkley',
    occupation: 'Creative Commons CEO, Former Mozilla Foundation COO',
    detail: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source',
  },
];

// card function
function createSpeaker(cardsDiv, start = null, end = null) {
  for (let i = start; i < end; i += 1) {
    cardsDiv.innerHTML += `  <div class="card">
    <img src=${arr[i].image} alt="speaker">
    <div class="card-content">
        <h3 class="card-title">${arr[i].title}</h3>
        <p class="card-occupation">${arr[i].occupation}</p>
        <hr class="card-line">
        <p class="card-detail">${arr[i].detail}</p>
    </div>
</div>`;
  }
}

// create model

const speaker = document.querySelector('.speakers');
speaker.innerHTML += `
<h2 class="section-heading">Featured Speakers</h2>
<hr class="section-line">
<div class="cards speaker-cards1"></div>
<div class="cards speaker-cards2 active"></div>
<button class="speaker-btn">More</button>
`;
const cardsDiv = document.querySelector('.speaker-cards1');
const cardsDiv2 = document.querySelector('.speaker-cards2');
const speakerBtn = document.querySelector('.speaker-btn');
createSpeaker(cardsDiv, 0, 2);
createSpeaker(cardsDiv2, 2, arr.length);

speakerBtn.addEventListener('click', () => {
  if (cardsDiv2.classList.contains('active')) {
    speakerBtn.innerHTML = 'Less';
  } else {
    speakerBtn.innerHTML = 'More';
  }
  cardsDiv2.classList.toggle('active');
});

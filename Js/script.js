const arr=[
{
    image:'./images/speaker_03.png',
    title:'Noh So-young Sohyeong Noh',
    occupation:'Art Center Nabi Director, CC Korea Director',
    detail:'As the author of <Digital Art Art of Our Time>, he opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving.'
},
{
    image:'./images/speaker_04.png',
    title:'Noh So-young Sohyeong Noh',
    occupation:'Art Center Nabi Director, CC Korea Director',
    detail:'As the author of <Digital Art Art of Our Time>, he opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving.'
},{
    image:'./images/speaker_05.png',
    title:'Noh So-young Sohyeong Noh',
    occupation:'Art Center Nabi Director, CC Korea Director',
    detail:'As the author of <Digital Art Art of Our Time>, he opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving.'
},{
    image:'./images/speaker_06.png',
    title:'Noh So-young Sohyeong Noh',
    occupation:'Art Center Nabi Director, CC Korea Director',
    detail:'As the author of <Digital Art Art of Our Time>, he opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving.'
}
];

// create model

const speaker=document.querySelector('.speakers');

const speakerHeading=document.createElement('h2');
speakerHeading.className="section-heading";
speakerHeading.innerHTML="Featured Speakers";
speaker.appendChild(speakerHeading);

const speakerLine=document.createElement('hr');
speakerLine.className="section-line";
speaker.appendChild(speakerLine);

// cards

const cardsDiv=document.createElement('div');
cardsDiv.className="cards";
speaker.appendChild(cardsDiv);

// card

const card=document.createElement('div');
card.className="card";
cardsDiv.appendChild(card);

const cardImage=document.createElement('img');
cardImage.src="./images/speaker_01.png";
card.appendChild(cardImage);

const cardContent=document.createElement('div');
cardContent.className="card-content";
card.appendChild(cardContent);

const cardTitle=document.createElement('h3');
cardTitle.className="card-title";
cardTitle.innerHTML="Yochai Benkler";
cardContent.appendChild(cardTitle);

const cardOccupation=document.createElement('p');
cardOccupation.className="card-occupation";
cardOccupation.innerHTML="Professor at Harvard Law School";
cardContent.appendChild(cardOccupation);

const cardLine=document.createElement('hr');
cardLine.className="card-line";
cardContent.appendChild(cardLine);

const cardDetail=document.createElement('p');
cardDetail.className="card-detail";
cardDetail.innerHTML="By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990,it ushered in the era of the Internet in earnest."
cardContent.appendChild(cardDetail);

// card2

const card2=document.createElement('div');
card2.className="card";
cardsDiv.appendChild(card2);

const cardImage2=document.createElement('img');
cardImage2.src="./images/speaker_02.png";
card2.appendChild(cardImage2);

const cardContent2=document.createElement('div');
cardContent2.className="card-content";
card2.appendChild(cardContent2);

const cardTitle2=document.createElement('h3');
cardTitle2.className="card-title";
cardTitle2.innerHTML="Yochai Benkler";
cardContent2.appendChild(cardTitle2);

const cardOccupation2=document.createElement('p');
cardOccupation2.className="card-occupation";
cardOccupation2.innerHTML="Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)";
cardContent2.appendChild(cardOccupation2);

const cardLine2=document.createElement('hr');
cardLine2.className="card-line";
cardContent2.appendChild(cardLine2);

const cardDetail2=document.createElement('p');
cardDetail2.className="card-detail";
cardDetail2.innerHTML="Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.(Main books: The Wealth of the Network , Penguins and Leviathan)"
cardContent2.appendChild(cardDetail2);

const speakerBtn=document.createElement('button');
speakerBtn.className="speaker-btn"
speakerBtn.innerText="More"
speaker.appendChild(speakerBtn);
const cardsDiv2=document.createElement('div');
cardsDiv.className="cards";

// card loop

speakerBtn.addEventListener('click',function(){
    
    const cardsDiv2=document.createElement('div');
    cardsDiv2.className="cards";
    speaker.appendChild(cardsDiv2);

arr.forEach(function(element,index){
    const card=document.createElement('div');
    card.className="card";
    cardsDiv2.appendChild(card);
    
    const cardImage=document.createElement('img');
    cardImage.src=arr[index].image;
    card.appendChild(cardImage);
    
    const cardContent=document.createElement('div');
    cardContent.className="card-content";
    card.appendChild(cardContent);
    
    const cardTitle=document.createElement('h3');
    cardTitle.className="card-title";
    cardTitle.innerHTML=arr[index].title;
    cardContent.appendChild(cardTitle);
    
    const cardOccupation=document.createElement('p');
    cardOccupation.className="card-occupation";
    cardOccupation.innerHTML=arr[index].occupation;
    cardContent.appendChild(cardOccupation);
    
    const cardLine=document.createElement('hr');
    cardLine.className="card-line";
    cardContent.appendChild(cardLine);
    
    const cardDetail=document.createElement('p');
    cardDetail.className="card-detail";
    cardDetail.innerHTML=arr[index].detail;
    cardContent.appendChild(cardDetail);
    
})

speakerBtn.classList.add('active');

const speakerBtnLess=document.createElement('button');
speakerBtnLess.className="speaker-btn";
speakerBtnLess.innerText="Less"
cardsDiv2.appendChild(speakerBtnLess);

speakerBtnLess.addEventListener('click',function(){
cardsDiv2.remove();
speakerBtn.classList.remove('active')
});
})


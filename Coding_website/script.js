/*function displayTime(){
    var dateTime= new  Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs>=12){
        session.innerHTML = 'PM';  
    }
    else{
        session.innerHTML = 'AM';
    }

    if(hrs>12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;



}
setInterval(displayTime, 10);*/

function updateDigitalClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'AM' : 'PM'; // Determine if it's AM or PM
    //hours = hours % 12 || 12;

    const digitalClockRoundElement = document.getElementById('digitalClockRound');
    const digitalClockExpandedElement = document.getElementById('digitalClockExpanded');

    const digitalTimeRound = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    digitalClockRoundElement.textContent = digitalTimeRound;

    const digitalTimeExpanded = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${ampm}`;
    digitalClockExpandedElement.textContent = digitalTimeExpanded;
  }

  function updateDateDay() {
    const now = new Date();
    const dayOptions = { weekday: 'long' };
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };

    const day = new Intl.DateTimeFormat('en-US', dayOptions).format(now);
    const date = new Intl.DateTimeFormat('en-US', dateOptions).format(now);

    const dateDayElement = document.getElementById('dateDay');
    const dateDayText = `${day}, ${date}`;
    dateDayElement.textContent = dateDayText;
  }

  function toggleExpandedClock() {
    const expandedClockContainer = document.getElementById('expandedClockContainer');
    const roundDigitalClockContainer = document.getElementById('roundDigitalClockContainer');
    const digitalClockExpanded = document.getElementById('digitalClockExpanded');

    if (expandedClockContainer.style.display === 'block') {
      expandedClockContainer.style.display = 'none';
      roundDigitalClockContainer.style.display = 'flex';
    } else {
      updateDigitalClock(); // Update digital clock content
      updateDateDay(); // Update date and day content

      expandedClockContainer.style.display = 'block';
      roundDigitalClockContainer.style.display = 'none';
    }
  }
  function closeExpandedClock() {
    const expandedClockContainer = document.getElementById('expandedClockContainer');
    expandedClockContainer.style.display = 'none';

    const roundDigitalClockContainer = document.getElementById('roundDigitalClockContainer');
    roundDigitalClockContainer.style.display = 'flex';
  }
  setInterval(updateDigitalClock, 1000);

    // Initialize round clock container
    const roundDigitalClockContainer = document.getElementById('roundDigitalClockContainer');
    roundDigitalClockContainer.addEventListener('click', toggleExpandedClock);

    // Initialize close button
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', closeExpandedClock);



document.addEventListener("DOMContentLoaded", function () {
    let inputBox = document.querySelector(".input-box");
    let search = document.querySelector(".search");
    let closeIcon = document.querySelector(".close-icon");
  
    search.addEventListener("click", () => inputBox.classList.add("open"));
    closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));
  });


  //for the image transition


//   document.getElementById("img1").classList.add("active");
// let img1 = document.getElementById("img1").addEventListener('click',event => {
//     document.getElementById("img1").classList.add("active");
//     document.getElementById("img3").classList.remove("active");
//     document.getElementById("img4").classList.remove("active");
//     document.getElementById("img5").classList.remove("active");
//     document.getElementById("img2").classList.remove("active");
// });
// let img2 = document.getElementById("img2").addEventListener('click',event => {
//     document.getElementById("img1").classList.remove("active");
//     document.getElementById("img3").classList.remove("active");
//     document.getElementById("img4").classList.remove("active");
//     document.getElementById("img5").classList.remove("active");
//     document.getElementById("img2").classList.add("active");
// });
// let img3 = document.getElementById("img3").addEventListener('click',event => {
//     document.getElementById("img1").classList.remove("active");
//     document.getElementById("img3").classList.add("active");
//     document.getElementById("img4").classList.remove("active");
//     document.getElementById("img5").classList.remove("active");
//     document.getElementById("img2").classList.remove("active");
// });
// let img4 = document.getElementById("img4").addEventListener('click',event => {
//     document.getElementById("img1").classList.remove("active");
//     document.getElementById("img3").classList.remove("active");
//     document.getElementById("img4").classList.add("active");
//     document.getElementById("img5").classList.remove("active");
//     document.getElementById("img2").classList.remove("active");
// });
// let img5 = document.getElementById("img5").addEventListener('click',event => {
//     document.getElementById("img1").classList.remove("active");
//     document.getElementById("img3").classList.remove("active");
//     document.getElementById("img4").classList.remove("active");
//     document.getElementById("img5").classList.add("active");
//     document.getElementById("img2").classList.remove("active");
// });


let images = document.querySelectorAll('.firstHalf img');

images.forEach(img => {
    img.addEventListener('click', event => {
        // Remove the "active" class from all images
        images.forEach(image => {
            image.classList.remove('active');
        });

        // Add the "active" class to the clicked image
        event.target.classList.add('active');
    });
});

//------DATE AND TIME COMING ONLY WITH THE FIRST IMAGE

// function updateDateTime(element, country) {
//   const options = {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       timeZone: country,
//   };

//   const formattedDateTime = new Date().toLocaleString(undefined, options);
//   element.querySelector('.datetime').textContent = formattedDateTime;
// }

// document.querySelectorAll('.firstHalf .image').forEach(image => {
//   image.addEventListener('click', event => {
//       document.querySelectorAll('.firstHalf .image').forEach(img => {
//           img.classList.remove('active');
//       });

//       image.classList.add('active');
//       const country = image.getAttribute('data-country');
//       updateDateTime(image, country);
//   });
// });

// // Initial update for the first image
// const initialImage = document.querySelector('.firstHalf .image');
// updateDateTime(initialImage, initialImage.getAttribute('data-country'));
// initialImage.classList.add('active');


//-------COMING ONLY IN FIRST IN IMAGE WITH THE COUNTRY NAME

// function updateDateTime(element, country) {
//   const options = {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       timeZoneName: 'short',
//       timeZone: country,
//   };

//   const formattedDateTime = new Date().toLocaleString(undefined, options);
//   const countryName = Intl.DateTimeFormat('en-US', { timeZone: country }).resolvedOptions().timeZone;
//   const dateTimeString = `${formattedDateTime} (${countryName})`;

//   element.querySelector('.datetime').textContent = dateTimeString;
// }

// document.querySelectorAll('.firsthalf .image').forEach(image => {
//   image.addEventListener('click', event => {
//       document.querySelectorAll('.firstHalf .image').forEach(img => {
//           img.classList.remove('active');
//           img.querySelector('.datetime').textContent = ''; // Clear previous date/time
//       });

//       image.classList.add('active');
//       const country = image.getAttribute('data-country');
//       updateDateTime(image, country);
//   });
// });

// // Initial update for the first image
// const initialImage = document.querySelector('.firstHalf .image');
// updateDateTime(initialImage, initialImage.getAttribute('data-country'));
// initialImage.classList.add('active');



//--------------AFTER CLICKING THE IMAGE CAN GET THE CLOCK


// function updateDateTime(element, country) {
//   const options = {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       timeZoneName: 'short',
//       timeZone: country,
//   };

//   const formattedDateTime = new Date().toLocaleString(undefined, options);
//   const countryName = Intl.DateTimeFormat('en-US', { timeZone: country }).resolvedOptions().timeZone;
//   const dateTimeString = `${formattedDateTime} (${countryName})`;

//   element.querySelector('.datetime').textContent = dateTimeString;
// }

// document.querySelectorAll('.firstHalf .image').forEach(image => {
//   image.addEventListener('click', event => {
//       document.querySelectorAll('.firsthalf .image').forEach(img => {
//           img.classList.remove('active');
//           img.querySelector('.datetime').textContent = ''; // Clear previous date/time
//       });

//       image.classList.add('active');
//       const country = image.getAttribute('data-country');
//       updateDateTime(image, country);
//   });
// });

// // Initial update for the first image
// const initialImage = document.querySelector('.firsthalf .image');
// updateDateTime(initialImage, initialImage.getAttribute('data-country'));
// initialImage.classList.add('active');


//Coming with all the images with country


function updateDateTime(element, country) {
  const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
      timeZone: country,
  };

  const formattedDateTime = new Date().toLocaleString(undefined, options);
  const countryName = Intl.DateTimeFormat('en-US', { timeZone: country }).resolvedOptions().timeZone;
  const dateTimeString = `${formattedDateTime} (${countryName})`;

  element.querySelector('.datetime').textContent = dateTimeString;
}

document.querySelectorAll('.firsthalf .image').forEach(image => {
  const country = image.getAttribute('data-country');
  updateDateTime(image, country);

  image.addEventListener('click', event => {
      document.querySelectorAll('.firstHalf .image').forEach(img => {
          img.classList.remove('active');
          img.querySelector('.datetime').textContent = ''; // Clear previous date/time
      });

      image.classList.add('active');
      updateDateTime(image, country);
  });
});

// Initial update for all images
document.querySelectorAll('.firstHalf .image').forEach(image => {
  const country = image.getAttribute('data-country');
  updateDateTime(image, country);
});

// Initial update for the first image
const initialImage = document.querySelector('.firstHalf .image');
initialImage.classList.add('active');





  
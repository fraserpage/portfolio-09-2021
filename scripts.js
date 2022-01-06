/* Portfolio content */
const accordionContent = [
  {
    title: "An React/Express JS app for playing with variable fonts",
    img: "vffunland.png",
    body: "I kind of got a bit obsessed with <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide' target='_blank'>variable fonts</a> and wanted a way to play with their variable properties in a way that ... er ... varies over the course of a word or phrase. Is that a confusing mouthful? Just play with the app and you'll understand.</p><p><a href='https://github.com/fraserpage/Variable-Font-Funland' target='_blank'>Check out my code on GitHub.</a>",
    link: "https://vffunland.herokuapp.com/",
    linkText: "Check it out",
    linkNote:"(This is running on Heroku's free tier so be patient while it spins up.)",
    tags: ""
  },
  {
    title: "An Express JS app for managing gift exchanges",
    img: "gifts.png",
    body: "Every year my family, like many others, exchanges Christmas gifts. And every year I struggle to keep track of all the emails about what people would like and who has already got what for who. This app aims to solve that problem.</p><p>It's built with Express/Node with EJS templating, Mongo/Mongoose, Passport/Google OAuth for user authentication and Nodemailer with Sendgrid for emails.</p><p>Next steps: some of the forms here are in desperate need of AJAXification. </p><p><a href='https://github.com/fraserpage/gift-list-app' target='_blank'>Check out my code on GitHub.</a>",
    link: "https://giftlists-app.herokuapp.com/",
    linkText: "Check it out",
    linkNote:"Don't be too shy to sign up for an account! (Also, This is running on Heroku's free tier so be patient while it spins up.)",
    tags: ""
  },
  {
    title: "A very silly Django app",
    img: "sandwich.png",
    body: "In 2010 I had an idea that it might be fun to slice up pictures of my face and let people slide them around to make new configurations. I was right, <a href='https://fraserpage.github.io/faces2010/' target='_blank'>it was fun.</a> </p><p>11 years later, I pitched redoing this as a full CRUD app that would let users upload photos and make their own face mashups. This was a group project. I created the initial wireframes and design specifications for the site and took on building the front and backend functions for the photo upload tool and 3D spinning block gizmo that sits at the heart of the site. </p><p> Next steps: The spinning cube is really crying out to be swipeable. </p><p><a href='https://github.com/fraserpage/Open-Face-Sandwich-App' target='_blank'>Check out the code on GitHub.</a>",
    link: "https://open-face-sandwich.herokuapp.com/",
    linkText: "Check it out",
    linkNote:"(This is running on Heroku's free tier so be patient while it spins up.)",
    tags: ""
  },
  {
    title: "A fun little React app for exploring Mars Rover photos",
    img: "rover.png",
    body: "This little React app lets you explore NASA's Mars Rover photo API. Select a Rover, select a mission day: see photos. You can optionally filter by the camera used and change the number of photos per page. Each photo has a like button that you can click if you like, though likes are not saved to any database. The photos have a fun css animation as a loading state. Clicking on a photo opens it in lightbox mode.  </p><p>Next steps: this all just lives at a single url right now. It would be nice to be able to link to specific pages or photos. That might enable some nice sharing functionality. It'd also be nice if those like buttons were hooked up to a DB.</p><p><a href='https://github.com/fraserpage/Spacestagram' target='_blank'>Check out the code on GitHub.</a>",
    link: "https://fraserpage.github.io/Spacestagram/",
    linkText: "Check it out",
    linkNote:"",
    tags: ""
  },
  {
    title: "Conway's Game of Life: The Game",
    img: "game.png",
    body: "I wondered if I could turn John Conway's Game of Life algorithm into an actual multiplayer game. In search of that, I wrote up some proposed rules and made a super customizable, DOM based, vanilla JS implementation of the Game, complete with a drag and drop 'library' of interesting patterns. </p><p>In the end, I hardly felt the need to 'play' any games with this. It's just super fun to mess around with. </p><p>Next steps: the intro/settings screen is a little overwhelming and would be well served by a bit of slimming down and maybe recommending sets of settings to users instead of forcing them to choose them all. I'd also love to give users to option of adding their own patterns to the library. Finally, it needs a reset button. </p><p><a href='https://github.com/fraserpage/the-game-of-life-the-game' target='_blank'>Check out my code on GitHub.</a>",
    link: "https://fraserpage.github.io/the-game-of-life-the-game/",
    linkText: "Check it out.",
    tags: ""
  },
  {
    title: "A better Tic Tac Toe",
    img: "tic.png",
    body: "Tic Tac Toe is boring. It's impossible to win unless you're playing against a not-very-bright child. So in service of finding a more fun version, this is a super customizable Tic Tac Toe. 3 players? Sure. 8?? Why not. 6 x 60 board?  5 in a row to win? Go ahead! Probably it'll be more fun than the most boring game in the world. </p><p>This is just vanilla JS, HTML and CSS. The fun part of this was writing a diagonal grid search algorithm to find a winning state. <a href='https://github.com/fraserpage/ResizableTicTacToe' target='_blank'>Peep my code on GitHub.</a>",
    link: "https://fraserpage.github.io/ResizableTicTacToe/",
    linkText: "Have fun with it! I know I did.",
    tags: ""
  },
  {
    title: "An 11ty static site with Netlify CMS",
    img: "ai.png",
    body: "This project is not quite live yet. It's built with Netlify CMS, Eleventy static site generator, with templates in Nunjucks, running on Netlify. I'm a big believer in modular systems, so this is all built using Netlify CMS's 'variable type' list widget which enables a page-builder type experience. ",
    link: "https://agnewiler.netlify.app/",
    linkText: "Check it out",
    tags: "Netlify, Design by me"
  },
  {
    title: "An annual report mini-site as a Wordpress plugin",
    img: "woodgreen.png",
    body: "Despite the 'mini-site' label this site is actually quite large. It was developed as a Wordpress plugin so as not to require monkeying with Woodgreen's current theme. It utilizes <a href='https://www.advancedcustomfields.com/' target='_blank'>ACF</a> flexible fields to provide a page-builder like functionality on the backend. </p><p>Design by <a href='https://rallyrally.design' target='_blank' rel='nofollow'>RallyRally</a>.",
    link: "https://archive.woodgreen.org/about-us/annual-reports/2019-20/governance-update-woodgreen-foundation/",
    linkText: "This is my favourite page. Fun animating charts!",
    tags: "Wordpress, Wordpress plugin, Animation, Design by RallyRally"
  },
  {
    title: "Firebase, fun forms and playful interactivity for my wedding website",
    img: "wedding.png",
    body: "A labour of love! I wanted to build something fun for my wedding. Move your mouse around and Kasia and I will watch where you go. Click the heart emoji to shoot an arrow through it and make us kiss! On mobile you grab onto the bow and arrow and point it at the heart to do the same thing. (I mocked up a version of the mobile site that used your phone's accelerometer to move the ball around, which I thought was pretty cool but is so far from a normal mode of input that it was pretty confusing.)</p><p>Guests were all assigned custom urls at which they could RSVP and read more details. The site is running on Firebase and uses their API to create a slightly unusual RSVP form which saves as you go. I wanted to integrate the gift registry into the site too but ran out of time.",
    link: "https://kasia-fraser.love/rsvp/v4jXBVDBjTyz7YDY9vDxVjmm",
    linkText: "Here's Doug's RSVP page. Feel free to play around with the form.",
    tags: "Fun Javascript, Firebase"
  },
  {
    title: "A big modular Wordpress site",
    img: "cv.png",
    body: "Likely takes the crown for the biggest site I've created. Every piece of this site is an <a href='https://www.advancedcustomfields.com/' target='_blank'>ACF</a> flexible field, which makes this an incredibly flexible site on the backend. The centrepiece, in my mind is the robust 'filter' feature on the Community page which lets you sort through a huge number of 'business cards' via AJAX. </p><p>Design by <a href='https://rallyrally.design' target='_blank' rel='nofollow'>RallyRally</a>.",
    link: "https://climateventures.org/community/",
    linkText: "Check out the filter page here.",
    tags: "Wordpress, AJAX"
  },
  {
    title: "A year-in-review Wordpress mini-site",
    img: "2019.png",
    body: "I've been making fun 'year-in-review' websites and projects for Iler Campbell for a good while now (feel free to hack the url to get yourself all the way back to 2015.). This is running on Wordpress using ACF for content management. I think the coolest bit is the slideshow animation.",
    link: "https://ilercampbell.com/2019/",
    linkText: "Check it out.",
    tags: "Wordpress, ACF"
  },
  {
    title: "A chat-themed year-in-review Wordpress mini-site",
    img: "IC2021.png",
    body: "This was my most ambitious year-in-review site for Iler Campbell. The reactions feature is hooked up to the Wordpress REST API.",
    link: "https://ilercampbell.com/2021/",
    linkText: "Check it out.",
    tags: "Wordpress, Wordpress REST API, ACF"
  },
  {
    title: "A patched up Squarespace site",
    img: "schools.png",
    body: "This is a Squarespace website that I was called into help with. On the CSS side, the most exciting bit is the fairly complicated underline effect on the main headings. These are created with a precisely defined repeating linear gradient background.</p><p>Squarespace has no support for multilingual sites, which this is. To make the header and footer change to match the language of the page I'm using javascript to read the site url and then swap in the correct elements based on the page belonging to the 'en' or 'fr' part of the site.</p><p>On the 'Resources' page I AJAX in the next page of resources right away to get around Squarespace's limit on the number of blog posts that a page can show at once. Any further posts (if they exist) can be AJAX'd in by clicking on a button at the bottom. </p><p>The 'Resources' are also filterable but Squarespace's filter widget is confoundingly dumb. It gives no indication of what the current filter state is. To fix this, I parse the url again and write a title based on this. I also made the filter load posts by AJAX to prevent a confusing page reload. </p><p>Design by <a href='https://rallyrally.design' target='_blank' rel='nofollow'>RallyRally</a>.",
    link: "https://www.healthyschoolsalliance.ca/en/resources/",
    linkText: "Check out the Resources page.",
    tags: "Squarespace, AJAX, Tricky CSS, Multilingual"
  },
  {
    title: "A Multilingual Wordpress Gutenberg site",
    img: "meck.png",
    body: "This fairly simple site is built entirely on Wordpress' Gutenberg editor, making for a flexible component based site with a fully WYSIWYG editor experience. The multilingual logic is all custom code. A lot of attention was paid to accessibility on this site. </p><p>Design by <a href='https://rallyrally.design' target='_blank' rel='nofollow'>RallyRally</a>.",
    link: "https://meckplaybook.com/plan-updates/",
    linkText: "This page has a fun little timeline slider thing.",
    tags: "Wordpress, Gutenberg, Multilingual"
  },
  {
    title: "A fully custom Squarespace site",
    img: "book.png",
    body: "This commerce site is running on Squarespace's 'Developer' platform which allows for <i>almost</i> fully custom themes. </p><p>Design by Kaila Jacques.",
    link: "https://www.heresmybook.com/",
    linkText: "Check it out",
    tags: "Squarespace, Squarespace Developer Platform"
  }
]

/* --- Put the content into the site --- */
const accordion = document.getElementById('accordion');
let accordionHTML = "";

accordionContent.forEach(entry =>{
  accordionHTML += `
    <dt>
      <h3>${entry.title}</h3>
      <img src='images/${entry.img}'>
    </dt>
    <dd>
      <div class='accordion-left'>
        <p>
          ${entry.body}
        </p>
        <p><a href='${entry.link}' target='_blank'>
          ${entry.linkText}
        </a></p>
        ${entry.linkNote ? `<p class="link-note">${entry.linkNote}</p>` : ``}
      </div>
      <div class='accordion-right'>
        <img src='images/${entry.img}'>
      </div>
    </dd>`
})
accordion.innerHTML = accordionHTML;

/* Make bg change on mouse move */
window.addEventListener('mousemove', e => {
  let combinedMousePosition = (e.clientX/window.innerWidth + e.clientY/window.innerHeight)/2
  document.body.style.background = `hsl(${45*combinedMousePosition+150},100%,50%)`
})

/* Read more button */ 
document.getElementById('readmore').addEventListener('click', () =>{
  document.body.classList.add('more')
})

/* --- Accordions --- */
/*On load, add 'active' class to accordion*/
document.querySelectorAll('dl').forEach(accordion =>{
  accordion.classList.add('active');
});
/*Add 'closed' to all 'dts'. Add tabindex="0" to 'dt's*/
document.querySelectorAll('dl dt').forEach(dt =>{
  dt.tabIndex = 0;
  dt.ariaExpanded = false;
  dt.classList.add('closed');
  dt.addEventListener('click', function(){
    toggleAccordion(this);
  });
  dt.addEventListener('keydown', function(event){
    if (event.code === 'Space') {
      event.preventDefault();
      toggleAccordion(this);
    }
  })
});

document.querySelectorAll('dl dd').forEach(dd =>{
  dd.style.height = "0px";
});

function toggleAccordion(dt){
  let dd = dt.nextElementSibling;
  //Open it
  if (dt.classList.contains('closed')){
    dt.classList.remove('closed');
    dt.classList.add('open');
    dt.ariaExpanded = true;
    //slide down dd (animation is css transition)
    dd.style.height = "auto";
    var height = dd.clientHeight + "px";
    dd.style.height = "0px";
    setTimeout(() => {
      dd.style.height = height;
    }, 0); 
    dd.addEventListener('transitionend', () => {
      dd.style.height = "auto";
    }, {once: true})
  }
  //close it
  else if (dt.classList.contains('open')){
    //slide up dd
    dd.style.height = dd.clientHeight + "px";
    setTimeout(() => {
      dd.style.height = "0px";
    }, 0); 
    dt.ariaExpanded = false;
    /** Change the classes when the animation ends. */
    dd.addEventListener('transitionend', () => {
      dt.classList.add('closed');
      dt.classList.remove('open');
    }, {once: true})
  }
}

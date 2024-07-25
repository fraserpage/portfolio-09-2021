/* Portfolio content */
const accordionContent = [
  {
    title: "A bold site for a bold initiative",
    img: "translash.jpeg",
    body: "TransLash tells trans stories to save trans lives. They've been putting out amazing content for years, but their website wasn't doing a great job of showing it off. The great designers at Briteweb put together a super cool new design for them and I was very happy to be part of the small team that built it out. This is a WordPress site built on the Sage ecosystem. I was happy to be able to contribute to lots of cool interactions and details here. The <a href='https://translash.org/projects/legislation-dashboard/'>Legislation Dashboard</a> fetches data daily from an external API and displays it in some cool interactive charts built in D3.js. The <a href='https://translash.org/about/'>about page</a> has a fun animating image on scroll. Checkout the nifty use of <code>position sticky</code> on the articles block on the home page, bold hover states for the 'Articles', 'Podcasts', 'Films' and 'Zines' headlines, and the nice animations on the carousels. Podcasts are integrated with Spotify such that new episodes are automatically imported as draft posts with all the data fields already filled out. An admin notification shows information on the most recent import.",
    link: "https://translash.org/",
    linkText: "Check it out",
    linkNote:"",
    tags: ["&#9733; My Favs", "D3.js", "API integration", "WordPress", "Sage", "ACF Composer", "Animation", "Alpine.js"],
  },
  {
    title: "An award winning site for Arts Midwest",
    img: "artsmidwest.jpeg",
    body: "Another great design here led to some industry accolades. The client is constantly putting out content and makes great use of the flexible Gutenberg block based system. While you're here, checkout the <a href='https://artsmidwest.org/impact/'>impact page</a> for an interactive svg map (built in Alpine.js), with animating numbers and story and grantee blocks that respond to the map state. ",
    link: "https://artsmidwest.org/",
    linkText: "Check it out",
    linkNote:"",
    tags: ["WordPress", "Sage", "ACF Composer", "Alpine.js", "Vue.js"],
  },
  {
    title: "A richly animated experience",
    img: "acumen.jpg",
    body: "I built most of the animations you'll see as you scroll through this site for Acumen (and many of the blocks they apply to). Note the animating numbers, the parallax effect on images and the transitions as you scroll through carousels. The highlight for me here is <a href='https://acumen.org/where-we-work/'>the interactive map</a> that pulls in data from an internal API. ",
    link: "https://acumen.org/",
    linkText: "Check it out",
    linkNote:"",
    tags: ["WordPress", "Sage", "ACF Composer", "Animation", "Vue.js",],
  },
  {
    title: "A big WordPress multi-site with theme variations",
    img: "liif.jpeg",
    body: "This client was entering in to a merger with <a href='https://naht.org/'>another organization.</a> They wanted to maintain separate but connected identities. Towards that end, we built them a single WordPress theme to run on a multi-site installation. The two sites share a common set of Gutenberg blocks that are differentiated primarily by color palette. My favorite bit of work here is the filterable <a href='https://www.liifund.org/who-we-are/staff-and-leadership/'>staff and leadership page</a> (built in Vue.js)",
    link: "https://www.liifund.org/",
    linkText: "Check it out",
    linkNote:"",
    tags: ["WordPress", "Sage", "ACF Composer", "Multi-site", "Vue.js"],
  },
  {
    title: "Fun animating charts with custom labels",
    img: "spf.jpeg",
    body: "I was involved in the whole site build here but the highlight I'll draw your attention to is the charts on their annual report page. These charts are constructed of user entered data. They use chart.js to draw the doughnut but the labels are custom logic the writes directly to the canvas element. We have to figure out which way to draw the line and how to place the text so that it doesn't overlap anything. There's math involved! (I love an opportunity to do math!) Also note the navigation dots on that page which make good use of CSS filters to ensure they stay legible on any background.",
    link: "https://helpstpauls.com/annual-report/#by-the-numbers",
    linkText: "Check it out",
    linkNote:"",
    tags: ["WordPress", "Sage", "ACF Composer", "Chart.js", "Canvas"],
  },
  {
    title: "An interactive animated timeline",
    img: "fof.jpeg",
    body: "I added an interactive timeline to this existing site. Because of the way event cards are grouped together using an existing carousel library wasn't a good fit. There's some interesting logic here to ensure that the next and previous buttons always perform in a way that makes sense. Plus, the hover animations were fun to do.",
    link: "https://futureoffood.org/our-work/10-years-of-the-global-alliance-for-the-future-of-food/",
    linkText: "Check it out",
    linkNote:"",
    tags: ["WordPress", "Vanilla Javascript",],
  },
  {
    title: "A fun little React app for exploring Mars Rover photos",
    img: "rover.png",
    body: "This little React app lets you explore NASA's Mars Rover photo API. Select a Rover, select a mission day: see photos. You can optionally filter by the camera used and change the number of photos per page. Each photo has a like button that you can click if you like, though likes are not saved to any database. The photos have a fun css animation as a loading state. Clicking on a photo opens it in lightbox mode.  </p><p>Next steps: this all just lives at a single url right now. It would be nice to be able to link to specific pages or photos. That might enable some nice sharing functionality. It'd also be nice if those like buttons were hooked up to a DB.</p><p><a href='https://github.com/fraserpage/Spacestagram' target='_blank'>Check out the code on GitHub.</a>",
    link: "https://fraserpage.github.io/Spacestagram/",
    linkText: "Check it out",
    linkNote:"",
    tags: ["React",],
  },
  {
    title: "Conway's Game of Life: The Game",
    img: "game.png",
    body: "I wondered if I could turn John Conway's Game of Life algorithm into an actual multiplayer game. In search of that, I wrote up some proposed rules and made a super customizable, DOM based, vanilla JS implementation of the Game, complete with a drag and drop 'library' of interesting patterns. </p><p>In the end, I hardly felt the need to 'play' any games with this. It's just super fun to mess around with. </p><p>Next steps: the intro/settings screen is a little overwhelming and would be well served by a bit of slimming down and maybe recommending sets of settings to users instead of forcing them to choose them all. I'd also love to give users to option of adding their own patterns to the library. Finally, it needs a reset button. </p><p><a href='https://github.com/fraserpage/the-game-of-life-the-game' target='_blank'>Check out my code on GitHub.</a>",
    link: "https://fraserpage.github.io/the-game-of-life-the-game/",
    linkText: "Check it out.",
    tags: ["Vanilla Javascript"],
  },
  {
    title: "A better Tic Tac Toe",
    img: "tic.png",
    body: "Tic Tac Toe is boring. It's impossible to win unless you're playing against a not-very-bright child. So in service of finding a more fun version, this is a super customizable Tic Tac Toe. 3 players? Sure. 8?? Why not. 6 x 60 board?  5 in a row to win? Go ahead! Probably it'll be more fun than the most boring game in the world. </p><p>This is just vanilla JS, HTML and CSS. The fun part of this was writing a diagonal grid search algorithm to find a winning state. <a href='https://github.com/fraserpage/ResizableTicTacToe' target='_blank'>Peep my code on GitHub.</a>",
    link: "https://fraserpage.github.io/ResizableTicTacToe/",
    linkText: "Have fun with it! I know I did.",
    tags: ["Vanilla Javascript"],
  },
  {
    title: "Firebase, fun forms and playful interactivity for my wedding website",
    img: "wedding.png",
    body: "A labour of love! I wanted to build something fun for my wedding. Move your mouse around and Kasia and I will watch where you go. Click the heart emoji to shoot an arrow through it and make us kiss! On mobile you grab onto the bow and arrow and point it at the heart to do the same thing. (I mocked up a version of the mobile site that used your phone's accelerometer to move the ball around, which I thought was pretty cool but is so far from a normal mode of input that it was pretty confusing.)</p><p>Guests were all assigned custom urls at which they could RSVP and read more details. The site is running on Firebase and uses their API to create a slightly unusual RSVP form which saves as you go. I wanted to integrate the gift registry into the site too but ran out of time.",
    link: "https://kasia-fraser.love/rsvp/v4jXBVDBjTyz7YDY9vDxVjmm",
    linkText: "Here's Doug's RSVP page. Feel free to play around with the form.",
    tags: ["&#9733; My Favs", "Vanilla Javascript", "Firebase"],
  },
  {
    title: "A chat-themed year-in-review WordPress mini-site",
    img: "IC2021.png",
    body: "In my previous life as IT and Marketing Manager at a small law firm, my favorite time of year was December. Each year I'd put together an increasingly ambitious year-in-review mini-site. 2021 was my last and most ambitious effort. A 'chat' themed review for a year spent working from home. Lots of little hidden (and not entirely accessible!) interactions here. Hover over a photo to see a bio of each person; click on a chat bubble to add a reaction to it. Reactions are hooked up to the WordPress REST API to save them to the database.",
    link: "https://ilercampbell.com/2021/",
    linkText: "Check it out.",
    tags: ["WordPress", "ACF", "JQuery"]
  },
  {
    title: "A patched up Squarespace site",
    img: "schools.png",
    body: "This is a Squarespace website that I was called into help with. On the CSS side, the most exciting bit is the fairly complicated underline effect on the main headings. These are created with a precisely defined repeating linear gradient background.</p><p>Squarespace has no support for multilingual sites, which this is. To make the header and footer change to match the language of the page I'm using javascript to read the site url and then swap in the correct elements based on the page belonging to the 'en' or 'fr' part of the site.</p><p>On the 'Resources' page I AJAX in the next page of resources right away to get around Squarespace's limit on the number of blog posts that a page can show at once. Any further posts (if they exist) can be AJAX'd in by clicking on a button at the bottom. </p><p>The 'Resources' are also filterable but Squarespace's filter widget is confoundingly dumb. It gives no indication of what the current filter state is. To fix this, I parse the url again and write a title based on this. I also made the filter load posts by AJAX to prevent a confusing page reload. </p><p>Design by <a href='https://rallyrally.design' target='_blank' rel='nofollow'>RallyRally</a>.",
    link: "https://www.healthyschoolsalliance.ca/en/resources/",
    linkText: "Check out the Resources page.",
    tags: ["Squarespace", "Tricky CSS", "Multilingual", "Vanilla Javascript"]
  },
  {
    title: "A fully custom Squarespace site",
    img: "book.png",
    body: "This commerce site is running on Squarespace's 'Developer' platform which allows for <i>almost</i> fully custom themes. </p><p>Design by Kaila Jacques.",
    link: "https://www.heresmybook.com/",
    linkText: "Check it out",
    tags: ["Squarespace", "Squarespace Developer Platform"]
  }
]

/**
 * Get tags from accordionContent, add counts, alphabetize
 */
const allTags = accordionContent.reduce((tags, item) => {
  tags.push(...item.tags);
  return tags;
}, []);

const tagCounts = allTags.reduce((counts, tag) => {
  counts[tag] = (counts[tag] || 0) + 1;
  return counts;
}, {});

const tagsWithCount = Object.keys(tagCounts).map(tag => ({
  title: tag,
  count: tagCounts[tag]
}));

const sortedTags = tagsWithCount.sort((a,b) => {
  return a.title < b.title ? -1 : 1;
})

sortedTags.unshift({
  title: 'All',
  count: '',
})

document.addEventListener('alpine:init', () => {
  Alpine.data('projects', () => ({
      projects: accordionContent,
      filters: sortedTags,
      activeFilter: 'All',

      filter(tag){
        this.activeFilter = tag == this.activeFilter ? 'All' : tag;
      },

      filterClass(filter){
        return this.isActiveFilter(filter) ? 'active' : '';
      },

      isActiveFilter(filter){
        return filter == this.activeFilter;
      },

      showProject(project){
        if(this.activeFilter == 'All') return true;
        return project.tags.includes(this.activeFilter);
      },
  }))

  Alpine.data('accordion', () => ({
    open: false,
    headStyle: {},
    headHeight: '',

    toggle(){
      if(!this.open) this.handleOpen();
      if(this.open) this.handleClose();
      this.open = !this.open;
    },

    /**
     * If clicking on any non-button elements in the head, toggle it open
     */ 
    handleAnywhereClick(e){
      if(e.target.tagName == "BUTTON") return;
      this.toggle();
    },

    /**
     * Resize the accordion head
     */ 
    handleOpen(){
      if(document.body.clientWidth < 600) return;
      // Store current head height
      this.headHeight = this.$refs.head.clientHeight;
      // Set head height to current so we can animate it
      this.headStyle.height = this.headHeight + 'px';

      // Animate to new height on next tick
      this.$nextTick(()=>{

        this.headStyle.height = this.headHeight + this.$refs.h3.clientHeight * 0.5 + 'px';
      });

    },

    /**
     * Animate the head height to the 'closed' value.
     */
    handleClose(){
      if(document.body.clientWidth < 600) return;
      
      this.headStyle.height = this.headHeight + 'px';

      setTimeout(()=>{
        this.headStyle.height = 'auto';
      },1000)
    },

    
  }))
})

/* Make bg change on mouse move */
window.addEventListener('mousemove', e => {
  let mouseY = e.clientY/window.innerHeight;
  let mouseX = e.clientX/window.innerWidth;
  document.body.style.background = `linear-gradient(
    90deg, 
    hsl(${45*mouseX+150},100%,82%) 0%, 
    hsl(${45*mouseY+150},100%,82%) 100%
  )`
})


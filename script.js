document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");

  // Example blog data
  const blogPosts = [
    {
      title: "The Truman Show Theory: Exploring the Illusion of Reality and the Science of the Observer",
      description: "Life often feels like it mirrors the movie The Truman Show, where the world around us is an elaborate stage, and we are the unwitting participants in a grand production. Intriguingly, ancient scripts and philosophies suggest we might be living in what could be described as a cosmic soap opera or simulation, guided and observed by higher beings. This idea ties closely to the concept of the Observer Effect in quantum physics, as demonstrated in the famous double-slit experiment. It raises profound questions about the nature of reality and our place within it. The theory proposes that rather than creating split universes with every decision—despite the tempting allure of the multiverse idea—our journey may be far more directed. Perhaps we are chosen or guided along specific paths by these observing entities, who operate on a plane of existence closer to true reality. In contrast, we are living in what might be called a historical simulation—a re-enactment of events, occurring within a diluted version of the ultimate reality. This perspective offers an explanation for phenomena such as aging. If we were constantly jumping between random parallel universes, it would be unlikely for our timelines to remain synchronized. For instance, if we hypothetically traversed a universe where time moved at a significantly faster or slower pace, the lack of continuity would disrupt our sense of self and aging. However, in this theory, we remain grounded in one overarching reality, albeit a flimsy and fabricated version—akin to living on the set of a historical drama while the true reality lies beyond the curtain. Aging, then, is less about entropy and more about the natural progression through the scripted narrative of this simulated world. When we reach the end of our journey, we metaphorically exit the stage, leaving behind the illusion to step backstage, where the true nature of existence—and perhaps a grand celebration—awaits us. It’s as though the culmination of our Truman Show experience is a return to a higher state of being, where the observers, the guides, and the party for our life’s performance are waiting.This theory challenges us to reconsider what we define as real. If life is a guided re-enactment of history, then our perception of free will, the passage of time, and even death might be illusions crafted for the purpose of the story. The question remains: who are the beings directing this production, and what lies beyond the veil of our Truman Show-like existence?.",
      image: "https://i.imgur.com/SlqdLqC.jpeg",
      link: "https://example.com/blog-post-1",
    },
    {
      title: "Navigating Worker Proposals with Galactic Hubs Co-Funding",
      description: "Enhance your project with Galactic Hubs Co-Funding for added benefits and support.",
      image: "https://i.imgur.com/PCjNgoV.jpeg",
      link: "https://example.com/blog-post-2",
    },
    {
      title: "Becoming a Union Worker",
      description: "Unlock support and shape Alien Worlds—become a Union Worker today!",
      image: "https://i.imgur.com/TkQM4Ji.jpeg",
      link: "https://example.com/blog-post-3",
    },
  ];

  // Dynamically create blog cards
  blogPosts.forEach((post) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";

    blogCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-card-content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <a href="${post.link}" target="_blank">Read More</a>
      </div>
    `;

    blogContainer.appendChild(blogCard);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");

  // Example blog data
  const blogPosts = [
    {
      title: "The Role of Arbiters in the Alien Worlds Worker Proposal System",
      description: "Learn how Arbiters enhance project continuity within the Alien Worlds Worker Proposal System.",
      image: "image1.jpg",
      link: "https://example.com/blog-post-1",
    },
    {
      title: "Navigating Worker Proposals with Galactic Hubs Co-Funding",
      description: "Enhance your project with Galactic Hubs Co-Funding for added benefits and support.",
      image: "image2.jpg",
      link: "https://example.com/blog-post-2",
    },
    {
      title: "Becoming a Union Worker",
      description: "Unlock support and shape Alien Worlds—become a Union Worker today!",
      image: "image3.jpg",
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

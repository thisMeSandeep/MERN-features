const books = [
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "Action",
    price: 9.99,
    description:
      "A hacker and a journalist uncover a web of secrets in this gripping action thriller.",
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    category: "Romance",
    price: 7.49,
    description:
      "A love story between a human girl and a vampire, set in the small town of Forks.",
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Romance",
    price: 9.99,
    description:
      "Two teenagers fall in love while dealing with their cancer diagnoses.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    price: 6.99,
    description:
      "A classic love story about Elizabeth Bennet and Mr. Darcy's evolving relationship.",
  },
  {
    title: "The Silent Man",
    author: "Alex Berenson",
    category: "Action",
    price: 12.49,
    description:
      "A CIA operative must stop a terrorist attack, navigating lies, espionage, and betrayal.",
  },
  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    category: "Romance",
    price: 8.99,
    description:
      "A couple’s enduring love is tested as they face life's obstacles in this moving romance.",
  },
  {
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    category: "Romance",
    price: 11.49,
    description:
      "A love story complicated by time travel, following Clare and Henry through different points in time.",
  },
  {
    title: "Red Storm Rising",
    author: "Tom Clancy",
    category: "Action",
    price: 13.99,
    description:
      "A novel of naval warfare in the Cold War, focusing on a Soviet attempt to trigger World War III.",
  },
  {
    title: "The Spy Who Came in from the Cold",
    author: "John le Carré",
    category: "Action",
    price: 8.99,
    description:
      "A Cold War espionage thriller about a British spy caught between two rival intelligence agencies.",
  },
  {
    title: "Mission Impossible",
    author: "Bruce Geller",
    category: "Action",
    price: 10.99,
    description:
      "A spy is tasked with preventing the release of classified information in this fast-paced action story.",
  },
  {
    title: "Outlander",
    author: "Diana Gabaldon",
    category: "Romance",
    price: 12.99,
    description:
      "A time-traveling romance where a World War II nurse is transported back to 18th century Scotland.",
  },
  {
    title: "Die Hard",
    author: "Roderick Thorp",
    category: "Action",
    price: 11.49,
    description:
      "A New York cop fights terrorists who take hostages in a Los Angeles skyscraper.",
  },
  {
    title: "The Bourne Identity",
    author: "Robert Ludlum",
    category: "Action",
    price: 12.99,
    description:
      "A thriller about Jason Bourne, a man with amnesia, who is trying to uncover his true identity.",
  },
  {
    title: "The Hunt for Red October",
    author: "Tom Clancy",
    category: "Action",
    price: 14.49,
    description:
      "A Cold War thriller about a Soviet submarine captain who defects to the United States.",
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    category: "Romance",
    price: 14.99,
    description:
      "A Russian aristocrat falls in love with a dashing officer in this tragic romance.",
  },
  {
    title: "The Girl Who Lived",
    author: "Christopher Greyson",
    category: "Action",
    price: 10.49,
    description:
      "A gripping psychological thriller about a woman trying to uncover the mystery of her family's murder.",
  },
  {
    title: "The Atlantis Gene",
    author: "A.G. Riddle",
    category: "Adventure",
    price: 15.99,
    description:
      "A fast-paced adventure uncovering the secret of the origins of humanity and its potential extinction.",
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    category: "Science",
    price: 13.99,
    description:
      "A stranded astronaut fights for survival on Mars in this gripping science fiction novel.",
  },
  {
    title: "Me Before You",
    author: "Jojo Moyes",
    category: "Romance",
    price: 10.99,
    description:
      "A poignant romance about a caregiver and her patient, a quadriplegic man.",
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    category: "Science",
    price: 16.99,
    description:
      "A young man from the lower classes infiltrates the ruling class in a dystopian society on Mars.",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    category: "Adventure",
    price: 11.99,
    description:
      "A father and son struggle to survive in a post-apocalyptic world.",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    category: "Adventure",
    price: 12.49,
    description:
      "A haunted hotel drives a family to madness in this horror-adventure novel.",
  },
  {
    title: "The Underground Railroad",
    author: "Colson Whitehead",
    category: "Adventure",
    price: 14.49,
    description:
      "A Pulitzer Prize-winning novel about a slave's journey to freedom on the Underground Railroad.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Technology",
    price: 13.49,
    description:
      "A book about how small habits can lead to major life changes, with a focus on efficiency and productivity.",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Science",
    price: 14.99,
    description:
      "A look at the history of humankind from the Stone Age to the modern age.",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    category: "Technology",
    price: 12.99,
    description:
      "A memoir of a woman raised in isolation, eventually gaining an education and exploring technology.",
  },
  {
    title: "Wired for Love",
    author: "Dr. Stan Tatkin",
    category: "Romance",
    price: 10.49,
    description:
      "A look at the role of technology and human behavior in romantic relationships.",
  },
  {
    title: "The Innovators",
    author: "Walter Isaacson",
    category: "Technology",
    price: 15.49,
    description:
      "A history of the people who created the computer and the Internet.",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    category: "Technology",
    price: 12.99,
    description:
      "A memoir of a woman raised in isolation, eventually gaining an education and exploring technology.",
  },
  {
    title: "The Big Short",
    author: "Michael Lewis",
    category: "Technology",
    price: 16.99,
    description:
      "An exploration of the 2008 financial crisis and the technological factors that led to it.",
  },
];

export default books;

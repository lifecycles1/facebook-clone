import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Sonny Sangha",
    src: "https://i.imgur.com/BmJZqCT.jpg",
    profile: "https://i.imgur.com/l0bjcRa.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://i.imgur.com/tkOqX9M.jpg",
    profile: "https://i.imgur.com/35knMp6.jpg",
  },
  {
    name: "Jeff Bezoz",
    src: "https://i.imgur.com/VIK2AbU.jpg",
    profile: "https://i.imgur.com/Hk3qWtk.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://i.imgur.com/wnh15gg.jpg",
    profile: "https://i.imgur.com/NrfNnCA.jpg",
  },
  {
    name: "Bill Gates",
    src: "https://i.imgur.com/wcdP7Ny.jpg",
    profile: "https://i.imgur.com/gqWB1Le.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;

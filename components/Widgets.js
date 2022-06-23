import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { src: "https://i.imgur.com/Hk3qWtk.jpg", name: "Jeff Bezoz" },
  { src: "https://i.imgur.com/35knMp6.jpg", name: "Elon Musk" },
  { src: "https://i.imgur.com/gqWB1Le.jpg", name: "Bill Gates" },
  { src: "https://i.imgur.com/NrfNnCA.jpg", name: "Mark Zuckerberg" },
  { src: "https://i.imgur.com/h50CtIV.jpg", name: "Harry Potter" },
  { src: "https://i.imgur.com/jBLjxpa.jpg", name: "The Queen" },
  { src: "https://i.imgur.com/EQ1Bc1u.jpg", name: "James Bond" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;

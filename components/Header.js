import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session, status } = useSession();

  return (
    //flex- fits in both headers so far (header left and header center) up-top in a straight line
    //otherwise the second header automatically positions underneath the first - header-left element
    //sticky- makes the header elements (or everything inside this div tag) stick to the top while scrolling
    //so we can see it sticking to the top of the screen even if we have scrolled further down
    //z-50- keeps the div tag on top of the stack so that it doesn't get lost underneath other content while
    //we are scrolling down. background color of white. padding of 2 sets a bit of space from the edges of the screen
    //because so far the logo below didn't have any style that would lift it off the left edge of the screen
    //it also applied a padding of top and bottom giving it a better natural look
    //lg:px-5 applies padding on the x-axis for larger devices. it currently shifted the left header by 5 towards the middle
    //lifting the logo even a bit more off the left edge of the screen
    //shadow-md gives a beautiful looking undershadow to the whole div that holds the headers (border bottom that has a shadow effect)
    <div className="flex sticky z-50 bg-white p-2 lg:px-5 shadow-md items-center">
      {/* Header Left */}
      {/* items-center centers all items on an x or y-axis (by default the flex of a web page is row so here it might center them on the x-axis) */}
      <div className="flex items-center">
        <Image
          src="https://i.imgur.com/9lHMLyB.png?1"
          width={40}
          height={40}
          layout="fixed"
        />
        {/* //flex fits all items right next to each other (on web page default is
          row). margin left pushes the div away from the previous div with the image.
          bg-gray-100 applies a bg-color to everything inside the div.
          padding-2 adds padding so that the container that holds the icon and the input extends from all sides
          and you can notice that with the help of the background color*/}
        <div className="flex ml-2 bg-gray-100 rounded-full p-2 items-center">
          {/* text-gray-600 only changes the color of the icon */}
          <SearchIcon className="h-6 text-gray-600" />
          <input
            //placeholder-gray-500 changes the color of the placeholder-label
            //without bg-transparent the text input sits white inside the already grayed out background container
            //and outline-none removes the outline that the text input has when you click on it for a full blend
            //the reason for flex-shrink is
            className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 items-center flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Header Center */}
      {/* all the items inside the center header will be flexed in a row and justified
      relative to the center. and as the screen grows the flex will be able to grow as well */}
      <div className="flex justify-center flex-grow">
        {/* displaying all the icons inside the div in a row by adding flex.
          applying space-x-6 which gives space on the x-axis of 6 in between all items
        the first space-x-6 will apply on smaller screens (mobile devices)
        the md:space-x-2 will apply on bigger screens */}
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Header Right */}
      {/* on mobile it wont have any spacing, as soon as it hits the breakpoint to become a small device it will apply spacing of 2 on the x-axis
      and i am justifying it to the end so that it sticks to the end */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profile pic */}
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="whitespace-nowrap font-semibold pr-3 hidden lg:inline-flex text-sm">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;

function HeaderIcon({ Icon, active }) {
  // passing down the active prop so I can express a text-color change of the icons becoming blue
  //how it works is - i add active as an attribute in header.js to one of the icons
  return (
    // cursor-pointer will change the cursor image when you hover over the icons
    //md:px-10 will act similar to md:space-x (md will again apply for bigger devices)
    //px-10 will add a padding on the x-axis to each icon (which will mean a padding from left and right)
    //and will technically spread them out of each other similar to space-x
    //sm:h-14 - on small devices it will add height to the elements inside the div tag
    //md:hover:bg-gray-100 applies bg color of gray-100 when you hover over an icon
    //passing it md:hover to apply only on medium devices because on smaller devices like phones
    //it doesnt make sense to have the hover option
    //items-center to center the background color and the icons
    //items-center does not work without adding flex
    //rounded-xl rounds the items that hold the icons to an xl amount
    //active:border-b-2 makes the bottom border active by creating an underline with the height of 2 when I click the icon
    //active:border-blue-500 makes the same blue
    //group tag inside the div makes all the icons be in a group so I can apply an extra style
    //group-hover:text-blue-500 when you hover over an icon it changes its color to blue

    <div
      className="cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100
     items-center flex rounded-xl active:border-b-2 active:border-blue-500 group"
    >
      {/* by default on the smallest group the h-5 height of 5 will apply 
      once the breakpoint for being "small" breaks then sm:h-7 will apply a height of 7 for the next size device
      mx-auto will have the items space themselves accordingly when resizing web window or when switching on devices with different sizes*/}
      <Icon
        className={`h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto text-gray-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;

const Accordian = (Maindata) => {
    const index = Maindata.index
    let data = Maindata.data;
  return (
    <>
      <div className="border-b border-slate-200 max-w-4xl mx-auto px-4">
        <button onClick={toggleAccordion(index)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span>{data?.title}</span>
          <span
            id={`icon-${index}`}
            className="text-slate-800 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </span>
        </button>
        <div
          id={`content-${index}`}
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with
            additional styles and components.
          </div>
        </div>
      </div>
    </>
  );
};

  function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
 
    // SVG for Minus icon
    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;
 
    // SVG for Plus icon
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;
 
    // Toggle the content's max-height for smooth opening and closing
    // if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    //   content.style.maxHeight = '0';
    //   icon.innerHTML = plusSVG;
    // } else {
    //   content.style.maxHeight = content.scrollHeight + 'px';
    //   icon.innerHTML = minusSVG;
    // }
  }

export default Accordian;

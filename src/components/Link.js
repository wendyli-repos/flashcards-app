import React from "react";

// Link component purpose is to prevent the page from a full page reload when an anchor is clicked
const Link = (props) => {
  const onClick = (event) => {
    // Hold cmd to open link in a new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", props.href);

    // Link componment to tell Route componment that URL is changed
    // Then add event handler in Route to deal with navEvent
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={props.href} className={props.className}>
      {props.children}
    </a>
  );
};

export default Link;

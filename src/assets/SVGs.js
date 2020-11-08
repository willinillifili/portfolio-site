function Blob() {
  return(
    <svg
         className="blob"
         width="276"
         height="222"
         viewBox="0 0 276 222"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M82.4652 157.052C98.3339 187.408 186.949 204.874 229.273 209.812C230.231 207.146 228.517 197.427 213.995 179.881C195.843 157.95 236.059 128.836 179.573 68.6874C123.087 8.53916 110.882 23.2801 53.6456 36.1828C-3.59097 49.0855 62.6294 119.108 82.4652 157.052Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="-12.5" y1="128" x2="289.5" y2="19" gradientUnits="userSpaceOnUse">
            <stop stop-color="#DDF0E1"/>
            <stop offset="1" stop-color="#F0DDDD"/>
          </linearGradient>
        </defs>
    </svg>
  );
}

function Rack(props) {
return (
  <svg width="226" height="186" viewBox="0 0 226 186" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="225" height="61" fill="#C4C4C4" stroke="#FAFAFA"/>
  <ellipse cx="29.7567" cy="18.2603" rx="8.66333" ry="8.91781" fill={props.blink}/>
  <ellipse cx="52.3567" cy="18.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
  <rect x="21.0933" y="33.9726" width="189.087" height="6.79452" fill="white"/>
  <ellipse cx="74.9567" cy="18.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
  <rect x="0.5" y="62.5" width="225" height="61" fill="#C4C4C4" stroke="#FDFDFB"/>
  <ellipse cx="29.7567" cy="80.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
  <ellipse cx="52.3567" cy="80.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
  <rect x="21.0933" y="95.9726" width="189.087" height="6.79452" fill="white"/>
  <ellipse cx="74.9567" cy="80.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
  <rect x="0.5" y="124.5" width="225" height="61" fill="#C4C4C4" stroke="#FAFAFA"/>
  <ellipse cx="29.7567" cy="142.26" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
  <ellipse cx="52.3567" cy="142.26" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
  <rect x="21.0933" y="157.973" width="189.087" height="6.79452" fill="white"/>
  <ellipse cx="74.9567" cy="142.26" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
  </svg>
);
}

function Code() {
  return(
    <svg width="202" height="159" viewBox="0 0 202 159" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="100" width="108" height="7" fill="#E2DDF0"/>
    <rect y="117" width="82" height="8" fill="#DDE9F0"/>
    <rect y="151" width="82" height="8" fill="#DDE9F0"/>
    <rect y="134" width="82" height="8" fill="#DDE9F0"/>
    <rect x="96" y="134" width="90" height="8" fill="#C4C4C4"/>
    <rect x="96" y="117" width="40" height="8" fill="#C4C4C4"/>
    <rect width="143" height="8" fill="#E2DDF0"/>
    <rect y="85" width="143" height="8" fill="#E2DDF0"/>
    <rect y="17" width="82" height="8" fill="#DDE9F0"/>
    <rect y="68" width="82" height="8" fill="#DDE9F0"/>
    <rect y="51" width="82" height="8" fill="#DDE9F0"/>
    <rect y="34" width="82" height="8" fill="#DDE9F0"/>
    <rect x="162" width="40" height="8" fill="#C4C4C4"/>
    <rect x="162" width="40" height="8" fill="#C4C4C4"/>
    <rect x="96" y="34" width="24" height="8" fill="#C4C4C4"/>
    <rect x="96" y="17" width="40" height="8" fill="#C4C4C4"/>
    </svg>
  );
}

function Abstract() {
  return (
    <svg className="abstract"
    width="437" height="219" viewBox="0 0 437 219" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.332031" y="136.675" width="363" height="6" transform="rotate(-22 0.332031 136.675)" fill="#C4C4C4"/>
    <rect x="48.1479" y="213.125" width="363" height="6" transform="rotate(-22 48.1479 213.125)" fill="#C4C4C4"/>
    <circle cx="339" cy="71" r="32" fill="#FFFAD0"/>
    <rect x="97.2751" y="149.612" width="363" height="6" transform="rotate(-22 97.2751 149.612)" fill="#C4C4C4"/>
    </svg>
  );
}

export { Blob, Rack, Code, Abstract };

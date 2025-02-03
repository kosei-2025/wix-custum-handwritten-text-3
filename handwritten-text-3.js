class HandwrittenText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <svg width="700" height="200" viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
          
          text {
            font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Roboto", sans-serif;
            font-size: 50px;
            fill: none;
            stroke: black;
            stroke-width: 2;
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw 3s forwards ease-in-out;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
          
          /* 文字ごとに遅延を追加 */
          text:nth-child(1) { animation-delay: 0.1s; }
          text:nth-child(2) { animation-delay: 0.2s; }
          text:nth-child(3) { animation-delay: 0.3s; }
          text:nth-child(4) { animation-delay: 0.4s; }
          text:nth-child(5) { animation-delay: 0.5s; }
          text:nth-child(6) { animation-delay: 0.6s; }
          text:nth-child(7) { animation-delay: 0.7s; }
          text:nth-child(8) { animation-delay: 0.8s; }
          text:nth-child(9) { animation-delay: 0.9s; }
          text:nth-child(10) { animation-delay: 1.0s; }
          text:nth-child(11) { animation-delay: 1.1s; }
          text:nth-child(12) { animation-delay: 1.2s; }
          text:nth-child(13) { animation-delay: 1.3s; }
          text:nth-child(14) { animation-delay: 1.4s; }
          text:nth-child(15) { animation-delay: 1.5s; }
          text:nth-child(16) { animation-delay: 1.6s; }
        </style>
        
        <text x="20" y="100">A</text>
        <text x="50" y="100">R</text>
        <text x="80" y="100">C</text>
        <text x="110" y="100">H</text>
        <text x="140" y="100">I</text>
        <text x="170" y="100">-</text>
        <text x="200" y="100">P</text>
        <text x="230" y="100">R</text>
        <text x="260" y="100">I</text>
        <text x="290" y="100">S</text>
        <text x="320" y="100">M</text>
        <text x="350" y="100">A</text>

        <text x="20" y="160">D</text>
        <text x="50" y="160">E</text>
        <text x="80" y="160">Z</text>
        <text x="110" y="160">I</text>
        <text x="140" y="160">G</text>
        <text x="170" y="160">N</text>

        <text x="250" y="160">W</text>
        <text x="290" y="160">O</text>
        <text x="330" y="160">R</text>
        <text x="370" y="160">K</text>
        <text x="410" y="160">S</text>
      </svg>
    `;
  }
}

customElements.define('handwritten-text-3', HandwrittenText);

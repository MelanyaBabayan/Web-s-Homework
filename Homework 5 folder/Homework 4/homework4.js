var text = prompt("text");
document.write("<input type='" + ((text === 'color') ? 'color' :(text === 'search') ? 'search':(text === 'range') ? 'range': 'url') + "'>");

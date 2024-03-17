// Create overlay div
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
overlay.style.zIndex = '9999';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.color = '#FFF';

// Create content container
const container = document.createElement('div');
container.style.maxWidth = '600px';
container.style.margin = '0 auto';
container.style.textAlign = 'center';
container.style.padding = '20px';
container.style.background = '#222';
container.style.borderRadius = '10px';
container.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';

// Add message to the container
const message = document.createElement('p');
message.textContent = "!!!!MODIFY THIS MESSAGE IN CONTENT.JS!!!!";
message.style.fontSize = '16px';
message.style.lineHeight = '1.5';

// Create "I Agree" button
const agreeButton = document.createElement('button');
agreeButton.textContent = 'I Agree';
agreeButton.style.marginTop = '20px';
agreeButton.style.padding = '10px 20px';
agreeButton.style.fontSize = '16px';
agreeButton.style.color = '#FFF';
agreeButton.style.background = '#007bff';
agreeButton.style.border = 'none';
agreeButton.style.borderRadius = '5px';
agreeButton.style.cursor = 'pointer';

// Add style for explosion effect
const style = document.createElement('style');
style.innerHTML = `
@keyframes explode {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(3);
  }
}
`;
document.head.appendChild(style);

// Add click event to "I Agree" button for explosion effect
agreeButton.onclick = function() {
    overlay.style.animation = 'explode 0.5s forwards';
    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 500); // Remove overlay after animation completes
};

// Append elements
container.appendChild(message);
container.appendChild(agreeButton);
overlay.appendChild(container);
document.body.appendChild(overlay);

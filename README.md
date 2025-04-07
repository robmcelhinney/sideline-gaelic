# Sideline Gaelic

**Sideline Gaelic** is a Progressive Web App (PWA) designed for Gaelic football teams to track in-game statistics in real time. Optimized for mobile use with a responsive, touch-friendly interface, it works offline with service worker caching and features trend visualization powered by Chart.js. Perfect for sideline use, Sideline Gaelic helps you record, analyze, and export stats quickly during the game.

## Features

-   **Real-time Stats Tracking:**  
    Record goals, points, 2-point scores, kickouts (won/lost for both teams), turnovers, and shooting metrics.

-   **Responsive & Touch-Friendly:**  
    Fluid layouts and large touch targets ensure seamless use on any mobile device.

-   **Progressive Web App (PWA):**  
    Offline support, installable via a web app manifest, and full-screen standalone mode.

-   **Trend Visualization:**  
    Integrated Chart.js displays trends in basic stats over time.

-   **Backup/Export Functionality:**  
    Download current stats as a JSON file for backup or further analysis.

-   **Service Worker Caching:**  
    Speeds up load times and ensures offline availability.

## Installation

Clone the repository:

```bash
git clone https://github.com/robmcelhinney/sideline-gaelic.git
```

Then open index.html in your browser. For a live demo, deploy the project to GitHub Pages.

## Usage

-   Recording Stats:
    Tap the buttons to increment stats. Use the Undo button to correct mistakes.

-   Advanced Stats:
    Toggle the Kickouts section to reveal detailed kickout stats.

-   Overview & Trends:
    Click the "Show More Stats" button to open a modal that displays an overview of all recorded stats, a responsive trend chart, and options to backup/export or reset stats.

-   Installable:
    On mobile, add the app to your home screen for a native-like experience.

## PWA Setup

The project includes:

-   A manifest.json file for app metadata, icons, and display configuration.

-   A service worker (sw.js) for caching assets and offline functionality.

## Screenshot

![screenshot of the site in use](img/demo0.png)

![screenshot of the overview section](img/demo1.png)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality, fix bugs, or improve performance.

## License

This project is licensed under the MIT License.

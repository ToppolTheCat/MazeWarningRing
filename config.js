// Configuration for each map
// width/height will be loaded dynamically from the image
// scaleX: horizontal scale multiplier (e.g., 1.1 for 110% width)
// scaleY: vertical scale multiplier (e.g., 0.9 for 90% height)
const mapConfig = [
    {
        name: 'Maze',
        file: 'Maze.png',
        scaleX: 1.0,    // Display at 100% of original width
        scaleY: 1.0,    // Display at 100% of original height
        radius: 305     // Circle radius in pixels
    },
    {
        name: 'Orc Cave',
        file: 'OrcCave.png',
        scaleX: 0.6,
        scaleY: 0.6,
        radius: 305 * 0.6
    },
    {
        name: 'Black Bat Cave',
        file: 'BlackBatCave.png',
        scaleX: 1.59,
        scaleY: 1.59,
        radius: 305
    },
    {
        name: 'Rogue Den',
        file: 'RogueDen.png',
        scaleX: 1.02,
        scaleY: 1.02,
        radius: 305
    },
    {
        name: 'The Forest',
        file: 'TheForest.png',
        scaleX: 1.25,
        scaleY: 1.25,
        radius: 305 * .47 * 1.25
    },
    {
        name: 'The Tomb (UNCALIBRATED)',
        file: 'TheTomb.png',
        scaleX: 1.0,
        scaleY: 1.0,
        radius: 305 * .5
    }
];

// Configuration for each map
// width/height will be loaded dynamically from the image
// scaleX: horizontal scale multiplier (e.g., 1.1 for 110% width)
// scaleY: vertical scale multiplier (e.g., 0.9 for 90% height)
// polarCoordsScale: how large to render the DetailedPolarCoords WHITE.png overlay
//   relative to this map's pixel scale (1.0 = natural image size)
const mapConfig = [
    {
        name: 'Maze',
        file: 'Maze.png',
        scaleX: 1.0,    // Display at 100% of original width
        scaleY: 1.0,    // Display at 100% of original height
        radius: 305,    // Circle radius in pixels
        polarCoordsScale: 1.015
    },
    {
        name: 'Orc Cave',
        file: 'OrcCave.png',
        scaleX: 0.6,
        scaleY: 0.6,
        radius: 305 * 0.6,
        polarCoordsScale: 0.591
    },
    {
        name: 'Black Bat Cave',
        file: 'BlackBatCave.png',
        scaleX: 1.59,
        scaleY: 1.59,
        radius: 305,
        polarCoordsScale: 1.02
    },
    {
        name: 'Rogue Den',
        file: 'RogueDen.png',
        scaleX: 1.02,
        scaleY: 1.02,
        radius: 305,
        polarCoordsScale: 1.02
    },
    {
        name: 'The Forest',
        file: 'TheForest.png',
        scaleX: 1.25,
        scaleY: 1.25,
        radius: 305 * .47 * 1.25,
        polarCoordsScale: 0.597
    },
    {
        name: 'The Tomb',
        file: 'TheTomb.png',
        scaleX: 1.0,
        scaleY: 1.0,
        radius: 305 * .85,
        polarCoordsScale: .865
    },
    {
        name: 'Grassy Field',
        file: 'GRASSY FIELD.png',
        scaleX: 0.5,
        scaleY: 0.5,
        radius: 305 * .985,
        polarCoordsScale: 1.4 * (0.5 / 0.7)
    },
    {
        name: 'Aberoth Desert',
        file: 'AberothDesert.png',
        scaleX: 1.6,
        scaleY: 1.6,
        radius: 305 * (35 / 96),
        polarCoordsScale: 0.235 * 1.6
    }
];

// Filename for the polar coords overlay image
const polarCoordsFile = 'DetailedPolarCoords WHITE.png';

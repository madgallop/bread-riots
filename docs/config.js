var config = {
    style: 'mapbox://styles/madgallop/clrmnixwt004j01nl2r52gj1g',
    accessToken: 'pk.eyJ1IjoibWFkZ2FsbG9wIiwiYSI6ImNtN3FoazRiaTBuc20ybW9kY2ZlbjFubDEifQ.VIQ-5iy3elzuoCU-68pjlg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Cultivating Change: ',
    subtitle: "Economic Distress, Unrest, and Unity in Lebanon since 1987",
    byline: 'Madeleine Gallop',
    introduction: "Lebanon has been facing a severe and enduring economic crisis since the late 1980s. These enduring economic troubles have reduced Lebanon’s ability to cultivate food and raised the prices of essential goods, resulting in food insecurity and a weakened agricultural system. While unrest has historically stemmed from sectarian affiliations, people protesting Lebanon’s economic conditions hail from each part of the country's divided geography. Lebanon must catch up to its population and overcome religious divisions to promote economic recovery and resilience in the agricultural sector to prevent further unrest.",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            type: 'fill',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            button: 'Click to show/hide primary source materials',
            location: {
                center: [35.233333, 33.879786],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'layer-name',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            type: 'fill',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            button: 'Click to show/hide primary source materials',
            location: {
                center: [35.233333, 33.879786],
                zoom:8,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            type: 'fill',
            alignment: 'left',
            hidden: true,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [35.233333, 33.879786],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            type: 'fill',
            alignment: 'fully',
            hidden: true,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [35.233333, 33.879786],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

/*!
 * Jmap v0.0.1
 * https://github.com/yugokimura
 *
 * Copyright (c) 2020 Yugo Kimura
 * Released under the MIT license
 *
 * Date: 2020-04-01T12:23:34.356Z
 */
;
(function($) {

    // Identifiers
    var identifiers = [];
    var identifier = 0;
    var conf = {
        prefectures: [
            { code: 1, name: "北海道", full: "", alphabet: "Hokkaido", area8: 1, area11: 1, cordinate: { x: 41, y: 1 }, size: { x: 14, y: 4 } },
            { code: 2, name: "青森", full: "県", alphabet: "Aomori", area8: 2, area11: 2, cordinate: { x: 41, y: 5 }, size: { x: 12, y: 2 } },
            { code: 3, name: "岩手", full: "県", alphabet: "Iwate", area8: 2, area11: 2, cordinate: { x: 47, y: 7 }, size: { x: 6, y: 2 } },
            { code: 4, name: "宮城", full: "県", alphabet: "Miyagi", area8: 2, area11: 2, cordinate: { x: 47, y: 9 }, size: { x: 6, y: 2 } },
            { code: 5, name: "秋田", full: "県", alphabet: "Akita", area8: 2, area11: 2, cordinate: { x: 41, y: 7 }, size: { x: 6, y: 2 } },
            { code: 6, name: "山形", full: "県", alphabet: "Yamagata", area8: 2, area11: 2, cordinate: { x: 41, y: 9 }, size: { x: 6, y: 2 } },
            { code: 7, name: "福島", full: "県", alphabet: "Fukushima", area8: 2, area11: 2, cordinate: { x: 45, y: 11 }, size: { x: 8, y: 2 } },
            { code: 8, name: "茨城", full: "県", alphabet: "Ibaraki", area8: 3, area11: 3, cordinate: { x: 49, y: 13 }, size: { x: 4, y: 3 } },
            { code: 9, name: "栃木", full: "県", alphabet: "Tochigi", area8: 3, area11: 3, cordinate: { x: 45, y: 13 }, size: { x: 4, y: 3 } },
            { code: 10, name: "群馬", full: "県", alphabet: "Gunma", area8: 3, area11: 3, cordinate: { x: 41, y: 13 }, size: { x: 4, y: 3 } },
            { code: 11, name: "埼玉", full: "県", alphabet: "Saitama", area8: 3, area11: 3, cordinate: { x: 41, y: 16 }, size: { x: 8, y: 2 } },
            { code: 12, name: "千葉", full: "県", alphabet: "Chiba", area8: 3, area11: 3, cordinate: { x: 49, y: 16 }, size: { x: 4, y: 5 } },
            { code: 13, name: "東京", full: "都", alphabet: "Tokyo", area8: 3, area11: 3, cordinate: { x: 41, y: 18 }, size: { x: 8, y: 2 } },
            { code: 14, name: "神奈川", full: "県", alphabet: "Kanagawa", area8: 3, area11: 3, cordinate: { x: 41, y: 20 }, size: { x: 8, y: 2 } },
            { code: 15, name: "新潟", full: "県", alphabet: "Niigata", area8: 4, area11: 4, cordinate: { x: 37, y: 11 }, size: { x: 8, y: 2 } },
            { code: 16, name: "富山", full: "県", alphabet: "Toyama", area8: 4, area11: 4, cordinate: { x: 33, y: 11 }, size: { x: 4, y: 2 } },
            { code: 17, name: "石川", full: "県", alphabet: "Ishikawa", area8: 4, area11: 4, cordinate: { x: 29, y: 11 }, size: { x: 4, y: 2 } },
            { code: 18, name: "福井", full: "県", alphabet: "Fukui", area8: 4, area11: 4, cordinate: { x: 29, y: 13 }, size: { x: 4, y: 2 } },
            { code: 19, name: "山梨", full: "県", alphabet: "Yamanashi", area8: 4, area11: 3, cordinate: { x: 37, y: 17 }, size: { x: 4, y: 2 } },
            { code: 20, name: "長野", full: "県", alphabet: "Nagano", area8: 4, area11: 3, cordinate: { x: 37, y: 13 }, size: { x: 4, y: 4 } },
            { code: 21, name: "岐阜", full: "県", alphabet: "Gifu", area8: 4, area11: 5, cordinate: { x: 33, y: 13 }, size: { x: 4, y: 4 } },
            { code: 22, name: "静岡", full: "県", alphabet: "Shizuoka", area8: 4, area11: 5, cordinate: { x: 37, y: 19 }, size: { x: 4, y: 3 } },
            { code: 23, name: "愛知", full: "県", alphabet: "Aichi", area8: 4, area11: 5, cordinate: { x: 33, y: 17 }, size: { x: 4, y: 3 } },
            { code: 24, name: "三重", full: "県", alphabet: "Mie", area8: 5, area11: 5, cordinate: { x: 29, y: 17 }, size: { x: 4, y: 2 } },
            { code: 25, name: "滋賀", full: "県", alphabet: "Shiga", area8: 5, area11: 6, cordinate: { x: 29, y: 15 }, size: { x: 4, y: 2 } },
            { code: 26, name: "京都", full: "府", alphabet: "Kyoto", area8: 5, area11: 6, cordinate: { x: 25, y: 12 }, size: { x: 4, y: 2 } },
            { code: 27, name: "大阪", full: "府", alphabet: "Osaka", area8: 5, area11: 6, cordinate: { x: 25, y: 14 }, size: { x: 4, y: 3 } },
            { code: 28, name: "兵庫", full: "県", alphabet: "Hyogo", area8: 5, area11: 6, cordinate: { x: 21, y: 15 }, size: { x: 4, y: 4 } },
            { code: 29, name: "奈良", full: "県", alphabet: "Nara", area8: 5, area11: 6, cordinate: { x: 25, y: 17 }, size: { x: 4, y: 2 } },
            { code: 30, name: "和歌山", full: "県", alphabet: "Wakayama", area8: 5, area11: 6, cordinate: { x: 25, y: 19 }, size: { x: 6, y: 2 } },
            { code: 31, name: "鳥取", full: "県", alphabet: "Tottori", area8: 6, area11: 7, cordinate: { x: 17, y: 15 }, size: { x: 4, y: 2 } },
            { code: 32, name: "島根", full: "県", alphabet: "Shimane", area8: 6, area11: 7, cordinate: { x: 13, y: 15 }, size: { x: 4, y: 2 } },
            { code: 33, name: "岡山", full: "県", alphabet: "Okayama", area8: 6, area11: 7, cordinate: { x: 17, y: 17 }, size: { x: 4, y: 2 } },
            { code: 34, name: "広島", full: "県", alphabet: "Hiroshima", area8: 6, area11: 7, cordinate: { x: 13, y: 17 }, size: { x: 4, y: 2 } },
            { code: 35, name: "山口", full: "県", alphabet: "Yamaguchi", area8: 6, area11: 9, cordinate: { x: 9, y: 15 }, size: { x: 4, y: 4 } },
            { code: 36, name: "徳島", full: "県", alphabet: "Tokushima", area8: 7, area11: 8, cordinate: { x: 19, y: 21 }, size: { x: 4, y: 2 } },
            { code: 37, name: "香川", full: "県", alphabet: "Kagawa", area8: 7, area11: 8, cordinate: { x: 19, y: 19 }, size: { x: 4, y: 2 } },
            { code: 38, name: "愛媛", full: "県", alphabet: "Ehime", area8: 7, area11: 8, cordinate: { x: 15, y: 19 }, size: { x: 4, y: 2 } },
            { code: 39, name: "高知", full: "県", alphabet: "Kochi", area8: 7, area11: 8, cordinate: { x: 15, y: 21 }, size: { x: 4, y: 2 } },
            { code: 40, name: "福岡", full: "県", alphabet: "Fukuoka", area8: 8, area11: 9, cordinate: { x: 5, y: 15 }, size: { x: 4, y: 2 } },
            { code: 41, name: "佐賀", full: "県", alphabet: "Saga", area8: 8, area11: 9, cordinate: { x: 1, y: 17 }, size: { x: 4, y: 2 } },
            { code: 42, name: "長崎", full: "県", alphabet: "Nagasaki", area8: 8, area11: 9, cordinate: { x: 1, y: 15 }, size: { x: 4, y: 2 } },
            { code: 43, name: "熊本", full: "県", alphabet: "Kumamoto", area8: 8, area11: 9, cordinate: { x: 1, y: 19 }, size: { x: 4, y: 2 } },
            { code: 44, name: "大分", full: "県", alphabet: "Oita", area8: 8, area11: 9, cordinate: { x: 5, y: 17 }, size: { x: 4, y: 2 } },
            { code: 45, name: "宮崎", full: "県", alphabet: "Miyazaki", area8: 8, area11: 10, cordinate: { x: 5, y: 19 }, size: { x: 4, y: 2 } },
            { code: 46, name: "鹿児島", full: "県", alphabet: "Kagoshima", area8: 8, area11: 10, cordinate: { x: 1, y: 21 }, size: { x: 8, y: 2 } },
            { code: 47, name: "沖縄", full: "県", alphabet: "Okinawa", area8: 8, area11: 11, cordinate: { x: 18, y: 11 }, size: { x: 4, y: 2 } }
        ],
        infobox: { cordinate: { x: 1, y: 1 }, size: { x: 37, y: 9 } },
        divider: { cordinate: { x: 18, y: 11 }, size: { x: 4, y: 2 } },
        area8: [
            { code: 1, name: "北海道" },
            { code: 2, name: "東北" },
            { code: 3, name: "関東" },
            { code: 4, name: "中部" },
            { code: 5, name: "関西" },
            { code: 6, name: "中国" },
            { code: 7, name: "四国" },
            { code: 8, name: "九州沖縄" }
        ],
        area11: [
            { code: 1, name: "北海道" },
            { code: 2, name: "東北" },
            { code: 3, name: "関東甲信" },
            { code: 4, name: "北陸" },
            { code: 5, name: "東海" },
            { code: 6, name: "近畿" },
            { code: 7, name: "中国" },
            { code: 8, name: "四国" },
            { code: 9, name: "九州北部" },
            { code: 10, name: "九州南部・奄美" },
            { code: 11, name: "沖縄" }
        ],
        heatmap: {
            HRed: ['#BFC7CE', '#FAE1E1', '#F19898', '#EE7F7F', '#EB6767', '#E55D5D', '#DF5353', '#D94848', '#D23D3D', '#CC3333'],
            HBlue: ['#FFFFFF', '#F7FBFF', '#DEEBF7', '#C6DBEF', '#9ECAE1', '#6BAED6', '#4292C6', '#2171B5', '#08519C', '#08306B'],
            OrRd: ["#BFC7CE", "#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
            PuBu: ["#BFC7CE", "#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
            BuPu: ["#BFC7CE", "#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
            Oranges: ["#BFC7CE", "#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
            BuGn: ["#BFC7CE", "#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
            YlOrBr: ["#BFC7CE", "#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
            YlGn: ["#BFC7CE", "#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
            Reds: ["#BFC7CE", "#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
            RdPu: ["#BFC7CE", "#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
            Greens: ["#BFC7CE", "#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
            YlGnBu: ["#BFC7CE", "#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
            Purples: ["#BFC7CE", "#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
            GnBu: ["#BFC7CE", "#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
            Greys: ["#BFC7CE", "#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
            YlOrRd: ["#BFC7CE", "#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
            PuRd: ["#BFC7CE", "#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
            Blues: ["#BFC7CE", "#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
            PuBuGn: ["#BFC7CE", "#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
            Spectral: ["#BFC7CE", "#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
            RdYlGn: ["#BFC7CE", "#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
            RdBu: ["#BFC7CE", "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
            PiYG: ["#BFC7CE", "#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
            PRGn: ["#BFC7CE", "#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
            RdYlBu: ["#BFC7CE", "#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
            BrBG: ["#BFC7CE", "#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
            RdGy: ["#BFC7CE", "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
            PuOr: ["#BFC7CE", "#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
            Set2: ["#BFC7CE", "#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
            Accent: ["#BFC7CE", "#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
            Set1: ["#BFC7CE", "#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
            Set3: ["#BFC7CE", "#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
            Dark2: ["#BFC7CE", "#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
            Paired: ["#BFC7CE", "#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
            Pastel2: ["#BFC7CE", "#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
            Pastel1: ["#BFC7CE", "#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"],
            Font: ["#000", "#000", "#000", "#000", "#000", "#fff", "#fff", "#fff", "#fff", "#fff"]

        }
    };

    $.fn.jmap = function(options) {

        if (options == 'update') {
            console.log(this)

            console.log(Math.ceil(47 / 6))
            console.log((100 / 6).toFixed(4))
            return this;
        }

        identifier++;
        var uniqClass = 'jmap-' + identifier;
        var stylers = [];
        var stylersPrimal = []; // for hover effect;

        // Default Options
        var params = $.extend({
            width: '100%',
            height: '100%',
            lineColor: 'transparent',
            lineWidth: 0,
            lineStyle: 'solid',
            backgroundColor: 'transparent',
            backgroundRadius: '0',
            backgroundPadding: '0',
            dividerWidth: '1px',
            dividerColor: '#bfbfbf',
            dividerStyle: 'solid',
            fontSize: '12px',
            fontColor: '#fff',
            textNowrap: false,
            showIslandDivider: true,
            showInfobox: false,
            showPrefectureName: true,
            containerClass: 'jmap-container',
            dividerClass: 'jmap-divider',
            infoboxClass: 'jmap-infobox',
            infoboxContent: '',
            infoboxBackgroundColor: 'transparent',
            prefectureNameType: 'short',
            prefectureClass: 'jmap-pref',
            prefectureRadius: '3px',
            prefectureBackgroundColor: '#333',
            prefectureBackgroundHoverColor: '#666',
            prefectureLineWidth: '1px',
            prefectureLineColor: '#fff',
            prefectureLineHoverColor: '#aa1a00',
            prefectureLineStyle: 'solid',
            heatmap: null, // Deprecated
            showHeatmap: false,
            showHeatlabel: false,
            heatmapType: 'HRed',
            heatmapColors: [],
            heatmapFontColors: [],
            viewType: 'map',
            gridNumber: 6,
            areas: [],
            onSelect: function(e, data) {},
            onHover: function(e, data) {},
            onMouseout: function(e, data) {},
            onLoad: function(e, data) {},
        }, options);

        var unit = '/px|vw|vh|rem|%|em|ex|ch|vmin|vmax|cm|mm|in|pt|pc/';
        params.width = (String(params.width).match(unit)) ? params.width : parseInt(params.width) + 'px';
        params.height = (String(params.height).match(unit)) ? params.height : parseInt(params.height) + 'px';
        params.lineWidth = (String(params.lineWidth).match(unit)) ? params.lineWidth : parseInt(params.lineWidth) + 'px';
        params.backgroundRadius = (String(params.backgroundRadius).match(unit)) ? params.backgroundRadius : parseInt(params.backgroundRadius) + 'px';
        params.backgroundPadding = (String(params.backgroundPadding).match(unit)) ? params.backgroundPadding : parseInt(params.backgroundPadding) + 'px';
        params.dividerWidth = (String(params.dividerWidth).match(unit)) ? params.dividerWidth : parseInt(params.dividerWidth) + 'px';
        params.fontSize = (String(params.fontSize).match(unit)) ? params.fontSize : parseInt(params.fontSize) + 'px';
        params.prefectureRadius = (String(params.prefectureRadius).match(unit)) ? params.prefectureRadius : parseInt(params.prefectureRadius) + 'px';
        params.prefectureLineWidth = (String(params.prefectureLineWidth).match(unit)) ? params.prefectureLineWidth : parseInt(params.prefectureLineWidth) + 'px';

        if (params.heatmapColors.length <= 0)
            params.heatmapColors = conf.heatmap[params.heatmapType];

        if (params.heatmapFontColors.length <= 0)
            params.heatmapFontColors = conf.heatmap['Font'];

        // // Deprecated
        if (params.heatmap)
            params.showHeatmap = heatmap;

        if (params.showHeatmap && params.showHeatlabel)
            params.showInfobox = true;

        // Jmap container
        var css = {
            'display': 'grid; display:-ms-grid',
            'position': 'relative',
            'width': params.width,
            'height': params.height,
            'grid-template-rows': 'repeat(22%c4.545%)',
            'grid-template-columns': 'repeat(54%c1.851%)',
            '-ms-grid-rows': Array(22 + 1).join('4.545% '),
            '-ms-grid-columns': Array(54 + 1).join('1.851% '),
            'background-color': params.backgroundColor,
            'border-width': params.lineWidth,
            'border-color': params.lineColor,
            'border-style': params.lineStyle,
            'border-radius': params.backgroundRadius,
            'padding': params.backgroundPadding
        };

        if (params.viewType == 'grid') {
            // var gcss = {
            //     'grid-template-rows': 'repeat(%d1, %d2)',
            //     'grid-template-columns': 'repeat(%d1, %d2)',
            //     '-ms-grid-rows': Array(22 + 1).join('%d1 '),
            //     '-ms-grid-columns': Array(54 + 1).join('%d1 ')
            // }
            // css = $.extend(css, gcss);
        }

        var selector = '.%s1[jmap-uniq="%s2"] '.replace('%s1', params.containerClass).replace('%s2', uniqClass + "-container");
        var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';').replace(/%c/g, ',')
        stylers.push(selector + style);

        var jmapDiv = $('<div>')
            .attr('jmap-uniq', uniqClass + "-container")
            .addClass(params.containerClass);


        // Island divider 
        if (params.showIslandDivider) {

            var divider = conf.divider;
            var css = {
                'grid-column': '%d1 / %d2'.replace('%d1', divider.cordinate.x).replace('%d2', divider.cordinate.x + divider.size.x),
                '-ms-grid-column': '%d1'.replace('%d1', divider.cordinate.x),
                '-ms-grid-column-span': 'sx'.replace('sx', divider.size.x),
                'grid-row': '%d1 / %d2'.replace('%d1', divider.cordinate.y).replace('%d2', divider.cordinate.y + divider.size.y),
                '-ms-grid-row': '%d1'.replace('%d1', divider.cordinate.y),
                '-ms-grid-row-span': '%d1'.replace('%d1', divider.size.y),
                'transform': 'scale(1.5)',
                'border-right-width': params.dividerWidth,
                'border-right-color': params.dividerColor,
                'border-right-style': params.dividerStyle,
                'border-bottom-width': params.dividerWidth,
                'border-bottom-color': params.dividerColor,
                'border-bottom-style': params.dividerStyle,
            };

            var selector = '.%s1[jmap-uniq="%s2"] '.replace('%s1', params.dividerClass).replace('%s2', uniqClass + "-divider");
            var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
            stylers.push(selector + style);

            var dividerDiv = $('<div>')
                .attr('jmap-uniq', uniqClass + "-divider")
                .addClass(params.dividerClass)
                .appendTo(jmapDiv);
        }

        // Infobox 
        if (params.showInfobox) {

            var infobox = conf.infobox;

            var css = {
                'grid-column': '%d1 / %d2'.replace('%d1', infobox.cordinate.x).replace('%d2', infobox.cordinate.x + infobox.size.x),
                '-ms-grid-column': '%d1'.replace('%d1', infobox.cordinate.x),
                '-ms-grid-column-span': 'sx'.replace('sx', infobox.size.x),
                'grid-row': '%d1 / %d2'.replace('%d1', infobox.cordinate.y).replace('%d2', infobox.cordinate.y + infobox.size.y),
                '-ms-grid-row': '%d1'.replace('%d1', infobox.cordinate.y),
                '-ms-grid-row-span': '%d1'.replace('%d1', infobox.size.y),
                'background-color': params.infoboxBackgroundColor
                    // 'border-width': params.lineWidth,
                    // 'border-color': params.lineColor,
                    // 'border-style': params.lineStyle
            };
            var selector = '.%s1[jmap-uniq="%s2"] '.replace('%s1', params.infoboxClass).replace('%s2', uniqClass + "-infobox");
            var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
            stylers.push(selector + style);

            var infoboxDiv = $(this).find('.jmap-infobox');
            if (infoboxDiv.length > 0) {
                console.log('YES');
                infoboxDiv.attr('jmap-uniq', uniqClass + "-infobox")
                    .addClass(params.infoboxClass)
                    .appendTo(jmapDiv);
            } else {
                infoboxDiv = $('<div>')
                    .attr('jmap-uniq', uniqClass + "-infobox")
                    .addClass(params.infoboxClass)
                    .html(params.infoboxContent)
                    .appendTo(jmapDiv);
            }

            if (params.showHeatmap && params.showHeatlabel) {

                var css = {
                    'padding': 0,
                    'margin': 0,
                    'max-width': '250px'
                };
                var selector = '.%s1[jmap-uniq="%s2"]'.replace('%s1', 'jmap-heatlabel').replace('%s2', uniqClass + "-heatlabel");
                var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
                stylers.push(selector + style);

                var css = {
                    'border-radius': '3px 0 0 3px'
                };
                var selector = '.%s1[jmap-uniq="%s2"] li:first-child '.replace('%s1', 'jmap-heatlabel').replace('%s2', uniqClass + "-heatlabel");
                var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
                stylers.push(selector + style);

                var css = {
                    'border-radius': '0 3px 3px 0'
                };
                var selector = '.%s1[jmap-uniq="%s2"] li:last-child '.replace('%s1', 'jmap-heatlabel').replace('%s2', uniqClass + "-heatlabel");
                var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
                stylers.push(selector + style);

                var heatmapUl = $('<ul>').addClass('jmap-heatlabel').attr('jmap-uniq', uniqClass + "-heatlabel")
                for (var index = 0, l = params.heatmapColors.length; index < l; index++) {
                    $('<li>').css({
                        'display': 'inline-block',
                        'width': '10%',
                        'height': '30px',
                        'background-color': params.heatmapColors[index],
                    }).appendTo(heatmapUl);
                }
                infoboxDiv.append(heatmapUl)

            }
        }

        // Prefecture Common
        var css = {
            'position': 'relative',
            'display': 'flex',
            'cursor': 'pointer',
            'border-width': params.prefectureLineWidth,
            'border-color': params.prefectureLineColor,
            'border-style': params.prefectureLineStyle,
            'font-size': params.fontSize,
            'color': params.fontColor,
            'border-radius': params.prefectureRadius,
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'text-align': 'center',
            'box-sizing': 'border-box',
            'transition': 'all 0.1s',
            'z-index': 1,
            'overflow': 'hidden',
            'white-space': (params.textNowrap) ? 'nowrap' : 'normal'
        };
        var selector = '.%s1[jmap-uniq="%s2"] '.replace('%s1', params.prefectureClass).replace('%s2', uniqClass + "-pref");
        var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
        stylers.push(selector + style);

        // Prefecture Common Hover
        var css = {
            'background-color': params.prefectureBackgroundHoverColor,
            'border-width': params.prefectureLineWidth,
            'border-color': params.prefectureLineHoverColor,
            'border-style': params.prefectureLineStyle,
            'box-shadow': '0 0 5px #333',
            'transform': 'scale(1.01)',
            'z-index': 2
        };
        var selector = '.%s1[jmap-uniq="%s2"]:hover '.replace('%s1', params.prefectureClass).replace('%s2', uniqClass + "-pref");
        var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
        stylersPrimal.push(selector + style);

        // Loop prefectures
        var heatmapMax = 0;
        if (params.showHeatmap) {
            for (var index in params.areas) {
                var area = params.areas[index];
                if (!area.number)
                    continue;

                if (area.number > heatmapMax)
                    heatmapMax = area.number;
            }
        }

        $.each(conf.prefectures, function(index, pref) {
            var pref = pref;
            var option = params.areas.filter(function(_pref) {
                return pref.code == _pref.code;
            })[0] || {};

            for (var index in conf.area8) {
                if (conf.area8[index].code == pref.area8) {
                    pref.area8 = conf.area8[index];
                    break;
                }
            }

            for (var index in conf.area11) {
                if (conf.area11[index].code == pref.area11) {
                    pref.area11 = conf.area11[index];
                    break;
                }
            }

            // Heatmap settings
            if (params.showHeatmap) {
                if (option.number) {
                    // var index = Math.ceil(option.number / heatmapTotal * 10);
                    var index = Math.round(option.number / heatmapMax * 10);
                    index = (index >= 10) ? 9 : index;

                    option.color = params.heatmapColors[index];
                    option.fontColor = params.heatmapFontColors[index];

                    if (option.hoverColor)
                        delete option.hoverColor;

                }
            }

            // Prefecture Indivisual
            var css = {
                'grid-column': '%d1 / %d2'.replace('%d1', pref.cordinate.x).replace('%d2', pref.cordinate.x + pref.size.x),
                '-ms-grid-column': '%d1'.replace('%d1', pref.cordinate.x),
                '-ms-grid-column-span': 'sx'.replace('sx', pref.size.x),
                'grid-row': '%d1 / %d2'.replace('%d1', pref.cordinate.y).replace('%d2', pref.cordinate.y + pref.size.y),
                '-ms-grid-row': '%d1'.replace('%d1', pref.cordinate.y),
                '-ms-grid-row-span': '%d1'.replace('%d1', pref.size.y),
                'background-color': (option.color) ? option.color : params.prefectureBackgroundColor,
            };

            if (option.fontColor)
                css['color'] = option.fontColor;



            var selector = '.%s1[jmap-uniq="%s2"][jmap-pref="%s3"] '.replace('%s1', params.prefectureClass).replace('%s2', uniqClass + "-pref").replace('%s3', pref.code);
            var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
            stylers.push(selector + style);

            // Prefecture Indivisual Hover
            if (option.hoverColor) {

                var css = {
                    'background-color': option.hoverColor
                };
                var selector = '.%s1[jmap-uniq="%s2"][jmap-pref="%s3"]:hover '.replace('%s1', params.prefectureClass).replace('%s2', uniqClass + "-pref").replace('%s3', pref.code);
                var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
                stylersPrimal.push(selector + style);

            } else if (params.showHeatmap && option.number) {

                var css = {
                    'background-color': option.color,
                    'opacity': '0.8'
                };
                var selector = '.%s1[jmap-uniq="%s2"][jmap-pref="%s3"]:hover '.replace('%s1', params.prefectureClass).replace('%s2', uniqClass + "-pref").replace('%s3', pref.code);
                var style = JSON.stringify(css).replace(/"/g, '').replace(/,/g, ';');
                stylersPrimal.push(selector + style);

            }

            // Prefecture
            var prefDiv = $('<div>')
                .data('data', pref)
                .addClass(params.prefectureClass)
                .attr('jmap-uniq', uniqClass + "-pref")
                .attr('jmap-pref', pref.code)
                .on('click', function(e) {
                    return params.onSelect.call(this, e, $(this).data('data'));
                }).on('mouseover', function(e) {
                    return params.onHover.call(this, e, $(this).data('data'));
                }).on('mouseout', function(e) {
                    return params.onMouseout.call(this, e, $(this).data('data'));
                })

            // Prefecture Inner
            if (params.showPrefectureName && !option.name) {
                switch (params.prefectureNameType) {
                    case 'full':
                        prefDiv.html(pref.name + pref.full);
                        break;
                    case 'alphabet':
                        prefDiv.html(pref.alphabet);
                        break;
                    case 'short':
                    default:
                        prefDiv.html(pref.name);
                }
            } else if (params.showPrefectureName && option.name) {
                prefDiv.html(option.name);
            }

            jmapDiv.append(prefDiv);
            setTimeout(function() {
                params.onLoad.call(prefDiv, null, pref)
            });
        });

        var jmapStyle = $('<style>').attr('type', 'text/css').attr('jmap-css', uniqClass).html(stylers.join("\n") + stylersPrimal.join("\n"));
        $(this).empty().append(jmapStyle).append(jmapDiv);
        return this;
    };
})(jQuery);
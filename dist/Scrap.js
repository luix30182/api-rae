"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio = require("cheerio");
var request = require("request");
request('https://dle.rae.es/perro', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var resultados = $('.j', '#resultados');
        console.log(resultados.text());
    }
});

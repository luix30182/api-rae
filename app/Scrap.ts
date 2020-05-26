import { response } from "express"

const cheerio = require("cheerio")
const request = require("request")

request('https://dle.rae.es/perro', (error: any, response: { statusCode: number; }, html: any) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const resultados = $('.j','#resultados')

        console.log(resultados.text());
    }



});

// pages/api/data.js
import axios from 'axios';
const APIKEY = process.env.APIKEY;
const APIKEY_TRANSLATE = process.env.APIKEY_TRANSLATE;

async function translate(text) {
    const uri = `https://api.zahwazein.xyz/information/translate/id?query=${text}&apikey=${APIKEY_TRANSLATE}`;
    const data = await fetch(uri).then(res => res.json());
    return data.result;
}

export default async (req, res) => {
    if (req.method === 'POST') {
        const keyword = req.body.cari;
        const uri = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${keyword.toLowerCase()}&aqi=no`;
        const dataCuaca = await fetch(uri)
        const result = await dataCuaca.json();
        let ress = {
            type: "API",
            status: false,
            location: {
                kota : 'Tidak Ditemukan',
                provinsi: 'Tidak Ditemukan',
                negara: 'Tidak Ditemukan',
            },
            last_update: 'Tidak Ditemukan',
            suhu: 'Tidak Ditemukan',
            kondisi: 'Tidak Ditemukan',
            gambar: 'Tidak Ditemukan',
            angin: 'Tidak Ditemukan',
        }
        if (dataCuaca.status === 200) {
            console.log(result);
            ress.status = true;
            ress.location.kota = result.location.name;
            ress.location.provinsi = result.location.region;
            ress.location.negara = result.location.country;
            ress.last_update = result.current.last_updated.split(' ').map(el => el.split('-').reverse().join('/')).reverse().join(' ');
            ress.suhu = result.current.temp_c;
            ress.kondisi = result.current.condition.text
            ress.gambar = process.env.IMAGE_URL + result.current.condition.icon.split('/').slice(5).join('/');
            ress.angin = result.current.wind_kph;
        }
        res.status(200).json(ress);
    } else {
        // Metode bukan POST, kirimkan pesan error
        res.status(405).json({ message: 'Method not allowed' })
    }
}



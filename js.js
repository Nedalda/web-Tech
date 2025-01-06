// http://api.aladhan.com/v1/calendarByCity?country=SA&city=Makkah al Mukrarramah

let params =
    [
        {
            country: "SA", // Saudi-Arabien
            city: "Makkah al Mukrarramah", // Stadt
        },
        {
            country: "SA", // Saudi-Arabien
            city: "Makkah al Mukrarramah", // Stadt
        },
        {
            country: "SA", // Saudi-Arabien
            city: "Makkah al Mukrarramah", // Stadt
        }
    ]
getRes()
function getRes() {
    let param = {
        city: "Makkah al Mukrarramah", // Stadt
        country: "SA" // Saudi-Arabien
    };

    axios.get('http://api.aladhan.com/v1/calendarByCity', { params :param }) //
        .then(function (res) {
            let data = res.data.data ;
          console.log(data);
            let item = getTodayReadableDate(data);
          let times =item.timings
            console.log("Sparte Funktion  " + times)
            let today = new Date();
             let readableDate = `${today.getDate().toString().padStart(2, '0')} ${today.toLocaleString('en-US', { month: 'short' })} ${today.getFullYear()}`;


           let todry=  data.find(item =>
            {
                if (item.date.readable==readableDate)
                    return item.date.readable
            });
           console.log(todry.date.readable)

            //let resp = res.data.data;
            time(".body.Fajr" ,times.Fajr)
            time(".body.Sunrise" ,times.Sunrise)
            time(".body.Dhuhr" ,times.Dhuhr)
            time(".body.Asr" ,times.Asr)
            time(".body.Sunset" ,times.Sunset)
            time(".body.Maghrib" ,times.Maghrib)
            time(".body.Isha" ,times.Isha)
            time(".body.Imsak" ,times.Imsak)

        })
        .catch(function (error) {
            console.log("Response data:", error.response.data);
            console.log("Response status:", error.response.status);
        });
}
function time(classname ,resTime)
{
    document.querySelector(classname).innerText = resTime;

}


// to get Time Today
function getTodayReadableDate(data) {
    let today = new Date();
    //console.log(today)

    // Tag mit führender Null (z. B. "01")
    let day = today.getDate().toString().padStart(2, '0');
    //console.log(day)

    // Kurzform des Monats (z. B. "Jan")
    let month = today.toLocaleString('en-US', { month: 'short' });
    //console.log(month)
    // Jahr (z. B. "2025")
    let year = today.getFullYear();

    //console.log(year)
    let readableDate = `${day} ${month} ${year}` ;
    //console.log("befor item "+ readableDate)
    for (let item of data)
    {
      //  console.log("In loop, date: " + item.date.readable);
        if (item.date.readable === readableDate) {
        //    console.log("Found match: " + item.date.readable);
            return item; // Gib das gefundene Objekt zurück
        }

    }

}


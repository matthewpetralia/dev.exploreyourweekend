/*eslint-env es6*/
/*global require*/

document.getElementsByTagName("head")[0].innerHTML += `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&family=Hubballi&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">`;

function writeHTML() {
    let B1;
    let defaultMain = "Bu_Hi_Oc;A Walk;1.2km one-way,30mins,Lookouts,Coastal;A Fantastic Walk links two places whilst offering stunning coastal scenery.;A Fantastic National Park";

    switch (document.getElementsByTagName("title")[0].innerHTML) {
        case "Springbrook National Park":
            B1 = [
            'Sp_Hi_Purl;Purling Brook Falls;4km,2hrs,Hike,Waterfall,Rainforest;Purling Brook Falls is a stunning walk winding down the cliffside into an equally stunning waterfall.;Springbrook National Park',
            'Sp_Hi_Warrie;Warrie Circuit;17km,7hrs,Hike,Waterfall,Rainforest,Lookout;Warrie Circuit descends deep into some of the best rainforest scenery, waterfalls and lookouts Springbrook has to offer.;Springbrook National Park',
            'SP_Lo_Best;Best of All Lookout;600m,30mins,Rainforest;Best of All Lookout truly lives up to its name, offering stunning views into the Northern NSW hinterland and coastline.;Springbrook National Park',
            'SP_Lo_Wunburra;Wunburra Lookout;50m,1min,Lookout,Rainforest;Wunburra Lookout is the first lookout on the Springbrook plateau and offers stunning views over the National Park out to the Gold Coast&#39s iconic skyline.;Springbrook National Park',
            'SP_Dr_Lyre;Lyrebird Ridge Rd;4km,6mins,Drive,Rainforest,Lookout;Lyrebird Ridge Rd is a quiet but stunning narrow road that winds beneath the treetops on the way down from Best of All Lookout.;Springbrook National Park',
            'SP_Dr_Adv;Springbrook via Advancetown;26km,25mins,Drive,Rainforest,Lookout;Taking a long and gradual approach, this road winds around Hinze Dam at 80km/h. The high speed limit eventually gives way to a slower, steeper windier section until it reaches the Springbrook plateau.;Springbrook National Park',
            'Sp_Dr_Mudg;Springbrook via Mudgeeraba;20km,25mins,Drive,Waterfall,Rainforest;Beginning off the motorway in Mudgeeraba, this road winds steeply up the mountain with sharp turns, one way sections and beautiful scenery.;Springbrook National Park',
            'SP_Dr_Murw;Springbrook via Murwillumbah;53km,1hr,Drive,Rainforest,Lookout;Taking in some spectacular scenery in the hinterland of Northern NSW, this winding road shows Springbrook from a unique yet beautiful perspective from the other side of the rim volcano.;Springbrook National Park'
        ];
            break;
        case "Burleigh Head National Park":
            B1 = [
            'Bu_Hi_Oc;Oceanview Walk;1.2km one-way,30mins,Lookouts,Coastal;Oceanview Walk links Burleigh Head and Tallebudgera Creek whilst offering stunning coastal scenery.;Burleigh Head National Park',
            'Bu_Hi_Rf;Rainforest Circuit;2.3km,45min,Lookout,Coastal,Rainforest;Rainforest Circuit winds through the coastal rainforest of Burleigh Head, and links up with Oceanview Walk.;Burleigh Head National Park',
            'Bu_Lo_Tum;Tumgun Lookout;600m,15min,Lookout,Coastal,Rainforest;Tumgun Lookout, found on the Rainforest Walk, provides stunning ocean views from Talebudgera Creek to Coolangatta.;Burleigh Head National Park',
            'Bu_Lo_Jeb;Jebbribillum Lookout;250m,10min,Lookout,Coastal,Rainforest;Jebbribillum Lookout, found on the Rainforest Walk, provides views north from Miami Beach to Surfers Paradise.;Burleigh Head National Park',
//            'Bu_Be_Ech;Echo Beach;100m walk,Secluded,Beach,Creek,Sheltered;Echo Beach is nestled in the shallow shores of Tallebudger Creek, accessed from Rainforest Walk.;Burleigh Head National Park'
        ];
            break;
        case "Best Gold Coast Beaches":
            B1 = [
                defaultMain
                ];
            break;
        case "Broken Head Nature Reserve":
            B1 = [
            ";Broken Head Beach;1km+,Patrolled,Beach,Rainforest,Headland;Broken Head Beach is a quiet beach found at the Northern tip of the reserve.;Broken Head Nature Reserve",
            "BrHe_Be_WhBe;Whites Beach;300m,10min,Beach,Rainforest,Headland,Secluded;Whites Beach is found at the end of the nature reserve and offers a secluded beach between rocks and sea caves following a steep descent from the carpark.;Broken Head Nature Reserve"
        ];
            break;
        case "Best Northern NSW Beaches":
            B1 = [
                defaultMain
                ];
            break;
        case 0:
            B1 = 0;
    }


    let text = " ";

    for (e = 0; e < B1.length; e++) {


        const A1 = B1[e].split(";");
        let ref = "A";



        document.querySelector(".Main").innerHTML +=
            '<div id="' + (A1[1].replace(/\s+/g, '')) + '"> <img src = "Images//' + A1[0] + '.webp"><div class="InfoPanel"><h4>' + A1[4] + '</h4><h3>' + A1[1] + '</h3><div class="tagContent">' + A1[2] + '</div><p>' + A1[3] + '</p></div><a class="bwd" href="#"></a><a class="fwd" href="#' + ref + (e + 2) + '"></a></div>';

        text += document.querySelector("#myLinks .tags").innerHTML = "<a href='#" + (A1[1].replace(/\s+/g, '')) + "' onclick='myFunction()'>" + A1[1] + "</a>";


    }

    document.querySelector(".Nav .tags").innerHTML = '<a href="index.html"><span class="material-icons-outlined">home</span></a>' + text;

    //    document.getElementsByTagName("title")[0].innerHTML = document.querySelector(".Main h4").innerHTML;


    for (let j = 0; j < (document.querySelectorAll(".Main > div")).length; j++) {
        var allTheData =
            document.getElementsByClassName('tagContent')[j].textContent.split(',');
        var separateList = '<div class="tags">';
        allTheData.forEach(function (value) {
            separateList += '<div>' + value + '</div>';
        });
        separateList += '</div>';
        document.getElementsByClassName("tagContent")[j].innerHTML = separateList;

        (document.getElementsByClassName('fwd')[j]).href = "#" + (document.querySelectorAll(".Main > div")[j + 1]).id;

        (document.getElementsByClassName('bwd')[j + 1]).href = "#" + (document.querySelectorAll(".Main > div")[j]).id;
    }
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.querySelector(".Nav > a").style.borderRadius = "3vh 3vh 0 0";
        document.getElementById("expand").innerHTML = "expand_less";
    } else {
        x.style.display = "block";
        document.querySelector(".Nav > a").style.borderRadius = "0px";
        document.getElementById("expand").innerHTML = "expand_more";
    }
}

function arrows() {
    let nextLast = document.querySelector(".Main").lastElementChild;
    nextLast.querySelector(".fwd").href = "#" + (document.querySelectorAll(".Main > div")[0]).id;


    document.querySelectorAll(".Main > div .bwd")[0].href = "#" + document.querySelectorAll(".Main > div")[(document.querySelectorAll(".Main > div").length) - 1].id;
}

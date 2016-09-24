var options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
            40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
            60, 61, 62, 63, 64, 65, 66, 67, 68, 68, 69, 70, 71, 72];
var birdTypes = ['Red-throated loon', 'Pacific loon', 'Common loon', 'Pied-Billed Grebe', 'Horned Grebe', 'Eared Grebe', 'Western Grebe', 'Clarke\'s Grebe', 'American White Pelican', 'Brown Pelican', 'Brandt\'s Cormorant', 'Double-crested Cormorant', 'Palagic Cormorant', 'American Bittern', 'Great Blue heron', 'Great Egret', 'Snowy Egret', 'Cattle Egret', 'Green Heron', 'Black-crowned Night Heron', 'Turkey Vulture', 'Canadian Goose', 'Brandt', 'Wood Duck', 'Gadwall', 'American Wigeon', 'Mallard Duck', 'Blue-winged Teal', 'Cinnamon Teal', 'Northern Shoveler', 'Northern Pintail', 'Green-winged Teal', 'Canvasback', 'Red-necked Duck', 'Greater Scaup', "Lesser Scaup", 'Surf Scoter', 'White-winged Scoter', 'Bufflehead', 'Common Goldeneye', 'Hooded Merganser', 'Common Merganser', 'Red-breasted merganser', 'Ruddy Duck', 'Osprey', 'Whit-tailed Kite', 'Northern Harrier', 'Sharp-shinned hawk', 'Red-tailed Hawk', 'Ferruginous Hawk', 'Golden Eagle', 'American Kestrel', 'Merlin', 'Peregrine Falcon', 'Wild Turkey', 'California Quail', 'Virginia Rail', 'Sora',
    'Common Gallinue', 'American Coot', 'Black-bellied Plover', 'Snowy Plover', 'Semipalmated Plover', 'Killdeer', 'Black Oystercatcher', 'Black-necked Stilt', 'American Avocet', 'Greater Yellowlegs', 'Lesser Yellowlegs', 'Willet', 'Wandering Tattler', 'Spotted Sandpiper', 'Whimbrel', 'Long-billed Curlew', 'Marbled Godwit', 'Ruddy Turnstone', 'Black Turnstone', 'Surfbird', 'Sandering', 'Western Sandpiper', 'Least Sandpiper', 'Dunlin', 'Short-billed Dowitcher', 'Long-billed Dowitcher', 'Wilson Snipe', 'Wilson\'s Phalarope', 'Red Phalarope', 'Pomarine Jaeger', 'Bonaparte\'s Gull', 'Heermann\'s Gull', 'Mew Gull', 'Ring-billed Gull', 'California Gull', 'Herring Gull', 'Thayer\'s Gull', 'Western Gull', 'Glaucous Winged Gull', 'Sabine\'s gull', 'Black-legged Kittiwake', 'Caspian Tern', 'Elegant Tern', 'Common Tern', 'Arctic Tern', 'Forster\'s Tern', 'Common Mure', 'Pigeon Guillemot', 'Marbled Murrelet', 'Xantus\'s Murrelet', 'Ancient Murrelet', 'Cassin\'s Auklet', 'Rhino Auklet',
    'Rock Dove', 'Band-tailed Pigeon', 'Mourning Dove', 'Barn Owl', 'Western Screech Owl', 'Great Horned Owl', 'Northern Pygmy Owl', 'Northern Aw-whet Owl', 'Vaux\'s Swift', 'White-throated Swift', 'Anna\'s Hummingbird', 'Allen\'s Hummingbird', 'Belted Kingfisher', 'Acorn Woodpecker', 'Red-breasted Sapsucker', 'Nuttall\'s Woodpecker', 'Downy Woodpecker', 'Hairy Woodpecker', 'Northern Flicker', 'Pileated Woodpecker', 'Olive-sided Flycatcher', 'Western Wood-pewee', 'Pacific-slope Flycatcher', 'Black Phoebe', 'Say\'s Phoebe', 'Ash-throated Flycatcher', 'Western Kingbird', 'Loggerhead shrike', 'Cassin\'s Vireo', 'Hutton\'s Vireo', 'Warbling Vireo', 'Steller\'s Jay', 'California Scrub Jay', 'American Crow', 'Common Raven', 'Horned Lark', 'Tree Swallow', 'Violet-green Swallow', 'Northern Rough-winged Swallow', 'Cliff Swallow', 'Chestnut-backed Chickadee', 'Oak Titmouse', 'Bushtit', 'Red-breasted Nuthatch', 'Pygmy Nuthatch', 'Brown Creeper', 'Bewick\'s Wren', 'Winter Wren', 'Marsh Wren', 'American Dipper', 'Golden-crowned Kinglet', 'Blue-gray Gnatcatcher', 'Western Bluebird', 'Swainson\'s Thrush', 'Hermit Thrush', 'American Robin', 'Varied Thrush', 'Wrentit',
    'Northern Mockingbird', 'California Thrasher', 'European Starling', 'American Pipit', 'Cedar Waxing', 'Orange Crowned Warbler', 'Yellow Warbler', 'Yellow-rumped Warbler', 'Black-throated Gray Warbler', 'Townsend\'s Warbler', 'Hermit Warbler', 'Palm Warbler', 'MacGillivray\'s Warbler', 'Common Yellowthroat', 'Wilson\'s Warbler', 'Western Tanager', 'Spotted Towhee', 'California Towhee', 'Chipping Sparrow', 'Lark Sparrow', 'Savannah Sparrow', 'Grasshopper Sparrow', 'Fox Sparrow', 'Song Sparrow', 'Lincoln\'s Sparrow', 'Swamp Sparrow', 'White-throated Sparrow', 'White-crowned Sparrow', 'Golden-crowned Sparrow', 'Dark-eyed Junco', 'Black-headed grosbeak', 'Lazuli Bunting', 'Red-winged Blackbird', 'Tricolored Blackbird', 'Western Meadowlark', 'Brewer\'s Blackbird', 'Brown-headed Cowbird', 'Hooded Oriole', 'Golden Eagle', 'Bullock\'s Oriole', 'Purple Finch', 'House Finch', 'Red Crossbill', 'Pine Siskin', 'Lesser Goldfinch', 'Lawerence\'s Goldfinch', 'American Goldfinch', 'Evening Grosbeak', 'House Sparrow', 'Bald Eagle', 'Red-shouldered Hawk'];
var month = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var year = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
            2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];
birdTypes = birdTypes.sort();
$(document).ready(function () {
    dropdownNums();
    setAllDates();
    dropDownBirds();
    dropdownDays();
    dropdownMonths();
    dropdownYears();
    $('.addRows').on('click', function () {
        setFields();
        dropDownBirds();
    });
    $('#sendToDB').on('click', function () {
        submitBirds();
        // console.log('sending to DB');
    });
});
function setFields() {
    addMoreRows();
    dropdownNums();
    setAllDates();
}
function setAllDates() {
    $('#submitDate').on('mouseup', function () {
        var date = $('#month').val() + " " + $('#day').val() + " " + $('#year').val();
        $('.date-value').val(date);
    });
}
function dropdownNums() {
    for (var i = 0; i < options.length; i++) {
        $("<option>" + i + "</option>").appendTo('.dropdownNumbers');
    }
}
function dropDownBirds() {
    for (var i = 0; i < birdTypes.length; i++) {
        $("<option>" + birdTypes[i] + "</option>").appendTo('.dropdownBirds');
    }
}

function addMoreRows() {
    var numAddedRows = $('.dropdownRows').val();
    for (var i = 0; i < numAddedRows; i++) {
        if (i == 0) {
            $('.table').append("<tr class='success'> <td><select class='dropdownBirds'> <option disabled selected value> -- select a bird -- </option> </select></td> <td><select class='dropdownNumbers male'> </select></td> <td><select class='dropdownNumbers female'> </select></td> <td><select  class='dropdownNumbers unknown'> </select></td> <td><select class='location'> <option>Neary Lagoon</option><option>Pogonip</option><option>San Lorenzo River</option> <option>West Cliff</option> <option>UCSC</option> </select></td><td><input class='date-value'></td></tr>");
        }
        else if (i == 1) {
            $('.table').append("<tr class='danger'> <td><select class='dropdownBirds'> <option disabled selected value> -- select a bird -- </option> </select></td> <td><select class='dropdownNumbers male'> </select></td> <td><select class='dropdownNumbers female'> </select></td> <td><select  class='dropdownNumbers unknown'> </select></td> <td><select class='location'> <option>Neary Lagoon</option><option>Pogonip</option><option>San Lorenzo River</option> <option>West Cliff</option> <option>UCSC</option> </select></td><td><input class='date-value'></td></tr>");
        }
        else {
            $('.table').append("<tr class='info'> <td><select class='dropdownBirds'> <option disabled selected value> -- select a bird -- </option> </select></td> <td><select class='dropdownNumbers male'> </select></td> <td><select class='dropdownNumbers female'> </select></td> <td><select  class='dropdownNumbers unknown'> </select></td> <td><select class='location'> <option>Neary Lagoon</option><option>Pogonip</option><option>San Lorenzo River</option> <option>West Cliff</option> <option>UCSC</option> </select></td><td><input class='date-value'></td></tr>");
        }
    }
}
function dropdownDays() {
    for (var i = 0; i < days.length; i++) {
        $('#day').append("<option>" + days[i] + "</option>")
    }
}
function dropdownMonths() {
    for (var i = 0; i < month.length; i++) {
        $('#month').append("<option>" + month[i] + "</option>")
    }
}
function dropdownYears() {
    for (var i = 0; i < year.length; i++) {
        $('#year').append("<option>" + year[i] + "</option>")
    }
}

function submitBirds() {
    var tableData = [];
    // var tableLength =
    $('#birdTable tr').each(function (row, tr) {
            tableData[row] ={
            'bird_name': $(tr).find('.dropdownBirds').val(),
            'male': $(tr).find('.male').val(),
            'female': $(tr).find('.female').val(),
            'unknown':$(tr).find('.unknown').val(),
            'location': $(tr).find('.location').val(),
            'date':$(tr).find('.date-value').val()
        };
    });
    tableData.shift();
    // tableData = $.toJSON(tableData);
    // console.log(tableData);
    sendToDB(tableData);
}
function sendToDB(tableData) {
        $.ajax({
            url: 'bird_handler.php',
            method: 'post',
            data:{
                tableData: tableData
            },
            dataType: 'json',
            success: function (response) {
                console.log(response);
            },
            error: function (response) {
                console.log(response);
            }
        })

}
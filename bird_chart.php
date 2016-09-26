<?php
session_start();
if(empty($_SESSION)){
    header('Location: '. "bird_graph.html");
    die();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Wetland Walk">
    <meta name="author" content="Nicholas Porter">
    <meta name="keywords" content="Birds, Neary Lagoon, Santa Cruz, Wetland Walk">
    <link rel="shortcut icon" href="Images/ElectronicRU-Bird-Picture-300px.png"/>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat:400,700'/>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'/>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="bird_chart.js"></script>
    <title>Bird Chart</title>
</head>
<body>
<div class="nav">
    <div>
        <ul id='navlist'>
            <li><a id="home" href="index.html">Home</a></li>
            <li><a id="museum" href="http://www.santacruzmuseum.org/">Santa Cruz Natural History Museum</a></li>
        </ul>
    </div>
</div>
<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1 style="color:black">Santa Cruz Bird Chart </h1>
            </div>
        </div>
    </div>
</header>
<div class="container">
    <div class="row">
        <div col-xs-12>
            <div id="date-input">
                <!--<input class="date">-->
                <select id="month"><option disabled selected value> -- month -- </option>
                </select>
                <select id="day"><option disabled selected value> -- day -- </option></select>
                <select class="year"><option disabled selected value> -- year -- </option></select>
                <button id="submitDate" class="btn-info btn">set date</button>
            </div>
            <table class="table" id="birdTable">
                <thead>
                <tr>
                    <th>Bird Type</th>
                    <th>Number of Males</th>
                    <th>Number of Females</th>
                    <th>Unknown Gender</th>
                    <th>Location</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody id="birdTableInfo">
                <tr class="success">
                    <td><select class="dropdownBirds">
                        <option disabled selected value> -- select a bird -- </option>
                    </select></td>
                    <td><select class="dropdownNumbers male">
                    </select></td>
                    <td><select class="dropdownNumbers female">
                    </select></td>
                    <td><select  class="dropdownNumbers unknown">
                    </select></td>
                    <td><select class="location">
                        <option>Neary Lagoon</option>
                        <option>Pogonip</option>
                        <option>San Lorenzo River</option>
                        <option>West Cliff</option>
                        <option>UCSC</option>
                    </select></td>
                    <td><input class="date-value"></td>
                </tr>
                <tr class="danger">
                    <td><select class="dropdownBirds">
                        <option disabled selected value> -- select a bird -- </option>

                    </select></td>
                    <td><select class="dropdownNumbers male">
                    </select></td>
                    <td><select class="dropdownNumbers female">
                    </select></td>
                    <td><select  class="dropdownNumbers unknown">
                    </select></td>
                    <td><select class="location">
                        <option>Neary Lagoon</option>
                        <option>Pogonip</option>
                        <option>San Lorenzo River</option>
                        <option>West Cliff</option>
                        <option>UCSC</option>
                    </select></td>
                    <td><input class="date-value"></td>
                </tr>
                <tr class="info">
                    <td><select class="dropdownBirds">
                        <option disabled selected value> -- select a bird -- </option>

                    </select></td>
                    <td><select class="dropdownNumbers male">
                    </select></td>
                    <td><select class="dropdownNumbers female">
                    </select></td>
                    <td><select  class="dropdownNumbers unknown">
                    </select></td>
                    <td><select class="location">
                        <option>Neary Lagoon</option>
                        <option>Pogonip</option>
                        <option>San Lorenzo River</option>
                        <option>West Cliff</option>
                        <option>UCSC</option>
                    </select></td>
                    <td><input class="date-value"></td>
                </tr>
                </tbody>
            </table>
            <h4>Add <select class="dropdownRows"><option>1</option><option>2</option><option>3</option></select> more rows <button class="btn btn-success btn-sm addRows">add</button></h4>
        </div>
        <button id="sendToDB" class="btn btn-md btn-primary submitBirds form-control">Submit Data</button>
    </div>
</div>

</body>
</html>
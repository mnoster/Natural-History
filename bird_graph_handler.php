<?php
include('mysql_connect.php');
if($conn->connect_error){
    $output['message'][] = "Connection Error";
    print(json_encode($output));
    die();
}
$data = $_POST; // data to store all post data from ajax
$output = [];//array for all output data
$bird1 =addslashes( $_POST['bird1']);
$startYear =addslashes( $_POST['start_year']);
$endYear =addslashes( $_POST['end_year']);
$location = addslashes($_POST['location']);
//print("end year: " . $endYear);
$month = addslashes($_POST['month']);
if(empty($bird1)){
    $bird1 = [];
    $bird1['message'][] = "Select bird name";
    print json_encode($bird1);
    exit();
}
else if(empty($location)){
    $bird1 = [];
    $bird1['message'][] = "Select a location";
    print json_encode($bird1);
    exit();
}
//all field fill WORKS
else if(!empty($bird1) && !empty($startYear) && !empty($month) && !empty($endYear)){
    $query = "SELECT male, female, unknown_gender, bird_name, month, year, location, total FROM birds WHERE bird_name ='$bird1' AND location='$location' AND month='$month' AND year BETWEEN '$startYear' AND '$endYear'";
    $bird1 = [];
    $bird1['case'][] = 'all fields';
    $result = mysqli_query($conn,$query);
}
//just month empty WORKS
else if(!empty($bird1) && !empty($startYear) && !empty($endYear) && empty($month)){
    $query = "SELECT male, female, unknown_gender, bird_name, month, year, location, total   FROM birds WHERE bird_name ='$bird1' AND location='$location' AND year BETWEEN '$startYear' AND '$endYear'";
    $bird1 = [];
    $bird1['case'][] = 'no month';
    $result = mysqli_query($conn,$query);
}
//both years empty WORKS
else if(!empty($bird1) && empty($startYear) && empty($endYear) && !empty($month)){
    $query = "SELECT male, female, unknown_gender, bird_name, month, year, location, total   FROM birds WHERE bird_name ='$bird1' AND location='$location'  AND month='$month'";
    $bird1 = [];
    $bird1['case'][] = 'only month';
    $result = mysqli_query($conn,$query);
}
//only end year empty
else if(!empty($bird1) && !empty($startYear) && !empty($month)){
    $query = "SELECT male, female, unknown_gender, bird_name, month, year, location, total   FROM birds WHERE bird_name ='$bird1' AND location='$location'  AND month='$month' AND year='$startYear'";
    $bird1 = [];
    $bird1['case'][] = 'no end year';
    $result = mysqli_query($conn,$query);
}
//end year and month empty
else if(!empty($bird1) && !empty($startYear) && empty($month) && empty($endYear)){
    $query = "SELECT male, female, unknown_gender, bird_name, month, year, location, total   FROM birds WHERE bird_name ='$bird1' AND location='$location'  AND year='$startYear'";
    $bird1 = [];
    $bird1['case'][] = 'only start year';
    $result = mysqli_query($conn,$query);
}
else{
    $bird1 = [];
    $bird1['message'][] = "Fields empty";
    print json_encode($bird1);
    exit();
}
$rows_affected = mysqli_affected_rows($conn);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $bird1["bird_name"][] = $row["bird_name"];
        $bird1["male"][]=$row['male'];
        $bird1['female'][]=$row['female'];
        $bird1['location'][]= $row['location'];
        $bird1['unknown_gender'][]=$row['unknown_gender'];
        $bird1['year'][]=$row['year'];
        $bird1['month'][]=$row['month'];
        $bird1['total'][]=$row['total'];
    }
}
if($rows_affected > 0){
    $bird1['message'][]='success';
    $bird1 = json_encode($bird1);
    print($bird1);

}else{
    $output['message'] = 'QUERY FAILED';
    $output['success'] = false;
    $output = json_encode($output);
    print($output);
}

?>
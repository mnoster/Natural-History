<?php
include('mysql_connect.php');
//print_r($_POST);
$data = $_POST;
$dataLength = count($_POST['tableData']);
$output = [];
//print_r($data);
for ($i = 0; $i < $dataLength; $i++) {
    foreach ($data as $value) {
        if(empty($value[$i]['bird_name'])){
            break;
        }
        if(empty($value[$i]['date'])){
            break;
        }
        $name = addslashes($value[$i]['bird_name']);
        $output['name'][] = $name;
        $male = addslashes($value[$i]['male']);
        $output['male'][] = $male;
        $female = addslashes($value[$i]['female']);
        $output['female'][] = $female;
        $unknown = addslashes($value[$i]['unknown']);
        $output['unknown'] = $unknown;
        $location = addslashes($value[$i]['location']);
        $output['location'][] = $location;
        $date = addslashes($value[$i]['date']);
        $output['date'][] = $date;
        $splitDate = explode(" ",$date);
        $month = addslashes($splitDate[0]);
        $output['month'][] = $month;
        $day = addslashes($splitDate[1]);
        $output['day'][] = $day;
        $year = addslashes($splitDate[2]);
        $output['year'][] = $year;
        $total = $male . $female . $unknown;
        $output['total'][] = $total;
        $query = "INSERT INTO birds (bird_name, male, female, unknown_gender, location, full_date, year, month, day,total) VALUES ('$name','$male','$female','$unknown','$location','$date','$year','$month','$day','$total')";
        mysqli_query($conn,$query);
    }
};

$rows_affected = mysqli_affected_rows($conn);
if($rows_affected > 0){
    $output['message'][] = "success";
    print json_encode($output);
}


?>
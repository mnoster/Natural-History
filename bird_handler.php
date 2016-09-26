<?php
include('mysql_connect.php');
//print_r($_POST);
$data = $_POST;
$dataLength = count($_POST['tableData']);
$output = [];
$bird=[];
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
        switch ($month) {
            case 'January':
                $month = "01";
                break;
            case 'February':
                $month = "02";
                break;
            case 'March':
                $month = "03";
                break;
            case 'April':
                $month = "04";
                break;
            case 'May':
                $month = "05";
                break;
            case 'June':
                $month = "06";
                break;
            case 'July':
                $month = "07";
                break;
            case 'August':
                $month = "08";
                break;
            case 'September':
                $month = "09";
                break;
            case 'October':
                $month = "10";
                break;
            case 'November':
                $month = "11";
                break;
            case 'December':
                $month = "12";
                break;
            default:
                console.log('nothing is switch triggered');
        }
        $output['month'][] = $month;
        $day = addslashes($splitDate[1]);
        $output['day'][] = $day;
        $year = addslashes($splitDate[2]);
        $output['year'][] = $year;
        $total = $male + $female + $unknown;
        $output['total'][] = $total;
        $queryCheck = "SELECT * FROM birds WHERE bird_name='$name' AND location='$location' AND year='$year' AND month='$month' AND day='$day'";
        $result = mysqli_query($conn,$queryCheck);
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $bird["male"][]=$row['male'];
                $bird['female'][]=$row['female'];
            }
            if($bird['male'] >= $male && $bird['female'] >= $female){
                $output['message'][] = "Someone has already input data for $name on $date  at  $location";
                print json_encode($output['message']);
                die();
            }
            if($bird['female'] < $female){
                $query = "UPDATE birds SET female=$female WHERE bird_name ='$name'AND location='$location' AND full_date=$date AND year='$year' AND month='$month' AND day = '$day'";
                mysqli_query($conn,$query);
                print json_encode($output);
            }
            if($bird['male'] < $male){
                $query = "UPDATE birds SET male=$male WHERE bird_name ='$name'AND location='$location' AND full_date=$date AND year='$year' AND month='$month' AND day = '$day'";
                mysqli_query($conn,$query);
                print json_encode($output);
            }
        }
        else{
            $query = "INSERT INTO birds (bird_name, male, female, unknown_gender, location, full_date, year, month, day,total) VALUES ('$name','$male','$female','$unknown','$location','$date','$year','$month','$day','$total')";
            mysqli_query($conn,$query);
        }


    }
};

$rows_affected = mysqli_affected_rows($conn);
if($rows_affected > 0){
    $output['message'][] = "success";
    print json_encode($output);
}


?>
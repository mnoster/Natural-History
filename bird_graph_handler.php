<?php
include('mysql_connect.php');
//print_r($_POST);
$data = $_POST; // data to store all post data from ajax
//print_r($_POST,true);
$output = [];//array for all output data
$bird1 = $_POST['bird1'];
$startYear = $_POST['start_year'];

$query = "SELECT male, female, unknown_gender, bird_name, month, year FROM birds WHERE bird_name ='$bird1' year='$startYear'";
$bird1 = [];
$result = mysqli_query($conn,$query);

$rows_affected = mysqli_affected_rows($conn);
print($rows_affected);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $bird1["bird_name"][] = $row["bird_name"];
        $bird1["male"][]=$row['male'];
        $bird1['female'][]=$row['female'];
        $bird1['unknown_gender']=$row['unknown_gender'];
        $bird1['year'][]=$row['year'];
        $bird1['month'][]=$row['month'];

    }
} else {
    echo "0 results";
}
if($rows_affected > 0){
    $bird1 = json_encode($bird1);
    print($bird1);

}else{
    $output['message'] = 'QUERY FAILED';
    $output['success'] = false;
    $output = json_encode($output);
    print($output);
}

//$output['bird1'][] = $bird1;
//$bird2 = $_POST['bird2'];
//$output['bird2'][] = $bird2;
//$bird3 = $_POST['bird3'];
//$output['bird3'][] = $bird3;
//$male = $_POST['male'];
//$output['male'][] = $male;
//$female = $_POST['female'];
//$output['female'][] = $female;
//$unknown = $_POST['unknown'];
//$output['unknown'][] = $unknown;
//$location = $_POST['location'];
//$output['location'][] = $location;
//$month = $_POST['month'];
//$output['month'][] = $month;
//$output['startYear'][] = $startYear;
//$endYear = $_POST['end_year'];
//$output['endYear'][]= $endYear;

//$output = json_encode($output);
//print($output)

?>
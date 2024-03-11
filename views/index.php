<!DOCTYPE html>
<html lang="pt-BR">
<?php require '../includes/_db.php'?>
<?php require '../includes/_header.php'?>
<?php
$session_group_query = "SELECT COUNT(*) AS amount_session FROM sessions";
$session_group_result = mysqli_query($db, $session_group_query);
$session_group_total = $session_group_result->fetch_assoc()['amount_session'];

$resp_group_query = "SELECT COUNT(*) AS amount_resp FROM resp";
$resp_group_result = mysqli_query($db, $resp_group_query);
$resp_group_total = $resp_group_result->fetch_assoc()['amount_resp'];

$products_group_query = "SELECT session_id, SUM(amount_product) AS amount FROM products GROUP BY session_id";
$products_group_result = mysqli_query($db, $products_group_query);
?>

<div class="main-container">
    <h1>Ambientes</h1>
</div>


<section class="map-section">
<div class="map-container">

<div class="map_floor_view map_floor_01 active-map-floor">
ESTA NO TÉRREO
</div>

<div class="map_floor_view map_floor_02">
    ESTA NO 1° ANDAR
</div>

</div>

<style>
    .map-section {
        display: flex;
        justify-content: space-between;
    }
    .floor-items {
        display: flex;
        flex-direction: column;
    }
    .floor-btn {
        background: #ffff;
        padding: 1rem 2rem;
    }
    .active-floor-btn {
        background: green;
    }
    .active-floor-btn {}
    .map_floor_view {
        color: white;
        display: none;
    }
    .active-map-floor {
        display: block !important;
    }
</style>


<div class="floor-items">
    <a class="floor-btn floor_01 active-floor-btn" href="#">Térreo</a>
    <a class="floor-btn floor_02" href="#">1° Andar</a>
</div>

</section>



</section>

<script src="../js/setFloor.js"></script>
</html>
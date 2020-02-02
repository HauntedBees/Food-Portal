<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
    header("Content-Type: application/json");
    $searchKey = $_GET["recipe"];
    $json = file_get_contents("world.json");
    $recipeList = json_decode($json, true);
    if(strpos($searchKey, "|") !== false) { // individual recipe
        $recipe = $recipeList[$searchKey];
        if(is_null($recipe)) {
            echo "";
        } else {
            echo json_encode($recipe, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        }
    } else { // multiple recipes
        $response = [];
        $recipeKeys = array_keys($recipeList);
        foreach($recipeList as $k => $v) {
            if(strpos($k, $searchKey) === 0) {
                $response[] = $v;
            }
        }
        if(count($response) === 0) {
            echo "";
        } else {
            echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        }
    }
?>
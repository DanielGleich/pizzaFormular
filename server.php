<?php
	$order_dir = "orders/";
	$counter_file = fopen("{$order_dir}counter.txt", "r+") or die("Unable to open counter file!");
	$id = fread($counter_file,5);
	
	$new_order = fopen("{$order_dir}{$id}.json","w") or die("Unable to create/open order file!");
	fwrite($new_order, json_encode($_POST));
	fclose($new_order);
	
	$newid = sprintf("%'.05d", (int)$id + 1);
	fseek($counter_file,0);
	fwrite($counter_file, $newid);
	fclose($counter_file);
	header('Location: orderConfirm.html');
?>
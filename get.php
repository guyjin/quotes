<?php  
		$dbh=mysql_connect ("localhost", "minorcha_quotes", "aik0t0ba") or die ('I cannot connect to the database because: ' . mysql_error());
	mysql_select_db ("minorcha_quotes");
		
		$quote = mysql_query("select * from quotes order by rand() limit 1");
		
		while ($row =  mysql_fetch_assoc($quote) ) {
			$theID =  $row['id'];
			$theQuote = $row['quote'];
		}

		$json = json_encode($theQuote);

		header('Content-Type: application/json');
		echo $theQuote;
?>
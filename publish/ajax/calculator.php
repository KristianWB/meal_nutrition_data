<?DOCTYPE-html>
<html lang="en">
	<head>
		<meta charset   ="utf-8" />
		<meta http-quiv ="X-UA-Compatible" content="IE=edge" />
		<meta name      ="viewport" content="width=device-width, initial-scale=1" />
		<meta name      ="robots" content="follow">

		<title>Dashboard</title>

		<base href="/" />
		<!-- UIkit CSS -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css" />
	</head>
		<body>
			<div class="uk-section uk-container">
                <h2>kiloCalorie calculator</h2>
                
                <!-- Calculating and displaying the total amount of food in grams -->
                <p>The overall amount of food i grams is<p>
                    <?php echo $_POST["amount"]; ?><br>

                <!-- Calculating and displaying the total amount of carbohydrate in kCal -->
                <p>The overall amount of carbohydrates in kCal is<p>
                    <?php
                        
                    // carbohydrate amount times the kCal factor
                        $carbohydrateToKcal = $_POST["carbohydrate"] * 4.1 ;
                        echo nl2br($carbohydrateToKcal, "\n" );                        
                    ?>
                <br>

                    
                <!-- Calculating and displaying the total amount of protein in kCal -->
                <p>The overall amount of protein in kCal is<p>
                    <?php

                    // protein amount times the kCal factor
                        $proteinToKcal = $_POST["protein"] * 4.1 ;
                        echo nl2br($proteinToKcal, "\n" );                        
                    ?>
                <br>

                <!-- Calculating and displaying the total amount of fat in kCal -->
                <p>The overall amount of fat in kCal is<p>
                    <?php

                    // fat amount times the kCal factor
                        $fatToKcal = $_POST["fat"] * 9.1 ;
                        echo nl2br($fatToKcal, "\n" );                        
                    ?>
                <br>

                <!-- Calculating and displaying the total amount of kCal -->
                <p>The overall amount of kCal is<p>
                    <?php

                    // the sum of all kCal values
                        $sumOfKCal = $carbohydrateToKcal + $proteinToKcal + $fatToKcal;
                        echo nl2br($sumOfKCal, "\n" );                        
                    ?>
                <br>

			</div>

					


			<?php require_once "inc/footer.php"; ?>
		</body>
	</html>